import { sectors } from "@/data/sectors";

/**
 * Target weight by sector as a single-series horizontal bar list, sorted
 * largest first, in the site's one colour (navy) on the page background.
 */
export default function AllocationBars() {
  const rows = sectors
    .map((sector) => ({ ...sector, pct: parseFloat(sector.weight) }))
    .sort((a, b) => b.pct - a.pct);
  const max = Math.max(...rows.map((row) => row.pct));

  return (
    <figure>
      <figcaption className="text-sm font-medium text-navy/65">Target weight by sector</figcaption>
      <ul className="mt-4 border-t border-line">
        {rows.map((row) => (
          <li key={row.id} className="border-b border-line">
            <a
              href={`#${row.id}`}
              title={`${row.name}: ${row.weight} target weight`}
              className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2.5 py-4 transition hover:bg-ink/[0.03] sm:grid-cols-[minmax(0,16rem)_1fr_3.5rem]"
            >
              <span className="truncate text-ink/80 group-hover:text-navy">{row.name}</span>
              <span className="order-last col-span-2 h-2 bg-line/70 sm:order-none sm:col-span-1">
                <span
                  className="block h-full rounded-r bg-navy/85 group-hover:bg-navy"
                  style={{ width: `${(row.pct / max) * 100}%` }}
                />
              </span>
              <span className="text-right tabular-nums text-ink/80">{row.weight}</span>
            </a>
          </li>
        ))}
      </ul>
    </figure>
  );
}
