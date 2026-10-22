import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TeamCard from "@/components/TeamCard";
import { currentTerm, faculty, team, teamGroups } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        kicker="Meet the team"
        title={`${currentTerm} Student Investment Fund`}
        lede={`${team.length} SAF students covering the book this term — portfolio managers, senior analysts, and junior analysts working a live North American equity mandate.`}
      />

      <section className="bg-paper text-navy">
        {teamGroups.map((group) => (
          <div key={group.id} className="mx-auto max-w-7xl px-6 py-16 first:pt-20 last:pb-20">
            <div className="flex items-end justify-between border-b border-navy/10 pb-4">
              <h2 className="font-serif text-3xl">{group.title}</h2>
              <p className="text-xs uppercase tracking-[0.2em] text-navy/45">
                {group.members.length} members
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.members.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Faculty & staff
          </p>
          <h2 className="mt-3 font-serif text-4xl text-cream">Supervision</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {faculty.map((person) => (
              <article key={person.name} className="border border-white/10 p-6">
                <h3 className="font-serif text-2xl text-cream">{person.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gold">
                  {person.role}
                </p>
                <p className="mt-3 text-sm text-cream/60">{person.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
