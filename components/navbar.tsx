"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/assets/images/siscom-logo.png";
import { CloseIcon, MenuIcon } from "./icons";
import { navLinks } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 flex w-full items-center justify-between px-6 py-5 md:px-12 lg:px-20">
      <Link href="/" className="relative flex items-center">
        <Image src={logo} alt="Siscom" className="h-8 w-auto md:h-9" priority />
      </Link>

      <div className="hidden items-center gap-8 text-sm font-normal text-body md:flex">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="transition-colors hover:text-ink">
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/contact"
          className="hidden rounded-full border border-brand px-4 py-2 text-sm text-brand transition-colors hover:bg-brand hover:text-white md:inline-flex"
        >
          Contact
        </Link>
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-brand px-4 py-2 text-white transition-colors hover:bg-brand-hover md:inline-flex"
        >
          <span className="text-sm font-normal">Get Started</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M7 17L17 7M17 7H9M17 7v8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <button
          type="button"
          className="flex items-center justify-center text-[1.5rem] text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-line bg-cream px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4 text-body">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-base hover:text-ink">
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-max items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
