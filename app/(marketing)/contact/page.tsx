import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { ContactMarquee } from "@/components/contact-marquee";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to the Siscom team in Nairobi about bulk SMS, USSD, WhatsApp, shortcodes and M-Pesa.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Talk to a person in Nairobi"
        body="Tell us what you need to send, collect or collect payment for. We'll come back with a setup path and a quote, not a generic deck."
      />
      <section className="mx-auto grid max-w-[82rem] grid-cols-1 gap-16 px-6 pb-24 md:px-12 lg:grid-cols-2 lg:px-20">
        <ContactForm />
        <div className="flex flex-col gap-10">
          <div className="border-l border-line pl-6">
            <div className="text-sm uppercase tracking-wider text-muted">Email</div>
            <a href={`mailto:${site.email}`} className="font-display mt-2 block text-2xl tracking-tight text-ink">
              {site.email}
            </a>
          </div>
          <div className="border-l border-line pl-6">
            <div className="text-sm uppercase tracking-wider text-muted">WhatsApp</div>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display mt-2 block text-2xl tracking-tight text-ink"
            >
              {site.phoneDisplay}
            </a>
          </div>
          <div className="border-l border-line pl-6">
            <div className="text-sm uppercase tracking-wider text-muted">Studio</div>
            <p className="font-display mt-2 text-2xl tracking-tight text-ink">{site.location}</p>
            <p className="mt-2 max-w-sm text-body">
              Message us on WhatsApp any time. A person in Nairobi will pick it up.
            </p>
          </div>
        </div>
      </section>
      <ContactMarquee text="Contact Us" />
    </>
  );
}
