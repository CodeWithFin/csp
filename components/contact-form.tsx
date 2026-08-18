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
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setPending(true);
    const data = new FormData(e.currentTarget);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      interest: String(data.get("interest") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(json.error || "Could not send. Try again or WhatsApp us.");
        return;
      }
      setSent(true);
    } catch {
      setError("Could not send. Try again or WhatsApp us.");
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-white p-8">
        <h3 className="font-display text-2xl font-medium tracking-tight text-ink">Message received.</h3>
        <p className="mt-3 text-body">
          We&apos;ll come back to you from Nairobi. If it is urgent, WhatsApp{" "}
          <a className="underline underline-offset-4" href={site.whatsappUrl}>
            {site.phoneDisplay}
          </a>
          .
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
      {error ? <p className="text-sm text-brand">{error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-max items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm text-white transition-colors hover:bg-brand-hover disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
