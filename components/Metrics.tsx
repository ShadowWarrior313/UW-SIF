import { metrics } from "@/data/metrics";

export default function Metrics() {
  return (
    <section className="bg-paper text-navy">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          The Fund
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-center font-serif text-3xl md:text-[2.6rem] md:leading-tight">
          Macro, sector, and company work, compounded in a live book.
        </h2>
        <div className="mt-12 grid gap-10 border-y border-navy/10 py-10 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.id} className="text-center">
              <p className="font-serif text-6xl tracking-tight text-navy md:text-7xl">
                {metric.display}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy/55">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
