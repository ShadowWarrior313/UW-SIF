import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import PastTeamsIndex from "@/components/PastTeamsIndex";
import TeamGroups from "@/components/TeamGroups";
import TeamPhoto from "@/components/TeamPhoto";
import { type } from "@/components/type";
import { groupPhotosFor, pastTeamBySlug, pastTeams, termLabel, termSlug } from "@/data/pastTeams";
import { currentTerm } from "@/data/team";

export const dynamicParams = false;

export function generateStaticParams() {
  return pastTeams.map((team) => ({ term: termSlug(team) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>;
}): Promise<Metadata> {
  const team = pastTeamBySlug((await params).term);
  return { title: team ? `${termLabel(team)} Team` : "Team" };
}

export default async function PastTeamPage({ params }: { params: Promise<{ term: string }> }) {
  const { term } = await params;
  const team = pastTeamBySlug(term);
  if (!team) notFound();

  // pastTeams is newest first
  const index = pastTeams.indexOf(team);
  const newer = pastTeams[index - 1];
  const older = pastTeams[index + 1];

  return (
    <>
      <PageHero
        title={`${termLabel(team)} Team`}
        lede={`The ${termLabel(team)} Student Investment Fund: ${team.members.length} students across portfolio management and research.`}
      />

      <nav
        aria-label="Terms"
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-[0.95rem] font-medium text-navy"
      >
        {older ? (
          <Link href={`/team/${termSlug(older)}`} className="inline-flex items-center gap-2 hover:underline">
            <ArrowLeft size={17} />
            {termLabel(older)}
          </Link>
        ) : (
          <span />
        )}
        <Link href={newer ? `/team/${termSlug(newer)}` : "/team"} className="inline-flex items-center gap-2 hover:underline">
          {newer ? termLabel(newer) : `Current team (${currentTerm})`}
          <ArrowRight size={17} />
        </Link>
      </nav>

      {groupPhotosFor(team).map((photo) => (
        <TeamPhoto key={photo.src} {...photo} />
      ))}

      <TeamGroups members={team.members} term={term} />

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 className={type.h2}>Browse Past Teams</h2>
          <div className="mt-10">
            <PastTeamsIndex active={term} />
          </div>
          <Link href="/team" className="mt-8 inline-flex items-center gap-2 font-medium text-navy hover:underline">
            <ArrowLeft size={17} />
            Back to the {currentTerm} team
          </Link>
        </div>
      </section>
    </>
  );
}
