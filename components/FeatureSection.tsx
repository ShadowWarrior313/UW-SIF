import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import { type } from "@/components/type";

export type Feature = { title: string; description: string; href?: string };

/**
 * Standard section: label over a hairline, two-tone headline, body + CTA,
 * then either a grid of hairline-topped items or custom children.
 */
export default function FeatureSection({
  id,
  label,
  title,
  subtitle,
  body,
  cta,
  items,
  columns = 3,
  children,
  first = false,
}: {
  id?: string;
  label: string;
  title: string;
  subtitle?: string;
  body?: React.ReactNode;
  cta?: { href: string; label: string };
  items?: Feature[];
  columns?: 2 | 3;
  children?: React.ReactNode;
  /** Extra top space when directly under a hero */
  first?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`pb-20 md:pb-24 ${first ? "pt-20" : "pt-12"}`}>
          <p className={type.eyebrow}>{label}</p>

          <h2 className={`mt-10 ${type.h2}`}>
            <span className="block">{title}</span>
            {subtitle ? <span className="block text-ink/40">{subtitle}</span> : null}
          </h2>

          {body || cta ? (
            <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              {body ? <div className={`max-w-xl ${type.body}`}>{body}</div> : <span />}
              {cta ? <Button href={cta.href} className="self-start md:self-auto">{cta.label}</Button> : null}
            </div>
          ) : null}

          {items ? (
            <ul className={`mt-14 grid gap-x-10 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}>
              {items.map((item) => {
                const inner = (
                  <>
                    <span className="flex items-start justify-between gap-4">
                      <span className={type.h3}>{item.title}</span>
                      {item.href ? (
                        <ArrowRight
                          size={20}
                          strokeWidth={1.5}
                          className="mt-1.5 shrink-0 text-ink/50 transition group-hover:translate-x-1 group-hover:text-navy"
                        />
                      ) : null}
                    </span>
                    <span className="mt-2 block text-ink/55">{item.description}</span>
                  </>
                );
                return (
                  <li key={item.title} className="border-t border-line">
                    {item.href ? (
                      <Link href={item.href} className="group block py-7">
                        {inner}
                      </Link>
                    ) : (
                      <div className="py-7">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : null}

          {children ? <div className="mt-14">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
