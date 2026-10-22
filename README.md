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
| Members, AUM, alpha | `data/metrics.ts` |
| Alumni / recruiting logos | `data/alumni.ts` + drop files in `public/logos/` |
| Team roster | `data/team.ts` |
| Sector holdings | `data/sectors.ts` |
| Partners and mentors | `data/partners.ts` |

### Alumni logos

Add images named to match `logo` in `data/alumni.ts`, for example:

```
public/logos/goldman-sachs.png
```

PNG, SVG, or WebP all work. Keep logos on a transparent background. Until a file is added, the site shows a styled wordmark in the same slot so layout stays intact.
