import type { Metadata } from "next";
import Link from "next/link";
import { ContactMarquee } from "@/components/contact-marquee";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Bulk SMS",
  description:
    "Send at scale across Safaricom, Airtel and Telkom with live delivery reports, smart routing, scheduling and personalisation.",
};

const points = [
  {
    title: "Reach",
    body: "One API and dashboard for Safaricom, Airtel and Telkom, with no need to stitch three operator accounts together.",
  },
  {
    title: "Delivery reporting",
    body: "See accepted, delivered and failed in near real time, then push the same events to your webhook.",
  },
  {
    title: "Network routing",
    body: "Traffic is steered by destination network so you are not paying one path for every SIM in the country.",
  },
  {
    title: "Scheduling",
    body: "Queue campaigns for morning, payday or a TV spot, and pause them from the same screen if copy needs a fix.",
  },
  {
    title: "Personalisation",
    body: "Name, amount, branch and any field you already store. Templates stay readable on feature phones.",
  },
];

export default function BulkSmsPage() {
  return (
    <>
      <PageHero
        title="Bulk SMS across every Kenyan network"
        body="Send at scale across Safaricom, Airtel and Telkom with live delivery reports and smart routing, then fold the same traffic into shortcodes, USSD and WhatsApp when you need a reply."
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
