import { type } from "@/components/type";

export default function SectionHeading({
  title,
  lede,
  center = false,
}: {
  title: string;
  lede?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className={type.h2}>{title}</h2>
      {lede ? <p className={`mt-4 ${type.lede}`}>{lede}</p> : null}
    </div>
  );
}
