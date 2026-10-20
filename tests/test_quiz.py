import random

import pytest

from bot.questions import Question
from bot.quiz import QuizSession, blocks, grade
from bot.storage import Storage

QS = [Question(id=i, text=f"q{i}", correct=f"ok{i}", wrong=(f"a{i}", f"b{i}", f"c{i}")) for i in range(1, 6)]


def test_options_are_shuffled_but_correct_index_tracks_answer():
    session = QuizSession.create("t", QS, rng=random.Random(1))
    for item in session.items:
        assert item.options[item.correct_index] == item.question.correct
        assert sorted(item.options) == sorted(item.question.options)


def test_scoring_and_wrong_ids():
    session = QuizSession.create("t", QS, rng=random.Random(2))
    for n in range(session.total):
        item = session.current
        choice = item.correct_index if n % 2 == 0 else (item.correct_index + 1) % 4
        session.answer(choice)
    assert session.finished
    assert session.correct_count == 3
    assert session.wrong_ids == [2, 4]
    assert session.percent() == 60


def test_answer_after_finish_raises():
    session = QuizSession.create("t", QS[:1])
    session.answer(0)
    with pytest.raises(RuntimeError):
        session.answer(0)


def test_shuffle_questions_keeps_all():
    session = QuizSession.create("t", QS, shuffle_questions=True, rng=random.Random(3))
    assert sorted(i.question.id for i in session.items) == [1, 2, 3, 4, 5]


@pytest.mark.parametrize(
    "percent,expected", [(100, "5"), (90, "5"), (89, "4"), (70, "4"), (60, "3"), (59, "2"), (0, "2")]
)
def test_grade(percent, expected):
    assert grade(percent).startswith(expected)


def test_blocks():
    assert [len(b) for b in blocks(QS, 2)] == [2, 2, 1]


def test_storage_tracks_mistakes_and_stats(tmp_path):
    st = Storage(tmp_path / "db.sqlite")
    st.record_answer(7, 10, False)
    st.record_answer(7, 11, False)
    st.record_answer(7, 10, True)  # исправленная ошибка уходит из списка
    st.record_finished(7)
    assert st.mistakes(7) == [11]
    s = st.stats(7)
    assert (s.answered, s.correct, s.tests_finished, s.mistakes) == (3, 1, 1, 1)
    assert st.mistakes(8) == []
    st.reset(7)
    assert st.stats(7).answered == 0
    st.close()
