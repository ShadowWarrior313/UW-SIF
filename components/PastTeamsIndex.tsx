import PastTeamPicker from "@/components/PastTeamPicker";
import { pastTeamsByYear, termSlug } from "@/data/pastTeams";

/** Passes only the term list to the client picker, not every roster */
const options = pastTeamsByYear.map(({ year, teams }) => ({
  year,
  teams: teams.map((team) => ({
    slug: termSlug(team),
    season: team.season,
    count: team.members.length,
  })),
}));

/** Year and term picker for past teams; `active` preselects the term being viewed */
export default function PastTeamsIndex({ active }: { active?: string }) {
  return <PastTeamPicker options={options} active={active} />;
}
