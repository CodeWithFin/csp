"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/assets/images/siscom-logo.png";
import { ArrowUpRight, CloseIcon, MenuIcon } from "./icons";
import { navLinks, site } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const overlay = pathname === "/" && !open;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={`z-[60] flex w-full items-center justify-between px-6 py-5 md:px-12 lg:px-20 ${
        overlay ? "absolute inset-x-0 top-0" : "relative"
      }`}
    >
      <Link href="/" className="relative z-50 flex items-center" onClick={() => setOpen(false)}>
        <Image src={logo} alt="Siscom" className="h-[2.2rem] w-auto md:h-[2.475rem]" priority />
      </Link>

      <div
        className={`hidden items-center gap-8 font-display text-sm font-medium md:flex ${
          overlay ? "text-white" : "text-body"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={overlay ? "transition-colors hover:text-white/70" : "transition-colors hover:text-ink"}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="relative z-50 flex items-center gap-3">
        <Link
          href="/contact"
          className={`hidden rounded-full border px-4 py-2 font-display text-sm font-medium transition-colors md:inline-flex ${
            overlay
              ? "border-white text-white hover:bg-white hover:text-ink"
              : "border-brand text-brand hover:bg-brand hover:text-white"
          }`}
        >
          Contact
        </Link>
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-brand px-4 py-2 text-white transition-colors hover:bg-brand-hover md:inline-flex"
        >
          <span className="font-display text-sm font-medium">Get Started</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M7 17L17 7M17 7H9M17 7v8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <button
          type="button"
          className={`flex items-center justify-center text-[1.5rem] md:hidden ${overlay ? "text-white" : "text-ink"}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-cream px-6 pb-10 pt-24 md:hidden">
          <div className="flex flex-1 flex-col justify-center">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-line py-5 first:border-t"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-display text-xs font-medium tracking-widest text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[2rem] font-medium leading-none tracking-tight text-ink">
                    {link.label}
                  </span>
                </span>
                <ArrowUpRight className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-8">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-display text-sm font-medium text-white"
            >
              Get Started
              <ArrowUpRight />
            </Link>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-ink">
                {site.email}
              </a>
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
                WhatsApp {site.phoneDisplay}
              </a>
              <span>{site.location}</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
