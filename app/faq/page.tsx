import type { Metadata } from "next";
import { ContactMarquee } from "@/components/contact-marquee";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { generalFaqs, shortcodeFaqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers on onboarding, delivery, M-Pesa, scheduling, support, shortcodes and sender IDs.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions we get before a code goes live"
        body="We're here to answer your questions and provide clarity — on delivery, onboarding, and how shortcodes sit next to the rest of the stack."
      />
      <section className="mx-auto max-w-[82rem] px-6 pb-20 md:px-12 lg:px-20">
        <SectionLabel label="General" widthClass="w-28" />
        <FaqList items={generalFaqs} />
      </section>
      <section className="mx-auto max-w-[82rem] px-6 py-20 md:px-12 lg:px-20">
        <SectionLabel label="Shortcodes & Sender IDs" widthClass="w-56" />
        <FaqList items={shortcodeFaqs} />
      </section>
      <ContactMarquee />
    </>
  );
}
