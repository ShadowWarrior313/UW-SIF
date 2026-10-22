import type { Metadata } from "next";
import FirmLogo from "@/components/FirmLogo";
import PageHero from "@/components/PageHero";
import { alumniFirms } from "@/data/alumni";

export const metadata: Metadata = {
  title: "Alumni",
};

export default function AlumniPage() {
  return (
    <>
      <PageHero
        kicker="Alumni placements"
        title="Where the desk sends people next."
        lede="Initial full-time seats after SIF span bulge-bracket banking, elite boutiques, Canadian pensions, asset management, consulting, and industry."
      />

      <section className="bg-paper text-navy">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-2 border-l border-t border-navy/10 sm:grid-cols-3 lg:grid-cols-4">
            {alumniFirms.map((firm) => (
              <div
                key={firm.name}
                className="flex h-32 items-center justify-center border-r border-b border-navy/10 px-5"
              >
                <FirmLogo firm={firm} variant="light" />
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-navy/50">
            A selection of initial full-time placements. Not exhaustive.
          </p>
        </div>
      </section>
    </>
  );
}
