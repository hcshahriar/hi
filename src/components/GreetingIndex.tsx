import { useEffect, useMemo, useRef, useState } from "react";
import { GREETINGS, REGIONS, Region } from "../data/greetings";
import { Icon } from "./Icons";
import { LineTitle, Reveal } from "./Reveal";

const FORMALITY_DOT: Record<string, string> = {
  casual: "bg-marigold",
  neutral: "bg-sage",
  formal: "bg-vermilion",
};

export function GreetingIndex() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<Region | "All">("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [ttsNote, setTtsNote] = useState<string | null>(null);
  const noteTimer = useRef<number | null>(null);

  useEffect(() => () => {
    if (noteTimer.current) window.clearTimeout(noteTimer.current);
    if (typeof window !== "undefined" && window.speechSynthesis) window.speechSynthesis.cancel();
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GREETINGS.filter((g) => {
      if (region !== "All" && g.region !== region) return false;
      if (!q) return true;
      return [g.word, g.translit ?? "", g.language, g.meaning, g.region]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [query, region]);

  const speak = (id: string, word: string, lang: string | null) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      flashNote("Speech synthesis isn't available in this browser.");
      return;
    }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word);
    if (lang) u.lang = lang;
    u.rate = 0.9;
    setSpeakingId(id);
    u.onend = () => setSpeakingId(null);
    u.onerror = () => {
      setSpeakingId(null);
      flashNote("No voice for this language on your device — try the phonetic line instead.");
    };
    try {
      window.speechSynthesis.speak(u);
    } catch {
      setSpeakingId(null);
    }
  };

  const flashNote = (msg: string) => {
    setTtsNote(msg);
    if (noteTimer.current) window.clearTimeout(noteTimer.current);
    noteTimer.current = window.setTimeout(() => setTtsNote(null), 3600);
  };

  return (
    <section id="index" className="scroll-mt-20 bg-mist text-pine-950">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.28em] uppercase text-vermilion">
            <span className="font-display text-sm">01</span>
            <span className="h-px w-10 bg-vermilion/50" />
            The Index
          </p>
        </Reveal>
        <div className="mt-5 grid lg:grid-cols-12 gap-8 items-end">
          <LineTitle
            lines={["Thirty-one ways", "to open a door."]}
            className="lg:col-span-8 font-display font-extrabold tracking-tight leading-[0.98] text-[clamp(2.4rem,6vw,4.6rem)]"
          />
          <Reveal className="lg:col-span-4" delay={150}>
            <p className="text-base leading-relaxed text-pine-700">
              Every entry below is a working door: what it literally means, how it sounds, what your
              hands should be doing, and one field note worth stealing. Open any row.
            </p>
          </Reveal>
        </div>

        {/* controls */}
        <Reveal className="mt-10" delay={100}>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <label className="relative flex-1 max-w-md">
              <span className="sr-only">Search greetings</span>
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-pine-600 pointer-events-none">
                <Icon name="search" className="w-5 h-5" />
              </span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a word, language, meaning…"
                className="w-full border-2 border-pine-900/80 bg-mist-soft pl-11 pr-4 py-3 text-sm font-medium placeholder:text-pine-600/60 focus:outline-none focus:border-vermilion transition-colors"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {REGIONS.map((r) => (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider border-2 transition-all duration-300 ${
                    region === r
                      ? "bg-pine-900 text-mist border-pine-900 -translate-y-0.5"
                      : "border-pine-900/25 text-pine-700 hover:border-pine-900 hover:text-pine-950"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine-600">
              Showing {results.length} of {GREETINGS.length} greetings
            </p>
            {ttsNote && (
              <p className="text-xs text-vermilion-deep font-medium" role="status">
                {ttsNote}
              </p>
            )}
          </div>
        </Reveal>

        {/* rows */}
        <div className="mt-6 border-t-2 border-pine-900">
          {results.map((g, i) => {
            const open = openId === g.id;
            return (
              <Reveal key={g.id} delay={Math.min(i * 40, 240)}>
                <article className={`border-b border-pine-900/20 ${open ? "bg-pine-900 text-mist" : "hover:bg-mist-soft"} transition-colors duration-300`}>
                  <button
                    onClick={() => setOpenId(open ? null : g.id)}
                    aria-expanded={open}
                    className="w-full text-left px-3 sm:px-5 py-5 grid grid-cols-[1fr_auto] md:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-x-6 gap-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-vermilion"
                  >
                    <span className="min-w-0">
                      <span className={`block font-display font-bold tracking-tight leading-tight text-2xl md:text-4xl ${open ? "text-marigold" : "text-pine-950"}`}>
                        {g.word}
                      </span>
                      {g.translit && (
                        <span className={`block text-sm mt-0.5 italic ${open ? "text-mist/70" : "text-pine-600"}`}>{g.translit}</span>
                      )}
                    </span>
                    <span className={`hidden md:block text-sm font-semibold ${open ? "text-mist/85" : "text-pine-800"}`}>{g.language}</span>
                    <span className="hidden md:flex items-center gap-2 text-sm text-pine-600">
                      <span className={`w-2 h-2 rounded-full ${FORMALITY_DOT[g.formality]}`} />
                      <span className={open ? "text-mist/70" : ""}>{g.region}</span>
                      <span className={`text-[10px] uppercase tracking-wider ${open ? "text-mist/45" : "text-pine-600/60"}`}>· {g.formality}</span>
                    </span>
                    <span className={`justify-self-end transition-transform duration-300 ${open ? "rotate-180 text-marigold" : "text-pine-600"}`}>
                      <Icon name="chevron" className="w-5 h-5" />
                    </span>
                  </button>

                  <div
                    className="grid transition-all duration-500 ease-out overflow-hidden"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <div className="px-3 sm:px-5 pb-7 pt-1 grid md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-sage">Literally means</p>
                          <p className="mt-2 font-display text-lg font-semibold leading-snug">{g.meaning}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-sage">Say it like</p>
                          <p className="mt-2 font-display text-lg font-semibold">/{g.pronunciation}/</p>
                          <p className="mt-3 text-sm leading-relaxed text-mist/75">{g.gesture}</p>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-sage">Field note</p>
                          <p className="mt-2 text-sm leading-relaxed text-mist/85">{g.note}</p>
                          <button
                            onClick={() => speak(g.id, g.word, g.tts)}
                            disabled={speakingId === g.id}
                            className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-marigold hover:text-bone transition-colors disabled:opacity-60"
                          >
                            <Icon name="speaker" className="w-4 h-4" />
                            {speakingId === g.id ? "Speaking…" : g.tts ? "Hear it spoken" : "No voice on file"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}

          {results.length === 0 && (
            <div className="py-16 text-center">
              <p className="font-display text-2xl font-bold">No doors match that knock.</p>
              <p className="mt-2 text-sm text-pine-600">Try another word — or clear the filters below.</p>
              <button
                onClick={() => {
                  setQuery("");
                  setRegion("All");
                }}
                className="mt-5 px-5 py-2.5 border-2 border-pine-900 text-sm font-bold uppercase tracking-wider hover:bg-pine-900 hover:text-mist transition-colors"
              >
                Reset the index
              </button>
            </div>
          )}
        </div>

        {/* legend */}
        <Reveal className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-pine-700" delay={80}>
          <span className="font-bold uppercase tracking-[0.18em] text-pine-600">Register key</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-marigold" /> casual — friends & family</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-sage" /> neutral — safe everywhere</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-vermilion" /> formal — elders & first meetings</span>
        </Reveal>
      </div>
    </section>
  );
}
