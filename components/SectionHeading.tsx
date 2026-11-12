export default function SectionHeading({ eyebrow, title, light = false, as: H = "h2" }:
  { eyebrow?: string; title: string; light?: boolean; as?: "h1" | "h2" }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className={`eyebrow mb-4 flex items-center gap-3 ${light ? "!text-ivory/70" : ""}`}><span className="h-px w-8 bg-gold" />{eyebrow}</p>}
      <H className="text-4xl sm:text-5xl">{title}</H>
    </div>
  );
}
