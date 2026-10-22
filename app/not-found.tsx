import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center bg-navy px-6 text-center">
      <p className="text-xs uppercase tracking-[0.28em] text-gold">404</p>
      <h1 className="mt-4 font-serif text-5xl text-cream">This page is not in the book.</h1>
      <Link
        href="/"
        className="mt-8 border border-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-gold"
      >
        Back to the Fund
      </Link>
    </section>
  );
}
