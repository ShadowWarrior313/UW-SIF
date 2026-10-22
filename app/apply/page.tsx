import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { applyLink } from "@/data/nav";

export const metadata: Metadata = {
  title: "Apply",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        kicker="Fall 2026 / Winter 2027"
        title="Apply to the Student Investment Fund."
        lede="Selection is by application and interview — academics, work experience, aptitude, and a demonstrated interest in finance. Appointments are for a single study term."
      />

      <section className="bg-paper text-navy">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Timeline
            </p>
            <h2 className="mt-3 font-serif text-4xl">When to apply</h2>
            <div className="mt-8 space-y-6">
              {[
                {
                  when: "Late October / early November",
                  what: "Call for Spring-term applications.",
                },
                {
                  when: "July",
                  what: "Call for Fall and Winter applications.",
                },
                {
                  when: "After first-round review",
                  what: "Interviews with the Fund.",
                },
                {
                  when: "Start of term",
                  what: "Valuation, Bloomberg, and Capital IQ training for the incoming team.",
                },
              ].map((step) => (
                <div key={step.when} className="border-l-2 border-gold pl-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">{step.when}</p>
                  <p className="mt-1 text-base text-navy/80">{step.what}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="border border-navy/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              You should apply if you
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-navy/75">
              <li>Are enrolled in AFM, CFM, Mathematics/CPA, Biotechnology/CPA, or SFM.</li>
              <li>Are in 2A or later when applications are released.</li>
              <li>
                Have completed or are enrolled in Managerial Finance I (AFM 271 / AFM 273) or
                Corporate Finance I (AFM 272).
              </li>
              <li>Can commit about five hours a week plus bi-weekly three-hour sessions.</li>
            </ul>
            <a
              href={applyLink.external}
              className="mt-8 inline-flex w-full items-center justify-center bg-navy px-6 py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cream"
            >
              Open official application
            </a>
            <p className="mt-3 text-xs text-navy/45">
              Hosted on the School of Accounting and Finance site.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-white text-navy">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-serif text-4xl">What to submit</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Resume",
                body: "Current resume covering academics, co-op, and any markets or research work.",
              },
              {
                title: "Unofficial transcript",
                body: "Grades to date, including AFM 121, 204, 205, 272/273/274, and later finance courses.",
              },
              {
                title: "200-word statement",
                body: "Why the Fund, and the two industry sectors you would cover if selected.",
              },
            ].map((item) => (
              <article key={item.title} className="border border-navy/10 p-6">
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/65">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-navy/60">
            Returning members are considered on prior-term performance, work
            experience, and aptitude. Returning for a second term is not
            automatic.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block text-xs font-semibold uppercase tracking-[0.22em] underline decoration-gold decoration-2 underline-offset-8"
          >
            Review the mandate first
          </Link>
        </div>
      </section>
    </>
  );
}
