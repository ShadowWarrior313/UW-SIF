import Button from "@/components/Button";
import { type } from "@/components/type";

export default function NotFound() {
  return (
    <section className="flex min-h-[60svh] flex-col items-center justify-center px-6 text-center">
      <h1 className={type.h1}>Page not found</h1>
      <p className={`mt-4 ${type.lede}`}>The page you were looking for doesn&apos;t exist.</p>
      <Button href="/" className="mt-8">
        Back to Home
      </Button>
    </section>
  );
}
