import TeamCard from "@/components/TeamCard";
import { type } from "@/components/type";
import { groupMembers, type Member } from "@/data/team";

/** Portfolio Managers / Senior Analysts / Junior Analysts grids for one term */
export default function TeamGroups({
  members,
  term,
}: {
  members: Pick<Member, "name" | "role" | "track" | "linkedin" | "photo">[];
  term?: string;
}) {
  return groupMembers(members).map((group) => (
    <section key={group.id}>
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <h2 className={type.h2}>{group.title}</h2>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {group.members.map((member) => (
            <TeamCard key={member.name} member={member} term={term} />
          ))}
        </div>
      </div>
    </section>
  ));
}
