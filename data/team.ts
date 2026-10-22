export type Member = {
  name: string;
  role: string;
  track: "pm" | "senior" | "junior";
  program: string;
  graduating: string;
};

export const currentTerm = "Spring 2026";

export const team: Member[] = [
  {
    name: "Arish Bhimani",
    role: "Junior Portfolio Manager",
    track: "pm",
    program: "Accounting and Financial Management",
    graduating: "2028",
  },
  {
    name: "Robert Davis",
    role: "Junior Portfolio Manager",
    track: "pm",
    program: "Accounting and Financial Management",
    graduating: "2026",
  },
  {
    name: "Jei Gnaneswaran",
    role: "Junior Portfolio Manager",
    track: "pm",
    program: "Accounting and Financial Management",
    graduating: "2026",
  },
  {
    name: "James Sweeney",
    role: "Junior Portfolio Manager",
    track: "pm",
    program: "Accounting and Financial Management",
    graduating: "2026",
  },
  {
    name: "Mark Wu",
    role: "Junior Portfolio Manager",
    track: "pm",
    program: "Accounting and Financial Management",
    graduating: "2028",
  },
  {
    name: "Katie Chan",
    role: "Junior Portfolio Manager",
    track: "pm",
    program: "Accounting and Financial Management",
    graduating: "2028",
  },
  {
    name: "Aryan Dham",
    role: "Junior Portfolio Manager",
    track: "pm",
    program: "Accounting and Financial Management",
    graduating: "2028",
  },
  {
    name: "Kabir Singh Bajwa",
    role: "Junior Portfolio Manager",
    track: "pm",
    program: "Accounting and Financial Management",
    graduating: "2028",
  },
  {
    name: "Gurpartap Thap",
    role: "Junior Portfolio Manager",
    track: "pm",
    program: "Accounting and Financial Management",
    graduating: "2028",
  },
  {
    name: "Abhi Avutapalli",
    role: "Senior Analyst",
    track: "senior",
    program: "Accounting and Financial Management",
    graduating: "2028",
  },
  {
    name: "Michael Huang",
    role: "Senior Analyst",
    track: "senior",
    program: "Accounting and Financial Management",
    graduating: "2028",
  },
  {
    name: "Ishaan Tamakuwala",
    role: "Senior Analyst",
    track: "senior",
    program: "Accounting and Financial Management",
    graduating: "2028",
  },
  {
    name: "Mithran Vallipuram",
    role: "Senior Analyst",
    track: "senior",
    program: "Accounting and Financial Management",
    graduating: "2027",
  },
  {
    name: "Daniel Yang",
    role: "Senior Analyst",
    track: "senior",
    program: "Accounting and Financial Management",
    graduating: "2028",
  },
  {
    name: "Andrew Bradley Chang",
    role: "Senior Analyst",
    track: "senior",
    program: "Accounting and Financial Management",
    graduating: "2028",
  },
  {
    name: "Adam Plant",
    role: "Senior Analyst",
    track: "senior",
    program: "Accounting and Financial Management",
    graduating: "2028",
  },
  {
    name: "Ishan Vakharia",
    role: "Senior Analyst",
    track: "senior",
    program: "Accounting and Financial Management",
    graduating: "2028",
  },
  {
    name: "Muhammad Wasif",
    role: "Senior Analyst",
    track: "senior",
    program: "Accounting and Financial Management",
    graduating: "2027",
  },
  {
    name: "Ege Altinoglu",
    role: "Junior Analyst",
    track: "junior",
    program: "Accounting and Financial Management",
    graduating: "2029",
  },
  {
    name: "Aidan Cui",
    role: "Junior Analyst",
    track: "junior",
    program: "Accounting and Financial Management",
    graduating: "2029",
  },
  {
    name: "Subhan Fasih",
    role: "Junior Analyst",
    track: "junior",
    program: "Accounting and Financial Management",
    graduating: "2029",
  },
  {
    name: "David Hetherton",
    role: "Junior Analyst",
    track: "junior",
    program: "Accounting and Financial Management",
    graduating: "2029",
  },
  {
    name: "Krish Kohli",
    role: "Junior Analyst",
    track: "junior",
    program: "Accounting and Financial Management",
    graduating: "2029",
  },
  {
    name: "Han Nguyen",
    role: "Junior Analyst",
    track: "junior",
    program: "Accounting and Financial Management",
    graduating: "2028",
  },
  {
    name: "Brody Sidaway",
    role: "Junior Analyst",
    track: "junior",
    program: "Accounting and Financial Management",
    graduating: "2029",
  },
  {
    name: "Jason Tang",
    role: "Junior Analyst",
    track: "junior",
    program: "Accounting and Financial Management",
    graduating: "2029",
  },
  {
    name: "Juliana Zhu",
    role: "Junior Analyst",
    track: "junior",
    program: "Accounting and Financial Management",
    graduating: "2029",
  },
  {
    name: "Thomas Cafazzo",
    role: "Junior Analyst",
    track: "junior",
    program: "Accounting and Financial Management",
    graduating: "2029",
  },
  {
    name: "Puneet Dhillon",
    role: "Junior Analyst",
    track: "junior",
    program: "Accounting and Financial Management",
    graduating: "2029",
  },
  {
    name: "Kaavish Hasan",
    role: "Junior Analyst",
    track: "junior",
    program: "Accounting and Financial Management",
    graduating: "2029",
  },
  {
    name: "Jahanzaib Khan",
    role: "Junior Analyst",
    track: "junior",
    program: "Accounting and Financial Management",
    graduating: "2029",
  },
  {
    name: "Derek Ma",
    role: "Junior Analyst",
    track: "junior",
    program: "Computing and Financial Management",
    graduating: "2029",
  },
  {
    name: "Cooper Rorison",
    role: "Junior Analyst",
    track: "junior",
    program: "Sustainability and Financial Management",
    graduating: "2029",
  },
  {
    name: "Sivaja Sivakaran",
    role: "Junior Analyst",
    track: "junior",
    program: "Accounting and Financial Management",
    graduating: "2029",
  },
  {
    name: "Brandon Zeng",
    role: "Junior Analyst",
    track: "junior",
    program: "Accounting and Financial Management",
    graduating: "2029",
  },
];

export const teamGroups = [
  { id: "pm", title: "Portfolio Managers", members: team.filter((m) => m.track === "pm") },
  { id: "senior", title: "Senior Analysts", members: team.filter((m) => m.track === "senior") },
  { id: "junior", title: "Junior Analysts", members: team.filter((m) => m.track === "junior") },
];

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
