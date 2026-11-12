import Image from "next/image";
// Local SVGs skip the optimizer; remote Unsplash photography is optimized by Next.js.
export default function Img({ src, alt, ratio = "4/3", priority = false, className = "", sizes = "(min-width:1024px) 50vw, 100vw" }:
  { src: string; alt: string; ratio?: string; priority?: boolean; className?: string; sizes?: string }) {
  return (
    <div className={`relative overflow-hidden bg-stone ${className}`} style={{ aspectRatio: ratio }}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} unoptimized={src.endsWith(".svg")} className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
    </div>
  );
}
