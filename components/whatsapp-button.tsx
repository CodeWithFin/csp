import { WhatsAppIcon } from "./icons";
import { site } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#1ebe5d]"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
