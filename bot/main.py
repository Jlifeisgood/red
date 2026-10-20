"""Telegram-бот для подготовки к тесту по философии (300 вопросов).

Запуск:  BOT_TOKEN=... python -m bot.main

Локально бот работает через long polling. Если задана переменная WEBHOOK_URL
(или RENDER_EXTERNAL_URL, которую Render выставляет сам), бот поднимает
HTTP-сервер на порту PORT и получает обновления через webhook.
"""

from __future__ import annotations

import asyncio
import hashlib
import html
import logging
import os
import random
from pathlib import Path

from aiohttp import web
from aiogram import Bot, Dispatcher, F, Router
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.filters import Command, CommandStart
from aiogram.types import CallbackQuery, InlineKeyboardButton, InlineKeyboardMarkup, Message
from aiogram.webhook.aiohttp_server import SimpleRequestHandler, setup_application

from .questions import Question, load_questions
from .quiz import LETTERS, QuizSession, blocks, grade
from .storage import Storage

BLOCK_SIZE = 25
RANDOM_SIZES = (25, 50)

QUESTIONS: list[Question] = load_questions()
QUESTIONS_BY_ID: dict[int, Question] = {q.id: q for q in QUESTIONS}
BLOCKS: list[list[Question]] = blocks(QUESTIONS, BLOCK_SIZE)

router = Router()
sessions: dict[int, QuizSession] = {}
storage: Storage  # инициализируется в main()


# ---------- клавиатуры ----------

def kb(rows: list[list[tuple[str, str]]]) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[[InlineKeyboardButton(text=t, callback_data=d) for t, d in row] for row in rows]
    )


def main_menu_kb() -> InlineKeyboardMarkup:
    return kb(
        [
            [(f"🎲 Случайные {n}", f"random:{n}") for n in RANDOM_SIZES],
            [(f"📚 Блоки по {BLOCK_SIZE} вопросов", "blocks")],
            [("📝 Все 300 по порядку", "all:order"), ("🔀 Все 300 вперемешку", "all:shuffle")],
            [("❌ Работа над ошибками", "mistakes")],
            [("📊 Моя статистика", "stats")],
        ]
    )


def blocks_kb() -> InlineKeyboardMarkup:
    buttons = [
        (f"{block[0].id}–{block[-1].id}", f"block:{i}") for i, block in enumerate(BLOCKS)
    ]
    rows = [buttons[i : i + 3] for i in range(0, len(buttons), 3)]
    rows.append([("⬅️ Меню", "menu")])
    return kb(rows)


def question_kb(session: QuizSession) -> InlineKeyboardMarkup:
    item = session.current
    letters = [(LETTERS[i], f"ans:{session.position}:{i}") for i in range(len(item.options))]
    return kb([letters, [("⏹ Завершить тест", "stop")]])


def finish_kb() -> InlineKeyboardMarkup:
    return kb(
        [
            [("❌ Работа над ошибками", "mistakes")],
            [("🏠 Главное меню", "menu")],
        ]
    )


# ---------- тексты ----------

def question_text(session: QuizSession) -> str:
    item = session.current
    lines = [
        f"<b>{html.escape(session.title)}</b> · вопрос {session.position + 1}/{session.total}"
        f" · ✅ {session.correct_count}",
        "",
        f"<b>№{item.question.id}. {html.escape(item.question.text)}</b>",
        "",
    ]
    lines += [f"<b>{LETTERS[i]})</b> {html.escape(opt)}" for i, opt in enumerate(item.options)]
    return "\n".join(lines)


def answered_text(session: QuizSession, item_index: int, chosen: int) -> str:
    item = session.items[item_index]
    lines = [
        f"<b>№{item.question.id}. {html.escape(item.question.text)}</b>",
        "",
    ]
    for i, opt in enumerate(item.options):
        if i == item.correct_index:
            mark = "✅"
        elif i == chosen:
            mark = "❌"
        else:
            mark = "▫️"
        lines.append(f"{mark} <b>{LETTERS[i]})</b> {html.escape(opt)}")
    lines.append("")
    if chosen == item.correct_index:
        lines.append("<b>Верно!</b>")
    else:
        lines.append(f"<b>Неверно.</b> Правильный ответ: <b>{LETTERS[item.correct_index]}</b>")
    return "\n".join(lines)


