import Link from "next/link";
import { ArrowRight } from "./icons";

export function PricingCards({
  tiers,
}: {
  tiers: { name: string; featured?: boolean; points: string[] }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`flex flex-col border p-8 ${
            tier.featured ? "bg-night text-white border-night" : "border-line bg-white text-ink"
          }`}
        >
          {tier.featured ? (
            <span className="mb-4 w-max rounded-full border border-dim px-3 py-1 text-xs">Featured</span>
          ) : (
            <span className="mb-4 w-max rounded-full border border-line px-3 py-1 text-xs text-muted">Quote-based</span>
          )}
          <h3 className="font-display text-[1.75rem] font-medium tracking-tight">{tier.name}</h3>
          <p className={`mt-2 text-sm ${tier.featured ? "text-soft" : "text-muted"}`}>
            Pricing depends on volume and setup. We&apos;ll quote it plainly.
          </p>
          <ul className="mt-8 flex flex-col gap-3 text-sm">
            {tier.points.map((p) => (
              <li key={p} className={tier.featured ? "text-soft" : "text-body"}>
                {p}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className={`group mt-10 inline-flex items-center gap-2 text-sm underline decoration-1 underline-offset-4 ${
              tier.featured ? "text-white" : "text-ink"
            }`}
          >
            Request a quote <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      ))}
    </div>
  );
}
