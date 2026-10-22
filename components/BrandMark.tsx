export default function BrandMark({
  className = "h-8 w-auto",
  light = true,
}: {
  className?: string;
  light?: boolean;
}) {
  const gold = light ? "#d4af5b" : "#b58b2e";
  const text = light ? "#f6f1e6" : "#070b14";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 42 32"
        className="h-full w-auto"
        aria-hidden="true"
        fill="none"
      >
        <rect x="0" y="20" width="7" height="12" fill={gold} />
        <rect x="11" y="13" width="7" height="19" fill={gold} />
        <rect x="22" y="6" width="7" height="26" fill={gold} />
        <rect x="33" y="0" width="7" height="32" fill={gold} />
      </svg>
      <span className="leading-none">
        <span
          className="block font-serif text-[1.55rem] tracking-tight"
          style={{ color: text }}
        >
          SIF
        </span>
        <span
          className="block text-[0.58rem] font-medium uppercase tracking-[0.28em]"
          style={{ color: gold }}
        >
          Waterloo
        </span>
      </span>
    </span>
  );
}
