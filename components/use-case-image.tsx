import Image, { type StaticImageData } from "next/image";

export function UseCaseImage({
  title,
  image,
}: {
  title: string;
  image?: StaticImageData;
}) {
  return (
    <div className="relative h-64 w-full overflow-hidden bg-[#1a1a1a] md:h-auto md:min-h-full md:w-[55%]">
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          sizes="(min-width: 768px) 55vw, 100vw"
        />
      ) : (
        <div className="flex h-full items-center justify-center md:items-end md:justify-end md:p-8">
          <span className="font-display text-[3.5rem] font-medium tracking-tighter text-white/15 md:text-[5rem]">
            {title}
          </span>
        </div>
      )}
    </div>
  );
}
