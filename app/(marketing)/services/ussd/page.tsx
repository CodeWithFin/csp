import type { Metadata } from "next";
import Link from "next/link";
import { ContactMarquee } from "@/components/contact-marquee";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "USSD codes",
  description:
    "Menu-driven, internet-free USSD experiences that work on any handset, for sign-ups, payments and support.",
};

const points = [
  {
    title: "Menu builder",
    body: "Design session trees for sign-up, balance, pay and support without shipping an app.",
  },
  {
    title: "Session flows",
    body: "Keep state across prompts, validate input, and hand off to SMS or a human when the menu runs out.",
  },
  {
    title: "No internet required",
    body: "Works on any GSM handset. If the customer can dial a code, they can finish the journey.",
  },
  {
    title: "Payments & support",
    body: "Trigger M-Pesa STK from a USSD choice, or open a ticket that lands on the same desk as your inbound SMS.",
  },
];

export default function UssdPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="USSD that works on every handset"
        body="Menu-driven, internet-free experiences for sign-ups, payments and support. Pair a code with STK Push when the customer needs to pay, or with SMS when they need a receipt."
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
