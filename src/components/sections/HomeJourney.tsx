import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHead } from "./SectionHead";

const STEPS = [
  { date: "May 2024", title: "IFIT founded", body: "Incorporated in Tiruchirapalli with a banking-first engineering charter." },
  { date: "Jun 2024", title: "First Finacle engagement", body: "Core banking consulting for a cooperative bank in Tamil Nadu." },
  { date: "Aug 2024", title: "IIS launched", body: "Finacle automation suite — EOD, reconciliation and reporting." },
  { date: "Oct 2024", title: "ASKBOT launched", body: "AI assistant trained on internal banking documentation." },
  { date: "Dec 2024", title: "AWS partnership", body: "Cloud migrations with multi-AZ high availability." },
  { date: "Mar 2025", title: "Platform expansion", body: "HRM, Campus ERP and WorkTrack join the product line." },
];

export function HomeJourney() {
  const [active, setActive] = useState(STEPS.length - 1);

  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHead eyebrow="Journey" title="From incorporation to" accent="a five-product line.">
          Select a milestone to read the story.
        </SectionHead>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center">
          <div className="relative">
            <span
              aria-hidden
              className="absolute left-0 right-0 top-[27px] h-px"
              style={{ background: "linear-gradient(90deg, transparent, var(--brand-glow), transparent)", opacity: 0.4 }}
            />
            <div className="flex gap-3 overflow-x-auto pb-3">
              {STEPS.map((s, i) => {
                const on = i === active;
                return (
                  <button
                    key={s.date}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-pressed={on}
                    className="group relative shrink-0 pt-0 text-left"
                  >
                    <span
                      className="mx-auto block h-3.5 w-3.5 rounded-full border transition-all duration-300"
                      style={{
                        marginTop: 20,
                        borderColor: "var(--brand-glow)",
                        background: on ? "var(--brand-glow)" : "transparent",
                        boxShadow: on ? "0 0 0 6px color-mix(in oklab, var(--brand-glow) 18%, transparent)" : "none",
                      }}
                    />
                    <span
                      className={`mt-3 block min-w-[92px] text-center text-[11px] uppercase tracking-[0.18em] transition-colors ${on ? "text-foreground" : "text-foreground/45"}`}
                    >
                      {s.date}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <motion.article
            key={STEPS[active].title}
            initial={{ opacity: 0, y: 16, rotate: -0.6 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel min-w-0 p-7"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--brand-glow)]">
              {STEPS[active].date}
            </div>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">{STEPS[active].title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/65">{STEPS[active].body}</p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
