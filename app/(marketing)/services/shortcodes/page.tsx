import Link from "next/link";
import { ContactMarquee } from "@/components/contact-marquee";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { PricingCards } from "@/components/pricing-cards";
import { SectionLabel } from "@/components/section-label";
import { SmsThread } from "@/components/sms-thread";
import { UseCaseImage } from "@/components/use-case-image";
import { ArrowUpRight } from "@/components/icons";
import {
  howItWorks,
  shortcodeFaqs,
  shortcodeFeatures,
  shortcodeTiers,
  useCases,
  whyChoose,
} from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shortcodes & Sender IDs",
  description:
    "Shared or dedicated shortcodes and CAK-aligned sender ID registration on Safaricom, Airtel and Telkom, handled during onboarding, at no extra charge.",
};

export default function ShortcodesPage() {
  return (
    <>
      <PageHero
        title="Shortcodes & sender IDs for Kenyan businesses"
        body="Get a memorable number your customers can text, and a branded name they see on every message. Siscom sets up shared or dedicated shortcodes and takes the sender ID paperwork (the CAK-aligned registration with Safaricom, Airtel and Telkom) off your plate during onboarding, at no extra charge."
      />

      <section className="mx-auto max-w-[82rem] px-6 pb-16 md:px-12 lg:px-20">
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-body">
          Once it&apos;s live, the same code handles campaigns, voting, lead capture and paid subscriptions, with every
          reply logged and pushed to your systems in real time.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 border-t border-line pt-12 md:grid-cols-3 md:gap-x-16">
          {[
            { value: "3/3", label: "Networks covered" },
            { value: "0", label: "Admin fee on sender ID" },
            { value: "1–3", label: "Days to approval" },
          ].map((s) => (
            <div key={s.label} className="border-l border-line pl-6 md:pl-8">
              <div className="font-display text-[3.25rem] font-medium leading-[1.1] tracking-tight text-ink md:text-[4rem]">
                {s.value}
              </div>
              <p className="mt-4 text-body">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[82rem] px-6 py-20 md:px-12 lg:px-20">
        <SectionLabel label="Features" widthClass="w-28" />
        <div className="flex flex-col">
          {shortcodeFeatures.map((feature, i) => (
            <div
              key={feature}
              className="flex flex-col gap-2 border-b border-line py-8 last:border-b-0 md:flex-row md:items-center md:gap-8"
            >
              <div className="font-display w-16 shrink-0 text-[1.5rem] font-medium text-ink">
                {String(i + 1).padStart(2, "0")}.
              </div>
              <p className="font-display text-[1.35rem] font-medium tracking-tight text-ink md:text-[1.75rem]">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[82rem] px-6 py-20 md:px-12 lg:px-20">
        <SectionLabel label="Why this" widthClass="w-28" />
        <h2 className="font-display mb-16 max-w-4xl text-[2rem] font-medium leading-[1.2] tracking-tight text-ink md:text-[3.5rem]">
          Why teams choose Siscom for shortcodes and sender IDs.
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {whyChoose.map((reason, i) => (
            <div key={reason} className="border-l border-line pl-6">
              <div className="font-display text-sm text-muted">{String(i + 1).padStart(2, "0")}</div>
              <p className="mt-3 text-lg leading-relaxed text-ink">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-night px-6 py-24 text-white md:px-12 lg:px-20">
        <div className="mx-auto max-w-[82rem]">
          <SectionLabel label="Use cases" dark widthClass="w-32" />
          <div className="flex flex-col gap-12">
            {useCases.map((item) => (
              <div key={item.title} className="group flex flex-col overflow-hidden border border-edge bg-card md:flex-row">
                <div className="flex w-full flex-col justify-between p-8 md:w-[38%] md:p-12 lg:p-16">
                  <div>
                    <h3 className="font-display mb-4 text-[2rem] font-medium tracking-tight text-white">{item.title}</h3>
                    <p className="mb-8 text-base leading-relaxed text-soft">{item.body}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-dim px-3 py-1 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <UseCaseImage title={item.title} image={item.image} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[82rem] px-6 py-24 md:px-12 lg:px-20">
        <SectionLabel label="How it works" widthClass="w-36" />
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SmsThread />
          </div>
          <div className="flex flex-col lg:col-span-2">
            {howItWorks.map((step, i) => (
              <div key={step.title} className="border-b border-line py-8 last:border-b-0">
                <div className="font-display text-sm text-muted">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display mt-2 text-[1.75rem] font-medium tracking-tight text-ink">{step.title}</h3>
                <p className="mt-3 max-w-xl text-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-[82rem] px-6 py-24 md:px-12 lg:px-20">
        <SectionLabel label="Pricing" widthClass="w-28" />
        <h2 className="font-display mb-16 max-w-4xl text-[2rem] font-medium leading-[1.2] tracking-tight text-ink md:text-[3.5rem]">
          Quote-based tiers. Volume and code type decide the number.
        </h2>
        <PricingCards tiers={shortcodeTiers} />
      </section>

      <section className="mx-auto max-w-[82rem] px-6 py-24 md:px-12 lg:px-20">
        <SectionLabel label="Frequently Asked Questions" widthClass="w-64" />
        <FaqList items={shortcodeFaqs} />
        <Link
          href="/contact"
          className="group mt-16 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm text-white hover:bg-brand-hover"
        >
          Talk to our team
          <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </section>

      <ContactMarquee />
    </>
  );
}
