import { useEffect, useRef, useState, type CSSProperties } from "react";
import { GREETINGS } from "../data/greetings";
import { useInView, useNow, useReducedMotion, useScramble } from "../hooks";
import { Icon } from "./Icons";

const DRIFT_GLYPHS = [
  { ch: "漢", top: "6%", left: "64%", size: "11rem", dur: "15s", rot: "-5deg" },
  { ch: "अ", top: "58%", left: "80%", size: "9rem", dur: "12s", rot: "4deg" },
  { ch: "ع", top: "20%", left: "88%", size: "8rem", dur: "17s", rot: "6deg" },
  { ch: "ㄱ", top: "74%", left: "58%", size: "7rem", dur: "13s", rot: "-6deg" },
  { ch: "Γ", top: "38%", left: "50%", size: "6rem", dur: "16s", rot: "3deg" },
  { ch: "¿", top: "84%", left: "6%", size: "8rem", dur: "14s", rot: "-4deg" },
  { ch: "あ", top: "8%", left: "4%", size: "7rem", dur: "18s", rot: "5deg" },
];

const STATS = [
  { value: "7,164", label: "living languages spoken on Earth right now — Ethnologue" },
  { value: "31", label: "doors hung on this wall, six continents deep" },
  { value: "≈1.5 s", label: "the average hello — one word plus one gesture" },
];

