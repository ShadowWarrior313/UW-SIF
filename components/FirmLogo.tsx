"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Firm } from "@/data/alumni";

/**
 * Shows /public/logos/<firm.logo> at full colour, scaled to fit the slot.
 * Until that file exists, the firm name is set in its place.
 */
export default function FirmLogo({
  firm,
  className = "h-20 w-48",
  style,
}: {
  firm: Firm;
  className?: string;
  style?: CSSProperties;
}) {
  const [status, setStatus] = useState<"loading" | "ok" | "missing">("loading");
  const img = useRef<HTMLImageElement>(null);

  // A cached image can finish before hydration attaches onLoad/onError
  useEffect(() => {
    const el = img.current;
    if (el?.complete) setStatus(el.naturalWidth > 0 ? "ok" : "missing");
  }, []);

  return (
    <span className={`relative flex items-center justify-center ${className}`} style={style}>
      {status !== "missing" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={img}
          src={`/logos/${firm.logo}`}
          alt={firm.name}
          className={`max-h-full max-w-full object-contain ${
            status === "ok" ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setStatus("ok")}
          onError={() => setStatus("missing")}
        />
      ) : (
        <span className="text-center font-display text-xl leading-tight font-medium text-navy">
          {firm.name}
        </span>
      )}
    </span>
  );
}
