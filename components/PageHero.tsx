import { type } from "@/components/type";

export default function PageHero({
  title,
  lede,
  image,
}: {
  title: string;
  lede?: string;
  /** Optional banner photo under /public; navy shows until it exists */
  image?: string;
}) {
  if (image) {
    return (
      <section
        className="photo relative bg-navy"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <h1 className={`max-w-3xl ${type.h1} text-white`}>
            {title}
          </h1>
          {lede ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{lede}</p>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <h1 className={`max-w-3xl ${type.h1}`}>
          {title}
        </h1>
        {lede ? (
          <p className={`mt-5 max-w-2xl ${type.lede}`}>{lede}</p>
        ) : null}
      </div>
    </section>
  );
}
