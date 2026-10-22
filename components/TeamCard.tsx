import type { Member } from "@/data/team";

export default function TeamCard({ member }: { member: Member }) {
  const initials = member.name
    .split(" ")
    .filter((part) => !part.includes("("))
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <article className="border border-navy/10 bg-white p-6 transition hover:border-gold/50">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-cream font-serif text-lg text-navy">
        {initials}
      </div>
      <h3 className="mt-5 font-serif text-2xl text-navy">{member.name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
        {member.role}
      </p>
      <p className="mt-3 text-sm text-navy/60">
        {member.program}
        <br />
        Graduating {member.graduating}
      </p>
    </article>
  );
}
