import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import { contact, navLinks, site } from "@/data/nav";
import { sectors } from "@/data/sectors";

const fundLinks = [
  { href: "/about", label: "Who we are" },
  { href: "/portfolio", label: "The portfolio" },
  { href: "/team", label: "Current team" },
  { href: "/apply", label: "How to apply" },
];

const networkLinks = [
  { href: "/alumni", label: "Alumni placements" },
  { href: "/partners", label: "Advisory board" },
  { href: "/partners#mentors", label: "Industry mentors" },
  { href: "/apply", label: "Recruiting" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <BrandMark className="h-10" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/65">
            {site.university} {site.school}. A student-run mandate managing real
            capital in Canadian and U.S. equities.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-gold">
            {contact.school}
          </p>
          <p className="mt-2 text-sm text-cream/60">
            {contact.building}
            <br />
            {contact.address}
            <br />
            {contact.city}
          </p>
        </div>

        <FooterCol title="The Fund" links={fundLinks} />
        <FooterCol title="Explore" links={[...navLinks]} />
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Coverage
          </h3>
          <ul className="mt-4 space-y-2.5">
            {sectors.map((sector) => (
              <li key={sector.id}>
                <Link
                  href={`/portfolio#${sector.id}`}
                  className="text-sm text-cream/70 transition hover:text-gold"
                >
                  {sector.short}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Network
          </h3>
          <ul className="mt-4 space-y-2.5">
            {networkLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/70 transition hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="gold-rule" />
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.university} {site.name}. All rights
          reserved.
        </p>
        <p>{contact.phone}</p>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-cream/70 transition hover:text-gold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
