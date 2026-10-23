"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import BrandMark from "@/components/BrandMark";
import Button from "@/components/Button";
import { applyLink, navLinks } from "@/data/nav";

/** Pages whose hero photo runs under a transparent header */
const OVERLAY_PAGES = ["/", "/about"];

export default function Header() {
  const pathname = usePathname();
  // Remember which page the menu was opened on so navigating closes it
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const [scrolled, setScrolled] = useState(false);

  const overlay = OVERLAY_PAGES.includes(pathname);
  const clear = overlay && !scrolled && !open;

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  return (
    <header
      className={`top-0 z-50 transition-colors duration-300 ${
        overlay ? "fixed inset-x-0" : "sticky"
      } ${clear ? "bg-transparent" : "border-b border-line bg-paper/95 backdrop-blur"}`}
    >
      <div className="mx-auto grid h-24 max-w-7xl grid-cols-[1fr_auto] items-center px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <Link href="/" aria-label="Student Investment Fund home" className="justify-self-start">
          <BrandMark inverted={clear} className="h-8 sm:h-9" />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            const tone = clear
              ? active
                ? "text-white"
                : "text-white/85 hover:text-white"
              : active
                ? "text-navy"
                : "text-ink/70 hover:text-ink";
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-[0.95rem] font-medium transition-colors ${tone}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden justify-self-end lg:block">
          <Button href={applyLink.href} variant={clear ? "light" : "primary"}>
            Apply to SIF
          </Button>
        </div>

        <button
          type="button"
          className={`justify-self-end lg:hidden ${clear ? "text-white" : "text-navy"}`}
          onClick={() => setOpenOn(open ? null : pathname)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-line bg-paper px-6 py-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block border-b border-line py-3 text-base text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Button href={applyLink.href} className="mt-4 w-full justify-center">
            Apply to SIF
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
