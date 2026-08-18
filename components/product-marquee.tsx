import Image from "next/image";
import Link from "next/link";
import bulkSms from "@/assets/images/bulk-sms.jpg";
import campaign from "@/assets/images/campain.jpg";
import leadCapture from "@/assets/images/lead-capture.jpg";
import oneConnection from "@/assets/images/one-connection.jpg";
import voting from "@/assets/images/voting-1.jpg";

const slides = [
  { src: bulkSms, alt: "Sending messages at scale", label: "Bulk SMS", href: "/services/bulk-sms" },
  { src: campaign, alt: "Reply-to-win SMS campaigns", label: "Campaigns", href: "/services/shortcodes" },
  { src: voting, alt: "Keyword voting by SMS", label: "Voting", href: "/services/shortcodes" },
  { src: leadCapture, alt: "Capturing leads from a keyword", label: "Lead capture", href: "/services/shortcodes" },
  { src: oneConnection, alt: "Connected across Kenyan networks", label: "All networks", href: "/services/shortcodes" },
];

function SlideRow() {
  return (
    <div className="flex gap-6 px-3">
      {slides.map((slide) => (
        <Link
          key={slide.label}
          href={slide.href}
          className="group relative h-48 w-64 shrink-0 overflow-hidden rounded-xl md:h-56 md:w-72"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            sizes="(min-width: 768px) 288px, 256px"
          />
          <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink">
            {slide.label}
          </span>
        </Link>
      ))}
    </div>
  );
}

export function ProductMarquee() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="animate-marquee flex w-max">
        <SlideRow />
        <SlideRow />
      </div>
    </div>
  );
}
