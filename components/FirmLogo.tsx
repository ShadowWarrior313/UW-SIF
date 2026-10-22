"use client";

import { useState } from "react";
import type { Firm } from "@/data/alumni";

export default function FirmLogo({
  firm,
  variant = "light",
}: {
  firm: Firm;
  variant?: "light" | "dark";
}) {
  const [ok, setOk] = useState(false);
  const onDark = variant === "dark";

  return (
    <span className="relative flex h-12 w-[11.5rem] items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/logos/${firm.logo}`}
        alt={ok ? firm.name : ""}
        className={`max-h-10 max-w-[10.5rem] object-contain ${
          ok ? "block" : "hidden"
        } ${onDark ? "brightness-0 invert" : "opacity-90 grayscale transition hover:opacity-100 hover:grayscale-0"}`}
        onLoad={() => setOk(true)}
        onError={(event) => {
          event.currentTarget.removeAttribute("src");
        }}
      />
      {!ok ? (
        <span
          className={`px-1 text-center font-serif text-[0.95rem] leading-none tracking-tight whitespace-nowrap ${
            onDark ? "text-cream/90" : "text-navy/80"
          }`}
        >
          {firm.name}
        </span>
      ) : null}
    </span>
  );
}
