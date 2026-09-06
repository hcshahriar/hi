import type { CSSProperties } from "react";

interface TickerProps {
  items: string[];
  reverse?: boolean;
  className?: string;
  speed?: number; // seconds per loop
  separator?: string;
}

/** Seamless looping marquee. Pauses on hover; CSS disables it under reduced motion. */
export function Ticker({ items, reverse = false, className = "", speed = 46, separator = "✳" }: TickerProps) {
  const row = (hidden: boolean) => (
    <div
      aria-hidden={hidden || undefined}
      className="flex items-center shrink-0"
    >
      {items.map((word, i) => (
        <span key={`${hidden}-${i}`} className="flex items-center">
          <span className="px-5 whitespace-nowrap">{word}</span>
          <span className="opacity-50 text-[0.6em]">{separator}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${className}`}>
      <div
        className={`marquee-track ${reverse ? "rev" : ""}`}
        style={{ "--marquee-speed": `${speed}s` } as CSSProperties}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
