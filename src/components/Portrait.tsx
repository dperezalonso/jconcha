import Image from "next/image";

type Props = {
  className?: string;
  priority?: boolean;
  sizes?: string;
  src?: string;
  alt?: string;
  circle?: boolean;
  objectPosition?: string;
  quality?: number;
  imageClassName?: string;
};

const DEFAULT_ALT =
  "Javier Concha López, cofundador y Director de Marketing de SANTACONCHA";

export function Portrait({
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 92vw, 640px",
  src,
  alt = DEFAULT_ALT,
  circle = false,
  objectPosition,
  quality = 100,
  imageClassName = "",
}: Props) {
  const image = src ?? (circle ? "/javier-portrait-circle.jpg" : "/javier-ppc-fest-portrait.jpg");

  return (
    <div
      className={`relative overflow-hidden bg-[rgba(18,21,28,0.06)] ${circle ? "rounded-full" : ""} ${className}`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        quality={quality}
        sizes={sizes}
        className={`object-cover ${imageClassName}`}
        style={{
          objectPosition:
            objectPosition ?? (circle ? "50% 50%" : "50% 22%"),
        }}
      />
    </div>
  );
}
