import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import Img from "@/components/Img";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore residential and commercial interior design by Lakes Interiors in Maryland, Lagos.",
};

export default function Projects() {
  const featured = projects[0];
  const remaining = projects.slice(1);
  return (
    <>
      <section className="projects-intro">
        <div className="wrap projects-intro-inner">
          <div className="max-w-2xl">
            <p className="eyebrow">Selected spaces · Maryland, Lagos</p>
            <h1 className="mt-5 font-serif text-6xl leading-[.98] tracking-[-.045em] sm:text-8xl">Considered from<br /><em className="font-normal text-[#8b8067]">every angle.</em></h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-charcoal/70 sm:text-lg">A closer look at spaces shaped through thoughtful design, finishing and furnishing.</p>
            <Link href="#selected-projects" className="mt-9 inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-charcoal/70"><span className="scroll-mark"><ArrowDown size={13} aria-hidden /></span>Explore the projects</Link>
          </div>
          <div className="projects-intro-image"><Img src={featured.cover.src} alt={featured.cover.alt} ratio="4/3" priority sizes="(min-width:1024px) 48vw, 100vw" /><span className="projects-image-label">Residential · Interior design</span></div>
        </div>
      </section>

      <section className="section" id="selected-projects">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-5 border-b border-charcoal/15 pb-6">
            <SectionHeading eyebrow="The portfolio" title="Spaces with a point of view." />
            <p className="max-w-sm text-sm leading-6 text-charcoal/70">Explore residential and commercial interiors, with details on the design direction and services behind each space.</p>
          </div>

          <div className="projects-featured mt-12 grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7 projects-featured-card"><Img src={featured.cover.src} alt={featured.cover.alt} ratio="4/3" priority sizes="(min-width:1024px) 58vw, 100vw" /></div>
            <div className="projects-featured-copy lg:col-span-4 lg:col-start-9 lg:pl-8">
              <p className="eyebrow">01 / {featured.category}</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight">{featured.title}</h2>
              <p className="mt-4 leading-7 text-charcoal/70">{featured.brief}</p>
              <Link href={`/projects/${featured.slug}`} className="text-link mt-7">Explore the project <ArrowRight size={15} aria-hidden /></Link>
            </div>
          </div>

          <div className="projects-grid mt-24 grid gap-x-8 gap-y-16 sm:grid-cols-2">
            {remaining.map((p, i) => <ProjectCard key={p.slug} p={p} index={i + 2} showBrief ratio={i % 2 ? "4/3" : "4/5"} className={i % 2 ? "sm:mt-24" : ""} />)}
          </div>
        </div>
      </section>

      <section className="closing-section"><div className="wrap closing-inner"><p className="eyebrow text-ivory/65">Have a space in mind?</p><h2 className="mt-6 max-w-3xl text-5xl sm:text-7xl">Let&apos;s shape what comes next.</h2><p className="mt-5 max-w-xl leading-7 text-ivory/70">Tell us about your plans and we&apos;ll start with a conversation.</p><div className="mt-9"><Link href="/contact" className="inline-flex items-center gap-3 bg-ivory px-6 py-4 text-sm text-charcoal transition-colors hover:bg-[#e6dcc5]">Discuss your project <ArrowRight size={15} aria-hidden /></Link></div></div></section>
    </>
  );
}
