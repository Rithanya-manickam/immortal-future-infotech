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
                      className={`mx-auto flex size-12 items-center justify-center rounded-full border transition-all duration-300 ${on ? "scale-110" : "group-hover:scale-105"}`}
                      style={{
                        borderWidth: 1,
                        borderColor: on
                          ? "var(--brand-glow)"
                          : "color-mix(in oklab, var(--brand-glow) 38%, transparent)",
                        background: on
                          ? "color-mix(in oklab, var(--brand-glow) 16%, transparent)"
                          : "color-mix(in oklab, var(--brand-glow) 5%, transparent)",
                        boxShadow: on
                          ? "0 0 0 7px color-mix(in oklab, var(--brand-glow) 12%, transparent), 0 12px 30px -14px var(--brand-glow)"
                          : "none",
                      }}
                    >
                      <s.icon
                        className={`size-5 transition-colors ${on ? "text-[var(--brand-glow)]" : "text-foreground/60"}`}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
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
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="relative isolate mx-auto flex w-full max-w-[760px] gap-5 overflow-hidden rounded-[28px] border p-7 backdrop-blur-xl"
            style={{
              borderColor: "color-mix(in oklab, var(--brand-glow) 32%, transparent)",
              background:
                "linear-gradient(150deg, color-mix(in oklab, var(--brand-glow) 10%, var(--card)), var(--card))",
              boxShadow:
                "0 34px 80px -56px color-mix(in oklab, var(--brand-glow) 90%, transparent), inset 0 1px 0 color-mix(in oklab, var(--brand-glow) 18%, transparent)",
            }}
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 -z-10 size-52 rounded-full blur-3xl"
              style={{ background: "color-mix(in oklab, var(--brand-glow) 22%, transparent)" }}
              aria-hidden="true"
            />
            <span
              className="mt-1 hidden size-12 shrink-0 items-center justify-center rounded-2xl border sm:flex"
              style={{
                borderColor: "color-mix(in oklab, var(--brand-glow) 45%, transparent)",
                background: "color-mix(in oklab, var(--brand-glow) 12%, transparent)",
              }}
              aria-hidden="true"
            >
              {(() => {
                const Icon = STEPS[active].icon;
                return <Icon className="size-5 text-[var(--brand-glow)]" strokeWidth={1.6} />;
              })()}
            </span>
            <div className="min-w-0">
              <div className="text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--brand-glow)]">
                {STEPS[active].date}
              </div>
              <h3 className="mt-2 text-[22px] font-semibold tracking-tight text-foreground">
                {STEPS[active].title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                {STEPS[active].body}
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
