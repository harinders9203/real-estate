import type { ReactNode } from "react";

type Props = { items: ReactNode[]; className?: string; speed?: number; reverse?: boolean };

export default function Marquee({ items, className = "", speed = 40, reverse = false }: Props) {
  const row = (hidden: boolean) => (
    <div className="marquee__group" aria-hidden={hidden}>
      {items.map((item, i) => (
        <div className="marquee__item" key={i}>
          {item}
        </div>
      ))}
    </div>
  );
  return (
    <div
      className={`marquee ${reverse ? "marquee--reverse" : ""} ${className}`}
      style={{ ["--marquee-speed" as string]: `${speed}s` }}
    >
      {row(false)}
      {row(true)}
    </div>
  );
}
