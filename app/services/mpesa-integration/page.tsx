import type { Metadata } from "next";
import Link from "next/link";
import { ContactMarquee } from "@/components/contact-marquee";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "M-Pesa integration",
  description:
    "STK Push, B2C payouts and automatic reconciliation wired directly into your messaging and USSD flows.",
};

const points = [
  {
    title: "STK Push",
    body: "Send a payment prompt from an SMS keyword, a USSD menu or your own app. The customer enters a PIN; you get the result.",
  },
  {
    title: "B2C payouts",
    body: "Disburse winnings, refunds and field payments with the same audit trail as your inbound traffic.",
  },
  {
    title: "Automatic reconciliation",
    body: "Match references to sessions and messages so finance is not reconstructing the day from three CSVs.",
  },
  {
    title: "Tied into SMS & USSD",
    body: "The pay step lives inside the journey you already run — not a separate M-Pesa vendor with a different SLA.",
  },
];

export default function MpesaPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="M-Pesa inside the same journey"
        body="STK Push, B2C and reconciliation wired directly into your messaging and USSD flows — one account, one webhook, one team in Nairobi."
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
