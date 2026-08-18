import { ArrowRight } from "./icons";

export function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body: string;
}) {
  return (
    <section className="px-6 pb-16 pt-12 md:px-12 md:pt-20 lg:px-20">
      <div className="mx-auto max-w-[82rem]">
        {eyebrow ? (
          <div className="mb-6 inline-flex items-center gap-2 text-sm text-body">
            <ArrowRight className="h-4 w-4" />
            <span>{eyebrow}</span>
          </div>
        ) : null}
        <h1 className="font-display max-w-5xl text-[2.75rem] font-semibold leading-[1.1] tracking-tighter text-ink md:text-[5rem]">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-body md:text-xl">{body}</p>
      </div>
    </section>
  );
}
