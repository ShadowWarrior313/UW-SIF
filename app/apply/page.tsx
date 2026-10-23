import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import Row from "@/components/Row";
import { type } from "@/components/type";
import { applicationTerm, applyLink } from "@/data/nav";

export const metadata: Metadata = {
  title: "Apply",
};

const timeline = [
  { when: "Late October / early November", what: "Call for Spring term applications" },
  { when: "July", what: "Call for Fall and Winter term applications" },
  { when: "After first-round review", what: "Selected applicants are invited to interview" },
  { when: "Start of term", what: "Stock valuation, Bloomberg, and Capital IQ training" },
];

const requirements = [
  "Currently enrolled in or have completed Managerial Finance I (AFM 271 / AFM 273) or Corporate Finance I (AFM 272)",
  "In your 2A term or later when applications are released",
  "Enrolled in AFM, CFM, SFM, Mathematics/CPA, or Biotechnology/CPA",
];

const materials = [
  { title: "Resume", body: "Your current resume, including co-op and any investing or research experience." },
  { title: "Unofficial transcript", body: "Grades to date, including AFM 121, 204, 205, 272, 273, 274 and later finance courses." },
  { title: "Statement", body: "Up to 200 words on why you want to join, naming two industry sectors you would like to follow." },
];

export default function ApplyPage() {
  return (
    <>
      <PageHero
        title="Apply to the Fund"
        lede="Students are selected through an application and interview process based on academic performance, work experience, aptitude, and demonstrated interest in finance."
      />

      <Row title={applicationTerm}>
        <p className={`max-w-2xl ${type.body}`}>
          Applications for the {applicationTerm} term are open on the School of
          Accounting and Finance site.
        </p>
        <Button href={applyLink.external} className="mt-8">
          Open the Application
        </Button>
      </Row>

      <Row title="Requirements">
        <ul>
          {requirements.map((item) => (
            <li key={item} className="border-t border-line py-4 text-lg text-ink/85 last:border-b">
              {item}
            </li>
          ))}
        </ul>
      </Row>

      <Row title="What to submit">
        <dl>
          {materials.map((item) => (
            <div
              key={item.title}
              className="grid gap-2 border-t border-line py-5 last:border-b sm:grid-cols-[12rem_1fr] sm:gap-8"
            >
              <dt className={type.h3}>{item.title}</dt>
              <dd className="text-lg leading-relaxed text-ink/80">{item.body}</dd>
            </div>
          ))}
        </dl>
      </Row>

      <Row title="Timeline">
        <dl>
          {timeline.map((step) => (
            <div
              key={step.when}
              className="grid gap-1 border-t border-line py-5 last:border-b sm:grid-cols-[16rem_1fr] sm:gap-8"
            >
              <dt className="font-semibold text-navy">{step.when}</dt>
              <dd className="text-lg text-ink/80">{step.what}</dd>
            </div>
          ))}
        </dl>
      </Row>
    </>
  );
}
