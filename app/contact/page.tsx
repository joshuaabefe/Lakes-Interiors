import type { Metadata } from "next";
import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { services, site, waLink } from "@/data/site";
import EnquiryForm from "./EnquiryForm";
export const metadata: Metadata = { title: "Contact", description: "Contact Lakes Interiors about an interior design, finishing, or furnishing project in Lagos." };
export default function Contact({ searchParams }: { searchParams?: { service?: string } }) {
  const wa = waLink();
  const selectedService = services.find(s => s.title === searchParams?.service)?.title;
  const row = "inline-flex items-center gap-3 hover:text-[#806832]";
  return (
    <div className="wrap section grid gap-14 lg:grid-cols-12 contact-page">
      <div className="lg:col-span-5">
        <SectionHeading as="h1" eyebrow="Start a conversation" title="Tell us about your space." />
        <p className="mt-5 max-w-sm leading-7 text-charcoal/70">Contact us about interior design, finishing, or furnishing for your space in Maryland, Lagos.</p>
        <ul className="mt-8 space-y-3 text-sm">
          <li className="inline-flex items-center gap-3"><MapPin size={16} aria-hidden />{site.location}</li>
          {site.email && <li><a className={row} href={`mailto:${site.email}`}><Mail size={16} aria-hidden />{site.email}</a></li>}
          {site.phone && <li><a className={row} href={`tel:${site.phone.replace(/\s/g, "")}`}><Phone size={16} aria-hidden />{site.phone}</a></li>}
          {wa && <li><a className={row} href={wa} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} aria-hidden />Chat on WhatsApp</a></li>}
          <li><a className={row} href={site.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={16} aria-hidden />@lakesinteriors</a></li>
        </ul>
        <div className="contact-map-card mt-10 border-t border-charcoal/15 pt-7">
          <p className="eyebrow">Find the studio</p>
          <h2 className="mt-3 font-serif text-2xl">Maryland, Lagos</h2>
          <a className="contact-map mt-5 flex min-h-48 items-end justify-between p-5" href="https://www.google.com/maps/search/?api=1&query=Maryland%2C%20Lagos%2C%20Nigeria" target="_blank" rel="noopener noreferrer" aria-label="Open approximate area Maryland, Lagos in Google Maps">
            <span className="inline-flex items-center gap-2 bg-ivory px-4 py-3 text-sm font-medium text-charcoal"><MapPin size={16} aria-hidden />Open map</span>
            <ArrowUpRight size={18} aria-hidden className="text-charcoal" />
          </a>
          <p className="mt-3 max-w-sm text-xs leading-5 text-charcoal/70">Approximate area only, not a verified studio address. Get in touch to confirm a meeting location.</p>
        </div>
      </div>
      <div id="project-enquiry" className="contact-cta-shell scroll-mt-8 lg:col-span-7"><p className="eyebrow !text-ivory/65">Project enquiries</p><h2 className="mt-4 max-w-lg text-4xl">Let&apos;s start with a conversation.</h2><p className="contact-cta-description mt-5 max-w-md leading-7">{selectedService ? `Tell us a little about your ${selectedService.toLowerCase()} project.` : "Share a few details about your space and what you have in mind."}</p><EnquiryForm selectedService={selectedService} /></div>
    </div>
  );
}
