"""
Normalise alumni logos in public/logos and size them to equal visual weight.

For every PNG in public/logos this script, in place:
  1. makes the white background transparent (only white connected to the
     image edge, so white inside a logo, like the letters in TD, stays),
  2. trims empty margins and caps the file at 900x400px,
and then writes public/logos/sizes.json with a display width/height per file.

Sizing: each logo gets the same "visual mass" = width x height x sqrt(ink
density), so wide light wordmarks get more room and dense marks (RBC, TD)
get less. Re-run after adding a logo:  python3 scripts/prepare-logos.py
"""
import json
import math
from collections import deque
from pathlib import Path

from PIL import Image, ImageFilter

LOGOS = Path(__file__).resolve().parent.parent / "public" / "logos"
MAX_W, MAX_H = 900, 400

MASS = 3300      # target width*height*sqrt(density) in CSS px
MAX_DISPLAY_W = 190
MAX_DISPLAY_H = 64
MIN_DISPLAY_H = 16

# Optical corrections where the formula under- or over-weights a logo
MASS_OVERRIDES = {
    "veritas.png": 2.0,       # thin lettering next to a dense roundel
    "blackstone.png": 1.8,    # solid box reads heavy but small
    "kinterra.png": 1.6,      # very wide, thin letterspaced wordmark
    "citadel.png": 1.5,
    "national-bank.png": 1.7,
    "psp.png": 1.45,
    "td.png": 1.6,
    "rbc.png": 1.6,
    "george-weston.png": 1.5, # very wide wordmark with small three-line text
    "altas.png": 1.8,         # solid box reads heavy, so the formula shrinks it
}

# Wider/taller caps for logos that would otherwise hit MAX_DISPLAY_W / _H
MAX_W_OVERRIDES = {
    "kinterra.png": 215,
    "citadel.png": 215,
    "susquehanna.png": 215,
    "george-weston.png": 235,  # three-line "George Weston Limited" text needs the height
}
MAX_H_OVERRIDES = {
    "td.png": 74,
    "psp.png": 72,
    "veritas.png": 72,
    "rbc.png": 84,
}


def remove_edge_white(im: Image.Image) -> Image.Image:
    """Make near-white pixels connected to the border transparent."""
    w, h = im.size
    px = im.load()

    def is_bg(x, y):
        r, g, b, a = px[x, y]
        return a < 16 or min(r, g, b) > 238

    bg = bytearray(w * h)
    queue = deque()
    for x in range(w):
        for y in (0, h - 1):
            if not bg[y * w + x] and is_bg(x, y):
                bg[y * w + x] = 1
                queue.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if not bg[y * w + x] and is_bg(x, y):
                bg[y * w + x] = 1
                queue.append((x, y))
    while queue:
        x, y = queue.popleft()
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h and not bg[ny * w + nx] and is_bg(nx, ny):
                bg[ny * w + nx] = 1
                queue.append((nx, ny))

    mask = Image.frombytes("L", (w, h), bytes(v * 255 for v in bg))
    fringe = mask.filter(ImageFilter.MaxFilter(5))
    fpx = fringe.load()
    out = im.copy()
    opx = out.load()
    for y in range(h):
        for x in range(w):
            if bg[y * w + x]:
                r, g, b, _ = opx[x, y]
                opx[x, y] = (r, g, b, 0)
            elif fpx[x, y]:
                # Anti-aliased edge: unblend from white so it sits on any background
                r, g, b, a = opx[x, y]
                alpha = max(255 - r, 255 - g, 255 - b) / 255
                if alpha < 1:
                    if alpha <= 0.01:
                        opx[x, y] = (r, g, b, 0)
                    else:
                        un = lambda c: round(min(255, max(0, (c - 255 * (1 - alpha)) / alpha)))
                        opx[x, y] = (un(r), un(g), un(b), round(min(a, alpha * 255)))
    return out


def process(path: Path) -> dict:
    im = Image.open(path).convert("RGBA")
    im.thumbnail((MAX_W * 2, MAX_H * 2), Image.LANCZOS)
    im = remove_edge_white(im)
    box = im.getchannel("A").point(lambda a: 255 if a > 20 else 0).getbbox()
    if box:
        im = im.crop(box)
    im.thumbnail((MAX_W, MAX_H), Image.LANCZOS)
    im.save(path, optimize=True)

    alpha = im.getchannel("A")
    density = sum(alpha.getdata()) / (255 * im.width * im.height)
    ratio = im.width / im.height

    mass = MASS * MASS_OVERRIDES.get(path.name, 1)
    height = math.sqrt(mass / (ratio * math.sqrt(max(density, 0.05))))
    width = height * ratio
    max_w = MAX_W_OVERRIDES.get(path.name, MAX_DISPLAY_W)
    if width > max_w:
        width, height = max_w, max_w / ratio
    max_h = MAX_H_OVERRIDES.get(path.name, MAX_DISPLAY_H)
    if height > max_h:
        width, height = max_h * ratio, max_h
    height = max(height, MIN_DISPLAY_H)
    return {
        "w": round(width),
        "h": round(height),
        "ratio": round(ratio, 2),
        "density": round(density, 2),
    }


def main():
    sizes = {}
    for path in sorted(LOGOS.glob("*.png")):
        sizes[path.name] = process(path)
        s = sizes[path.name]
        print(f"{path.name:24} {s['w']:>4}x{s['h']:<4} ratio {s['ratio']:<5} ink {s['density']}")
    out = {name: {"w": s["w"], "h": s["h"]} for name, s in sizes.items()}
    (LOGOS / "sizes.json").write_text(json.dumps(out, indent=2) + "\n")


if __name__ == "__main__":
    main()
