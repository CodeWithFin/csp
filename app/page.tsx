import Link from "next/link";
import { ContactMarquee } from "@/components/contact-marquee";
import { FaqList } from "@/components/faq-list";
import { ProductMarquee } from "@/components/product-marquee";
import { SectionLabel } from "@/components/section-label";
import { HeroThumb } from "@/components/hero-thumb";
import { UseCaseImage } from "@/components/use-case-image";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { generalFaqs, services, site, useCases } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="px-6 pb-20 pt-16 md:px-12 md:pt-24 lg:px-20">
        <div className="mx-auto mb-16 flex max-w-[82rem] flex-col">
          <p className="mb-6 text-sm uppercase tracking-wider text-body">Built &amp; supported from Nairobi</p>
          <div className="flex flex-col items-start gap-4 overflow-hidden md:flex-row md:items-center md:gap-6">
            <HeroThumb />
            <h1 className="font-display text-[3.25rem] font-semibold leading-[1.1] tracking-tighter text-ink md:text-[6rem]">
              One connection.
            </h1>
          </div>
          <h1 className="font-display mt-2 text-[3.25rem] font-semibold leading-[1.1] tracking-tighter text-ink md:mt-0 md:text-[6rem]">
            Every Kenyan network.
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-normal leading-relaxed text-body md:text-xl">{site.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm text-white transition-colors hover:bg-brand-hover"
            >
              Talk to our team
              <ArrowUpRight />
            </Link>
            <Link
              href="/services/shortcodes"
              className="group inline-flex items-center gap-2 rounded-full border border-brand px-5 py-2.5 text-sm text-brand transition-colors hover:bg-brand hover:text-white"
            >
              See shortcodes &amp; sender IDs
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <ProductMarquee />
      </section>

      <section id="about" className="mx-auto max-w-[82rem] px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <SectionLabel label="About" widthClass="w-24" />
        <h2 className="font-display mb-20 max-w-5xl text-[2rem] font-medium leading-[1.2] tracking-tight text-ink md:text-[3.5rem]">
          We run your traffic across Safaricom, Airtel and Telkom — and we handle the CAK paperwork so you can go live
          without a second vendor.
        </h2>
        <div className="grid grid-cols-1 items-end gap-16 md:grid-cols-2 md:gap-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:gap-x-16">
            {[
              { value: "3/3", note: "Networks", label: "Safaricom, Airtel, Telkom" },
              { value: "0", note: "Admin fee", label: "Sender ID registration" },
              { value: "1–3", note: "Days", label: "Typical sender ID approval" },
              { value: "NBO", note: "Kenya", label: "Built & supported from Nairobi" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col border-l border-line pl-6">
                <div className="flex items-start gap-2">
                  <span className="font-display text-[3.5rem] font-medium leading-none tracking-tighter text-ink md:text-[4.5rem]">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-sm font-normal text-body">({stat.note})</span>
                </div>
                <span className="mt-2 text-base font-normal text-body">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-start md:justify-end">
            <Link
              href="/services/shortcodes"
              className="group inline-flex items-center gap-2 rounded-full border border-brand px-5 py-2 text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <span className="text-sm font-normal">Learn more</span>
              <ArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-[82rem] px-6 py-20 md:px-12 lg:px-20">
        <SectionLabel label="Services" widthClass="w-28" />
        <div className="flex flex-col">
          {services.map((service, i) => (
            <Link
              key={service.number}
              href={service.href}
              className={`group relative -mx-6 cursor-pointer overflow-hidden border-b border-line px-6 py-10 transition-colors hover:bg-[#fafafa] md:-mx-12 md:px-12 lg:-mx-20 lg:px-20 ${
                i === services.length - 1 ? "border-b-0" : ""
              }`}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                <div className="font-display w-16 shrink-0 text-[2rem] font-medium text-ink">{service.number}.</div>
                <div className="font-display w-full text-[2rem] font-medium tracking-tight text-ink lg:w-1/3">
                  {service.title}
                  {service.featured ? (
                    <span className="ml-3 align-middle text-xs font-normal uppercase tracking-wider text-live">
                      Priority
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-grow flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-ink">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="max-w-lg text-base leading-relaxed text-body">{service.blurb}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="shortcodes" className="bg-night px-6 py-24 text-white md:px-12 lg:px-20">
        <div className="mx-auto max-w-[82rem]">
          <SectionLabel label="Works" dark widthClass="w-24" />
          <div className="flex flex-col gap-12">
            {useCases.slice(0, 3).map((item) => (
              <Link
                key={item.title}
                href="/services/shortcodes"
                className="group flex flex-col overflow-hidden border border-edge bg-card md:flex-row"
              >
                <div className="flex w-full flex-col justify-between p-8 md:w-[38%] md:p-12 lg:p-16">
                  <div>
                    <h3 className="font-display mb-4 text-[2rem] font-medium tracking-tight text-white">{item.title}</h3>
                    <p className="mb-8 text-base leading-relaxed text-soft">{item.body}</p>
                    <div className="flex items-center gap-2 text-sm font-normal underline decoration-1 underline-offset-4 transition-colors group-hover:text-gray-300">
                      View shortcodes <ArrowUpRight />
                    </div>
                  </div>
                  <div className="mt-12 flex items-center gap-4 md:mt-0">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-dim px-3 py-1 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <UseCaseImage title={item.title} image={item.image} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[82rem] px-6 py-24 md:px-12 lg:px-20">
        <SectionLabel label="About Us" widthClass="w-28" />
        <div className="mb-20 flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <h2 className="font-display max-w-4xl text-[2.5rem] font-medium leading-[1.2] tracking-tight text-ink md:text-[3.5rem]">
            A Nairobi team that answers the phone when a campaign is live — not a ticket that waits until morning.
          </h2>
          <p className="max-w-[444px] text-base text-body md:text-right">
            Shared or dedicated shortcodes, sender IDs on all three networks, and the rest of your stack — bulk SMS,
            USSD, WhatsApp, M-Pesa — on one account.
          </p>
        </div>
        <div className="relative h-[50vw] overflow-hidden rounded-2xl bg-night md:h-[28rem]">
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-px p-8 opacity-40">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="border border-white/10" />
            ))}
          </div>
          <div className="relative flex h-full flex-col justify-end p-8 md:p-12">
            <p className="font-display text-3xl font-medium tracking-tight text-white md:text-5xl">Nairobi · Kenya</p>
            <p className="mt-3 max-w-md text-soft">CAK-aligned registration. ODPC-aware opt-in and STOP handling.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[82rem] px-6 py-24 md:px-12 lg:px-20">
        <SectionLabel label="Networks" widthClass="w-32" />
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-8 text-[1.25rem] font-medium leading-snug tracking-tight text-ink md:text-[1.5rem]">
                Traffic is only useful if it actually lands. We register your sender ID with Safaricom, Airtel and
                Telkom, then keep two-way flows inside ODPC and CAK rules — without you chasing three operator desks.
              </p>
              <div>
                <div className="font-display text-[1.125rem] font-semibold text-ink">Siscom Connect</div>
                <div className="mt-1 text-sm font-normal text-body">Messaging infrastructure · Nairobi</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Safaricom", "Airtel", "Telkom", "CAK", "ODPC", "M-Pesa"].map((label) => (
              <div key={label} className="flex items-center justify-center rounded-xl bg-wash p-8 md:p-12">
                <span className="font-display text-xl font-semibold tracking-tighter text-ink">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-[82rem] px-6 py-24 md:px-12 lg:px-20">
        <SectionLabel label="Frequently Asked Questions" widthClass="w-64" />
        <h2 className="font-display mb-16 max-w-4xl text-[2rem] font-medium leading-[1.2] tracking-tight text-ink md:text-[3.5rem]">
          Straight answers on delivery, onboarding and what it costs to get a code live.
        </h2>
        <FaqList items={generalFaqs} />
      </section>

      <ContactMarquee />
    </>
  );
}
