import Img from "./Img";
type I = { src: string; alt: string };
export default function BeforeAfter({ before, after }: { before: I; after: I }) {
  const Tag = ({ t }: { t: string }) => <span className="absolute left-3 top-3 z-10 bg-ivory px-3 py-1 text-xs uppercase tracking-[0.18em] text-charcoal">{t}</span>;
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <figure className="relative"><Tag t="Before" /><Img src={before.src} alt={before.alt} ratio="4/5" sizes="(min-width:640px) 50vw, 100vw" /></figure>
      <figure className="relative"><Tag t="After" /><Img src={after.src} alt={after.alt} ratio="4/5" sizes="(min-width:640px) 50vw, 100vw" /></figure>
    </div>
  );
}
