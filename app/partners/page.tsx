import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { advisoryBoard, industryMentors, pastChairs } from "@/data/partners";
import type { Person } from "@/data/partners";

export const metadata: Metadata = {
  title: "Partners",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        kicker="Partners"
        title="Faculty, an advisory board, and a working industry bench."
        lede="SIF sits inside the School of Accounting and Finance with oversight from practitioners who have run capital, advised on deals, and hired Waterloo students."
      />

      <section className="bg-paper text-navy">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Advisory board
          </p>
          <h2 className="mt-3 font-serif text-4xl">Steering the mandate</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {advisoryBoard.map((person) => (
              <PersonRow key={person.name} person={person} />
            ))}
          </div>

          <div className="mt-16">
            <h3 className="font-serif text-2xl">Past chairs</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {pastChairs.map((person) => (
                <PersonRow key={person.name} person={person} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="mentors" className="scroll-mt-24 bg-white text-navy">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Industry mentors
          </p>
          <h2 className="mt-3 font-serif text-4xl">The working network</h2>
          <div className="mt-10 grid gap-px bg-navy/10 md:grid-cols-2">
            {industryMentors.map((person) => (
              <div key={person.name} className="bg-white px-6 py-5">
                <p className="font-serif text-xl">{person.name}</p>
                <p className="mt-1 text-sm text-navy/60">
                  {person.role}, {person.org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PersonRow({ person }: { person: Person }) {
  return (
    <article className="border border-navy/10 bg-white p-6">
      <h3 className="font-serif text-2xl">{person.name}</h3>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
        {person.role}
      </p>
      <p className="mt-2 text-sm text-navy/65">{person.org}</p>
      {person.note ? <p className="mt-2 text-xs text-navy/45">{person.note}</p> : null}
    </article>
  );
}