def result_text(session: QuizSession) -> str:
    percent = session.percent()
    lines = [
        f"🏁 <b>{html.escape(session.title)}</b> — тест завершён",
        "",
        f"Отвечено: {session.answered} из {session.total}",
        f"Правильно: {session.correct_count} ({percent}%)",
        f"Оценка: {grade(percent)}",
    ]
    if session.wrong_ids:
        wrong = ", ".join(str(i) for i in session.wrong_ids)
        lines += ["", f"Ошибки в вопросах №: {wrong}"]
    return "\n".join(lines)


WELCOME = (
    "👋 Привет! Это бот для подготовки к тесту по <b>философии</b> — "
    f"{len(QUESTIONS)} вопросов с вариантами ответов.\n\n"
    "Выберите режим:\n"
    "• <b>Случайные</b> — случайная выборка вопросов, как на экзамене;\n"
    f"• <b>Блоки</b> — учите по {BLOCK_SIZE} вопросов подряд;\n"
    "• <b>Все 300</b> — полный прогон;\n"
    "• <b>Работа над ошибками</b> — только вопросы, на которые вы ответили неверно.\n\n"
    "Варианты ответов каждый раз перемешиваются. Команды: /menu, /stop, /stats, /reset"
)


# ---------- запуск и ход теста ----------

async def start_session(message: Message, user_id: int, session: QuizSession) -> None:
    if session.total == 0:
        await message.answer("Здесь пока нет вопросов.", reply_markup=main_menu_kb())
        return
    sessions[user_id] = session
    await message.answer(question_text(session), reply_markup=question_kb(session))


async def finish_session(message: Message, user_id: int) -> None:
    session = sessions.pop(user_id, None)
    if session is None:
        return
    if session.answered:
        storage.record_finished(user_id)
    await message.answer(result_text(session), reply_markup=finish_kb())


@router.message(CommandStart())
async def cmd_start(message: Message) -> None:
    await message.answer(WELCOME, reply_markup=main_menu_kb())


@router.message(Command("menu"))
async def cmd_menu(message: Message) -> None:
    await message.answer("Главное меню:", reply_markup=main_menu_kb())


@router.message(Command("stop"))
async def cmd_stop(message: Message) -> None:
    if message.from_user.id not in sessions:
        await message.answer("Сейчас нет активного теста.", reply_markup=main_menu_kb())
        return
    await finish_session(message, message.from_user.id)


@router.message(Command("stats"))
async def cmd_stats(message: Message) -> None:
    await message.answer(stats_text(message.from_user.id), reply_markup=main_menu_kb())


@router.message(Command("reset"))
async def cmd_reset(message: Message) -> None:
    storage.reset(message.from_user.id)
    sessions.pop(message.from_user.id, None)
    await message.answer("Статистика и список ошибок очищены.", reply_markup=main_menu_kb())


def stats_text(user_id: int) -> str:
    s = storage.stats(user_id)
    percent = round(s.correct * 100 / s.answered) if s.answered else 0
    return (
        "📊 <b>Ваша статистика</b>\n\n"
        f"Всего ответов: {s.answered}\n"
        f"Правильных: {s.correct} ({percent}%)\n"
        f"Завершённых тестов: {s.tests_finished}\n"
        f"Вопросов в работе над ошибками: {s.mistakes}"
    )


@router.callback_query(F.data == "menu")
async def cb_menu(cb: CallbackQuery) -> None:
    await cb.message.answer("Главное меню:", reply_markup=main_menu_kb())
    await cb.answer()


@router.callback_query(F.data == "stats")
async def cb_stats(cb: CallbackQuery) -> None:
    await cb.message.answer(stats_text(cb.from_user.id), reply_markup=main_menu_kb())
    await cb.answer()


@router.callback_query(F.data == "blocks")
async def cb_blocks(cb: CallbackQuery) -> None:
    await cb.message.answer("Выберите блок вопросов:", reply_markup=blocks_kb())
    await cb.answer()


@router.callback_query(F.data.startswith("block:"))
async def cb_block(cb: CallbackQuery) -> None:
    block = BLOCKS[int(cb.data.split(":")[1])]
    title = f"Вопросы {block[0].id}–{block[-1].id}"
    await cb.answer()
    await start_session(cb.message, cb.from_user.id, QuizSession.create(title, block))


@router.callback_query(F.data.startswith("random:"))
async def cb_random(cb: CallbackQuery) -> None:
    size = int(cb.data.split(":")[1])
    picked = random.sample(QUESTIONS, min(size, len(QUESTIONS)))
    await cb.answer()
    await start_session(cb.message, cb.from_user.id, QuizSession.create(f"Случайные {size}", picked))


