import { TICKER_WORDS } from "./data/greetings";
import { Anatomy } from "./components/Anatomy";
import { FieldNotes } from "./components/FieldNotes";
import { Footer } from "./components/Footer";
import { GreetingIndex } from "./components/GreetingIndex";
import { HelloWall } from "./components/HelloWall";
import { Quiz } from "./components/Quiz";
import { Ticker } from "./components/Ticker";
import { TimeZones } from "./components/TimeZones";

const NAV = [
  { label: "Index", href: "#index" },
  { label: "Anatomy", href: "#anatomy" },
  { label: "Clocks", href: "#clocks" },
  { label: "Quiz", href: "#quiz" },
  { label: "Notes", href: "#notes" },
];

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-pine-950 text-bone font-body antialiased">
      {/* film grain */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* greeting relay ticker */}
      <div className="bg-marigold text-pine-950">
        <Ticker
          items={TICKER_WORDS}
          speed={52}
          className="py-2.5 font-display font-bold text-sm tracking-wide"
        />
      </div>

      {/* sticky nav */}
      <header className="sticky top-0 z-50 border-b border-pine-800 bg-pine-950/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid place-items-center w-9 h-9 bg-marigold text-pine-950 font-display font-extrabold text-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
              hi
            </span>
            <span className="font-display font-bold text-lg tracking-tight">
              The Hello <span className="text-marigold">Atlas</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="u-link text-[11px] font-bold uppercase tracking-[0.2em] text-bone/60 hover:text-marigold transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <span className="md:hidden text-[10px] uppercase tracking-[0.2em] text-bone/40 font-semibold">
            field guide Nº 01
          </span>
        </div>
      </header>

      <main>
        <HelloWall />
        <GreetingIndex />
        <Anatomy />
        <TimeZones />
        <Quiz />
        <FieldNotes />
      </main>

      <Footer />
    </div>
  );
}
