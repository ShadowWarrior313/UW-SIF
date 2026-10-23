import { type } from "@/components/type";

/** Editorial row: hairline on top, heading in the left column, content on the right. */
export default function Row({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16 md:py-24">
        <h2 className={type.h2}>{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
