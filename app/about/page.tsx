import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Img from "@/components/Img";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Lakes Interiors and learn about the studio's approach to interior design in Maryland, Lagos.",
};

const process = [
  { number: "01", title: "First conversation", text: "We begin by learning about your space, what you need from it, and what you have in mind." },
  { number: "02", title: "Design direction", text: "We shape a clear direction for the layout, materials and overall feel of your interior." },
  { number: "03", title: "Finishing the details", text: "We bring the selected details together through finishing, furnishing and styling." },
  { number: "04", title: "A space that feels yours", text: "The goal is a considered, comfortable space shaped around the way you live or work." },
];

// Replace these editable names, roles and portraits with the real team details.
const team = [
  { name: "K.O Chukwuemeka", role: "Founder & Creative Director", image: "/founder-portrait.jpeg", alt: "K.O Chukwuemeka, Founder and Creative Director of Lakes Interiors" },
  { name: "Team member", role: "Design & Project Support", image: "photo-1600607687939-ce8a6c25118c", alt: "Bright interior with carefully layered neutral finishes" },
  { name: "Team member", role: "Finishing & Furnishing", image: "photo-1600607687920-4e2a09cf159d", alt: "Contemporary kitchen with warm neutral finishes" },
];

export default function About() {
  return (
    <>
      <section className="wrap section grid items-center gap-12 lg:grid-cols-12 about-page">
        <div className="lg:col-span-5">
          <SectionHeading as="h1" eyebrow="A little about us" title="Spaces should feel like yours." />
          <div className="mt-6 space-y-4 leading-7 text-charcoal/75">
            <p>Lakes Interiors is an interior design studio based in Maryland, Lagos, Nigeria. We work across residential and commercial spaces, bringing design, finishing and furnishing together around the people who use each space.</p>
            <p>Our approach starts with listening: how you live or work, what needs to change, and what you want your space to feel like. From there, we develop a considered direction for the layout, materials and details.</p>
          </div>
          <div className="mt-8"><Button href="/contact">Discuss a project <ArrowRight size={15} aria-hidden /></Button></div>
        </div>
        <div className="about-page-image lg:col-span-6 lg:col-start-7"><Img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85" alt="Naturally lit interior with neutral finishes" ratio="4/5" priority sizes="(min-width:1024px) 48vw, 100vw" /></div>
      </section>

      <section className="section bg-[#ebe5d9]">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeading eyebrow="Our approach" title="Thoughtful by design." /></div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            <article className="border-t border-charcoal/20 pt-5"><p className="eyebrow">01 · Function</p><h2 className="mt-4 font-serif text-3xl">Start with how it works.</h2><p className="mt-3 leading-7 text-charcoal/70">A good layout makes daily routines easier and helps every part of a room feel intentional.</p></article>
            <article className="border-t border-charcoal/20 pt-5"><p className="eyebrow">02 · Feeling</p><h2 className="mt-4 font-serif text-3xl">Make room for comfort.</h2><p className="mt-3 leading-7 text-charcoal/70">Materials, light, colour and furnishings work together to shape the atmosphere of a space.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeading eyebrow="Working together" title="From first conversation to finished space." />
          <ol className="about-process mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => <li key={step.number} className="border-t border-charcoal/20 pt-5"><span className="text-xs tracking-[0.18em] text-[#806832]">{step.number}</span><h2 className="mt-4 font-serif text-2xl">{step.title}</h2><p className="mt-3 text-sm leading-6 text-charcoal/70">{step.text}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="section bg-[#292b25] text-ivory">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="The people behind the work" title="Meet the team." />
            <p className="max-w-sm leading-7 text-ivory/70">A collaborative studio bringing design, finishing and furnishing together for every space.</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person, index) => <article key={`${person.name}-${index}`}>
              <div className="about-team-photo"><Img src={person.image.startsWith("/") ? person.image : `https://images.unsplash.com/${person.image}?auto=format&fit=crop&w=900&q=85`} alt={person.alt} ratio="4/5" sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw" /></div>
              <div className="mt-4 border-b border-ivory/20 pb-4"><h3 className="font-serif text-2xl">{person.name}</h3><p className="mt-1 text-sm text-ivory/65">{person.role}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="closing-section"><div className="wrap closing-inner"><p className="eyebrow text-ivory/65">Maryland, Lagos · Nigeria</p><h2 className="mt-6 max-w-3xl text-5xl sm:text-7xl">Let&apos;s make room for what matters.</h2><p className="mt-5 max-w-xl leading-7 text-ivory/70">Tell us what you are planning and we&apos;ll start with a conversation.</p><div className="mt-9"><Button href="/contact" variant="light">Get in touch <ArrowUpRight size={15} aria-hidden /></Button></div></div></section>
    </>
  );
}
