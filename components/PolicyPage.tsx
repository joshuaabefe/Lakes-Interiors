import type { ReactNode } from "react";

export default function PolicyPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="policy-page">
      <div className="wrap">
        <header className="policy-header">
          <p className="eyebrow">Lakes Interiors · Website information</p>
          <h1 className="mt-4 text-5xl sm:text-6xl">{title}</h1>
          <p className="mt-5 text-sm text-charcoal/70">Last updated 10 November 2026</p>
        </header>
        <article className="policy-content">{children}</article>
      </div>
    </div>
  );
}
