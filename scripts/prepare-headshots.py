"""
Re-export headshots in public/team for the team cards.

Upscales small sources 2x with Lanczos plus a light unsharp mask (sharper than
letting the browser stretch them) and saves high-quality JPEGs.
Usage: python3 scripts/prepare-headshots.py <source-image> <first-last>
"""
import sys
from pathlib import Path

from PIL import Image, ImageFilter

TARGET = 480  # px, square; cards render at ~240px so this covers 2x screens

src, slug = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGB")
side = min(im.size)
left, top = (im.width - side) // 2, (im.height - side) // 2
im = im.crop((left, top, left + side, top + side))
if side < TARGET:
    im = im.resize((TARGET, TARGET), Image.LANCZOS)
    im = im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=60, threshold=2))
out = Path(__file__).resolve().parent.parent / "public" / "team" / f"{slug}.jpg"
im.save(out, quality=92, optimize=True)
print(out.name, im.size)
