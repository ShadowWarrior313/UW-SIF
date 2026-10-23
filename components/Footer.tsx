import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import SocialIcon from "@/components/SocialIcon";
import { applicationTerm, applyLink, contact, site, socialLinks } from "@/data/nav";

const SAF_PAGE =
  "https://uwaterloo.ca/school-of-accounting-and-finance/students/student-opportunities/student-investment-fund";

type FooterLink = { href: string; label: string };

const columns: { title: string; links: FooterLink[]; note?: string }[] = [
  {
    title: "The Fund",
    links: [
      { href: "/about", label: "Who We Are" },
      { href: "/about#how-it-works", label: "How It Works" },
      { href: "/portfolio", label: "Our Portfolio" },
      { href: "/#metrics", label: "Fund Metrics" },
      { href: "/about#courses", label: "Courses" },
      { href: "/team", label: "Meet the Team" },
    ],
  },
  {
    title: "Network",
    links: [
      { href: "/alumni", label: "Alumni Placements" },
      { href: "/partners", label: "Advisory Board" },
      { href: "/partners#mentors", label: "Industry Mentors" },
      { href: "/apply", label: "Apply to SIF" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: SAF_PAGE, label: "SIF on the SAF Site" },
      { href: `mailto:${contact.email}`, label: contact.email },
      { href: "tel:+15198884567,40373", label: contact.phone },
    ],
    note: `${contact.building}, Waterloo`,
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-12 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[530fr_459fr_405fr_400fr] lg:gap-0">
          <div className="sm:col-span-2 lg:col-span-1 lg:pr-12">
            <BrandMark className="h-10" />
            <p className="mt-6 max-w-[20rem] text-[0.95rem] leading-relaxed text-ink/65">
              Students managing real capital in Canadian and U.S. equities, with
              guidance from industry professionals and finance faculty.
            </p>
            <div className="mt-8 flex items-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="text-ink transition hover:text-navy"
                >
                  <SocialIcon name={link.icon} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[0.95rem] font-semibold text-ink">{column.title}</h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.95rem] text-ink/75 transition hover:text-navy"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {column.note ? (
                  <li className="text-[0.95rem] text-ink/50">{column.note}</li>
                ) : null}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-3 text-[0.85rem] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-ink/65">
            © {new Date().getFullYear()} {site.university} {site.name}. All rights reserved.
          </p>
          <a href={SAF_PAGE} className="text-ink transition hover:text-navy">
            Official SAF Page &amp; Program Details
          </a>
        </div>

        <div className="mt-12">
          <h3 className="text-[0.95rem] font-semibold text-ink">
            Applications
          </h3>
          <p className="mt-3 max-w-6xl text-[0.85rem] leading-relaxed text-ink/65">
            Applications for the {applicationTerm} term are open to AFM, CFM, SFM,
            Mathematics/CPA, and Biotechnology/CPA students in their 2A term or later.
          </p>
          <Link
            href={applyLink.href}
            className="mt-3 inline-block text-[0.85rem] font-semibold text-ink transition hover:text-navy"
          >
            How to Apply →
          </Link>
        </div>
      </div>
    </footer>
  );
}
