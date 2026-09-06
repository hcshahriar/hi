import { useEffect, useRef, useState } from "react";
import { ANATOMY } from "../data/greetings";
import { Icon } from "./Icons";
import { LineTitle, Reveal } from "./Reveal";

export function Anatomy() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  /* highlight the step currently crossing the middle of the viewport */
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.step ?? 0);
            setActive(i);
          }
        });
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const jumpTo = (i: number) => {
    stepRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="anatomy" className="scroll-mt-20 bg-pine-900 text-bone relative overflow-hidden">
      {/* faint grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(241,243,232,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(241,243,232,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* sticky column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <Reveal>
                <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.28em] uppercase text-marigold">
                  <span className="font-display text-sm">02</span>
                  <span className="h-px w-10 bg-marigold/50" />
                  Anatomy
                </p>
              </Reveal>
              <LineTitle
                lines={["Every hello", "has five organs."]}
                className="mt-5 font-display font-extrabold tracking-tight leading-[0.98] text-[clamp(2.4rem,5.5vw,4.2rem)]"
              />
              <Reveal delay={150}>
                <p className="mt-6 text-base leading-relaxed text-bone/65 max-w-md">
                  Strip any greeting on Earth down to its skeleton and the same five parts appear —
                  a sound, a movement, a measured distance, a social dial, and the echo it demands.
                  Scroll the specimen on the right.
                </p>
              </Reveal>

              {/* synced step nav */}
              <Reveal delay={250}>
                <ol className="mt-8 border-t border-pine-700">
                  {ANATOMY.map((step, i) => (
                    <li key={step.n}>
                      <button
                        onClick={() => jumpTo(i)}
                        className={`w-full flex items-center gap-4 border-b border-pine-700 py-3 text-left transition-all duration-300 ${
                          active === i ? "pl-3 text-marigold" : "text-bone/45 hover:text-bone/80 hover:pl-2"
                        }`}
                      >
                        <span className="font-display text-xs font-bold tabular-nums">{step.n}</span>
                        <span className="font-display text-lg font-semibold">{step.title}</span>
                        <span
                          className={`ml-auto h-[3px] bg-marigold transition-all duration-500 ${active === i ? "w-10" : "w-0"}`}
                        />
                      </button>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>

          {/* scrolling specimen cards */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {ANATOMY.map((step, i) => (
              <Reveal key={step.n} delay={i * 60}>
                <div
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  data-step={i}
                  className={`relative border p-7 sm:p-9 transition-colors duration-500 ${
                    active === i ? "border-marigold bg-pine-950" : "border-pine-700 bg-pine-950/50"
                  }`}
                >
                  <span
                    className={`absolute -top-5 right-6 font-display font-extrabold text-[4.5rem] leading-none transition-colors duration-500 ${
                      active === i ? "text-marigold/90" : "text-pine-700/60"
                    }`}
                    aria-hidden="true"
                  >
                    {step.n}
                  </span>
                  <div className="flex items-start gap-5">
                    <span
                      className={`mt-1 shrink-0 grid place-items-center w-12 h-12 border transition-colors duration-500 ${
                        active === i ? "border-marigold text-marigold" : "border-pine-600 text-sage"
                      }`}
                    >
                      <Icon name={step.icon} className="w-6 h-6" />
                    </span>
                    <div className="min-w-0 pr-14">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">{step.title}</h3>
                      <p className="mt-2 font-display text-lg font-semibold text-sage leading-snug">{step.body}</p>
                      <p className="mt-4 text-sm leading-relaxed text-bone/70">{step.detail}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={100}>
              <p className="text-xs uppercase tracking-[0.25em] text-bone/30 text-center">
                — end of dissection · the patient survived —
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
