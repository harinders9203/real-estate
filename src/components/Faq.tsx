"use client";

import { useState } from "react";
import { PlusIcon } from "./Icons";

type Item = { q: string; a: string };

export default function Faq({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq__item ${isOpen ? "is-open" : ""}`} key={item.q}>
            <button className="faq__q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
              <span>{item.q}</span>
              <span className="faq__icon">
                <PlusIcon size={18} />
              </span>
            </button>
            <div className="faq__a">
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
