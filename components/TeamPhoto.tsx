import { type } from "@/components/type";

/** Group photo with its caption under the team hero; hidden on phones, where faces get too small to see */
export default function TeamPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="mx-auto hidden max-w-7xl px-6 pt-12 sm:block md:pt-16">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full" />
      <figcaption className={`mt-3 ${type.small}`}>{alt}</figcaption>
    </figure>
  );
}
