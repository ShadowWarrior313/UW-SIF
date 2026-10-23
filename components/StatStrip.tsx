export type Stat = { value: string; label: string };

/** Figures row: large numerals with small labels. */
export default function StatStrip({ stats }: { stats: Stat[] }) {
  const cols =
    stats.length >= 5 ? "lg:grid-cols-5" : stats.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <div className="mx-auto max-w-7xl">
      <dl className={`grid grid-cols-2 gap-y-10 ${cols}`}>
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="px-6 text-center odd:last:col-span-2 lg:px-8 lg:odd:last:col-span-1"
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-display text-4xl leading-none text-navy md:text-5xl">{stat.value}</dd>
            <dd className="mt-4 text-sm text-ink/60">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
