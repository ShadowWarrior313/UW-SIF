import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { type } from "@/components/type";
import { advisoryBoard, industryMentors, pastChairs } from "@/data/partners";
import type { Person } from "@/data/partners";

export const metadata: Metadata = {
  title: "Partners",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        title="Partners"
        lede="SIF is guided by an advisory board of investment professionals and supported by industry mentors who work alongside each sector team."
      />

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <SectionHeading title="Advisory Board" />
          <PeopleList people={advisoryBoard} />
          <h3 className={`mt-14 ${type.h3}`}>Past Chairs</h3>
          <PeopleList people={pastChairs} />
        </div>
      </section>

      <section id="mentors" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <SectionHeading title="Industry Mentors" />
          <PeopleList people={industryMentors} />
        </div>
      </section>
    </>
  );
}

function PeopleList({ people }: { people: Person[] }) {
  return (
    <div className="mt-8 grid border-t border-line md:grid-cols-2 md:gap-x-16 lg:grid-cols-3">
      {people.map((person) => (
        <div key={person.name} className="border-b border-line py-5">
          <p className={type.h3}>{person.name}</p>
          <p className="mt-1 text-ink/80">{person.role}</p>
          <p className="text-slate">{person.org}</p>
          {person.note ? <p className="mt-1 text-sm text-slate">{person.note}</p> : null}
        </div>
      ))}
    </div>
  );
}
