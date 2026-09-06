import { useState } from "react";
import { QUIZ } from "../data/greetings";
import { Icon } from "./Icons";
import { LineTitle, Reveal } from "./Reveal";

const LETTERS = ["A", "B", "C", "D"];

function scoreVerdict(score: number): { title: string; body: string } {
  if (score === QUIZ.length)
    return {
      title: "Fluent in first contact.",
      body: "Every door on this page would swing open for you. Go greet a stranger — responsibly.",
    };
  if (score >= QUIZ.length - 2)
    return {
      title: "Border-crossing level.",
      body: "A few hinges squeaked, but you got through customs. One more read of the field notes and you're fluent.",
    };
  if (score >= 2)
    return {
      title: "Charming tourist.",
      body: "You knocked politely, and that counts. The index above will patch the gaps in no time.",
    };
  return {
    title: "The wall says hi first.",
    body: "Every fluent greeter started exactly here. Scroll up, pick a word, and try it out loud.",
  };
}

export function Quiz() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = QUIZ[step];
  const locked = picked !== null;

  const pick = (i: number) => {
    if (locked) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (step + 1 >= QUIZ.length) {
      setFinished(true);
    } else {
      setStep((s) => s + 1);
      setPicked(null);
    }
  };

  const restart = () => {
    setStep(0);
    setPicked(null);
    setScore(0);
    setFinished(false);
  };

  const verdict = scoreVerdict(score);

  return (
    <section id="quiz" className="scroll-mt-20 bg-marigold text-pine-950 relative overflow-hidden">
      {/* oversized ghost word */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-8 -right-6 font-display font-extrabold text-[11rem] leading-none text-pine-950/[0.07]"
      >
        hola?
      </span>
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.28em] uppercase text-pine-950/70">
                <span className="font-display text-sm">04</span>
                <span className="h-px w-10 bg-pine-950/40" />
                Pop Quiz
              </p>
            </Reveal>
            <LineTitle
              lines={["Fluent in", "six questions."]}
              className="mt-5 font-display font-extrabold tracking-tight leading-[0.98] text-[clamp(2.4rem,5.5vw,4.2rem)]"
            />
            <Reveal delay={150}>
              <p className="mt-5 text-base leading-relaxed text-pine-950/75 max-w-md">
                Everything you need was hiding in the entries above. Six doors, one key each — the
                greetings won't judge you, but the score will.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 inline-flex items-center gap-5 border-2 border-pine-950 px-5 py-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pine-950/60">Question</p>
                  <p className="font-display text-2xl font-extrabold tabular-nums">
                    {Math.min(step + 1, QUIZ.length)}
                    <span className="text-base font-bold text-pine-950/50"> / {QUIZ.length}</span>
                  </p>
                </div>
                <span className="w-px h-9 bg-pine-950/30" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pine-950/60">Score</p>
                  <p className="font-display text-2xl font-extrabold tabular-nums text-vermilion-deep">{score}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-6 flex gap-1.5">
                {QUIZ.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 flex-1 max-w-16 transition-colors duration-500 ${
                      i < step || finished ? "bg-pine-950" : i === step && !finished ? "bg-pine-950/45" : "bg-pine-950/15"
                    }`}
                  />
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              {!finished ? (
                <div className="bg-pine-950 text-bone p-7 sm:p-10 border-b-8 border-vermilion">
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-sage">
                    Door {step + 1} of {QUIZ.length}
                  </p>
                  <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight leading-tight">{q.q}</h3>

                  <div className="mt-7 grid gap-3">
                    {q.options.map((opt, i) => {
                      const isAnswer = i === q.answer;
                      const isPicked = i === picked;
                      let cls = "border-pine-700 text-bone/85 hover:border-marigold hover:text-marigold hover:translate-x-1";
                      if (locked) {
                        if (isAnswer) cls = "border-sage bg-sage/15 text-sage";
                        else if (isPicked) cls = "border-vermilion bg-vermilion/15 text-vermilion";
                        else cls = "border-pine-800 text-bone/35";
                      }
                      return (
                        <button
                          key={opt}
                          onClick={() => pick(i)}
                          disabled={locked}
                          className={`flex items-center gap-4 border-2 px-5 py-3.5 text-left font-medium transition-all duration-300 ${cls} disabled:cursor-default`}
                        >
                          <span className="font-display text-sm font-bold w-6 shrink-0">{LETTERS[i]}</span>
                          <span className="flex-1">{opt}</span>
                          {locked && isAnswer && <Icon name="check" className="w-5 h-5 shrink-0" />}
                          {locked && isPicked && !isAnswer && <Icon name="x" className="w-5 h-5 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  <div
                    className="grid transition-all duration-500 overflow-hidden"
                    style={{ gridTemplateRows: locked ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <div className="mt-6 border-t border-pine-800 pt-5 flex flex-col sm:flex-row sm:items-center gap-4">
                        <p className="flex-1 text-sm leading-relaxed text-bone/75">
                          <span className={`font-bold ${picked === q.answer ? "text-sage" : "text-vermilion"}`}>
                            {picked === q.answer ? "Door opens. " : "Not that one. "}
                          </span>
                          {q.fact}
                        </p>
                        <button
                          onClick={next}
                          className="shrink-0 inline-flex items-center gap-2 bg-marigold text-pine-950 px-6 py-3 font-display font-bold hover:bg-bone transition-colors"
                        >
                          {step + 1 === QUIZ.length ? "See verdict" : "Next door"}
                          <Icon name="arrowRight" className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-pine-950 text-bone p-7 sm:p-10 border-b-8 border-vermilion text-center">
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-sage">Customs check complete</p>
                  <p className="mt-6 font-display font-extrabold text-[clamp(3.5rem,9vw,6rem)] leading-none tabular-nums">
                    {score}
                    <span className="text-2xl font-bold text-bone/50"> / {QUIZ.length}</span>
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-bold tracking-tight">{verdict.title}</h3>
                  <p className="mt-3 text-bone/70 max-w-md mx-auto leading-relaxed">{verdict.body}</p>
                  <button
                    onClick={restart}
                    className="mt-8 inline-flex items-center gap-2 bg-marigold text-pine-950 px-7 py-3.5 font-display font-bold hover:bg-bone transition-colors"
                  >
                    <Icon name="loop" className="w-4 h-4" />
                    Run it back
                  </button>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
