import type { Metadata } from "next";
import FeatureSection from "@/components/FeatureSection";
import { fundFacts } from "@/data/metrics";
import { teamPhoto } from "@/data/team";

export const metadata: Metadata = {
  title: "Who We Are",
};

const pillars = [
  { title: "Invest", description: "Long-term growth through a diversified book", href: "/portfolio" },
  { title: "Learn", description: "Valuation and portfolio management, hands-on", href: "#how-it-works" },
  { title: "Connect", description: "Faculty, an advisory board, and industry mentors", href: "/partners" },
];

const roles = [
  { title: "Manage real money", description: "A portfolio of Canadian and U.S. equities" },
  { title: "Take a seat", description: "Analyst, Portfolio Manager, CEO, or CIO" },
  { title: "Work as a team", description: "Small peer teams guided by finance professors" },
  { title: "Learn from mentors", description: "A professional from the financial services industry" },
  { title: "Research and pitch", description: "Monitor holdings, select equities, write reports" },
  { title: "Defend and report", description: "Present to faculty and industry, report performance" },
];

const programs = [
  { title: "Accounting and Financial Management", description: "AFM" },
  { title: "Sustainability and Financial Management", description: "SFM" },
  { title: "Computing and Financial Management", description: "CFM" },
  { title: "Mathematics / CPA", description: "Math/CPA" },
  { title: "Biotechnology / CPA", description: "Biotech/CPA" },
  { title: "Master of Accounting", description: "MAcc" },
].map((program) => ({ ...program, href: "/apply" }));

const courses = [
  { title: "AFM 328", description: "Investment Management: Junior Analyst" },
  { title: "AFM 329", description: "Investment Management: Senior Analyst" },
  { title: "AFM 428", description: "Investment Management: Junior Portfolio Manager" },
  { title: "AFM 429", description: "Investment Management: Senior Portfolio Manager" },
];

export default function AboutPage() {
  return (
    <>
      <section
        className="photo relative flex min-h-[min(100svh,960px)] items-center bg-navy bg-[center_35%]"
        style={{ backgroundImage: `url(${teamPhoto.src})` }}
      >
        <h1 className="sr-only">Who We Are</h1>
        <div className="absolute inset-0 bg-black/55" />
        <p className="relative mx-auto max-w-5xl px-6 pt-20 text-center font-display text-2xl leading-snug text-white sm:text-3xl md:text-[2.75rem] md:leading-[1.25]">
          Founded in {fundFacts.founded}, SIF is the University of Waterloo&apos;s
          student-run investment fund. Students manage <em>real capital</em> in
          Canadian and U.S. equities, turning valuation theory into research,
          pitches, and portfolio decisions <em>defended</em> in front of faculty
          and industry.
        </p>
      </section>

      <div>
        <FeatureSection
          first
          label="Our History"
          title={`Founded in ${fundFacts.founded}.`}
          subtitle="Built on a single gift."
          body={
            <>
              <p>
                The seed investment of {fundFacts.seed} was provided by an anonymous
                external donor in five installments, with the first{" "}
                {fundFacts.firstInstallment} available for investing in the{" "}
                {fundFacts.firstTerm} term.
              </p>
              <p className="mt-4">
                The mandate has not changed since: long-term growth of the
                Fund&apos;s assets through mid-to-large cap Canadian and U.S.
                equities.
              </p>
            </>
          }
          cta={{ href: "/team", label: "Meet the Team" }}
          items={pillars}
        />

        <FeatureSection
          id="how-it-works"
          label="How It Works"
          title="Real capital."
          subtitle="Real accountability."
          body={
            <p>
              Members are appointed for a single term and commit at least five
              hours a week, plus weekly ninety-minute sessions and time for
              presentations and reports.
            </p>
          }
          cta={{ href: "/portfolio", label: "View the Portfolio" }}
          items={roles}
        />

        <FeatureSection
          label="Who Can Apply"
          title="Open to SAF students."
          subtitle="From 2A onward."
          body={
            <p>
              Applicants must have completed or be enrolled in Managerial Finance I
              (AFM 271 / 273) or Corporate Finance I (AFM 272) when applications
              are released.
            </p>
          }
          cta={{ href: "/apply", label: "Apply to SIF" }}
          items={programs}
        />

        <FeatureSection
          id="courses"
          label="Courses"
          title="Earn credit."
          subtitle="Four project courses."
          body={
            <p>
              Selected students enrol in a 0.25-credit project course with a
              numerical grade, by instructor authorization, and may take all four
              during their degree.
            </p>
          }
          items={courses}
          columns={2}
        />
      </div>
    </>
  );
}
