import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import imgOps from "@/assets/accent-dashboard.jpg";
import imgAi from "@/assets/img-ai.jpg";
import imgCloud from "@/assets/img-cloud.jpg";
import { SectionHead } from "./SectionHead";

/**
 * Client stories reuse engagement content already published on the site.
 * Client names are kept anonymised — no testimonials or logos are invented.
 */
const STORIES = [
  {
    id: "eod",
    client: "Cooperative bank",
    industry: "Banking · Finacle",
    story:
      "Twelve manual end-of-day steps replaced by a single automated sequence running on the bank's existing Finacle setup — no change to how branch teams work.",
    impact: "80% less manual effort nightly",
    image: imgOps,
    accent: "var(--p-iis)",
  },
  {
    id: "askbot",
    client: "Private bank",
    industry: "AI · Enablement",
    story:
      "An assistant trained on internal banking documentation, rolled out across branches with role-based access so staff find procedures in seconds.",
    impact: "3× faster staff onboarding",
    image: imgAi,
    accent: "var(--p-askbot)",
  },
  {
    id: "aws",
    client: "Regional private bank",
    industry: "Cloud · AWS",
    story:
      "Ageing on-premise infrastructure migrated to AWS with multi-AZ high availability and cost guardrails, planned around regulatory requirements.",
    impact: "40% lower infrastructure cost",
    image: imgCloud,
    accent: "var(--brand-teal)",
  },
];

export function ClientStories() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const touch = useRef<number | null>(null);

  const go = useCallback((n: number) => {
    setDir(n > 0 ? 1 : -1);
    setI((p) => (p + n + STORIES.length) % STORIES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [paused, go]);

  const s = STORIES[i];

  return (
    <section id="client-stories" className="px-6 py-14 md:py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow="Client stories" title="Real engagements." accent="Real outcomes.">
            A closer look at what changed for the institutions we work with.
          </SectionHead>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous story"
              className="flex size-10 items-center justify-center rounded-full border border-border/20 bg-[var(--glass-bg)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-[var(--brand-glow)]"
            >
              <ArrowLeft className="size-4 text-foreground/70" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next story"
              className="flex size-10 items-center justify-center rounded-full border border-border/20 bg-[var(--glass-bg)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-[var(--brand-glow)]"
            >
              <ArrowRight className="size-4 text-foreground/70" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className="relative mt-8 overflow-hidden rounded-[30px] border border-border/12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touch.current === null) return;
            const d = e.changedTouches[0].clientX - touch.current;
            if (Math.abs(d) > 45) go(d < 0 ? 1 : -1);
            touch.current = null;
          }}
          style={{
            boxShadow: `0 40px 100px -70px color-mix(in oklab, ${s.accent} 85%, transparent)`,
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={s.id}
              initial={{ opacity: 0, x: dir * 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -48 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-0 md:grid-cols-[1.05fr_1fr]"
            >
              <div className="relative min-h-[220px] md:min-h-[380px]">
                <img
                  src={s.image}
                  alt={`${s.industry} engagement`}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover"
                />
                <span
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(140deg, color-mix(in oklab, ${s.accent} 26%, transparent), transparent 65%)`,
                  }}
                />
              </div>

              <div className="relative flex min-w-0 flex-col justify-center gap-4 bg-[var(--glass-bg)] p-7 backdrop-blur-xl md:p-10">
                <Quote
                  className="size-6 opacity-70"
                  style={{ color: s.accent }}
                  aria-hidden="true"
                />
                <p className="text-[15px] leading-relaxed text-foreground/80 md:text-base">
                  {s.story}
                </p>
                <div
                  className="w-fit rounded-full px-3 py-1.5 text-xs font-medium"
                  style={{
                    color: s.accent,
                    background: `color-mix(in oklab, ${s.accent} 12%, transparent)`,
                  }}
                >
                  {s.impact}
                </div>
                <div className="mt-1 border-t border-border/12 pt-4">
                  <div className="text-sm font-semibold text-foreground">{s.client}</div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-foreground/50">
                    {s.industry}
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {STORIES.map((x, n) => (
            <button
              key={x.id}
              type="button"
              onClick={() => {
                setDir(n > i ? 1 : -1);
                setI(n);
              }}
              aria-label={`Show story ${n + 1}`}
              aria-current={n === i}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: n === i ? 32 : 10,
                background:
                  n === i
                    ? "var(--brand-glow)"
                    : "color-mix(in oklab, var(--brand-glow) 28%, transparent)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
