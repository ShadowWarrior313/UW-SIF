# University of Waterloo Student Investment Fund

Redesigned site for the School of Accounting and Finance Student Investment Fund.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating content

| What | File |
| --- | --- |
| AUM, alpha (member count comes from the roster) | `data/metrics.ts` |
| Alumni / recruiting logos | `data/alumni.ts` + drop files in `public/logos/` |
| Team roster | `data/team.ts` |
| Sector holdings | `data/sectors.ts` |
| Partners and mentors | `data/partners.ts` |

### Alumni logos

1. Save the logo as a PNG in `public/logos/` (e.g. `goldman-sachs.png`). SVGs
   should be exported to PNG first.
2. Add the firm to `data/alumni.ts`.
3. Run `python3 scripts/prepare-logos.py` (needs Pillow). It makes white
   backgrounds transparent, trims margins, and regenerates
   `public/logos/sizes.json` so every logo carries the same visual weight.
   Tweak `MASS_OVERRIDES` in the script if one still looks off.

### Photos

Every photo slot shows a solid block until its file exists, so the layout holds either way.

| Slot | Drop file at |
| --- | --- |
| Team headshots | `public/team/first-last.jpg` (e.g. `ishan-vakharia.jpg`, `aimee-boulay.jpg`), square or 4:5 |
| Team group photo (homepage banner + Team page) | `public/images/team-fall-2026.jpg`, set in `teamPhoto` in `data/team.ts` |
| Sector tiles | `public/sectors/<id>.jpg` (ids in `data/sectors.ts`) |
