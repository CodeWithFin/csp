import Image from "next/image";
import oneConnection from "@/assets/images/one-connection.jpg";

export function HeroThumb() {
  return (
    <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl md:h-28 md:w-40">
      <Image
        src={oneConnection}
        alt="One connection across Kenyan networks"
        fill
        className="object-cover"
        sizes="160px"
        priority
      />
    </div>
  );
}
