export function ContactMarquee({ text = "Talk to our team" }: { text?: string }) {
  const items = Array.from({ length: 8 }, () => text);
  return (
    <section className="overflow-hidden bg-wash py-16 md:py-20">
      <div className="animate-marquee-slow flex w-max">
        <div className="flex items-center">
          {items.map((t, i) => (
            <span
              key={i}
              className="font-display whitespace-nowrap px-8 text-[4rem] font-medium uppercase tracking-tighter text-ink md:text-[6rem]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
