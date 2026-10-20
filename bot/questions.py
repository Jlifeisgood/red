"""Загрузка вопросов теста из текстовых файлов в папке data/.

Формат файла:
    N. Текст вопроса
    (необязательные строки-продолжения текста вопроса)
    + правильный ответ
    - неверный ответ
    - неверный ответ
    - неверный ответ

Пустые строки и строки, начинающиеся с "#", игнорируются.
"""

from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parent.parent / "data"

_QUESTION_RE = re.compile(r"^(\d+)\.\s+(.+)$")


@dataclass(frozen=True)
class Question:
    id: int
    text: str
    correct: str
    wrong: tuple[str, ...]

    @property
    def options(self) -> tuple[str, ...]:
        """Все варианты ответа, правильный — первым."""
        return (self.correct, *self.wrong)


class QuestionFormatError(ValueError):
    pass


def parse_questions(text: str, source: str = "<string>") -> list[Question]:
    questions: list[Question] = []
    current: dict | None = None

    def finish() -> None:
        if current is None:
            return
        where = f"{source}: вопрос {current['id']}"
        if current["correct"] is None:
            raise QuestionFormatError(f"{where}: нет правильного ответа (+)")
        if not current["wrong"]:
            raise QuestionFormatError(f"{where}: нет неверных ответов (-)")
        questions.append(
            Question(
                id=current["id"],
                text="\n".join(current["text"]),
                correct=current["correct"],
                wrong=tuple(current["wrong"]),
            )
        )

    for lineno, raw in enumerate(text.splitlines(), start=1):
        line = raw.strip()
        if not line or line.startswith("#"):
            continue

        if line.startswith("+ ") or line.startswith("- "):
            if current is None:
                raise QuestionFormatError(f"{source}:{lineno}: ответ без вопроса")
            answer = line[2:].strip()
            if line[0] == "+":
                if current["correct"] is not None:
                    raise QuestionFormatError(
                        f"{source}:{lineno}: второй правильный ответ в вопросе {current['id']}"
                    )
                current["correct"] = answer
            else:
                current["wrong"].append(answer)
            continue

        match = _QUESTION_RE.match(line)
        # Номер в начале строки — новый вопрос, если ответы предыдущего уже начались.
        if match and (current is None or current["correct"] is not None or current["wrong"]):
            finish()
            current = {"id": int(match.group(1)), "text": [match.group(2)], "correct": None, "wrong": []}
            continue

        if current is None or current["correct"] is not None or current["wrong"]:
            raise QuestionFormatError(f"{source}:{lineno}: непонятная строка: {line!r}")
        current["text"].append(line)

    finish()
    return questions


def load_questions(data_dir: Path = DATA_DIR) -> list[Question]:
    questions: list[Question] = []
    for path in sorted(data_dir.glob("questions_*.txt")):
        questions.extend(parse_questions(path.read_text(encoding="utf-8"), source=path.name))

    ids = [q.id for q in questions]
    duplicates = sorted({i for i in ids if ids.count(i) > 1})
    if duplicates:
        raise QuestionFormatError(f"повторяющиеся номера вопросов: {duplicates}")
    return sorted(questions, key=lambda q: q.id)
