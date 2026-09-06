import { useEffect, useRef, useState } from "react";

/* ---------- prefers-reduced-motion ---------- */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* ---------- intersection reveal ---------- */
export function useInView<T extends HTMLElement>(threshold = 0.18, once = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);
  return { ref, inView };
}

/* ---------- scramble / decode text ---------- */
const GLYPHS = "ABCDEFGHKMNPRSTUVXYZ*+×#—アこんにちはمرحبا你好अΓШŒÆ!?";

export function useScramble(target: string, active: boolean, durationMs = 640): string {
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(target);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (frame.current) window.clearInterval(frame.current);
    if (reduced || !active) {
      setDisplay(target);
      return;
    }
    const chars = Array.from(target);
    const totalFrames = Math.max(8, Math.round(durationMs / 28));
    let tick = 0;
    frame.current = window.setInterval(() => {
      tick += 1;
      const progress = tick / totalFrames;
      const settled = Math.floor(progress * chars.length);
      const next = chars
        .map((ch, i) => {
          if (ch === " ") return " ";
          if (i < settled) return ch;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");
      setDisplay(next);
      if (tick >= totalFrames) {
        setDisplay(target);
        if (frame.current) window.clearInterval(frame.current);
      }
    }, 28);
    return () => {
      if (frame.current) window.clearInterval(frame.current);
    };
  }, [target, active, reduced, durationMs]);

  return display;
}

/* ---------- ticking clock ---------- */
export function useNow(intervalMs = 1000): Date {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);
  return now;
}
