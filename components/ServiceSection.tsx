import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { services } from "@/data/site";
import { ArrowUpRight } from "lucide-react";
export default function ServiceSection() {
  return (
    <section id="services" className="section scroll-mt-20 service-section">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4"><SectionHeading light eyebrow="Our services" title="What we do" /><p className="mt-6 max-w-xs leading-7 text-ivory/65">Design, finishing and furnishing for the spaces where life happens.</p><p className="service-aside mt-10 hidden text-xs uppercase tracking-[0.18em] text-ivory/45 lg:block">Homes <span>·</span> Workplaces <span>·</span> Lagos</p></div>
        <ul className="lg:col-span-8">
          {services.map((s, i) => (
            <li key={s.title} className="service-row">
              <Link href={`/services/${s.slug}`} className="service-link" aria-label={`Learn more about ${s.title}`}>
                <span className="service-number" aria-hidden>0{i + 1}</span>
                <h3 className="text-2xl">{s.title}</h3>
                <p className="service-description">{s.text}</p>
                <ArrowUpRight className="service-arrow" size={18} aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