@router.callback_query(F.data.startswith("all:"))
async def cb_all(cb: CallbackQuery) -> None:
    shuffle = cb.data == "all:shuffle"
    title = "Все вопросы вперемешку" if shuffle else "Все вопросы"
    await cb.answer()
    await start_session(
        cb.message, cb.from_user.id, QuizSession.create(title, QUESTIONS, shuffle_questions=shuffle)
    )


@router.callback_query(F.data == "mistakes")
async def cb_mistakes(cb: CallbackQuery) -> None:
    ids = storage.mistakes(cb.from_user.id)
    await cb.answer()
    if not ids:
        await cb.message.answer("🎉 Ошибок нет — работать не над чем!", reply_markup=main_menu_kb())
        return
    picked = [QUESTIONS_BY_ID[i] for i in ids if i in QUESTIONS_BY_ID]
    await start_session(
        cb.message,
        cb.from_user.id,
        QuizSession.create("Работа над ошибками", picked, shuffle_questions=True),
    )


@router.callback_query(F.data == "stop")
async def cb_stop(cb: CallbackQuery) -> None:
    await cb.answer()
    if cb.from_user.id in sessions:
        await cb.message.edit_reply_markup(reply_markup=None)
        await finish_session(cb.message, cb.from_user.id)


@router.callback_query(F.data.startswith("ans:"))
async def cb_answer(cb: CallbackQuery) -> None:
    user_id = cb.from_user.id
    session = sessions.get(user_id)
    _, position, option = cb.data.split(":")
    position, option = int(position), int(option)

    if session is None:
        # Сессии живут в памяти и пропадают при перезапуске бота.
        await cb.answer("Тест прервался, начните заново.")
        await cb.message.answer(
            "Похоже, бот перезапускался и текущий тест прервался. Выберите режим заново:",
            reply_markup=main_menu_kb(),
        )
        return
    if session.finished or position != session.position:
        await cb.answer("Этот вопрос уже не активен.")
        return

    item_index = session.position
    question_id = session.current.question.id
    is_correct = session.answer(option)
    storage.record_answer(user_id, question_id, is_correct)

    await cb.answer("✅ Верно!" if is_correct else "❌ Неверно")
    await cb.message.edit_text(answered_text(session, item_index, option), reply_markup=None)

    if session.finished:
        await finish_session(cb.message, user_id)
    else:
        await cb.message.answer(question_text(session), reply_markup=question_kb(session))


# ---------- точка входа ----------

def load_dotenv(path: Path) -> None:
    """Минимальная загрузка .env без внешних зависимостей."""
    if not path.exists():
        return
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            key, value = line.split("=", 1)
            os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


async def main() -> None:
    global storage
    logging.basicConfig(level=logging.INFO)
    load_dotenv(Path(__file__).resolve().parent.parent / ".env")

    token = os.environ.get("BOT_TOKEN")
    if not token:
        raise SystemExit("Укажите токен бота в переменной окружения BOT_TOKEN или в файле .env")

    storage = Storage(os.environ.get("DB_PATH", "bot.db"))
    bot = Bot(token, default=DefaultBotProperties(parse_mode=ParseMode.HTML))
    dp = Dispatcher()
    dp.include_router(router)

    base_url = os.environ.get("WEBHOOK_URL") or os.environ.get("RENDER_EXTERNAL_URL")
    try:
        if base_url:
            await run_webhook(bot, dp, token, base_url.rstrip("/"), int(os.environ.get("PORT", "8080")))
        else:
            await bot.delete_webhook()
            await dp.start_polling(bot)
    finally:
        storage.close()


async def run_webhook(bot: Bot, dp: Dispatcher, token: str, base_url: str, port: int) -> None:
    # Секрет выводится из токена, чтобы не заводить отдельную переменную окружения.
    secret = hashlib.sha256(token.encode()).hexdigest()[:32]
    path = f"/webhook/{secret[:16]}"

    async def on_startup(bot: Bot) -> None:
        await bot.set_webhook(f"{base_url}{path}", secret_token=secret)

    async def health(_: web.Request) -> web.Response:
        return web.Response(text="ok")

    dp.startup.register(on_startup)
    app = web.Application()
    app.router.add_get("/", health)
    app.router.add_get("/health", health)
    SimpleRequestHandler(dispatcher=dp, bot=bot, secret_token=secret).register(app, path=path)
    setup_application(app, dp, bot=bot)

    runner = web.AppRunner(app)
    await runner.setup()
    await web.TCPSite(runner, host="0.0.0.0", port=port).start()
    logging.info("Webhook-сервер запущен на порту %s", port)
    try:
        await asyncio.Event().wait()
    finally:
        await runner.cleanup()


if __name__ == "__main__":
    asyncio.run(main())
