import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const variants = {
  /** Navy on the page background */
  primary: "bg-navy text-white hover:bg-navy-2",
  /** Pale fill for use over photos */
  light: "bg-[#dce8f4] text-navy hover:bg-white",
  /** Outline for use over photos */
  ghost: "border border-white/60 text-white hover:bg-white/10",
};

/** The one call-to-action style used across the site */
export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-[3px] px-5 py-3.5 text-[0.95rem] font-medium transition ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowUpRight size={17} />
    </Link>
  );
}
