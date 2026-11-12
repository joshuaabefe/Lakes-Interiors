"use client";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/data/site";
import MobileNavigation from "./MobileNavigation";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setOpen(false), []);
  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 8); s();
    window.addEventListener("scroll", s, { passive: true });
    return () => window.removeEventListener("scroll", s);
  }, []);
  return (
    <header className={`sticky top-0 z-40 border-b transition-colors duration-200 ${scrolled || open ? "border-charcoal/10 bg-ivory" : "border-transparent bg-ivory/95"}`}>
      <div className="wrap flex h-[76px] items-center justify-between">
        <Link href="/" className="brand-mark" aria-label="Lakes Interiors Design Studio home"><span className="brand-monogram" aria-hidden="true"><Image src="/lakes-interiors-house-mark.png" alt="" width={28} height={30} priority /></span><span className="brand-name">Lakes Interiors<small>Design Studio</small></span></Link>
        <nav aria-label="Main" className="hidden items-center gap-9 text-[13px] md:flex">
          {nav.map(n => <Link key={n.href} href={n.href} className="nav-link hover:text-[#806832]">{n.label}</Link>)}
          <Link href="/contact" className="header-cta">Let&apos;s talk <span aria-hidden>↗</span></Link>
        </nav>
        <button ref={btn} className="p-2 md:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>
      <MobileNavigation open={open} onClose={close} buttonRef={btn} />
    </header>
  );
}
