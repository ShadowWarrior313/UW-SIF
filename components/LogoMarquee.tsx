import FirmLogo from "@/components/FirmLogo";
import { featuredFirms } from "@/data/alumni";

export default function LogoMarquee() {
  const row = [...featuredFirms, ...featuredFirms];

  return (
    <section className="bg-navy-2 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          Recruiting success
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-center font-serif text-3xl text-cream md:text-4xl">
          Members start careers at the institutions that define the industry.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-cream/65">
          SIF alumni have joined Goldman Sachs, Evercore, Moelis, J.P. Morgan,
          CPP Investments, Ontario Teachers&apos;, and leading banks, funds, and
          advisory firms across North America.
        </p>
      </div>

      <div className="marquee-wrap fade-x mt-10 overflow-hidden">
        <div className="marquee-track flex items-center gap-12 px-6">
          {row.map((firm, index) => (
            <div
              key={`${firm.name}-${index}`}
              className="flex h-20 min-w-[11rem] items-center justify-center"
            >
              <FirmLogo firm={firm} variant="dark" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
