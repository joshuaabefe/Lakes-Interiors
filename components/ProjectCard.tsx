import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Img from "./Img";
import { Project } from "@/data/site";
export default function ProjectCard({ p, ratio = "4/5", className = "", index, showBrief = false }: { p: Project; ratio?: string; className?: string; index?: number; showBrief?: boolean }) {
  return (
    <Link href={`/projects/${p.slug}`} className={`group block ${className}`}>
      <div className="relative">
        <Img src={p.cover.src} alt={p.cover.alt} ratio={ratio} sizes="(min-width:1024px) 40vw, 100vw" />
      </div>
      <div className="mt-4 border-b border-charcoal/15 pb-5">
        {typeof index === "number" && <p className="eyebrow mb-3">{String(index).padStart(2, "0")} / {p.category}{p.location && ` · ${p.location}`}</p>}
        <div className="flex items-start justify-between gap-4"><div><h3 className="font-serif text-2xl">{p.title}</h3>{typeof index !== "number" && <p className="mt-1 text-sm text-charcoal/70">{p.category}{p.location && ` · ${p.location}`}</p>}</div>
        <span className="text-link project-link mt-1 inline-flex flex-none items-center gap-1 text-sm">Explore project <ArrowUpRight size={16} aria-hidden /></span></div>
        {showBrief && <p className="project-card-brief mt-4 leading-7 text-charcoal/70">{p.brief}</p>}
      </div>
    </Link>
  );
}
