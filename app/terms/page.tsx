import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        body="These terms cover use of this website. Service contracts for SMS, USSD, WhatsApp, shortcodes and M-Pesa are agreed separately."
      />
      <section className="mx-auto max-w-3xl px-6 pb-24 md:px-12 lg:px-20">
        <div className="flex flex-col gap-8 text-body leading-relaxed">
          <p>
            Content on this site is for information. Quotes, SLAs, and traffic classes are confirmed in writing before
            go-live. You must have a lawful basis to message the people you reach, including opt-in where required.
          </p>
          <p>
            Sender IDs and shortcodes remain subject to operator and CAK rules. We may suspend traffic that violates
            those rules or Kenyan law.
          </p>
          <p>
            Questions:{" "}
            <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
