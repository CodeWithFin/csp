"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteInquiryAction, markReadAction } from "./actions";
import type { Inquiry } from "@/lib/inquiries";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-KE", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function waLink(phone: string, name: string) {
  const digits = phone.replace(/\D/g, "");
  const text = encodeURIComponent(`Hi ${name}, this is Siscom. Thanks for your message.`);
  return `https://wa.me/${digits}?text=${text}`;
}

export function InquiryList({ items }: { items: Inquiry[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "new">("all");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (filter === "new" && item.read) return false;
      if (!q) return true;
      return [item.name, item.email, item.phone, item.interest, item.message]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [items, query, filter]);

  if (items.length === 0) {
    return (
      <p className="border-t border-line pt-10 text-body">
        No responses yet. New contact form messages will show up here.
      </p>
    );
  }

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search name, email or message"
          className="w-full rounded-full border border-line bg-white px-4 py-3 text-ink outline-none focus:border-ink md:max-w-md"
        />
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full px-4 py-2 text-sm ${
              filter === "all" ? "bg-ink text-white" : "border border-line text-ink"
            }`}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setFilter("new")}
            className={`rounded-full px-4 py-2 text-sm ${
              filter === "new" ? "bg-ink text-white" : "border border-line text-ink"
            }`}
          >
            New
          </button>
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="text-body">No messages match that search.</p>
      ) : (
        <div className="flex flex-col">
          {visible.map((item) => (
            <details
              key={item.id}
              className="group border-b border-line py-6"
              onToggle={(e) => {
                if (!item.read && e.currentTarget.open) {
                  const data = new FormData();
                  data.set("id", item.id);
                  void markReadAction(data).then(() => router.refresh());
                }
              }}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    {!item.read ? (
                      <span className="rounded-full bg-brand px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-white">
                        New
                      </span>
                    ) : null}
                    <span className="font-display text-xl font-medium tracking-tight text-ink">{item.name}</span>
                  </div>
                  <p className="mt-2 text-sm text-body">
                    {item.interest || "General"} · {formatDate(item.createdAt)}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-muted group-open:hidden">Open</span>
                <span className="hidden shrink-0 text-sm text-muted group-open:inline">Close</span>
              </summary>
              <div className="mt-6 max-w-3xl">
                <p className="whitespace-pre-wrap text-base leading-relaxed text-ink">{item.message}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${item.email}?subject=${encodeURIComponent(`Re: ${item.interest || "your Siscom enquiry"}`)}`}
                    className="rounded-full bg-brand px-4 py-2 text-sm text-white hover:bg-brand-hover"
                  >
                    Reply by email
                  </a>
                  {item.phone ? (
                    <a
                      href={waLink(item.phone, item.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#25D366] px-4 py-2 text-sm text-white hover:bg-[#1ebe5d]"
                    >
                      Reply on WhatsApp
                    </a>
                  ) : null}
                  <form
                    action={deleteInquiryAction}
                    onSubmit={(e) => {
                      if (!confirm("Delete this response?")) e.preventDefault();
                    }}
                  >
                    <input type="hidden" name="id" value={item.id} />
                    <button type="submit" className="rounded-full border border-line px-4 py-2 text-sm text-muted hover:text-brand">
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            </details>
          ))}
        </div>
      )}
    </div>
  );
}
