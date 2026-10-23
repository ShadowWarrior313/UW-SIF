"use client";

import { useLayoutEffect, useRef } from "react";
import FirmLogo from "@/components/FirmLogo";
import { logoSize, type Firm } from "@/data/alumni";

/** Extra scale on this page only; the homepage marquee keeps the sizes.json size */
const gridScale: Record<string, number> = {
  "blackstone.png": 1.2,
};

/** WBR-style placements grid: logos fade up in a short stagger as they scroll in. */
export default function AlumniGrid({ firms }: { firms: Firm[] }) {
  const grid = useRef<HTMLDivElement>(null);

  // Logos render visible; hiding them for the reveal only starts once this runs
  useLayoutEffect(() => {
    const el = grid.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const cells = Array.from(el.children) as HTMLElement[];
    const show = (cell: Element) => cell.classList.add("is-visible");
    el.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    cells.forEach((cell, index) => {
      cell.style.transitionDelay = `${Math.min(index * 35, 280)}ms`;
      observer.observe(cell);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={grid}
      className="grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-5 sm:grid-cols-3 sm:gap-x-[72px] sm:gap-y-12 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-12"
    >
      {firms.map((firm) => {
        const size = logoSize(firm);
        const scale = gridScale[firm.logo] ?? 1;
        return (
          <div key={firm.name} className="reveal flex min-h-[100px] w-full items-center justify-center">
            <FirmLogo
              firm={firm}
              className="max-w-full"
              style={{ width: size.w * scale, height: size.h * scale }}
            />
          </div>
        );
      })}
    </div>
  );
}
