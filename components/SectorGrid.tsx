import Link from "next/link";
import { sectors } from "@/data/sectors";

export default function SectorGrid() {
  return (
    <section className="bg-paper px-6 py-20 text-navy">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Coverage
            </p>
            <h2 className="mt-3 font-serif text-4xl">Sector teams</h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-navy/65">
            Analysts cover the book by sector — researching names, defending
            recommendations, and reporting performance to faculty and industry.
            Holdings below are placeholders until the live portfolio is loaded.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, index) => (
            <Link
              key={sector.id}
              href={`/portfolio#${sector.id}`}
              className={`group relative min-h-[220px] overflow-hidden ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sector.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/55 transition group-hover:bg-navy/40" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-gold">
                  {sector.weight} of book
                </p>
                <h3 className="mt-2 font-serif text-2xl text-cream">
                  {sector.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
