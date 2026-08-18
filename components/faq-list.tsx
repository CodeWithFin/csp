"use client";

import { useState } from "react";
import { MinusCircle, PlusCircle } from "./icons";

type FaqItemData = { q: string; a: string };

function FaqItem({
  item,
  index,
  numbered,
  isOpen,
  onToggle,
}: {
  item: FaqItemData;
  index: number;
  numbered: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="group cursor-pointer border-b border-line pb-6">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3 className="pr-4 text-lg font-medium text-ink md:text-xl">
          {numbered ? `${index + 1}. ` : ""}
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
}

export function FaqList({
  items,
  numbered = true,
}: {
  items: FaqItemData[];
  numbered?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  const left = items.map((item, i) => ({ item, i })).filter((_, i) => i % 2 === 0);
  const right = items.map((item, i) => ({ item, i })).filter((_, i) => i % 2 === 1);

  function itemProps(i: number, item: FaqItemData) {
    return {
      item,
      index: i,
      numbered,
      isOpen: open === i,
      onToggle: () => setOpen(open === i ? null : i),
    };
  }

  return (
    <>
      <div className="flex flex-col gap-y-6 md:hidden">
        {items.map((item, i) => (
          <FaqItem key={item.q} {...itemProps(i, item)} />
        ))}
      </div>
      <div className="hidden grid-cols-2 items-start gap-x-12 md:grid">
        {[left, right].map((column, col) => (
          <div key={col} className="flex flex-col gap-y-6">
            {column.map(({ item, i }) => (
              <FaqItem key={item.q} {...itemProps(i, item)} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
