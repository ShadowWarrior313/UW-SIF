export type Member = {
  name: string;
  role: string;
  track: "pm" | "senior" | "junior";
  program: string;
  graduating: string;
  /** Full LinkedIn URL; shows an icon on the card when set */
  linkedin?: string;
  /** Override the default /public/team/<first-last>.jpg path; null when there is no headshot */
  photo?: string | null;
};

/**
 * Headshots live in /public/team as first-last.jpg (e.g. ishan-vakharia.jpg);
 * past terms add a folder, e.g. /public/team/past/winter-2026/ishan-vakharia.jpg
 */
export function photoFor(member: Pick<Member, "name" | "photo">, term?: string) {
  if (member.photo) return member.photo;
  const slug = member.name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  return term ? `/team/past/${term}/${slug}.jpg` : `/team/${slug}.jpg`;
}

export const currentTerm = "Fall 2026";

/** Group photo used on the homepage banner and the Team page */
export const teamPhoto = {
  src: "/images/team-fall-2026.jpg",
  alt: "The Fall 2026 Student Investment Fund team",
};

const AFM = "Accounting and Financial Management";
const SFM = "Sustainability and Financial Management";

const m = (
  name: string,
  role: string,
  track: Member["track"],
  graduating: string,
  program = AFM,
): Member => ({ name, role, track, program, graduating });

export const team: Member[] = [
  m("Cole Armitage", "Senior Portfolio Manager", "pm", ""),
  m("Robert Davis", "Senior Portfolio Manager", "pm", "2027"),
  m("Jei Gnaneswaran", "Senior Portfolio Manager", "pm", "2026"),
  m("James Sweeney", "Senior Portfolio Manager", "pm", "2026"),
  m("Deven Madan", "Junior Portfolio Manager", "pm", "2027"),
  m("Arnav Sheth", "Junior Portfolio Manager", "pm", "2027"),
  m("Ishaan Tamakuwala", "Junior Portfolio Manager", "pm", "2028"),
  m("Ishan Vakharia", "Junior Portfolio Manager", "pm", "2028"),

  m("Aimée Boulay", "Senior Analyst", "senior", "2027"),
  m("Thomas Cafazzo", "Senior Analyst", "senior", "2029"),
  m("Aidan Cui", "Senior Analyst", "senior", "2029"),
  m("Subhan Fasih", "Senior Analyst", "senior", "2029"),
  m("Kaavish Hasan", "Senior Analyst", "senior", "2029"),
  m("David Hetherton", "Senior Analyst", "senior", "2029"),
  m("Jahanzaib Khan", "Senior Analyst", "senior", "2029"),
  m("Brandon Zeng", "Senior Analyst", "senior", "2029"),

  m("Nikita Fediounin", "Junior Analyst", "junior", "2028"),
  m("Aaron Gao", "Junior Analyst", "junior", "2029"),
  m("Grace Harianto", "Junior Analyst", "junior", "2028"),
  m("Yasseen Hemdan", "Junior Analyst", "junior", "2029"),
  m("Hanna Leung", "Junior Analyst", "junior", "2029"),
  m("Earagan Nimalan", "Junior Analyst", "junior", "2029"),
  m("Arjun Sandhu", "Junior Analyst", "junior", "2029"),
  m("Umair Sharif", "Junior Analyst", "junior", "2029"),
  m("Gelila Tulu", "Junior Analyst", "junior", "2029", SFM),
];

export function groupMembers<T extends Pick<Member, "track">>(members: T[]) {
  return [
    { id: "pm", title: "Portfolio Managers", members: members.filter((t) => t.track === "pm") },
    { id: "senior", title: "Senior Analysts", members: members.filter((t) => t.track === "senior") },
    { id: "junior", title: "Junior Analysts", members: members.filter((t) => t.track === "junior") },
  ].filter((group) => group.members.length > 0);
}

export const teamGroups = groupMembers(team);

export const faculty = [
  {
    name: "Alan Douglas",
    role: "Faculty Supervisor",
    title: "Associate Professor, School of Accounting and Finance",
  },
  {
    name: "Alan Huang",
    role: "Faculty Supervisor",
    title: "Professor, Finance; Ernst and Young Professor",
  },
  {
    name: "Keidon Giles",
    role: "Staff Support",
    title: "School of Accounting and Finance",
  },
];
