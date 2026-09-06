import { FIELD_NOTES } from "../data/greetings";
import { LineTitle, Reveal } from "./Reveal";

const ROTATIONS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-1", "rotate-1", "-rotate-2"];

const STAMP_TINT: Record<string, string> = {
  marigold: "border-marigold-deep text-marigold-deep",
  sage: "border-pine-600 text-pine-600",
  vermilion: "border-vermilion text-vermilion",
  mist: "border-pine-900/40 text-pine-900/60",
};

export function FieldNotes() {
  return (
    <section id="notes" className="scroll-mt-20 bg-pine-950 text-bone relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(800px 500px at 85% 0%, rgba(156,196,166,0.08), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-20 lg:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-[11px] font-bold tracking-[0.28em] uppercase text-sage">
              <span className="h-px w-10 bg-sage/50" />
              <span className="font-display text-sm">05</span>
              <span className="h-px w-10 bg-sage/50" />
            </p>
          </Reveal>
          <LineTitle
            lines={["Field notes", "from the margins."]}
            className="mt-4 font-display font-extrabold tracking-tight leading-[0.98] text-[clamp(2.4rem,6vw,4.4rem)]"
          />
          <Reveal delay={150}>
            <p className="mt-5 text-base leading-relaxed text-bone/60">
              Postcards pinned from the research pile — the strange, true side-rules of saying hello.
              Straighten one out; it stays that way until you look away.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-x-7 gap-y-10">
          {FIELD_NOTES.map((note, i) => (
            <Reveal key={note.n} delay={(i % 3) * 110} className="w-[300px] sm:w-[330px]">
              <figure
                className={`postcard relative h-full bg-mist-soft text-pine-950 p-6 pt-8 shadow-[0_18px_40px_-18px_rgba(4,10,8,0.7)] ${ROTATIONS[i % ROTATIONS.length]}`}
              >
                {/* tape */}
                <span
                  aria-hidden="true"
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-marigold/60 rotate-[-3deg] shadow-sm"
                  style={{ clipPath: "polygon(3% 0, 97% 8%, 100% 92%, 0 100%)" }}
                />
                {/* stamp */}
                <span
                  className={`absolute top-4 right-4 border-2 border-dashed px-1.5 py-0.5 text-[10px] font-display font-extrabold tracking-widest ${STAMP_TINT[note.tint]}`}
                >
                  {note.stamp}
                </span>

                <figcaption>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pine-600">{note.n}</p>
                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight pr-12 leading-snug">{note.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-pine-800">{note.body}</p>
                  <span className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-pine-600/70">
                    <span className="h-px w-6 bg-pine-900/30" />
                    hello atlas · post {String(i + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
