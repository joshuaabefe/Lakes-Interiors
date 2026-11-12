import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Img from "@/components/Img";
import SectionHeading from "@/components/SectionHeading";
import ServiceGallery from "@/components/ServiceGallery";
import { services } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find(item => item.slug === params.slug);
  return service ? {
    title: service.title,
    description: `${service.title} by Lakes Interiors in Maryland, Lagos.`,
  } : {};
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(item => item.slug === params.slug);
  if (!service) notFound();

  return (
    <article>
      <section className="wrap service-detail-hero">
        <Link href="/services" className="service-back-link"><ArrowLeft size={14} aria-hidden /> All services</Link>
        <div className="service-detail-intro">
          <div className="service-detail-copy">
            <p className="eyebrow">Residential &amp; Commercial Interiors</p>
            <h1 className="mt-5 text-5xl sm:text-6xl">{service.title}<span className="service-title-dot">.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-charcoal/75">{service.detail}</p>
            <div className="mt-8"><Button href={`/contact?service=${encodeURIComponent(service.title)}`}>Enquire about this service <ArrowRight size={15} aria-hidden /></Button></div>
          </div>
          <div className="service-detail-image"><Img src={service.gallery[0].src} alt={service.gallery[0].alt} ratio="4/3" priority sizes="(min-width:1024px) 52vw, 100vw" /></div>
        </div>
      </section>

      <section className="service-detail-gallery-section">
        <div className="wrap">
          <div className="service-gallery-heading"><SectionHeading eyebrow="Spaces and materials" title="A closer look." /><p className="max-w-sm leading-7 text-charcoal/70">Explore rooms, finishes and details related to {service.title.toLowerCase()}.</p></div>
          <ServiceGallery images={service.gallery.slice(1)} />
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="wrap flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end"><div><p className="eyebrow !text-ivory/65">Have a space in mind?</p><h2 className="mt-4 max-w-2xl text-4xl sm:text-5xl">Let&apos;s talk about {service.title.toLowerCase()}.</h2></div><Button href={`/contact?service=${encodeURIComponent(service.title)}`} variant="light">Start an enquiry <ArrowRight size={15} aria-hidden /></Button></div>
      </section>
    </article>
  );
}
