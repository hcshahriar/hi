import { CITIES, CityClock } from "../data/greetings";
import { useNow } from "../hooks";
import { Icon } from "./Icons";
import { LineTitle, Reveal } from "./Reveal";

type Slot = "morning" | "afternoon" | "evening";

function cityTime(now: Date, tz: string) {
  try {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).formatToParts(now);
    const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "00";
    const hour = parseInt(get("hour"), 10) % 24;
    return { hms: `${get("hour")}:${get("minute")}:${get("second")}`, hour };
  } catch {
    return { hms: now.toTimeString().slice(0, 8), hour: now.getHours() };
  }
}

function slotFor(hour: number): Slot {
  if (hour >= 5 && hour <= 11) return "morning";
  if (hour >= 12 && hour <= 16) return "afternoon";
  return "evening";
}

function CityCard({ city, index }: { city: CityClock; index: number }) {
  const now = useNow(1000);
  const { hms, hour } = cityTime(now, city.tz);
  const slot = slotFor(hour);
  const greet = city.slots[slot];
  const isDay = hour >= 6 && hour < 18;

  return (
    <Reveal delay={(index % 3) * 90}>
      <article className="group h-full border-2 border-pine-900/15 bg-mist-soft p-6 transition-all duration-300 hover:border-pine-900 hover:-translate-y-1.5 hover:shadow-[8px_8px_0_0_rgba(8,18,15,0.9)]">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-pine-950">{city.city}</h3>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine-600 mt-0.5">{city.country}</p>
          </div>
          <span className={`transition-colors ${isDay ? "text-marigold-deep" : "text-pine-700"}`}>
            <Icon name={isDay ? "sun" : "moon"} className="w-6 h-6" />
          </span>
        </div>

        <p className="mt-4 font-display text-[2rem] leading-none font-extrabold tabular-nums text-pine-950">
          {hms}
        </p>

        <div className="mt-5 border-t border-pine-900/15 pt-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-vermilion">
            Right now they'd say — {slot}
          </p>
          <p className="mt-2 font-display text-xl sm:text-2xl font-bold leading-snug text-pine-900 break-words">
            {greet.word}
          </p>
          {greet.translit && <p className="mt-1 text-sm italic text-pine-600">{greet.translit}</p>}
        </div>
      </article>
    </Reveal>
  );
}

export function TimeZones() {
  return (
    <section id="clocks" className="scroll-mt-20 bg-mist text-pine-950">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.28em] uppercase text-vermilion">
            <span className="font-display text-sm">03</span>
            <span className="h-px w-10 bg-vermilion/50" />
            World Clocks
          </p>
        </Reveal>
        <div className="mt-5 grid lg:grid-cols-12 gap-8 items-end">
          <LineTitle
            lines={["Right now, someone", "is saying this."]}
            className="lg:col-span-8 font-display font-extrabold tracking-tight leading-[0.98] text-[clamp(2.4rem,6vw,4.6rem)]"
          />
          <Reveal className="lg:col-span-4" delay={150}>
            <p className="text-base leading-relaxed text-pine-700">
              Nine cities, nine local clocks, ticking live. The greeting under each one shifts with
              that city's sun — morning, afternoon, evening — the way it would on the street.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CITIES.map((city, i) => (
            <CityCard key={city.city} city={city} index={i} />
          ))}
        </div>

        <Reveal className="mt-8 flex items-center gap-3 text-xs text-pine-600" delay={120}>
          <Icon name="globe" className="w-4 h-4 text-vermilion" />
          <p>
            Somewhere on this page, it is always time for exactly one of these. The planet runs a
            permanent relay of hellos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
