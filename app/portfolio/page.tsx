import type { Metadata } from "next";
import AllocationBars from "@/components/AllocationBars";
import FeatureSection from "@/components/FeatureSection";
import PageHero from "@/components/PageHero";
import SectorGrid from "@/components/SectorGrid";
import StatStrip from "@/components/StatStrip";
import { type } from "@/components/type";
import { metrics } from "@/data/metrics";
import { sectors } from "@/data/sectors";

export const metadata: Metadata = {
  title: "Portfolio",
};

const holdingsCount = sectors.reduce((sum, sector) => sum + sector.holdings.length, 0);
const metric = (id: string) => metrics.find((m) => m.id === id)?.display ?? "—";

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Our Portfolio"
        lede="A broadly diversified portfolio of mid-to-large capitalization Canadian and U.S. equities, organised by sector. Holdings, weights, and figures shown are placeholders."
      />

      <div className="py-16">
        <StatStrip
          stats={[
            { value: metric("aum"), label: "Assets under management" },
            { value: metric("alpha"), label: "Alpha since inception" },
            { value: String(holdingsCount), label: "Holdings" },
            { value: String(sectors.length), label: "Sectors covered" },
            { value: "CA & US", label: "Mid-to-large cap equities" },
          ]}
        />
      </div>

      <FeatureSection
        label="Allocation"
        title="One book."
        subtitle="Seven sectors."
        body={
          <p>
            Each sector team covers its names, pitches new positions, and defends
            its weight in front of faculty and industry professionals. Select a
            sector to jump to its holdings.
          </p>
        }
      >
        <AllocationBars />
      </FeatureSection>

      <FeatureSection label="Coverage" title="Sector teams." subtitle="Research by industry.">
        <SectorGrid />
      </FeatureSection>

      <FeatureSection label="Holdings" title="Current positions." subtitle="By sector.">
        <div className="border-t border-line">
          {sectors.map((sector) => (
            <article
              key={sector.id}
              id={sector.id}
              className="grid scroll-mt-24 gap-8 border-b border-line py-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16"
            >
              <div>
                <h3 className={type.h3}>{sector.name}</h3>
                <p className={`mt-2 ${type.eyebrow}`}>{sector.weight} of portfolio</p>
                <p className={`mt-4 ${type.lede}`}>{sector.description}</p>
              </div>
              <table className="w-full self-start text-left">
                <thead>
                  <tr className="border-b border-ink/25 text-sm text-ink/60">
                    <th className="py-3 pr-4 font-medium">Ticker</th>
                    <th className="py-3 pr-4 font-medium">Company</th>
                    <th className="py-3 text-right font-medium">Listing</th>
                  </tr>
                </thead>
                <tbody>
                  {sector.holdings.map((holding) => (
                    <tr key={holding.ticker} className="border-b border-line">
                      <td className="py-4 pr-4 font-medium text-navy">{holding.ticker}</td>
                      <td className="py-4 pr-4 text-ink/85">{holding.name}</td>
                      <td className="whitespace-nowrap py-4 text-right text-ink/60">{holding.region}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
          ))}
        </div>
      </FeatureSection>
    </>
  );
}
