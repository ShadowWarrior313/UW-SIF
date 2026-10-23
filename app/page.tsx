import Button from "@/components/Button";
import FeatureSection from "@/components/FeatureSection";
import LogoMarquee from "@/components/LogoMarquee";
import Metrics from "@/components/Metrics";
import SectorGrid from "@/components/SectorGrid";
import { fundFacts, metrics } from "@/data/metrics";
import { applicationTerm } from "@/data/nav";
import { teamPhoto } from "@/data/team";

const aum = metrics.find((m) => m.id === "aum")!.display;

export default function HomePage() {
  return (
    <>
      {/* Full-screen hero: only the photo and its content until you scroll */}
      <section
        className="photo relative bg-navy bg-[center_35%]"
        style={{ backgroundImage: `url(${teamPhoto.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
        <div className="relative mx-auto flex h-svh min-h-[560px] max-w-7xl flex-col justify-end px-6 pb-20 lg:px-8 md:pb-28">
          <p className="text-sm text-white/75">
            University of Waterloo · School of Accounting and Finance
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[2.75rem] leading-[1.02] font-medium tracking-[-0.035em] text-white md:text-[4.25rem]">
            Student Investment Fund
          </h1>
          <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-white/80">
            Students managing real capital in Canadian and U.S. equities, with
            guidance from industry professionals and finance faculty.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/about" variant="light">
              Who We Are
            </Button>
            <Button href="/apply" variant="ghost">
              Apply to the Fund
            </Button>
          </div>
        </div>
      </section>

      <Metrics />

      <FeatureSection
        label="The Fund"
        title="An institutional setting."
        subtitle="Inside SAF."
        body={
          <p>
            Members cover sectors, defend recommendations, and report performance
            to faculty and industry professionals, earning credit through four
            Investment Management courses.
          </p>
        }
        cta={{ href: "/about", label: "How the Fund Works" }}
        items={[
          { title: aum, description: `Fund size, from a ${fundFacts.seed} seed in ${fundFacts.firstTerm}` },
          { title: "4 courses", description: "Investment Management, for credit" },
          { title: "Canada & U.S.", description: "Mid-to-large cap equities" },
        ]}
      />

      <FeatureSection
        label="Alumni"
        title="Recruiting success."
        subtitle="Where members go next."
        body={
          <p>
            Alumni have started their careers at leading banks, asset managers,
            pension plans, and advisory firms across North America, and stay
            involved helping current members break into the industry.
          </p>
        }
        cta={{ href: "/alumni", label: "Our Alumni" }}
      >
        <div className="-mx-6 lg:-mx-8">
          <LogoMarquee />
        </div>
      </FeatureSection>

      <FeatureSection
        label="Coverage"
        title="Seven sector teams."
        subtitle="One book."
        body={
          <p>
            Analysts are organised into sector teams that research, pitch, and
            monitor the names in the portfolio.
          </p>
        }
        cta={{ href: "/portfolio", label: "View the Portfolio" }}
      >
        <SectorGrid />
      </FeatureSection>

      <FeatureSection
        label="Applications"
        title={`${applicationTerm}.`}
        subtitle="Applications are open."
        body={
          <p>
            Open to AFM, CFM, SFM, Math/CPA, and Biotech/CPA students in their 2A
            term or later.
          </p>
        }
        cta={{ href: "/apply", label: "How to Apply" }}
      />
    </>
  );
}
