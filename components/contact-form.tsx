"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

const interests = [
  "Bulk SMS",
  "USSD",
  "WhatsApp",
  "Shortcodes & Sender IDs",
  "M-Pesa integration",
  "Not sure yet",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Interest: ${interest}`,
      "",
      message,
    ].join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Siscom enquiry — ${interest || "General"}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-white p-8">
        <h3 className="font-display text-2xl font-medium tracking-tight text-ink">Your mail client should be open.</h3>
        <p className="mt-3 text-body">
          If nothing appeared, write to{" "}
          <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          and we&apos;ll come back to you from Nairobi.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-body">
          Name
          <input
            required
            name="name"
            className="rounded-full border border-line bg-white px-4 py-3 text-ink outline-none focus:border-ink"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-body">
          Work email
          <input
            required
            type="email"
            name="email"
            className="rounded-full border border-line bg-white px-4 py-3 text-ink outline-none focus:border-ink"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-body">
          Phone / WhatsApp
          <input
            name="phone"
            className="rounded-full border border-line bg-white px-4 py-3 text-ink outline-none focus:border-ink"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-body">
          I&apos;m interested in
          <select
            name="interest"
            defaultValue="Shortcodes & Sender IDs"
            className="field-select rounded-full border border-line bg-white px-4 py-3 text-ink outline-none focus:border-ink"
          >
            {interests.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-body">
        How can we help?
        <textarea
          required
          name="message"
          rows={5}
          className="rounded-2xl border border-line bg-white px-4 py-3 text-ink outline-none focus:border-ink"
        />
      </label>
      <button
        type="submit"
        className="inline-flex w-max items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm text-white transition-colors hover:bg-brand-hover"
      >
        Send message
      </button>
    </form>
  );
}
