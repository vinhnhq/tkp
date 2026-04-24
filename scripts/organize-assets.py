#!/usr/bin/env python3
"""Categorize raw-assets images into public/assets/ semantic folders.

Strategy: map each image URL to the HTML page that references it, then
bucket by page. For each unique base filename, pick the largest-dimension
variant (ladicdn serves many sizes of the same image). Skip icons/UI chrome.
"""

from __future__ import annotations

import re
import shutil
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "raw-assets" / "www.tkpcarton.com"
CDN = ROOT / "raw-assets" / "ladicdn"
OUT = ROOT / "public" / "assets"

IMG_RE = re.compile(
    r"https://w\.ladicdn\.com/(?P<path>[^\"'?\s)]*\.(?:jpg|jpeg|png|gif|webp))"
)
SIZE_RE = re.compile(r"^s(\d+)x(\d+)/")

PAGE_BUCKET = {
    "index": "hero",
    "ve-chung-toi": "factory",
    "quy-trinh": "process",
    "carton-3-lop": "products/3layer",
    "carton-5-lop": "products/5layer",
    "carton-7-lop": "products/7layer",
    "thung-carton-dien-tu": "products/electronics",
    "thung-carton-my-pham": "products/cosmetics",
    "thung-carton-nong-san": "products/agriculture",
    "thung-carton-thoi-trang": "products/fashion",
    "thung-carton-thuc-pham": "products/food",
    "lien-he": "contact",
}

NAME_PREFIX = {
    "hero": "hero",
    "factory": "factory",
    "process": "process-step",
    "products/3layer": "product-3layer",
    "products/5layer": "product-5layer",
    "products/7layer": "product-7layer",
    "products/electronics": "product-electronics",
    "products/cosmetics": "product-cosmetics",
    "products/agriculture": "product-agriculture",
    "products/fashion": "product-fashion",
    "products/food": "product-food",
    "contact": "contact",
}


def extract_pages_to_urls() -> dict[str, set[str]]:
    """page slug → set of ladicdn paths referenced."""
    result: dict[str, set[str]] = defaultdict(set)
    for html in RAW.glob("*.html"):
        page = html.stem
        text = html.read_text(encoding="utf-8", errors="ignore")
        for match in IMG_RE.finditer(text):
            result[page].add(match.group("path"))
    return result


def parse_dimensions(path: str) -> tuple[int, int]:
    """Extract (w, h) from size prefix like 's1440x683/...'. Returns (0,0) if unsized."""
    m = SIZE_RE.match(path)
    return (int(m.group(1)), int(m.group(2))) if m else (0, 0)


def base_name(path: str) -> str:
    """Strip size prefix and CDN-asset prefix to get the logical filename."""
    no_size = SIZE_RE.sub("", path)
    return Path(no_size).name


def classify(filename: str, page: str, width: int, height: int) -> str | None:
    lower = filename.lower()
    if "logo" in lower:
        return "logos"
    if any(kw in lower for kw in ("icon", "tick", "shape", "email", "phone")):
        return None  # UI chrome — skip
    if width and (width < 500 or height < 350):
        return None  # too small to be content
    return PAGE_BUCKET.get(page)


def pick_largest_per_basename(
    urls: set[str],
) -> dict[str, str]:
    """base filename → path-to-largest-variant."""
    best: dict[str, tuple[int, str]] = {}
    for path in urls:
        w, h = parse_dimensions(path)
        area = w * h if w else 9_999_999  # unsized = original, treat as largest
        name = base_name(path)
        if name not in best or area > best[name][0]:
            best[name] = (area, path)
    return {name: path for name, (_, path) in best.items()}


def main() -> None:
    pages_urls = extract_pages_to_urls()
    # Assign each image to its FIRST-seen page so products don't duplicate into hero
    assigned: dict[str, str] = {}  # base filename → page slug
    for page in [
        "ve-chung-toi", "quy-trinh",
        "carton-3-lop", "carton-5-lop", "carton-7-lop",
        "thung-carton-dien-tu", "thung-carton-my-pham",
        "thung-carton-nong-san", "thung-carton-thoi-trang",
        "thung-carton-thuc-pham",
        "lien-he", "index",
    ]:
        for url in pages_urls.get(page, set()):
            name = base_name(url)
            assigned.setdefault(name, page)

    # Gather best variant per name
    all_urls: set[str] = set().union(*pages_urls.values()) if pages_urls else set()
    best_by_name = pick_largest_per_basename(all_urls)

    # Counters per bucket for numbered naming
    counters: dict[str, int] = defaultdict(int)
    copied: list[tuple[str, str]] = []  # (src, dst)

    for name, src_path in sorted(best_by_name.items()):
        page = assigned.get(name, "index")
        w, h = parse_dimensions(src_path)
        bucket = classify(name, page, w, h)
        if bucket is None:
            continue

        src_file = CDN / src_path
        if not src_file.exists():
            continue

        counters[bucket] += 1
        idx = counters[bucket]
        ext = src_file.suffix.lower()
        prefix = NAME_PREFIX.get(bucket, bucket.replace("/", "-"))
        dst_name = f"{prefix}-{idx:02d}{ext}"
        dst_file = OUT / bucket / dst_name
        dst_file.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src_file, dst_file)
        copied.append((src_path, str(dst_file.relative_to(ROOT))))

    # Write index
    index_path = OUT / "INDEX.md"
    lines = ["# public/assets — origin index\n"]
    lines.append("Auto-generated by `scripts/organize-assets.py`. Each file traces back to its source on tkpcarton.com.\n")
    for src, dst in copied:
        lines.append(f"- `{dst}` ← `raw-assets/ladicdn/{src}`")
    index_path.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(f"Copied {len(copied)} images across {len(counters)} buckets:")
    for bucket, count in sorted(counters.items()):
        print(f"  {bucket}: {count}")


if __name__ == "__main__":
    main()
