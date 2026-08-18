import Image from "next/image";
import Link from "next/link";
import oneConnection from "@/assets/images/one-connection.jpg";
import { ArrowUpRight } from "./icons";

export function HomeHero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <Image
        src={oneConnection}
        alt="One connection across Kenyan networks"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="grid h-full w-full grid-cols-12 divide-x divide-white/20">
          <div className="col-span-1" />
          <div className="col-span-3" />
          <div className="col-span-4" />
          <div className="col-span-3" />
          <div className="col-span-1" />
        </div>
      </div>

      <div className="relative z-20 max-w-5xl px-6 text-center text-white">
        <h1 className="font-display text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-8xl">
          One connection.
          <br />
          Every Kenyan network.
        </h1>
        <Link href="/contact" className="group mx-auto mt-10 flex w-max items-center">
          <span className="rounded-full bg-brand px-6 py-3 text-sm text-white duration-500 ease-in-out group-hover:bg-white group-hover:text-brand">
            Talk to our team
          </span>
          <span className="relative flex size-[3.25rem] items-center justify-center overflow-hidden rounded-full bg-brand text-white duration-500 ease-in-out group-hover:bg-white group-hover:text-brand">
            <ArrowUpRight className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-6 group-hover:-translate-y-8" />
            <ArrowUpRight className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-[220%] -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
          </span>
        </Link>
      </div>
    </section>
  );
}
