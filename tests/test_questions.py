import pytest

from bot.questions import QuestionFormatError, load_questions, parse_questions


@pytest.fixture(scope="module")
def questions():
    return load_questions()


def test_all_300_questions_present(questions):
    assert [q.id for q in questions] == list(range(1, 301))


def test_every_question_has_four_distinct_options(questions):
    for q in questions:
        assert len(q.options) == 4, q.id
        assert len(set(q.options)) == 4, f"повторяющиеся варианты в вопросе {q.id}"
        assert all(opt.strip() for opt in q.options), q.id


def test_question_texts_match_source_numbering(questions):
    by_id = {q.id: q for q in questions}
    assert by_id[1].text == "Что такое философия?"
    assert by_id[300].text == "Что такое социализация личности?"
    assert "Осетр" in by_id[51].text  # многострочный вопрос


def test_options_fit_into_telegram_message(questions):
    for q in questions:
        text = q.text + "".join(q.options)
        assert len(text) < 3500, q.id


def test_parse_multiline_question():
    qs = parse_questions("1. Вопрос\nпродолжение\n+ да\n- нет\n2. Второй\n+ а\n- б\n")
    assert [q.id for q in qs] == [1, 2]
    assert qs[0].text == "Вопрос\nпродолжение"
    assert qs[0].correct == "да"
    assert qs[0].wrong == ("нет",)


def test_parse_rejects_question_without_correct_answer():
    with pytest.raises(QuestionFormatError):
        parse_questions("1. Вопрос\n- нет\n- тоже нет\n")


def test_parse_rejects_two_correct_answers():
    with pytest.raises(QuestionFormatError):
        parse_questions("1. Вопрос\n+ да\n+ тоже да\n- нет\n")
