import type { Metadata } from "next";
import Link from "next/link";
import { ContactMarquee } from "@/components/contact-marquee";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "WhatsApp",
  description:
    "Turn one-way alerts into two-way WhatsApp conversations, with templates, media and support handoff.",
};

const points = [
  {
    title: "Templates",
    body: "Approved message templates for alerts, OTPs and reminders, sent from the same account as your SMS.",
  },
  {
    title: "Media messages",
    body: "Images, documents and richer layout when a 160-character SMS is not enough.",
  },
  {
    title: "Two-way conversations",
    body: "Customers can reply. Route those threads to a queue, a webhook, or the person already covering SMS support.",
  },
  {
    title: "Support handoff",
    body: "Start on WhatsApp, fall back to SMS or a shortcode, and keep one conversation history.",
  },
];

export default function WhatsAppPage() {
  return (
    <>
      <PageHero
        title="WhatsApp for alerts that need a reply"
        body="Turn one-way notifications into two-way conversations. Templates and media for the outbound; a human or a webhook for whatever comes back."
      />
      <section className="mx-auto max-w-[82rem] px-6 pb-24 md:px-12 lg:px-20">
        <SectionLabel label="Capabilities" widthClass="w-36" />
        <div className="flex flex-col">
          {points.map((p, i) => (
            <div key={p.title} className="flex flex-col gap-4 border-b border-line py-10 last:border-b-0 lg:flex-row lg:items-start">
              <div className="font-display w-16 shrink-0 text-[2rem] font-medium text-ink">
                {String(i + 1).padStart(2, "0")}.
              </div>
              <div className="font-display w-full text-[2rem] font-medium tracking-tight text-ink lg:w-1/3">{p.title}</div>
              <p className="max-w-lg text-base leading-relaxed text-body">{p.body}</p>
            </div>
          ))}
        </div>
        <Link href="/contact" className="group mt-12 inline-flex items-center gap-2 rounded-full border border-brand px-5 py-2 text-brand hover:bg-brand hover:text-white">
          Request a quote <ArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
      <ContactMarquee />
    </>
  );
}
