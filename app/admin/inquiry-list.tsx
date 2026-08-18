"use client";

import { useRouter } from "next/navigation";
import { deleteInquiryAction, markReadAction } from "./actions";
import type { Inquiry } from "@/lib/inquiries";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-KE", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function InquiryList({ items }: { items: Inquiry[] }) {
  const router = useRouter();

  if (items.length === 0) {
    return (
      <p className="border-t border-line pt-10 text-body">
        No responses yet. New contact form messages will show up here.
      </p>
    );
  }

  return (
    <div className="flex flex-col">
      {items.map((item) => (
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
            <div className="flex flex-col gap-2 text-sm text-body">
              <a className="underline underline-offset-4" href={`mailto:${item.email}`}>
                {item.email}
              </a>
              {item.phone ? (
                <a className="underline underline-offset-4" href={`https://wa.me/${item.phone.replace(/\D/g, "")}`}>
                  {item.phone}
                </a>
              ) : null}
            </div>
            <p className="mt-5 whitespace-pre-wrap text-base leading-relaxed text-ink">{item.message}</p>
            <form action={deleteInquiryAction} className="mt-6">
              <input type="hidden" name="id" value={item.id} />
              <button
                type="submit"
                className="text-sm text-muted underline underline-offset-4 hover:text-brand"
              >
                Delete
              </button>
            </form>
          </div>
        </details>
      ))}
    </div>
  );
}
