import type { Metadata } from "next";
import Button from "@/components/Button";
export const metadata: Metadata = { title: "Page not found" };
export default function NotFound() {
  return (
    <div className="wrap section">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 max-w-2xl text-5xl sm:text-6xl">We couldn&apos;t find that page.</h1>
      <p className="mt-5 max-w-md leading-7 text-charcoal/75">The page may have moved or the link may be incorrect. Head back home or get in touch.</p>
      <div className="mt-8 flex flex-wrap gap-4"><Button href="/">Back to home</Button><Button href="/contact" variant="outline">Contact us</Button></div>
    </div>
  );
}
