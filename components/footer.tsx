import Link from "next/link";
import { ArrowUpRight } from "./icons";
import { services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-night px-6 pb-8 pt-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-[82rem] flex-col">
        <div className="mb-24 flex flex-col items-start justify-between gap-16 lg:flex-row">
          <div className="flex max-w-lg flex-col gap-8">
            <h2 className="font-display text-[2rem] font-medium leading-snug tracking-tight md:text-[2.5rem]">
              One account for SMS, USSD, WhatsApp and M-Pesa — built from Nairobi.
            </h2>
            <Link
              href="/contact"
              className="group inline-flex w-max items-center gap-2 rounded-full border border-white px-6 py-2.5 text-white transition-colors hover:bg-white hover:text-ink"
            >
              <span className="text-sm font-normal">Talk to our team</span>
              <ArrowUpRight className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:gap-16">
            <div className="flex flex-col gap-6">
              <h4 className="font-display text-lg font-medium">Services</h4>
              <div className="flex flex-col gap-3 text-sm text-[#999]">
                {services
                  .filter((s) => s.slug !== "two-way")
                  .map((s) => (
                    <Link key={s.href} href={s.href} className="transition-colors hover:text-white">
                      {s.title}
                    </Link>
                  ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="font-display text-lg font-medium">Company</h4>
              <div className="flex flex-col gap-3 text-sm text-[#999]">
                <Link href="/#about" className="transition-colors hover:text-white">
                  About
                </Link>
                <Link href="/pricing" className="transition-colors hover:text-white">
                  Pricing
                </Link>
                <Link href="/faq" className="transition-colors hover:text-white">
                  FAQ
                </Link>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="font-display text-lg font-medium">Contact</h4>
              <div className="flex flex-col gap-3 text-sm text-[#999]">
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                  {site.email}
                </a>
                {site.phoneDisplay ? (
                  <a href={`tel:${site.phoneTel}`} className="transition-colors hover:text-white">
                    {site.phoneDisplay}
                  </a>
                ) : null}
                <span>{site.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full text-center">
          <span className="font-display block w-full text-center text-[12vw] font-medium leading-none tracking-tighter md:text-[10vw]">
            {site.wordmark}
          </span>
        </div>

        <div className="my-8 h-px w-full bg-edge" />

        <div className="flex flex-col items-center justify-between gap-6 text-xs text-[#999] md:flex-row">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Use
            </Link>
          </div>
          <a href="#top" className="transition-colors hover:text-white">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
