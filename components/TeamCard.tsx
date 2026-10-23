import type { Member } from "@/data/team";
import { photoFor } from "@/data/team";
import SocialIcon from "@/components/SocialIcon";

export default function TeamCard({
  member,
  term,
}: {
  member: Pick<Member, "name" | "role" | "linkedin" | "photo">;
  /** Past-term slug (e.g. winter-2026) so the headshot resolves to that term's folder */
  term?: string;
}) {
  const initials = member.name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <article>
      <div className="relative aspect-square overflow-hidden rounded-[3px] bg-mist">
        <span className="absolute inset-0 flex items-center justify-center font-display text-5xl text-navy/25">
          {initials}
        </span>
        {member.photo === null ? null : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${photoFor(member, term)})` }}
          />
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl leading-tight text-navy">{member.name}</h3>
          <p className="mt-1 text-sm text-slate">{member.role}</p>
        </div>
        {member.linkedin ? (
          <a
            href={member.linkedin}
            aria-label={`${member.name} on LinkedIn`}
            className="mt-0.5 text-navy/60 transition hover:text-navy"
          >
            <SocialIcon name="linkedin" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
