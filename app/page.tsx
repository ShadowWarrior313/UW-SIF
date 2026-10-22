import Link from "next/link";
import LogoMarquee from "@/components/LogoMarquee";
import Metrics from "@/components/Metrics";
import SectorGrid from "@/components/SectorGrid";
import { fundFacts } from "@/data/metrics";
import { currentTerm, team } from "@/data/team";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-navy">
        <div className="hero-grid absolute inset-0" />
        <div className="grain absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-navy to-transparent" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-24 pt-32">
          <p className="rise text-xs font-semibold uppercase tracking-[0.32em] text-gold">
            University of Waterloo · School of Accounting and Finance
          </p>
          <h1 className="rise rise-delay-1 mt-6 max-w-5xl font-serif text-[3.4rem] leading-[0.92] text-cream sm:text-7xl md:text-[5.6rem]">
            The Student
            <br />
            Investment Fund
          </h1>
          <p className="rise rise-delay-2 mt-8 max-w-xl text-lg leading-relaxed text-cream/72">
            {fundFacts.mandate} Members manage a live book, write research, and
            present to faculty and industry.
          </p>
          <div className="rise rise-delay-3 mt-10 flex flex-wrap gap-4">
            <Link
              href="/apply"
              className="bg-gold px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-navy transition hover:bg-gold-2"
            >
              Apply to the Fund
            </Link>
            <Link
              href="/about"
              className="border border-cream/25 px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cream transition hover:border-gold hover:text-gold"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      <Metrics />
      <LogoMarquee />

      <section className="bg-paper text-navy">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              About the mandate
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              An institutional desk inside SAF.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-navy/70">
              Seeded in {fundFacts.founded} with {fundFacts.seed} from an
              anonymous donor, SIF is the School of Accounting and Finance&apos;s
              live-capital program. Students cover sectors, pitch names, and
              report performance — with Bloomberg, Capital IQ, and faculty
              supervision behind every recommendation.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-navy underline decoration-gold decoration-2 underline-offset-8"
            >
              Read the full story
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-px bg-navy/10">
            {[
              ["2012", "Founded"],
              [String(team.length), `${currentTerm} members`],
              ["4", "IM course credits"],
              ["2", "Markets: Canada & U.S."],
            ].map(([value, label]) => (
              <div key={label} className="bg-paper px-6 py-8">
                <p className="font-serif text-4xl">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-navy/50">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectorGrid />

      <section className="bg-navy">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Fall 2026 / Winter 2027
            </p>
            <h2 className="mt-3 font-serif text-4xl text-cream md:text-5xl">
              Applications are open.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/65">
              AFM, CFM, Math/CPA, Biotech/CPA, and SFM students in 2A or later
              who have completed AFM 271, 272, or 273.
            </p>
          </div>
          <Link
            href="/apply"
            className="bg-gold px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-navy transition hover:bg-gold-2"
          >
            Start an application
          </Link>
        </div>
      </section>
    </>
  );
}
