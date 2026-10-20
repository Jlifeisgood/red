"""Хранение статистики и ошибок пользователей в SQLite."""

from __future__ import annotations

import sqlite3
from dataclasses import dataclass
from pathlib import Path


@dataclass
class UserStats:
    answered: int = 0
    correct: int = 0
    tests_finished: int = 0
    mistakes: int = 0


class Storage:
    def __init__(self, path: str | Path) -> None:
        self._db = sqlite3.connect(str(path))
        self._db.executescript(
            """
            CREATE TABLE IF NOT EXISTS stats (
                user_id INTEGER PRIMARY KEY,
                answered INTEGER NOT NULL DEFAULT 0,
                correct INTEGER NOT NULL DEFAULT 0,
                tests_finished INTEGER NOT NULL DEFAULT 0
            );
            CREATE TABLE IF NOT EXISTS mistakes (
                user_id INTEGER NOT NULL,
                question_id INTEGER NOT NULL,
                PRIMARY KEY (user_id, question_id)
            );
            """
        )
        self._db.commit()

    def record_answer(self, user_id: int, question_id: int, is_correct: bool) -> None:
        self._db.execute(
            """
            INSERT INTO stats (user_id, answered, correct) VALUES (?, 1, ?)
            ON CONFLICT(user_id) DO UPDATE SET
                answered = answered + 1,
                correct = correct + excluded.correct
            """,
            (user_id, int(is_correct)),
        )
        if is_correct:
            self._db.execute(
                "DELETE FROM mistakes WHERE user_id = ? AND question_id = ?", (user_id, question_id)
            )
        else:
            self._db.execute(
                "INSERT OR IGNORE INTO mistakes (user_id, question_id) VALUES (?, ?)",
                (user_id, question_id),
            )
        self._db.commit()

    def record_finished(self, user_id: int) -> None:
        self._db.execute(
            """
            INSERT INTO stats (user_id, tests_finished) VALUES (?, 1)
            ON CONFLICT(user_id) DO UPDATE SET tests_finished = tests_finished + 1
            """,
            (user_id,),
        )
        self._db.commit()

    def mistakes(self, user_id: int) -> list[int]:
        rows = self._db.execute(
            "SELECT question_id FROM mistakes WHERE user_id = ? ORDER BY question_id", (user_id,)
        )
        return [row[0] for row in rows]

    def stats(self, user_id: int) -> UserStats:
        row = self._db.execute(
            "SELECT answered, correct, tests_finished FROM stats WHERE user_id = ?", (user_id,)
        ).fetchone()
        stats = UserStats(*row) if row else UserStats()
        stats.mistakes = len(self.mistakes(user_id))
        return stats

    def reset(self, user_id: int) -> None:
        self._db.execute("DELETE FROM stats WHERE user_id = ?", (user_id,))
        self._db.execute("DELETE FROM mistakes WHERE user_id = ?", (user_id,))
        self._db.commit()

    def close(self) -> None:
        self._db.close()
