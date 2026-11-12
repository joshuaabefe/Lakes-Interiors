import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Img from "./Img";
import { Project } from "@/data/site";
export default function ProjectCard({ p, ratio = "4/5", className = "" }: { p: Project; ratio?: string; className?: string }) {
  return (
    <Link href={`/projects/${p.slug}`} className={`group block ${className}`}>
      <div className="relative">
        <Img src={p.cover.src} alt={p.cover.alt} ratio={ratio} sizes="(min-width:1024px) 40vw, 100vw" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4 border-b border-charcoal/15 pb-4">
        <div><h3 className="font-serif text-2xl">{p.title}</h3><p className="mt-1 text-sm text-charcoal/70">{p.category}{p.location && ` · ${p.location}`}</p></div>
        <span className="mt-1 inline-flex items-center gap-1 text-sm">View project <ArrowUpRight size={16} aria-hidden /></span>
      </div>
    </Link>
  );
}
