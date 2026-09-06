import { GOODBYES } from "../data/greetings";
import { useReducedMotion } from "../hooks";
import { Icon } from "./Icons";
import { Ticker } from "./Ticker";

const LINKS = [
  { label: "The Wall", href: "#top" },
  { label: "Index", href: "#index" },
  { label: "Anatomy", href: "#anatomy" },
  { label: "Clocks", href: "#clocks" },
  { label: "Quiz", href: "#quiz" },
  { label: "Notes", href: "#notes" },
];

export function Footer() {
  const reduced = useReducedMotion();

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <footer className="bg-pine-950 text-bone">
      {/* goodbye relay */}
      <div className="bg-vermilion text-pine-950">
        <Ticker
          items={GOODBYES}
          reverse
          speed={40}
          className="py-3 font-display font-bold text-sm sm:text-base tracking-wide"
          separator="✶"
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <p className="font-display font-extrabold tracking-tight text-[clamp(2.6rem,7vw,5rem)] leading-[0.95]">
              Wave back
              <br />
              <span className="text-marigold">soon.</span>
            </p>
            <p className="mt-5 text-sm leading-relaxed text-bone/55 max-w-sm">
              Every goodbye in the ticker above is also a hello waiting for its return trip. The
              atlas stays open.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-bone/40">Chapters</p>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="u-link text-sm font-medium text-bone/80 hover:text-marigold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-bone/40">Colophon</p>
            <p className="mt-4 text-sm leading-relaxed text-bone/55">
              Compiled from field grammar, Ethnologue counts, and seven thousand years of doorways.
              Set in Bricolage Grotesque & Spline Sans.
            </p>
            <button
              onClick={toTop}
              className="mt-6 self-start inline-flex items-center gap-2 border border-pine-600 px-5 py-3 text-sm font-bold uppercase tracking-wider text-bone/80 hover:border-marigold hover:text-marigold hover:-translate-y-0.5 transition-all duration-300"
            >
              <Icon name="arrowUp" className="w-4 h-4" />
              Back to the wall
            </button>
          </div>
        </div>

        <div className="mt-14 border-t border-pine-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-bone/35">
          <p>
            <span className="font-display font-bold text-bone/60">The Hello Atlas</span> — field guide Nº 01 ·
            first contact, everywhere
          </p>
          <p className="flex items-center gap-2">
            <Icon name="wave" className="w-4 h-4 text-marigold" />
            no two hellos alike · say one today
          </p>
        </div>
      </div>
    </footer>
  );
}
