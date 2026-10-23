import { team } from "@/data/team";

/**
 * Fund metrics shown on the homepage.
 * Swap these placeholders when official figures are ready.
 */
export const metrics = [
  {
    id: "members",
    value: team.length,
    display: String(team.length),
    label: "Members",
    hint: "Current roster, from data/team.ts",
  },
  {
    id: "aum",
    value: 0.88,
    display: "$880K",
    label: "In Assets",
    hint: "Current fund size",
  },
  {
    id: "alpha",
    value: 6.4,
    display: "6.4%",
    label: "Fund Alpha Since Inception",
    hint: "Placeholder alpha vs. mandate benchmark",
  },
] as const;

export const fundFacts = {
  founded: 2012,
  seed: "$250,000",
  firstInstallment: "$50,000",
  firstTerm: "Spring 2012",
  mandate:
    "Long-term growth of the Fund’s assets through a diversified portfolio of mid-to-large capitalization Canadian and U.S. equities.",
};
