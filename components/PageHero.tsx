export default function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="hero-grid absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          {kicker}
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.95] text-cream md:text-6xl">
          {title}
        </h1>
        {lede ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/70">
            {lede}
          </p>
        ) : null}
      </div>
    </section>
  );
}
