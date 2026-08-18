import type { StaticImageData } from "next/image";
import bulkSmsImage from "@/assets/images/bulk-sms.jpg";
import campaignImage from "@/assets/images/campain.jpg";
import leadCaptureImage from "@/assets/images/lead-capture.jpg";
import oneConnectionImage from "@/assets/images/one-connection.jpg";
import surveyImage from "@/assets/images/voting.jpg";
import votingImage from "@/assets/images/voting-1.jpg";

export const site = {
  name: "Siscom Connect",
  shortName: "Siscom",
  wordmark: "Siscom Connect",
  tagline: "One connection. Every Kenyan network.",
  description:
    "Bulk SMS, USSD, WhatsApp and CAK-registered shortcodes & sender IDs on a single account, with a person on the other end of the phone when you need one.",
  email: "tech@siscom.tech",
  phoneDisplay: "+254 720 935482",
  phoneTel: "+254720935482",
  whatsapp: "254720935482",
  whatsappUrl: "https://wa.me/254720935482",
  location: "Nairobi, Kenya",
  url: "https://siscom.co.ke",
};

export const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/services/shortcodes", label: "Shortcodes" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export const services: {
  slug: string;
  href: string;
  number: string;
  title: string;
  tags: string[];
  blurb: string;
  featured?: boolean;
}[] = [
  {
    slug: "bulk-sms",
    href: "/services/bulk-sms",
    number: "01",
    title: "Bulk SMS",
    tags: ["Delivery reports", "Smart routing", "Scheduling"],
    blurb:
      "Send at scale across Safaricom, Airtel and Telkom with live delivery reports and smart routing.",
  },
  {
    slug: "ussd",
    href: "/services/ussd",
    number: "02",
    title: "USSD codes",
    tags: ["Any handset", "Menu builder", "Payments"],
    blurb:
      "Menu-driven, internet-free experiences that work on any handset, for sign-ups, payments and support.",
  },
  {
    slug: "whatsapp",
    href: "/services/whatsapp",
    number: "03",
    title: "WhatsApp",
    tags: ["Templates", "Media", "Handoff"],
    blurb:
      "Turn one-way alerts into two-way conversations, with templates, media and support handoff.",
  },
  {
    slug: "shortcodes",
    href: "/services/shortcodes",
    number: "04",
    title: "Shortcodes & Sender IDs",
    tags: ["Shared or dedicated", "CAK-aligned", "All 3 networks"],
    blurb:
      "Shared or dedicated shortcodes plus CAK-aligned sender ID registration on all three networks.",
    featured: true,
  },
  {
    slug: "mpesa-integration",
    href: "/services/mpesa-integration",
    number: "05",
    title: "M-Pesa integration",
    tags: ["STK Push", "B2C", "Reconciliation"],
    blurb:
      "STK Push, B2C and reconciliation wired directly into your messaging and USSD flows.",
  },
  {
    slug: "two-way",
    href: "/services/shortcodes",
    number: "06",
    title: "Two-way & automation",
    tags: ["Keywords", "Auto-replies", "Webhooks"],
    blurb:
      "Keyword routing, auto-responders and webhooks so replies land where your team already works.",
  },
];

export const shortcodeFeatures = [
  "Shared and dedicated shortcode options",
  "Alphanumeric sender ID on Safaricom, Airtel & Telkom",
  "CAK-aligned registration handled on your behalf",
  "Two-way messaging for genuine replies, not just blasts",
  "Keyword routing with configurable auto-responses",
  "Ready-made flows for campaigns and voting",
  "Lead capture and paid-subscription management",
  "Built-in opt-in / opt-out ledger for compliance",
  "Every inbound message pushed to your webhook",
  "Bundles cleanly with bulk SMS, USSD and WhatsApp",
];

export const whyChoose = [
  "A short, memorable code lifts response and recall over a long mobile number.",
  "A registered sender ID builds trust the moment your name appears on the screen.",
  "We carry the CAK registration process for you, with no separate admin fee.",
  "Two-way flows mean customers can actually talk back, not just receive.",
  "Opt-in and opt-out are tracked automatically, so compliance isn't manual work.",
  "Support is a phone call or WhatsApp message away, day or night.",
];

export const useCases: {
  title: string;
  body: string;
  tags: string[];
  image?: StaticImageData;
}[] = [
  {
    title: "Campaigns",
    body: "Reply-to-win promotions and interactive polls on one code.",
    tags: ["Promotions", "Polls"],
    image: campaignImage,
  },
  {
    title: "Voting",
    body: "Keyword-based voting with live tallies and duplicate checks.",
    tags: ["Live tallies", "Keywords"],
    image: votingImage,
  },
  {
    title: "Lead capture",
    body: "A text-in keyword turns adverts into a qualified contact list.",
    tags: ["Keywords", "CRM"],
    image: leadCaptureImage,
  },
  {
    title: "Subscriptions",
    body: "Paid opt-in content like tips, alerts and updates, with auto-renewal.",
    tags: ["Opt-in", "Billing"],
    image: bulkSmsImage,
  },
  {
    title: "Support lines",
    body: "A short number customers can text for help, routed to your desk.",
    tags: ["Two-way", "Handoff"],
    image: oneConnectionImage,
  },
  {
    title: "Surveys & NPS",
    body: "Two-way surveys sent from a sender ID people already recognise.",
    tags: ["NPS", "Sender ID"],
    image: surveyImage,
  },
];

