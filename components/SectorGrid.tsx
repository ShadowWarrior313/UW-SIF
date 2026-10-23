import Link from "next/link";
import { sectors } from "@/data/sectors";

/** QUIC-style tiles: four across the top, the rest centred underneath; two per row on phones. */
export default function SectorGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {sectors.map((sector) => (
        <Link
          key={sector.id}
          href={`/portfolio#${sector.id}`}
          className="group relative aspect-square w-[calc(50%-0.375rem)] overflow-hidden bg-navy sm:aspect-[4/3] sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
        >
          {/* Photo sits partly transparent over the navy so the tiles keep their blue cast */}
          <div
            className="photo absolute inset-0 opacity-55 transition duration-500 group-hover:scale-105 group-hover:opacity-70"
            style={{ backgroundImage: `url(${sector.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/10" />
          <h3 className="absolute bottom-3 left-3 right-3 text-base leading-snug font-bold text-white sm:bottom-5 sm:left-5 sm:right-5 sm:text-xl">
            {sector.name}
          </h3>
        </Link>
      ))}
    </div>
  );
}
