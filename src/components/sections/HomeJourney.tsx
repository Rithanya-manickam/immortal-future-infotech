import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Bot, Building2, Cloud, Rocket, Workflow, type LucideIcon } from "lucide-react";
import { SectionHead } from "./SectionHead";

const STEPS: { date: string; title: string; body: string; icon: LucideIcon }[] = [
  {
    date: "May 2024",
    title: "IFIT founded",
    body: "Incorporated in Tiruchirapalli with a banking-first engineering charter.",
    icon: Building2,
  },
  {
    date: "Jun 2024",
    title: "First Finacle engagement",
    body: "Core banking consulting for a cooperative bank in Tamil Nadu.",
    icon: Workflow,
  },
  {
    date: "Aug 2024",
    title: "IIS launched",
    body: "Finacle automation suite — EOD, reconciliation and reporting.",
    icon: Rocket,
  },
  {
    date: "Oct 2024",
    title: "ASKBOT launched",
    body: "AI assistant trained on internal banking documentation.",
    icon: Bot,
  },
  {
    date: "Dec 2024",
    title: "AWS partnership",
    body: "Cloud migrations with multi-AZ high availability.",
    icon: Cloud,
  },
  {
    date: "Mar 2025",
    title: "Platform expansion",
    body: "HRM, Campus ERP and WorkTrack join the product line.",
    icon: Award,
  },
];

export function HomeJourney() {
  const [active, setActive] = useState(STEPS.length - 1);

  return (
    <section id="journey" className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-[1200px]">
        <SectionHead eyebrow="Journey" title="From incorporation to" accent="a five-product line.">
          Select a milestone to read the story.
        </SectionHead>

        <div className="mt-8 grid gap-6 lg:grid-cols-1">
          <div className="relative">
            <span
              aria-hidden
              className="absolute left-4 right-4 top-1/2 h-px -translate-y-1/2 bg-[var(--brand-glow)]/30"
            />
            <div className="relative flex gap-0 overflow-x-auto rounded-[26px] border border-[var(--brand-glow)]/15 bg-[linear-gradient(90deg,rgba(15,118,110,0.08),rgba(255,255,255,0.5),rgba(15,118,110,0.08))] shadow-[inset_8px_8px_20px_rgba(255,255,255,0.55),inset_-8px_-8px_20px_rgba(15,118,110,0.06)] backdrop-blur-sm pb-2">
              {STEPS.map((s, i) => {
                const on = i === active;
                return (
                  <button
                    key={s.date}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-pressed={on}
                    aria-label={`Show milestone: ${s.title}`}
                    className={`group relative min-w-[148px] shrink-0 rounded-[24px] border px-3 pb-3 pt-3 text-left transition-all duration-300 md:min-w-0 md:flex-1 ${on ? "border-[var(--brand-glow)] bg-[var(--brand-glow)]/10 shadow-[0_10px_28px_-16px_var(--brand-glow)]" : "border-transparent bg-background/15 hover:border-[var(--brand-glow)]/50 hover:bg-[var(--brand-glow)]/5"}`}
                  >
                    <span
                      className={`mx-auto flex size-11 items-center justify-center rounded-2xl border bg-background/35 transition-all duration-300 ${on ? "scale-105" : "group-hover:scale-105"}`}
                      style={{
                        borderColor: on
                          ? "var(--brand-glow)"
                          : "color-mix(in oklab, var(--brand-glow) 45%, transparent)",
                        background: on
                          ? "color-mix(in oklab, var(--brand-glow) 18%, transparent)"
                          : "color-mix(in oklab, var(--brand-glow) 6%, transparent)",
                        boxShadow: on
                          ? "0 0 0 6px color-mix(in oklab, var(--brand-glow) 14%, transparent)"
                          : "none",
                      }}
                    >
                      <s.icon className="size-5" aria-hidden="true" />
                    </span>
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
            className="relative isolate mx-auto w-full max-w-[720px] overflow-hidden rounded-[28px] border border-border/15 bg-[var(--glass-bg)] p-7 shadow-[inset_12px_12px_28px_rgba(255,255,255,0.08),inset_-12px_-12px_28px_rgba(0,0,0,0.08),0_22px_50px_-32px_var(--brand-glow)] backdrop-blur-xl"
          >
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-70"
              style={{
                background:
                  "radial-gradient(circle at 85% 15%, color-mix(in oklab, var(--brand-glow) 24%, transparent), transparent 34%), linear-gradient(135deg, color-mix(in oklab, var(--brand-glow) 8%, transparent), transparent 58%)",
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-14 -top-14 -z-10 size-40 rounded-full border border-[var(--brand-glow)]/20"
              aria-hidden="true"
            />
            <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--brand-glow)]">
              {STEPS[active].date}
            </div>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
              {STEPS[active].title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/65">{STEPS[active].body}</p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
