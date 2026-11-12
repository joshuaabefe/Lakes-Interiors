"use client";
import Link from "next/link";
import { RefObject, useEffect, useRef } from "react";
import { nav } from "@/data/site";
export default function MobileNavigation({ open, onClose, buttonRef }: { open: boolean; onClose: () => void; buttonRef: RefObject<HTMLButtonElement> }) {
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const links = Array.from(panel.current?.querySelectorAll<HTMLElement>("a") ?? []);
    links[0]?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); buttonRef.current?.focus(); return; }
      if (e.key !== "Tab" || !links.length || !buttonRef.current) return;
      const f = [buttonRef.current, ...links], i = f.indexOf(document.activeElement as HTMLElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [open, onClose, buttonRef]);
  if (!open) return null;
  return (
    <div id="mobile-nav" ref={panel} className="border-t border-charcoal/15 bg-ivory md:hidden">
      <nav aria-label="Mobile" className="wrap flex flex-col py-4">
        {nav.map(n => <Link key={n.href} href={n.href} onClick={onClose} className="border-b border-charcoal/10 py-3 font-serif text-2xl">{n.label}</Link>)}
        <Link href="/contact" onClick={onClose} className="mt-4 bg-charcoal px-5 py-3 text-center text-sm text-ivory">Let&apos;s talk</Link>
      </nav>
    </div>
  );
}