export function HelloWall() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [waves, setWaves] = useState(0);
  const [waving, setWaving] = useState(false);
  const reduced = useReducedMotion();
  const { ref, inView } = useInView<HTMLElement>(0.2);
  const now = useNow(1000);
  const waveTimer = useRef<number | null>(null);

  const greeting = GREETINGS[idx];
  const display = useScramble(greeting.word, inView && !reduced, 620);

  /* auto-travel every few seconds */
  useEffect(() => {
    if (paused || !inView || reduced) return;
    const id = window.setInterval(() => setIdx((i) => (i + 1) % GREETINGS.length), 4200);
    return () => window.clearInterval(id);
  }, [paused, inView, reduced]);

  useEffect(() => () => {
    if (waveTimer.current) window.clearTimeout(waveTimer.current);
  }, []);

  const next = () => setIdx((i) => (i + 1) % GREETINGS.length);
  const prev = () => setIdx((i) => (i - 1 + GREETINGS.length) % GREETINGS.length);

  const waveBack = () => {
    setWaves((w) => w + 1);
    setWaving(false);
    requestAnimationFrame(() => setWaving(true));
    if (waveTimer.current) window.clearTimeout(waveTimer.current);
    waveTimer.current = window.setTimeout(() => setWaving(false), 950);
  };

  const localTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const isRtl = greeting.id === "marhaban" || greeting.id === "salam";
  const progress = ((idx + 1) / GREETINGS.length) * 100;

  return (
    <section
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative overflow-hidden bg-pine-950 text-bone"
    >
      {/* ambient vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 620px at 18% -10%, rgba(240,180,59,0.13), transparent 60%), radial-gradient(900px 700px at 95% 110%, rgba(228,87,46,0.14), transparent 62%)",
        }}
      />
      {/* drifting glyphs */}
      {DRIFT_GLYPHS.map((g, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="drift pointer-events-none absolute select-none font-display font-bold text-bone/[0.06]"
          style={
            {
              top: g.top,
              left: g.left,
              fontSize: g.size,
              lineHeight: 1,
              "--drift-dur": g.dur,
              "--drift-rot": g.rot,
            } as CSSProperties
          }
        >
          {g.ch}
        </span>
      ))}

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          {/* main wall */}
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-semibold tracking-[0.28em] uppercase text-sage">
              <span>Field guide Nº 01</span>
              <span className="h-px w-14 bg-pine-600" />
              <span className="text-bone/60">First contact, everywhere</span>
              <span className="ml-auto hidden sm:flex items-center gap-2 text-bone/40 normal-case tracking-normal font-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-vermilion pulse-dot" />
                your local time · {localTime}
              </span>
            </div>

            {/* the travelling word */}
            <button
              onClick={next}
              dir={isRtl ? "rtl" : "ltr"}
              title="Click to travel to the next greeting"
              className="group mt-8 block w-full cursor-pointer select-none text-left focus:outline-none"
            >
              <span
                className="block font-display font-extrabold tracking-tight leading-[0.98] text-marigold break-words min-h-[1em] text-[clamp(3.2rem,13vw,9.5rem)] transition-colors duration-300 group-hover:text-bone"
                style={{ fontVariationSettings: "'opsz' 96" }}
              >
                {display}
                <span className="caret text-vermilion">_</span>
              </span>
              <span className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                {greeting.translit && (
                  <span className="font-display text-xl md:text-2xl font-semibold text-bone/90">
                    {greeting.translit}
                  </span>
                )}
                <span className="text-sm md:text-base text-sage italic">“{greeting.meaning}”</span>
              </span>
            </button>

            {/* meta strip */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 border-t border-pine-700">
              {[
                { k: "Language", v: greeting.language },
                { k: "Region", v: greeting.region },
                { k: "Says it like", v: `/${greeting.pronunciation}/` },
                { k: "Body says", v: greeting.gesture },
              ].map((cell) => (
                <div key={cell.k} className="border-b border-pine-700 py-4 pr-4 md:border-b-0 md:[&:not(:last-child)]:border-r">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-bone/40 font-semibold">{cell.k}</p>
                  <p className="mt-1.5 text-sm md:text-base font-medium leading-snug text-bone/90">{cell.v}</p>
                </div>
              ))}
            </div>

            {/* controls */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous greeting"
                className="grid place-items-center w-11 h-11 border border-pine-600 text-bone/70 hover:border-marigold hover:text-marigold hover:-translate-x-0.5 transition-all duration-300"
              >
                <Icon name="arrowLeft" className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next greeting"
                className="grid place-items-center w-11 h-11 border border-pine-600 text-bone/70 hover:border-marigold hover:text-marigold hover:translate-x-0.5 transition-all duration-300"
              >
                <Icon name="arrowRight" className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 min-w-0 flex-1 max-w-xs">
                <div className="h-[3px] flex-1 bg-pine-800 overflow-hidden">
                  <div
                    className="h-full bg-marigold transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="font-display text-sm font-semibold text-bone/60 tabular-nums whitespace-nowrap">
                  {String(idx + 1).padStart(2, "0")} / {GREETINGS.length}
                </span>
              </div>
              <p className="text-xs text-bone/35 italic">The word travels on its own — click it to hurry it along.</p>
            </div>
          </div>

          {/* rail */}
          <aside className="lg:col-span-4 flex flex-col gap-6 lg:border-l lg:border-pine-800 lg:pl-8">
            {STATS.map((s, i) => (
              <div key={s.value} className="border-t-2 border-pine-700 pt-3">
                <p className="font-display text-4xl md:text-5xl font-extrabold text-bone">{s.value}</p>
                <p className="mt-1 text-xs text-bone/50 leading-relaxed">{s.label}</p>
                {i === 2 && (
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-sage/70">word + gesture, timed</p>
                )}
              </div>
            ))}

            <button
              onClick={waveBack}
              className="group mt-auto flex items-center justify-between gap-4 border border-pine-600 bg-pine-900/60 px-5 py-4 text-left hover:border-marigold hover:bg-pine-900 transition-colors duration-300"
            >
              <span>
                <span className="block font-display text-lg font-bold text-bone">Wave back</span>
                <span className="block text-xs text-bone/50 mt-0.5">
                  {waves === 0 ? "someone, somewhere, said hi first" : `waved ${waves} time${waves === 1 ? "" : "s"} already`}
                </span>
              </span>
              <span
                className={`text-marigold transition-transform duration-300 group-hover:rotate-12 ${waving ? "waving" : ""}`}
              >
                <Icon name="wave" className="w-9 h-9" />
              </span>
            </button>

            <p
              className="hidden lg:block text-[10px] tracking-[0.4em] uppercase text-bone/25 text-right"
              style={{ writingMode: "vertical-rl" }}
            >
              The Hello Atlas — compiled at the edge of every conversation
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
