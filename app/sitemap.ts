import type { MetadataRoute } from "next";
import { projects, services } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const paths = ["", "/about", "/contact", "/projects", "/privacy", "/terms",
    ...services.map(s => `/services/${s.slug}`), ...projects.map(p => `/projects/${p.slug}`)];
  return paths.map(p => ({ url: `${base}${p}` }));
}
