import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        body={`${site.name} processes business contact details and traffic metadata needed to deliver messaging services. This page is a working notice, not a substitute for a lawyer-reviewed policy.`}
      />
      <section className="mx-auto max-w-3xl px-6 pb-24 md:px-12 lg:px-20">
        <div className="flex flex-col gap-8 text-body leading-relaxed">
          <p>
            We collect the information you send through this website (name, email, phone, and the content of your
            enquiry) so we can reply and, if you become a customer, to operate your account.
          </p>
          <p>
            Message content, delivery reports, opt-in and opt-out records, and payment references are processed to
            provide the service and to meet CAK and ODPC obligations. We do not sell personal data.
          </p>
          <p>
            To update this policy or request access, correction or deletion, write to{" "}
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
