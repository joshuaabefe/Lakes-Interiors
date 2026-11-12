import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import Img from "@/components/Img";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore interior design, finishing, furnishing and styling services from Lakes Interiors in Maryland, Lagos.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="projects-intro">
        <div className="wrap projects-intro-inner">
          <div className="max-w-2xl">
            <p className="eyebrow">Lakes Interiors · Maryland, Lagos</p>
            <h1 className="mt-5 font-serif text-6xl leading-[.98] tracking-[-.045em] sm:text-8xl">Rooms shaped<br /><em className="font-normal text-[#8b8067]">around you.</em></h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-charcoal/70 sm:text-lg">From an initial design direction to the finishing details, explore the ways we can help shape your space.</p>
            <Link href="#our-services" className="mt-9 inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-charcoal/70"><span className="scroll-mark"><ArrowDown size={13} aria-hidden /></span>Explore our services</Link>
          </div>
          <div className="projects-intro-image"><Img src={services[0].gallery[0].src} alt={services[0].gallery[0].alt} ratio="4/3" priority sizes="(min-width:1024px) 48vw, 100vw" /><span className="projects-image-label">Design · Finishing · Furnishing</span></div>
        </div>
      </section>

      <section id="our-services" className="section scroll-mt-20">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-5 border-b border-charcoal/15 pb-6">
            <SectionHeading eyebrow="How we can help" title="Services for living and working." />
            <p className="max-w-sm text-sm leading-6 text-charcoal/70">Choose a service to learn more about its approach, gallery and enquiry options.</p>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {services.map((service, index) => <Link key={service.slug} href={`/services/${service.slug}`} className="group block">
              <div className="service-index-card relative overflow-hidden bg-[#d8d0c0]">
                <Img src={service.gallery[0].src} alt={service.gallery[0].alt} ratio={index % 3 === 0 ? "4/3" : "5/4"} sizes="(min-width:768px) 45vw, 100vw" />
                <span className="service-index-number">0{index + 1}</span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-5 border-b border-charcoal/15 pb-5">
                <div><h2 className="font-serif text-3xl">{service.title}</h2><p className="mt-2 max-w-lg text-sm leading-6 text-charcoal/70">{service.text}</p></div>
                <span className="mt-1 inline-flex flex-none items-center gap-2 text-sm">Explore <ArrowRight size={15} aria-hidden /></span>
              </div>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="closing-section"><div className="wrap closing-inner"><p className="eyebrow text-ivory/65">Have a space in mind?</p><h2 className="mt-6 max-w-3xl text-5xl sm:text-7xl">Let&apos;s talk about what you need.</h2><p className="mt-5 max-w-xl leading-7 text-ivory/70">Tell us what you are planning and we&apos;ll help you find the right place to begin.</p><div className="mt-9"><Link href="/contact" className="inline-flex items-center gap-3 bg-ivory px-6 py-4 text-sm text-charcoal transition-colors hover:bg-[#e6dcc5]">Discuss your space <ArrowRight size={15} aria-hidden /></Link></div></div></section>
    </>
  );
}
