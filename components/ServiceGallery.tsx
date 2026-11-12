import Img from "./Img";

type ServiceImage = { src: string; alt: string };

export default function ServiceGallery({ images }: { images: ServiceImage[] }) {
  return (
    <div className="service-gallery">
      {images.map((image, i) => (
        <figure className={`service-gallery-item service-gallery-item-${i + 1}`} key={image.src}>
          <Img src={image.src} alt={image.alt} ratio={i % 3 === 0 ? "4/3" : "4/5"} sizes="(min-width:1024px) 50vw, (min-width:640px) 50vw, 100vw" />
          <span className="service-gallery-index">0{i + 1}</span>
        </figure>
      ))}
    </div>
  );
}
