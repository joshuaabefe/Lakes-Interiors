import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Img from "@/components/Img";
import Button from "@/components/Button";
import ProjectGallery from "@/components/ProjectGallery";
import BeforeAfter from "@/components/BeforeAfter";
import { projects } from "@/data/site";
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = projects.find(x => x.slug === params.slug);
  return p ? { title: p.title, description: `${p.category} interior project by Lakes Interiors in Maryland, Lagos.` } : {};
}
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const i = projects.findIndex(x => x.slug === params.slug);
  if (i < 0) notFound();
  const p = projects[i], next = projects[(i + 1) % projects.length];
  const rest = p.gallery.slice(1);
  return (
    <article>
      <div className="wrap project-detail-head pt-8">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm hover:text-[#806832]"><ArrowLeft size={14} aria-hidden /> All projects</Link>
        <div className="mt-10 grid items-end gap-6 md:grid-cols-12">
          <div className="md:col-span-8"><p className="eyebrow">{p.category}{p.location && ` · ${p.location}`}</p><h1 className="mt-3 text-5xl sm:text-7xl">{p.title}</h1></div>
          <p className="eyebrow pb-2 md:col-span-3 md:col-start-10">Lakes Interiors<br />Maryland · Lagos</p>
        </div>
        <div className="project-detail-hero mt-10"><Img src={p.gallery[0].src} alt={p.gallery[0].alt} ratio="16/8" priority sizes="100vw" /><span className="project-detail-index">{String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span></div>
      </div>
      <div className="wrap section grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7"><p className="eyebrow">The design direction</p><h2 className="mt-4 text-3xl">A space shaped around its everyday life.</h2><p className="mt-4 max-w-2xl leading-7 text-charcoal/80">{p.brief}</p></div>
        <div className="lg:col-span-4 lg:col-start-9"><p className="eyebrow">The details</p><h2 className="mt-4 text-3xl">Services</h2>
          <ul className="mt-4 divide-y divide-charcoal/15 border-y border-charcoal/15">{p.scope.map((s, n) => <li key={s} className="flex items-center gap-4 py-3 text-sm"><span className="text-xs tracking-widest text-[#806832]">0{n + 1}</span>{s}</li>)}</ul></div>
      </div>
      {rest.length > 0 && <section className="project-gallery-section"><div className="wrap"><div className="section-topline"><span className="eyebrow">In the details</span><span className="eyebrow">{String(p.gallery.length).padStart(2, "0")} views</span></div><h2 className="sr-only">Project gallery</h2><ProjectGallery images={rest} /></div></section>}
      {p.before && p.after && <div className="wrap section pb-0"><h2 className="mb-8 text-3xl">Before &amp; after</h2><BeforeAfter before={p.before} after={p.after} /></div>}
      <div className="wrap section grid gap-10 md:grid-cols-2">
        <div><p className="eyebrow">Your space, your story</p><h2 className="mt-4 text-4xl">Planning a similar space?</h2><div className="mt-6"><Button href="/contact">Discuss your project <ArrowUpRight size={15} aria-hidden /></Button></div></div>
        <Link href={`/projects/${next.slug}`} className="group flex items-end justify-between border-t border-charcoal/20 pt-4">
          <span><span className="eyebrow">Next project</span><span className="mt-1 block font-serif text-3xl">{next.title}</span></span>
          <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
