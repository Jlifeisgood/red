"""Собирает web/index.html из web/template.html и вопросов в data/.

Запуск:  python tools/build_web.py
"""

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from bot.questions import load_questions  # noqa: E402

PLACEHOLDER = "/*__QUESTIONS__*/[]"


def build() -> Path:
    data = [{"id": q.id, "q": q.text, "a": list(q.options)} for q in load_questions()]
    template = (ROOT / "web" / "template.html").read_text(encoding="utf-8")
    if PLACEHOLDER not in template:
        raise SystemExit(f"в шаблоне нет метки {PLACEHOLDER}")
    payload = json.dumps(data, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")
    out = ROOT / "web" / "index.html"
    out.write_text(template.replace(PLACEHOLDER, payload), encoding="utf-8")
    return out


if __name__ == "__main__":
    print(build())
