import { ReactNode } from "react";
import { useInView } from "../hooks";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "figure" | "article";
}

/** Fade-up wrapper driven by IntersectionObserver (CSS handles reduced-motion). */
export function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);
  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

interface LineTitleProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
}

/** Line-mask reveal for display headlines. */
export function LineTitle({ lines, className = "", lineClassName = "" }: LineTitleProps) {
  const { ref, inView } = useInView<HTMLHeadingElement>(0.3);
  return (
    <h2 ref={ref} className={`${inView ? "is-in" : ""} ${className}`}>
      {lines.map((line, i) => (
        <span className="line-mask" key={i}>
          <span
            className="line-inner"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <span className={lineClassName}>{line}</span>
          </span>
        </span>
      ))}
    </h2>
  );
}
