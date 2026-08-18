import { NextResponse } from "next/server";
import { createInquiry } from "@/lib/inquiries";

const interests = new Set([
  "Bulk SMS",
  "USSD",
  "WhatsApp",
  "Shortcodes & Sender IDs",
  "M-Pesa integration",
  "Not sure yet",
]);

function clean(value: unknown, max: number) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 40);
  const interest = clean(body.interest, 80);
  const message = String(body.message || "").trim().slice(0, 4000);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (interest && !interests.has(interest)) {
    return NextResponse.json({ error: "Choose a service from the list." }, { status: 400 });
  }

  await createInquiry({ name, email, phone, interest, message });
  return NextResponse.json({ ok: true });
}
