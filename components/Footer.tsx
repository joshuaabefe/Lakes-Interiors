import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { site, nav, waLink } from "@/data/site";
export default function Footer() {
  const wa = waLink();
  return (
    <footer className="bg-olive text-ivory">
      <div className="wrap grid gap-10 py-16 md:grid-cols-4">
        <div><div className="flex items-center gap-3"><span className="footer-brand-mark" aria-hidden="true"><Image src="/lakes-interiors-house-mark.png" alt="" width={21} height={22} /></span><p className="font-serif text-xl">{site.name}</p></div><p className="mt-3 text-xs text-ivory/70">{site.location}</p></div>
        <nav aria-label="Footer"><ul className="space-y-2 text-sm">{nav.map(n => <li key={n.href}><Link className="hover:text-gold" href={n.href}>{n.label}</Link></li>)}<li><Link className="hover:text-gold" href="/contact">Contact</Link></li></ul></nav>
        <nav aria-label="Legal"><ul className="space-y-2 text-sm"><li><Link className="hover:text-gold" href="/privacy">Privacy policy</Link></li><li><Link className="hover:text-gold" href="/terms">Terms and conditions</Link></li></ul></nav>
        <ul className="space-y-2 text-sm">
          <li><a className="inline-flex items-center gap-2 hover:text-gold" href={site.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={16} aria-hidden="true" />Instagram</a></li>
          {site.email && <li><a className="inline-flex items-center gap-2 hover:text-gold" href={`mailto:${site.email}`} aria-label={`Mail Lakes Interiors at ${site.email}`}><Mail size={16} aria-hidden="true" />Mail</a></li>}
          {site.phone && <li><a className="hover:text-gold" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></li>}
          {wa && <li><a className="inline-flex items-center gap-2 hover:text-gold" href={wa} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} aria-hidden="true" />WhatsApp</a></li>}
        </ul>
      </div>
      <p className="border-t border-ivory/15 py-5 text-center text-xs text-ivory/60">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
