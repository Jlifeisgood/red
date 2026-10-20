"""Логика прохождения теста, не зависящая от Telegram."""

from __future__ import annotations

import random
from dataclasses import dataclass, field

from .questions import Question

LETTERS = "ABCDEF"


@dataclass
class AskedQuestion:
    question: Question
    options: list[str]  # варианты в перемешанном порядке
    correct_index: int

    @classmethod
    def build(cls, question: Question, rng: random.Random) -> "AskedQuestion":
        options = list(question.options)
        rng.shuffle(options)
        return cls(question=question, options=options, correct_index=options.index(question.correct))


@dataclass
class QuizSession:
    title: str
    items: list[AskedQuestion]
    position: int = 0
    correct_count: int = 0
    wrong_ids: list[int] = field(default_factory=list)

    @classmethod
    def create(
        cls,
        title: str,
        questions: list[Question],
        shuffle_questions: bool = False,
        rng: random.Random | None = None,
    ) -> "QuizSession":
        rng = rng or random.Random()
        questions = list(questions)
        if shuffle_questions:
            rng.shuffle(questions)
        return cls(title=title, items=[AskedQuestion.build(q, rng) for q in questions])

    @property
    def total(self) -> int:
        return len(self.items)

    @property
    def finished(self) -> bool:
        return self.position >= self.total

    @property
    def current(self) -> AskedQuestion:
        return self.items[self.position]

    @property
    def answered(self) -> int:
        return self.position

    def answer(self, option_index: int) -> bool:
        """Принимает ответ на текущий вопрос и переходит к следующему."""
        if self.finished:
            raise RuntimeError("тест уже завершён")
        item = self.current
        if not 0 <= option_index < len(item.options):
            raise ValueError(f"нет варианта с номером {option_index}")
        is_correct = option_index == item.correct_index
        if is_correct:
            self.correct_count += 1
        else:
            self.wrong_ids.append(item.question.id)
        self.position += 1
        return is_correct

    def percent(self) -> int:
        if self.answered == 0:
            return 0
        return round(self.correct_count * 100 / self.answered)


def grade(percent: int) -> str:
    """Оценка по пятибалльной шкале, как принято в вузах Узбекистана."""
    if percent >= 90:
        return "5 (отлично)"
    if percent >= 70:
        return "4 (хорошо)"
    if percent >= 60:
        return "3 (удовлетворительно)"
    return "2 (неудовлетворительно)"


def blocks(questions: list[Question], size: int) -> list[list[Question]]:
    return [questions[i : i + size] for i in range(0, len(questions), size)]