export const howItWorks = [
  {
    title: "Pick shared or dedicated",
    body: "Shared shortcodes launch fast on a sub-keyword of an existing code. A dedicated code is yours alone, with full control over keywords and branding.",
  },
  {
    title: "We register your sender ID",
    body: "Submitted to Safaricom, Airtel and Telkom under the CAK framework, no extra admin fee. Most approvals land within 1–3 business days.",
  },
  {
    title: "Set up keywords & auto-replies",
    body: "Configure routing and responses from the dashboard or via API. Inbound texts hit your webhook as they arrive.",
  },
  {
    title: "Go live",
    body: "Publish the code across your marketing and track opt-ins, replies and volume from one screen.",
  },
  {
    title: "Stay compliant, automatically",
    body: "The opt-in / opt-out ledger and STOP-to-unsubscribe enforcement keep two-way messaging within ODPC and CAK rules.",
  },
];

export const shortcodeTiers = [
  {
    name: "Shared shortcode",
    featured: false,
    points: [
      "Sub-keyword on a shared code",
      "Two-way SMS + keyword routing",
      "Fastest go-live",
      "Standard support",
    ],
  },
  {
    name: "Dedicated shortcode",
    featured: true,
    points: [
      "Your own shortcode",
      "Unrestricted keyword control",
      "Branded sender ID included",
      "24/7 phone & WhatsApp support",
    ],
  },
  {
    name: "Enterprise",
    featured: false,
    points: [
      "Multiple codes & sender IDs",
      "Custom SLAs",
      "CRM / helpdesk integrations",
      "Dedicated account manager",
    ],
  },
];

export const shortcodeFaqs = [
  {
    q: "How do I register a sender ID in Kenya?",
    a: "Alphanumeric sender IDs are registered with Safaricom, Airtel and Telkom under the CAK framework. We handle the submission during onboarding. You'll need a signed, stamped authorisation letter on company letterhead, and most IDs clear in 1–3 business days.",
  },
  {
    q: "What's the difference between a shortcode and a sender ID?",
    a: "A shortcode is the number customers text in to (e.g. 40XXX). It enables two-way conversation. A sender ID is the name customers see when a message is sent to them (e.g. SISCOM). It's one-way branding. Most businesses use both together.",
  },
  {
    q: "Can customers reply to my messages?",
    a: "Yes. Shortcodes support genuine two-way SMS. Replies are matched to keywords you configure and can trigger an auto-response or route straight to your team via webhook.",
  },
  {
    q: "How do you handle opt-in and opt-out?",
    a: "Every subscription and STOP request is logged automatically in an opt-in/opt-out ledger, so your two-way campaigns stay compliant with ODPC and CAK rules without manual tracking.",
  },
  {
    q: "Can this bundle with bulk SMS, USSD and WhatsApp?",
    a: "Yes. Shortcodes sit on the same account as the rest of our services, so you get one bill and one support contact instead of juggling providers.",
  },
];

export const generalFaqs = [
  {
    q: "How quickly can I get started?",
    a: "A shared shortcode with a sub-keyword can go live as soon as your account is opened. Sender ID registration typically clears in 1–3 business days once we have your signed authorisation letter. Dedicated codes and USSD take longer because they depend on network allocation.",
  },
  {
    q: "What are the delivery rates?",
    a: "We route across Safaricom, Airtel and Telkom and surface live delivery reports so you can see what landed. Rates vary by destination network and traffic class. We'll walk you through expected performance for your use case rather than quoting a generic figure.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "Pricing is quote-based because volume, code type and channels differ by client. There is no separate admin fee for sender ID registration. We'll outline any minimums clearly before you sign.",
  },
  {
    q: "How does M-Pesa integration work?",
    a: "STK Push, B2C payouts and reconciliation sit on the same account as your SMS and USSD. A customer can receive a prompt from a USSD session or an SMS keyword, pay, and the result is posted back to your webhook.",
  },
  {
    q: "Can I schedule messages?",
    a: "Yes. Bulk SMS supports scheduling, personalisation and smart routing. You can also trigger sends from your own systems via API.",
  },
  {
    q: "What support do I get?",
    a: "A person in Nairobi, not a ticket queue. Standard plans include email and WhatsApp; dedicated and enterprise plans add 24/7 phone and WhatsApp with a named contact.",
  },
];
