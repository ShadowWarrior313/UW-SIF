"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export type PastTeamOption = {
  year: number;
  teams: { slug: string; season: string; count: number }[];
};

const label = "text-[0.95rem] font-medium text-navy";
const select =
  "w-full appearance-none rounded-[3px] bg-white px-5 py-3.5 pr-12 text-[0.95rem] text-ink outline-none transition focus-visible:ring-2 focus-visible:ring-navy";

function Select({
  id,
  value,
  onChange,
  children,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative mt-3">
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className={select}>
        {children}
      </select>
      <ChevronDown
        size={18}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-navy"
      />
    </div>
  );
}

/** Year → term dropdowns that open /team/[term]; `active` preselects the term being viewed */
export default function PastTeamPicker({
  options,
  active,
}: {
  options: PastTeamOption[];
  active?: string;
}) {
  const router = useRouter();
  const initial =
    options.find((o) => o.teams.some((t) => t.slug === active)) ?? options[0];
  const [year, setYear] = useState(initial.year);
  const [slug, setSlug] = useState(active ?? initial.teams.at(-1)!.slug);

  const terms = options.find((o) => o.year === year)!.teams;

  function changeYear(value: string) {
    const next = options.find((o) => o.year === Number(value))!;
    setYear(next.year);
    setSlug(next.teams.at(-1)!.slug);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/team/${slug}`);
      }}
      className="grid gap-6 rounded-[3px] bg-mist p-6 md:grid-cols-[1fr_1fr_auto] md:items-end md:p-8"
    >
      <div>
        <label htmlFor="past-year" className={label}>
          Select year
        </label>
        <Select id="past-year" value={String(year)} onChange={changeYear}>
          {options.map((o) => (
            <option key={o.year} value={o.year}>
              {o.year}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <label htmlFor="past-term" className={label}>
          Select term
        </label>
        <Select id="past-term" value={slug} onChange={setSlug}>
          {terms.map((t) => (
            <option key={t.slug} value={t.slug}>
              {t.season} · {t.count} members
            </option>
          ))}
        </Select>
      </div>
      <button
        type="submit"
        disabled={slug === active}
        className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-navy px-6 py-3.5 text-[0.95rem] font-medium text-white transition hover:bg-navy-2 disabled:opacity-50"
      >
        View team
        <ArrowUpRight size={17} />
      </button>
    </form>
  );
}
