export type Person = {
  name: string;
  role: string;
  org: string;
  note?: string;
};

export const advisoryBoard: Person[] = [
  {
    name: "Anish Chopra",
    role: "Chair",
    org: "Portfolio Management Corporation",
    note: "Chair 2012–2014 and 2017–present",
  },
  { name: "Dan Lavric", role: "Portfolio Manager, Core Fixed Income", org: "Addenda Capital" },
  { name: "Daniel Cheng", role: "Chief Financial Officer", org: "Clairvest Group Inc." },
  {
    name: "David Lee",
    role: "Senior Principal",
    org: "Investment Management Corporation of Ontario",
  },
  { name: "Ian Gutwinski", role: "Former Principal", org: "Onex Corporation" },
  { name: "Jeffrey Stacey", role: "Founding Partner", org: "Stacey Muirhead Capital Management" },
  {
    name: "Michael Williams",
    role: "Portfolio Manager",
    org: "Independent Accountants' Investment Counsel Inc.",
  },
  { name: "Blake Phillips", role: "Director", org: "School of Accounting and Finance, University of Waterloo" },
  { name: "Ranjini Jha", role: "Professor", org: "School of Accounting and Finance, University of Waterloo" },
];

export const pastChairs: Person[] = [
  {
    name: "John Gort",
    role: "Past Chair, 2014–2017",
    org: "InstarAGF Asset Management Inc.",
    note: "Senior Vice-President and Chief Financial Officer",
  },
];

export const industryMentors: Person[] = [
  { name: "Derek Au", role: "Associate Portfolio Manager, Asian Equities", org: "RBC Global Asset Management" },
  { name: "Wendy Cai", role: "Associate, Active Fundamental Equities", org: "CPPIB" },
  { name: "Arthur Chan", role: "Investment Banking Associate", org: "CIBC Capital Markets" },
  { name: "Roy Chau", role: "Investment Banking Analyst", org: "Barclays" },
  { name: "Hamza Yasin Chaudhry", role: "Investment Analyst", org: "DIF Capital Partners" },
  { name: "Sophia Chen", role: "Private Equity Associate", org: "Brookfield Asset Management" },
  { name: "Nick Gill", role: "Senior Portfolio Manager, Investment Analytics Insights", org: "CPP Investments" },
  { name: "John Eli Guttmann", role: "Analyst, Investment Banking, M&A", org: "BMO Capital Markets" },
  { name: "Aly Hadibhai", role: "Managing Director", org: "ONCAP Managing Partners" },
  { name: "Evelyn Huang", role: "Associate", org: "Blackstone" },
  { name: "Kevin Huynh", role: "Vice President, Investments", org: "Oxford Properties Group" },
  { name: "Bojan Joncevski", role: "Associate, Investment Banking", org: "BMO Capital Markets" },
  { name: "Jason Kuo", role: "Senior Portfolio Manager", org: "CPPIB" },
  { name: "Simon Kwan", role: "Partner", org: "Glen Union Partners" },
  { name: "Howard Leung", role: "Investment Analyst", org: "Veritas Investment Research" },
  { name: "Chi Liu", role: "Vice President, Investment Banking", org: "Bloom Burton" },
  { name: "David Middleton", role: "Principal", org: "Middleton Family Office" },
  { name: "Krishna Murali", role: "Senior Director, DTC Strategy", org: "Discovery" },
  { name: "Raj Patel", role: "Private Equity Associate", org: "Imperial Capital Ltd." },
  { name: "Nitish Sharma", role: "Associate Vice President", org: "InstarAGF Asset Management Inc." },
  { name: "Milenko Sijklovan", role: "Vice President, Investment Banking", org: "Goldman Sachs, Chicago" },
  { name: "Alex Vegh", role: "Associate, Investment Banking", org: "TD Securities" },
  { name: "Anqi Wang", role: "Director, Finance", org: "Wrapbook" },
  { name: "Helena Wang", role: "Principal, Americas Leveraged Finance", org: "CPPIB" },
  { name: "Michael Wang", role: "Principal, High Conviction Equities", org: "Ontario Teachers' Pension Plan" },
  { name: "Michael Weng", role: "Senior Associate", org: "CPPIB" },
  { name: "Xinxin Zhang", role: "Tech M&A and Corporate Development", org: "Constellation Software Inc." },
  { name: "Brendan Mick", role: "Financial Analyst", org: "Capital One" },
  { name: "Mitchell Ho", role: "Private Equity Analyst", org: "Brookfield Asset Management" },
];
