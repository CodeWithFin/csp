import type { Metadata } from "next";
import Link from "next/link";
import { ContactMarquee } from "@/components/contact-marquee";
import { PageHero } from "@/components/page-hero";
import { PricingCards } from "@/components/pricing-cards";
import { SectionLabel } from "@/components/section-label";
import { services, shortcodeTiers } from "@/lib/site";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Quote-based pricing for bulk SMS, USSD, WhatsApp, shortcodes, sender IDs and M-Pesa integration.",
};

const rows = [
  { service: "Bulk SMS", note: "Per-message, by network and volume" },
  { service: "USSD codes", note: "Code allocation + session traffic" },
  { service: "WhatsApp", note: "Conversation / template rates" },
  { service: "Shortcodes & Sender IDs", note: "Shared, dedicated or enterprise" },
  { service: "M-Pesa integration", note: "STK, B2C and reconciliation" },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Quote-based. No vanity numbers."
        body="Volume, code type and channels differ by client, so we price after a short call. Sender ID registration has no separate admin fee."
      />

      <section className="mx-auto max-w-[82rem] px-6 pb-20 md:px-12 lg:px-20">
        <SectionLabel label="Services" widthClass="w-28" />
        <div className="flex flex-col">
          {rows.map((row, i) => (
            <div
              key={row.service}
              className="flex flex-col justify-between gap-4 border-b border-line py-8 md:flex-row md:items-center"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-display text-xl text-ink">{String(i + 1).padStart(2, "0")}.</span>
                <span className="font-display text-[1.75rem] font-medium tracking-tight text-ink">{row.service}</span>
              </div>
              <div className="flex items-center gap-6 md:w-1/2 md:justify-between">
                <span className="text-body">{row.note}</span>
                <span className="rounded-full border border-line px-3 py-1 text-xs text-ink">Quote-based</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[82rem] px-6 py-20 md:px-12 lg:px-20">
        <SectionLabel label="Shortcodes" widthClass="w-32" />
        <h2 className="font-display mb-16 max-w-4xl text-[2rem] font-medium leading-[1.2] tracking-tight text-ink md:text-[3.5rem]">
          Shortcode tiers — shared, dedicated or enterprise.
        </h2>
        <PricingCards tiers={shortcodeTiers} />
        <div className="mt-12 flex flex-wrap gap-4">
          {services
            .filter((s) => s.slug !== "two-way")
            .map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group inline-flex items-center gap-2 rounded-full border border-brand px-4 py-2 text-sm text-brand hover:bg-brand hover:text-white"
              >
                {s.title} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
        </div>
      </section>
      <ContactMarquee />
    </>
  );
}
