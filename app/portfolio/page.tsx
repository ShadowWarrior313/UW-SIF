import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { sectors } from "@/data/sectors";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        kicker="The portfolio"
        title="A North American equity book, split by sector."
        lede="SIF invests in mid-to-large capitalization Canadian and U.S. issuers. Names and weights below are placeholders so the layout can be reviewed before the live book is loaded."
      />

      <section className="bg-paper text-navy">
        <div className="mx-auto max-w-7xl space-y-16 px-6 py-20">
          {sectors.map((sector) => (
            <article
              key={sector.id}
              id={sector.id}
              className="scroll-mt-28 grid gap-8 border-b border-navy/10 pb-16 last:border-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
            >
              <div className="relative min-h-[240px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={sector.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/45" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-gold">
                    {sector.weight} target weight
                  </p>
                  <h2 className="mt-2 font-serif text-3xl text-cream">{sector.name}</h2>
                </div>
              </div>
              <div>
                <p className="text-base leading-relaxed text-navy/70">{sector.description}</p>
                <div className="mt-8 overflow-hidden border border-navy/10">
                  <div className="grid grid-cols-[5rem_1fr_8rem] bg-navy px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cream/70">
                    <span>Ticker</span>
                    <span>Company</span>
                    <span className="text-right">Region</span>
                  </div>
                  {sector.holdings.map((holding) => (
                    <div
                      key={holding.ticker}
                      className="grid grid-cols-[5rem_1fr_8rem] border-t border-navy/10 px-5 py-4 text-sm"
                    >
                      <span className="font-medium tracking-wide">{holding.ticker}</span>
                      <span className="text-navy/75">{holding.name}</span>
                      <span className="text-right text-navy/50">{holding.region}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
