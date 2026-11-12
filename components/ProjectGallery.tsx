import Img from "./Img";
export default function ProjectGallery({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-12">
      {images.map((im, i) => (
        <div key={im.src + i} className={i % 3 === 0 ? "md:col-span-7" : "md:col-span-5"}>
          <Img src={im.src} alt={im.alt} ratio={i % 3 === 0 ? "4/3" : "4/5"} sizes="(min-width:768px) 58vw, 100vw" />
        </div>
      ))}
    </div>
  );
}
