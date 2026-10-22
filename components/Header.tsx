"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import BrandMark from "@/components/BrandMark";
import { applyLink, navLinks } from "@/data/nav";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-t-2 border-gold transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-navy/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6">
        <Link href="/" aria-label="Student Investment Fund home" className="h-9">
          <BrandMark className="h-9" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-colors ${
                  active ? "text-gold" : "text-cream/80 hover:text-cream"
                }`}
              >
                {link.label}
                {active ? (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-gold" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={applyLink.href}
            className="border border-gold px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold transition hover:bg-gold hover:text-navy"
          >
            {applyLink.label}
          </Link>
        </div>

        <button
          type="button"
          className="text-cream lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-navy px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.18em] text-cream/80"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={applyLink.href}
              className="mt-2 border border-gold px-4 py-3 text-center text-sm uppercase tracking-[0.18em] text-gold"
            >
              {applyLink.label}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
