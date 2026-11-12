import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, MapPin, MessageCircle } from "lucide-react";
import Img from "@/components/Img";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ServiceSection from "@/components/ServiceSection";
import ProjectCard from "@/components/ProjectCard";
import { projects, site, waLink } from "@/data/site";

const roomPhotos = [
  { src: "https://images.unsplash.com/photo-1723750290151-164cb19ebab7?auto=format&fit=crop&w=1200&q=85", alt: "Dining room with a table, chairs and indoor plants", label: "Gather" },
  { src: "https://images.unsplash.com/photo-1631650120985-20791383127e?auto=format&fit=crop&w=1000&q=85", alt: "Bedroom with white bedding and soft natural light", label: "Unwind" },
  { src: "https://images.unsplash.com/photo-1750271336580-f11df678e840?auto=format&fit=crop&w=1000&q=85", alt: "Minimal bedroom with soft lighting and neutral details", label: "Restore" },
];

export default function Home() {
  const wa = waLink();
  return (
    <>
      <section className="wrap hero-section">
        <div className="hero-copy">
          <p className="hero-kicker">Interior design in Maryland, Lagos</p>
          <h1 className="hero-title">A space to<br /><span>call your own.</span></h1>
          <p className="mt-6 max-w-md text-base leading-7 text-charcoal/70 sm:text-lg">Interior design, finishing and furnishing for homes and businesses, shaped around the way you live.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4"><Button href="/contact">Discuss your space <ArrowRight size={15} aria-hidden /></Button><Link href="#studio-services" className="px-3 py-3 text-sm hover:text-[#806832]">Explore our services</Link></div>
          <a href="#services" className="hero-scroll mt-14 inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-charcoal/70"><span className="scroll-mark"><ArrowDown size={13} aria-hidden /></span>Scroll to explore</a>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame"><Img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85" alt="Warm, modern living room with neutral furnishings" ratio="4/3" priority sizes="(min-width:1024px) 59vw, 100vw" />
            <div className="hero-image-caption"><span>Spaces made personal</span><span>Maryland · Lagos</span></div>
          </div>
          <div className="hero-stamp" aria-hidden><span>INTERIORS</span><Image src="/lakes-interiors-house-mark.png" alt="" width={36} height={38} className="hero-stamp-mark" /><span>LAGOS · NIGERIA</span></div>
        </div>
      </section>

      <div id="studio-services"><ServiceSection /></div>

      <section className="section">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4"><SectionHeading eyebrow="Selected projects" title="Recent work" /><Link href="/projects" className="border-b border-gold pb-0.5 text-sm">All projects</Link></div>
          <div className="mt-12 grid gap-8 md:grid-cols-12">
            <ProjectCard p={projects[0]} ratio="4/5" className="md:col-span-7" />
            <div className="grid gap-8 md:col-span-5 md:pt-24">{projects.slice(1, 3).map(p => <ProjectCard key={p.slug} p={p} ratio="4/3" />)}</div>
          </div>
        </div>
      </section>

      <section className="section room-gallery">
        <div className="wrap">
          <div className="gallery-heading"><SectionHeading eyebrow="The feeling of home" title="Rooms made for everyday life." /><p className="mt-5 max-w-sm leading-7 text-charcoal/70">From lively shared spaces to quiet corners made for rest, small details shape how a room feels.</p></div>
          <div className="room-gallery-grid">
            {roomPhotos.map((photo, i) => <figure className={`room-photo room-photo-${i + 1}`} key={photo.label}><Img src={photo.src} alt={photo.alt} ratio={i === 0 ? "4/3" : "4/5"} sizes="(min-width:1024px) 40vw, 100vw" /><figcaption><span>{photo.label}</span><span>0{i + 1}</span></figcaption></figure>)}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeading eyebrow="A few helpful details" title="Good to know." /><p className="mt-5 max-w-sm leading-7 text-charcoal/70">Have another question about your space? Get in touch and tell us a little about what you have in mind.</p><div className="mt-7"><Button href="/contact" variant="outline">Ask us a question <ArrowRight size={15} aria-hidden /></Button></div></div>
          <div className="faq-list lg:col-span-7 lg:col-start-6">
            <details className="faq-item"><summary>What services do you offer?</summary><p>Interior design, interior finishing, and furnishing and styling. Design work can include layouts, materials, and an overall direction for your space.</p></details>
            <details className="faq-item"><summary>What kinds of spaces do you work on?</summary><p>Residential and commercial spaces, including homes and workplaces. Share a few details about your project so we can discuss whether it is a fit.</p></details>
            <details className="faq-item"><summary>Where are you based?</summary><p>We are based in Maryland, Lagos, Nigeria. The exact meeting location is confirmed when arranging a conversation.</p></details>
            <details className="faq-item"><summary>How do I enquire about a project?</summary><p>Use the <Link className="underline underline-offset-4 hover:text-[#806832]" href="/contact">enquiry form on the Contact page</Link>{site.email ? <>, email <a className="underline underline-offset-4 hover:text-[#806832]" href={`mailto:${site.email}`}>{site.email}</a></> : null}{wa ? <>, message us on <a className="underline underline-offset-4 hover:text-[#806832]" href={wa} target="_blank" rel="noopener noreferrer">WhatsApp</a></> : null}, or contact us on <a className="underline underline-offset-4 hover:text-[#806832]" href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>. Include your project location, type of space, and what you would like help with.</p></details>
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12">
          <div className="about-image lg:col-span-5"><Img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85" alt="Naturally lit interior with neutral finishes" ratio="4/5" sizes="(min-width:1024px) 40vw, 100vw" /><span className="about-image-note">Made for everyday life</span></div>
          <div className="lg:col-span-6 lg:col-start-7"><SectionHeading eyebrow="The studio" title="Spaces shaped around you." /><p className="mt-6 max-w-xl leading-7 text-charcoal/70">We are an interior design studio in Maryland, Lagos, Nigeria. We provide interior design, finishing and furnishing for residential and commercial spaces.</p><div className="mt-8"><Button href="/about" variant="outline">About Lakes Interiors <ArrowRight size={15} aria-hidden /></Button></div></div>
        </div>
      </section>

      <section className="closing-section"><div className="wrap closing-inner"><p className="eyebrow text-ivory/65">Maryland, Lagos · Nigeria</p><h2 className="mt-6 max-w-3xl text-5xl sm:text-7xl">Let&apos;s make room for what matters.</h2><p className="mt-5 max-w-xl leading-7 text-ivory/70">Tell us what you are planning and we&apos;ll start with a conversation.</p><div className="mt-9 flex flex-wrap gap-4"><Button href="/contact" variant="light">Get in touch <ArrowRight size={15} aria-hidden /></Button>{wa && <Button href={wa} variant="darkOutline" external><MessageCircle size={16} aria-hidden />Chat on WhatsApp</Button>}</div></div></section>
    </>
  );
}
