"use client";

import { useState } from "react";
import { MinusCircle, PlusCircle } from "./icons";

export function FaqList({
  items,
  numbered = true,
}: {
  items: { q: string; a: string }[];
  numbered?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="group cursor-pointer border-b border-line pb-6">
            <button
              type="button"
              className="flex w-full items-center justify-between py-4 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <h3 className="pr-4 text-lg font-medium text-ink md:text-xl">
                {numbered ? `${i + 1}. ` : ""}
                {item.q}
              </h3>
              {isOpen ? (
                <MinusCircle className="shrink-0 text-2xl text-ink" />
              ) : (
                <PlusCircle className="shrink-0 text-2xl text-ink transition-transform group-hover:rotate-90" />
              )}
            </button>
            {isOpen && (
              <div className="pr-12">
                <p className="pb-2 text-base leading-relaxed text-body">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
