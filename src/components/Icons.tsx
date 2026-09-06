import type { ReactNode } from "react";

interface IconProps {
  name: string;
  className?: string;
}

/* Hand-drawn geometric line icons — stroke inherits currentColor */
export function Icon({ name, className = "w-5 h-5" }: IconProps) {
  const paths: Record<string, ReactNode> = {
    wave: (
      <>
        <path d="M7 11.5V6.8a1.4 1.4 0 0 1 2.8 0v3.4" />
        <path d="M9.8 9.6V5.2a1.4 1.4 0 0 1 2.8 0v4.6" />
        <path d="M12.6 9.8V6.2a1.4 1.4 0 0 1 2.8 0v5.6" />
        <path d="M15.4 11.8V8.6a1.4 1.4 0 0 1 2.8 0v6.2c0 3.9-2.6 6.4-6.1 6.4-3.1 0-4.6-1.6-6.2-4.5L4 13.2a1.5 1.5 0 0 1 2.5-1.6L8.3 14" />
        <path d="M20.5 4.5c.9.6 1.7 1.6 2 3" />
        <path d="M3.6 4.6C2.8 5.3 2.2 6.3 2 7.6" />
      </>
    ),
    sound: (
      <>
        <path d="M4 10v4h3l4 3.5v-11L7 10H4z" />
        <path d="M14.5 9.5a3.6 3.6 0 0 1 0 5" />
        <path d="M17 7a7 7 0 0 1 0 10" />
        <path d="M19.6 4.8a10.6 10.6 0 0 1 0 14.4" />
      </>
    ),
    bow: (
      <>
        <circle cx="7.5" cy="5.5" r="2.2" />
        <path d="M9.5 7.5c3 1 5.5 3 7 6" />
        <path d="M9.5 7.5 6 11l3.5 3.5L8 21" />
        <path d="M12 14.5 15 21" />
        <path d="M17 17c1.5 1 2.5 2.3 3 4" />
      </>
    ),
    gap: (
      <>
        <path d="M8 8v8" />
        <path d="M16 8v8" />
        <path d="M9.5 12h5" />
        <path d="M2 12h3.5" />
        <path d="M18.5 12H22" />
        <path d="M8 8c-1.5 0-2.5 1.8-2.5 4S6.5 16 8 16" />
        <path d="M16 8c1.5 0 2.5 1.8 2.5 4s-1 4-2.5 4" />
      </>
    ),
    dial: (
      <>
        <path d="M4 16.5a8 8 0 1 1 16 0" />
        <path d="M12 16.5 15.8 9" />
        <circle cx="12" cy="16.5" r="1.4" />
        <path d="M3.5 19.5h17" />
      </>
    ),
    loop: (
      <>
        <path d="M4.5 12a7.5 7.5 0 0 1 13-5.2l2 1.8" />
        <path d="M19.5 4v4.6h-4.6" />
        <path d="M19.5 12a7.5 7.5 0 0 1-13 5.2l-2-1.8" />
        <path d="M4.5 20v-4.6h4.6" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.8 2.4 4.2 5.4 4.2 9s-1.4 6.6-4.2 9c-2.8-2.4-4.2-5.4-4.2-9S9.2 5.4 12 3z" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5.2l3.4 2" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.5 15.5 5 5" />
      </>
    ),
    speaker: (
      <>
        <path d="M4 10v4h3l4 3.5v-11L7 10H4z" />
        <path d="M14.5 9.5a3.6 3.6 0 0 1 0 5" />
        <path d="M17 7a7 7 0 0 1 0 10" />
      </>
    ),
    chevron: <path d="m6 9 6 6 6-6" />,
    arrowRight: (
      <>
        <path d="M4 12h16" />
        <path d="m14 6 6 6-6 6" />
      </>
    ),
    arrowLeft: (
      <>
        <path d="M20 12H4" />
        <path d="m10 6-6 6 6 6" />
      </>
    ),
    arrowUp: (
      <>
        <path d="M12 20V4" />
        <path d="m6 10 6-6 6 6" />
      </>
    ),
    spark: (
      <>
        <path d="M12 2v6" />
        <path d="M12 16v6" />
        <path d="M2 12h6" />
        <path d="M16 12h6" />
        <path d="m5 5 4 4" />
        <path d="m15 15 4 4" />
        <path d="m19 5-4 4" />
        <path d="m9 15-4 4" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5V5" />
        <path d="M12 19v2.5" />
        <path d="M2.5 12H5" />
        <path d="M19 12h2.5" />
        <path d="m4.9 4.9 1.8 1.8" />
        <path d="m17.3 17.3 1.8 1.8" />
        <path d="m19.1 4.9-1.8 1.8" />
        <path d="m6.7 17.3-1.8 1.8" />
      </>
    ),
    moon: <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />,
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5 5-2z" />
      </>
    ),
    check: <path d="m4.5 12.5 5 5 10-11" />,
    x: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
    stamp: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="6" />
        <path d="M12 3v2.5" />
        <path d="M12 18.5V21" />
        <path d="M3 12h2.5" />
        <path d="M18.5 12H21" />
      </>
    ),
    tape: (
      <>
        <rect x="3" y="8" width="18" height="8" rx="1" />
        <path d="m3 8 3 8" />
        <path d="m21 8-3 8" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.spark}
    </svg>
  );
}
