import FirmLogo from "@/components/FirmLogo";
import { featuredFirms, logoSize } from "@/data/alumni";

export default function LogoMarquee() {
  const row = [...featuredFirms, ...featuredFirms];

  return (
    <div className="marquee-wrap overflow-hidden py-6 md:py-10" aria-label="Firms where SIF alumni work">
      <div className="marquee-track flex items-center gap-14 pr-14 md:gap-24 md:pr-24">
        {row.map((firm, index) => (
          <FirmLogo
            key={`${firm.name}-${index}`}
            firm={firm}
            className="shrink-0"
            style={{ width: logoSize(firm).w * 1.1, height: logoSize(firm).h * 1.1 }}
          />
        ))}
      </div>
    </div>
  );
}
