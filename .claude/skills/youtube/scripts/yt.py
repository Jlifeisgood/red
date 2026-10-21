#!/usr/bin/env python3
import argparse, glob, os, re, shutil, subprocess, sys, tempfile

sys.stdout.reconfigure(encoding="utf-8")

try:
    import yt_dlp
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "-q", "yt-dlp"])
    import yt_dlp


def fmt(s):
    s = int(s)
    h, m, sec = s // 3600, s % 3600 // 60, s % 60
    return f"{h}:{m:02d}:{sec:02d}" if h else f"{m:02d}:{sec:02d}"


def search(q):
    with yt_dlp.YoutubeDL({"quiet": True, "extract_flat": True}) as y:
        for e in y.extract_info(f"ytsearch5:{q}", download=False)["entries"]:
            print(f"{e['title']} | {e.get('channel')} | {fmt(e.get('duration') or 0)} | https://youtu.be/{e['id']}")


def frames(url, info, at, count, out):
    if not shutil.which("ffmpeg"):
        sys.exit("ffmpeg не найден (apt install ffmpeg / winget install Gyan.FFmpeg)")
    out = out or os.path.join(tempfile.gettempdir(), "yt_" + info["id"])
    os.makedirs(out, exist_ok=True)
    times = [t.strip() for t in at.split(",")] if at else [str(int(info["duration"] * i / (count + 1))) for i in range(1, count + 1)]
    with yt_dlp.YoutubeDL({"quiet": True, "format": "bv*[height<=720]/b[height<=720]/b"}) as y:
        stream = y.extract_info(url, download=False)["url"]
    for i, t in enumerate(times, 1):
        f = os.path.join(out, f"frame_{i:02d}.jpg")
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", t, "-i", stream, "-frames:v", "1", "-q:v", "3", f], check=True)
        print(f"{f}  (t={t})")


def transcript(url, info, lang):
    tmp = tempfile.mkdtemp(prefix="ytsub_")
    opts = {"quiet": True, "skip_download": True, "writesubtitles": True, "writeautomaticsub": True,
            "subtitleslangs": lang.split(","), "subtitlesformat": "vtt", "outtmpl": os.path.join(tmp, "s.%(ext)s")}
    with yt_dlp.YoutubeDL(opts) as y:
        y.download([url])
    files = sorted(glob.glob(os.path.join(tmp, "*.vtt")))
    if not files:
        print("\nСубтитров нет.")
        return
    print(f"\nТранскрипт ({os.path.basename(files[0])}):")
    out, last, stamp, mark = [], "", 0, -100
    for line in open(files[0], encoding="utf-8"):
        m = re.match(r"(\d+):(\d\d):(\d\d)\.\d+ --> ", line)
        if m:
            stamp = int(m[1]) * 3600 + int(m[2]) * 60 + int(m[3])
            continue
        if re.match(r"(WEBVTT|Kind:|Language:|NOTE)", line) or not line.strip():
            continue
        t = re.sub(r"<[^>]+>", "", line).strip()
        if not t or t == last:
            continue
        last = t
        if stamp - mark >= 20:
            out.append(f"\n[{fmt(stamp)}] ")
            mark = stamp
        out.append(t + " ")
    print("".join(out))
    shutil.rmtree(tmp, ignore_errors=True)


def main():
    p = argparse.ArgumentParser()
    p.add_argument("url", nargs="?")
    p.add_argument("--search")
    p.add_argument("--lang", default="ru,en")
    p.add_argument("--frames", action="store_true")
    p.add_argument("--at", default="")
    p.add_argument("--count", type=int, default=8)
    p.add_argument("--out", default="")
    a = p.parse_args()
    if a.search:
        return search(a.search)
    if not a.url:
        p.error("нужен URL или --search")
    with yt_dlp.YoutubeDL({"quiet": True, "noplaylist": True, "skip_download": True}) as y:
        info = y.extract_info(a.url, download=False)
    if a.frames:
        return frames(a.url, info, a.at, a.count, a.out)
    print(f"Название: {info['title']}\nКанал: {info.get('channel')}\nДлительность: {fmt(info['duration'])}\nДата: {info.get('upload_date')}")
    if info.get("chapters"):
        print("\nГлавы:")
        for c in info["chapters"]:
            print(f"  [{fmt(c['start_time'])}] {c['title']}")
    d = info.get("description") or ""
    print("\nОписание:\n" + (d[:1500] + "..." if len(d) > 1500 else d))
    transcript(a.url, info, a.lang)


main()
