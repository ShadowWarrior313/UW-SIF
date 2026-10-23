/** Placeholder: the SAF Investment Fund lockup. Swap /public/images/sif-logo.png to change it. */
export default function BrandMark({
  inverted = false,
  className = "h-9",
}: {
  /** White version for use over photos */
  inverted?: boolean;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/sif-logo.png"
      alt="University of Waterloo School of Accounting and Finance Investment Fund"
      className={`w-auto transition ${inverted ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}
