import type { Metadata } from "next";
import AlumniGrid from "@/components/AlumniGrid";
import PageHero from "@/components/PageHero";
import { alumniFirms } from "@/data/alumni";

export const metadata: Metadata = {
  title: "Alumni",
};

export default function AlumniPage() {
  return (
    <>
      <PageHero
        title="Alumni Placements"
        lede="SIF alumni have gone on to investment banking, asset management, pension funds, private equity, and industry."
      />

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <AlumniGrid firms={alumniFirms} />
        </div>
      </section>
    </>
  );
}
