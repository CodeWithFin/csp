import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[82rem]">
        <p className="text-sm uppercase tracking-wider text-body">404</p>
        <h1 className="font-display mt-4 text-[3.5rem] font-semibold tracking-tighter text-ink md:text-[6rem]">
          Page not found.
        </h1>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm text-white hover:bg-brand-hover">
          Back home
        </Link>
      </div>
    </section>
  );
}
