import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PastTeamsIndex from "@/components/PastTeamsIndex";
import TeamGroups from "@/components/TeamGroups";
import TeamPhoto from "@/components/TeamPhoto";
import { type } from "@/components/type";
import { pastTeamsByYear } from "@/data/pastTeams";
import { currentTerm, faculty, team, teamPhoto } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Meet the Team"
        lede={`The ${currentTerm} Student Investment Fund: ${team.length} students across portfolio management and research.`}
      />

      <TeamPhoto {...teamPhoto} />

      <TeamGroups members={team} />

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 className={type.h2}>Faculty &amp; Staff</h2>
          <div className="mt-10 grid border-t border-line md:grid-cols-3">
            {faculty.map((person) => (
              <div key={person.name} className="border-b border-line py-6 md:pr-8">
                <h3 className={type.h3}>{person.name}</h3>
                <p className="mt-1 font-semibold text-ink">{person.role}</p>
                <p className="mt-1 text-slate">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="past-teams">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 className={type.h2}>Past Teams</h2>
          <p className={`mt-5 max-w-2xl ${type.lede}`}>
            Every SIF cohort since {pastTeamsByYear.at(-1)?.year}, by term.
          </p>
          <div className="mt-10">
            <PastTeamsIndex />
          </div>
        </div>
      </section>
    </>
  );
}
