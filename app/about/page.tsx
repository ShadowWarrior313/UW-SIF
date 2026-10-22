import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { fundFacts } from "@/data/metrics";

export const metadata: Metadata = {
  title: "About",
};

const pillars = [
  {
    title: "Invest",
    body: "Generate long-term growth of the Fund’s assets in a diversified book of mid-to-large cap Canadian and U.S. issuers.",
  },
  {
    title: "Train",
    body: "Give SAF students an institutional desk: valuation, pitching, portfolio construction, and performance reporting.",
  },
  {
    title: "Connect",
    body: "Work with finance faculty, an industry advisory board, and mentors at banks, funds, and pension plans.",
  },
];

const courses = [
  { code: "AFM 328", name: "Investment Management — Junior Analyst" },
  { code: "AFM 329", name: "Investment Management — Senior Analyst" },
  { code: "AFM 428", name: "Investment Management — Junior Portfolio Manager" },
  { code: "AFM 429", name: "Investment Management — Senior Portfolio Manager" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About the Fund"
        title="Built as a classroom. Run as a desk."
        lede="The Student Investment Fund is the School of Accounting and Finance’s live-capital program. Members manage real money, write research, and sit across from faculty and industry every term."
      />

      <section className="bg-paper text-navy">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              History
            </p>
            <h2 className="mt-3 font-serif text-4xl">From a seed gift to a standing mandate.</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-navy/70">
              <p>
                An anonymous donor funded the desk with a {fundFacts.seed} seed
                in five installments. The first {fundFacts.firstInstallment}{" "}
                was available to invest in {fundFacts.firstTerm}.
              </p>
              <p>
                Since then, SIF has operated as a co-curricular, for-credit
                experience inside SAF. Students join for a single study term,
                covering sectors, monitoring the book, and defending new names
                in front of peers, professors, and practitioners.
              </p>
              <p>
                Participation is limited to study terms so co-op conflicts of
                interest never sit on the desk.
              </p>
            </div>
          </div>
          <div className="border border-navy/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Eligible programs
            </p>
            <ul className="mt-6 space-y-3 text-sm text-navy/80">
              {[
                "Accounting and Financial Management",
                "Sustainability and Financial Management",
                "Computing and Financial Management",
                "Mathematics / Chartered Professional Accountancy",
                "Biotechnology / Chartered Professional Accountancy",
                "Master of Accounting",
              ].map((program) => (
                <li key={program} className="border-b border-navy/10 pb-3 last:border-0">
                  {program}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="border border-white/10 p-8">
              <h3 className="font-serif text-3xl text-gold">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/70">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper text-navy">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            How it works
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl">
            Research, pitch, allocate, report.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              "Manage a portfolio of Canadian and U.S. equities with real money.",
              "Sit as an Analyst, Portfolio Manager, CEO, or CIO.",
              "Enroll in one of the Investment Management project courses.",
              "Work in a small peer team under finance faculty.",
              "Take a mentor from the financial services industry.",
              "Monitor sector holdings, write equity research, and defend recommendations.",
              "Learn Bloomberg, Thomson Reuters, and Capital IQ.",
              "Measure and report portfolio performance to industry professionals.",
            ].map((item) => (
              <p
                key={item}
                className="border-l-2 border-gold pl-5 text-sm leading-relaxed text-navy/75"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-navy">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            For credit
          </p>
          <h2 className="mt-3 font-serif text-4xl">Investment Management courses</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy/65">
            Selected students enroll in a 0.25-credit project course with a
            numerical grade. Enrollment is by instructor authorization, beginning
            in 2A. All four courses can be completed across an undergraduate
            program.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {courses.map((course) => (
              <div key={course.code} className="flex items-baseline justify-between border border-navy/10 px-6 py-5">
                <span className="font-serif text-2xl">{course.code}</span>
                <span className="text-sm text-navy/60">{course.name}</span>
              </div>
            ))}
          </div>
          <Link
            href="/apply"
            className="mt-10 inline-block bg-navy px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cream"
          >
            Apply for a seat
          </Link>
        </div>
      </section>
    </>
  );
}
