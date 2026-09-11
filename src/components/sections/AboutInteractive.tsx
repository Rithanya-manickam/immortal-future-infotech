import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Boxes, Building2, ChevronLeft, ChevronRight, Cpu, LineChart } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

import accentCircuit from "@/assets/accent-circuit.jpg";
import imgAi from "@/assets/img-ai.jpg";
import imgCloud from "@/assets/img-cloud.jpg";
import imgOps from "@/assets/img-ops.jpg";
import imgTeam from "@/assets/img-team.jpg";


type WhyCardProps = {
  icon: LucideIcon;
  title: string;
  body: string;
  index: number;
};

export function InteractiveWhyCard({ icon: Icon, title, body, index }: WhyCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-120, 120], [6, -6]), { stiffness: 180, damping: 24 });
  const rotateY = useSpring(useTransform(x, [-120, 120], [-6, 6]), { stiffness: 180, damping: 24 });

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(event.clientX - (rect.left + rect.width / 2));
    y.set(event.clientY - (rect.top + rect.height / 2));
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const visuals = [Building2, Cpu, Boxes, LineChart];
  const Visual = visuals[index % visuals.length];

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="group relative min-h-[220px] overflow-hidden rounded-[26px] border border-emerald-900/10 bg-white/55 p-6 shadow-[0_20px_50px_-34px_rgba(6,95,70,0.5)] backdrop-blur-xl transition-shadow hover:shadow-[0_26px_65px_-32px_rgba(6,95,70,0.62)]"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full bg-emerald-300/15 blur-2xl transition-opacity group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative flex items-start justify-between">
        <span className="grid size-11 place-items-center rounded-2xl border border-emerald-500/25 bg-emerald-50 text-emerald-700 shadow-[inset_0_1px_0_rgba(255,255,255,.8)]">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <Visual
          className="size-9 text-emerald-700/20 transition-transform duration-500 group-hover:scale-110 group-hover:text-emerald-600/45"
          aria-hidden="true"
        />
      </div>
      <h3 className="relative mt-7 text-lg font-semibold tracking-tight text-slate-950">{title}</h3>
      <p className="relative mt-2 text-sm leading-6 text-slate-600">{body}</p>
      <ArrowUpRight
        className="absolute bottom-5 right-5 size-4 text-emerald-700/35 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </motion.div>
  );
}

const WHY_ACCENTS = ["#06b6d4", "#8b5cf6", "#ec4899", "#f59e0b"];
const WHY_VISUALS = [imgTeam, imgAi, imgCloud, imgOps];

export function WhyCarousel({ items }: { items: Omit<WhyCardProps, "index">[] }) {
  const railRef = useRef<HTMLDivElement>(null);

  function moveRail(direction: number) {
    railRef.current?.scrollBy({ left: direction * railRef.current.clientWidth * 0.82, behavior: "smooth" });
  }

  return (
    <div className="mt-8" aria-label="Why choose IFIT">
      <div className="relative isolate overflow-hidden rounded-[30px] border border-emerald-900/10 shadow-[0_24px_70px_-48px_rgba(6,95,70,0.7)]">
        {/* Subtle technology backdrop */}
        <img
          src={accentCircuit}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.16]"
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(150deg,color-mix(in_oklab,var(--card)_88%,transparent),color-mix(in_oklab,var(--card)_72%,transparent))] backdrop-blur-[2px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,color-mix(in_oklab,var(--brand-glow)_18%,transparent),transparent_45%),radial-gradient(circle_at_85%_100%,rgba(139,92,246,.14),transparent_45%)]"
          aria-hidden="true"
        />

        <div
          ref={railRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto p-6 [scrollbar-width:none] sm:gap-6 sm:p-8 lg:gap-7 lg:p-10 [&::-webkit-scrollbar]:hidden"
          aria-label="IFIT differentiators carousel"
        >
          {items.map((item, index) => {
            const accent = WHY_ACCENTS[index % WHY_ACCENTS.length];
            const visual = WHY_VISUALS[index % WHY_VISUALS.length];
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group relative flex min-w-[calc(100%-1.25rem)] snap-center flex-col items-center overflow-hidden rounded-[24px] border p-6 text-center transition-shadow duration-300 sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(25%-1.3125rem)]"
                style={{
                  borderColor: `color-mix(in oklab, ${accent} 26%, transparent)`,
                  background: `linear-gradient(165deg, color-mix(in oklab, ${accent} 10%, var(--card)), var(--card))`,
                  boxShadow: `0 24px 56px -42px color-mix(in oklab, ${accent} 95%, transparent), inset 0 1px 0 color-mix(in oklab, ${accent} 20%, transparent)`,
                }}
              >
                <div
                  className="pointer-events-none absolute -top-16 left-1/2 size-40 -translate-x-1/2 rounded-full opacity-50 blur-3xl transition-opacity duration-300 group-hover:opacity-90"
                  style={{ background: `color-mix(in oklab, ${accent} 22%, transparent)` }}
                  aria-hidden="true"
                />
                <span
                  className="relative grid size-[74px] place-items-center overflow-hidden rounded-full border transition-transform duration-500 group-hover:scale-105"
                  style={{
                    borderColor: `color-mix(in oklab, ${accent} 40%, transparent)`,
                    boxShadow: `0 12px 30px -18px ${accent}`,
                  }}
                >
                  <img
                    src={visual}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span
                    className="absolute inset-0"
                    style={{ background: `color-mix(in oklab, ${accent} 55%, transparent)` }}
                    aria-hidden="true"
                  />
                  <Icon className="relative size-7 text-white" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3
                  className="relative mt-5 text-base font-semibold tracking-tight text-foreground"
                  style={{ textDecorationColor: accent }}
                >
                  {item.title}
                </h3>
                <span
                  className="relative mt-3 block h-px w-10 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ background: accent }}
                  aria-hidden="true"
                />
                <p className="relative mt-3 text-sm leading-6 text-foreground/70">{item.body}</p>
              </motion.article>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-2 border-t border-emerald-900/10 px-6 py-4 sm:justify-end sm:px-8 lg:px-10">
          <button type="button" onClick={() => moveRail(-1)} aria-label="Previous differentiator" className="grid size-9 place-items-center rounded-full border border-emerald-900/15 bg-white/50 text-foreground/70 transition-colors hover:bg-white hover:text-foreground">
            <ChevronLeft className="size-4" />
          </button>
          <span className="px-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/45">Explore the difference</span>
          <button type="button" onClick={() => moveRail(1)} aria-label="Next differentiator" className="grid size-9 place-items-center rounded-full border border-emerald-900/15 bg-white/50 text-foreground/70 transition-colors hover:bg-white hover:text-foreground">
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}


const VALUE_ACCENTS = ["#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b"];

export function ValuesPanels({
  values,
}: {
  values: Array<[string, string, LucideIcon]>;
}) {
  return (
    <div className="relative mt-10">
      <div
        className="pointer-events-none absolute left-[10%] right-[10%] top-[86px] hidden h-px lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(6,182,212,.45), rgba(59,130,246,.45), rgba(139,92,246,.45), rgba(236,72,153,.45), rgba(245,158,11,.45))",
        }}
        aria-hidden="true"
      />
      <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {values.map(([title, body, Icon], index) => {
          const accent = VALUE_ACCENTS[index % VALUE_ACCENTS.length];
          return (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="group relative flex h-full flex-col items-center overflow-hidden rounded-[26px] border p-6 text-center"
              style={{
                borderColor: `color-mix(in oklab, ${accent} 28%, transparent)`,
                background: `linear-gradient(165deg, color-mix(in oklab, ${accent} 9%, var(--card)), var(--card))`,
                boxShadow: `0 26px 60px -42px color-mix(in oklab, ${accent} 95%, transparent), inset 0 1px 0 color-mix(in oklab, ${accent} 22%, transparent)`,
              }}
            >
              <div
                className="pointer-events-none absolute -top-16 left-1/2 size-40 -translate-x-1/2 rounded-full opacity-60 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: `color-mix(in oklab, ${accent} 20%, transparent)` }}
                aria-hidden="true"
              />
              <span
                className="relative rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors"
                style={{
                  color: accent,
                  background: `color-mix(in oklab, ${accent} 14%, transparent)`,
                  border: `1px solid color-mix(in oklab, ${accent} 34%, transparent)`,
                }}
              >
                Step 0{index + 1}
              </span>
              <span
                className="relative mt-5 grid size-16 place-items-center rounded-full border transition-transform duration-300 group-hover:scale-110"
                style={{
                  borderColor: `color-mix(in oklab, ${accent} 38%, transparent)`,
                  background: `color-mix(in oklab, ${accent} 12%, var(--card))`,
                  boxShadow: `0 10px 26px -16px ${accent}`,
                }}
              >
                <Icon className="size-7" style={{ color: accent }} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="relative mt-5 text-base font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="relative mt-2 text-sm leading-6 text-foreground/70">{body}</p>
              <span
                className="relative mt-5 grid size-9 place-items-center rounded-full border transition-transform duration-300 group-hover:translate-x-1"
                style={{
                  borderColor: `color-mix(in oklab, ${accent} 34%, transparent)`,
                  background: `color-mix(in oklab, ${accent} 10%, transparent)`,
                }}
                aria-hidden="true"
              >
                <ArrowUpRight className="size-4" style={{ color: accent }} />
              </span>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

export function JourneyRail({ timeline }: { timeline: Array<[string, string, string]> }) {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const book = !reduceMotion && !isMobile;

  return (
    <div className="relative mt-10">
      <div
        className="pointer-events-none absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-transparent via-[var(--brand-glow)] to-transparent md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      />
      <ol className="relative space-y-8 md:space-y-10">
        {timeline.map(([date, title, body], index) => {
          const right = index % 2 === 1;
          return (
            <li
              key={title}
              className="relative pl-14 md:grid md:grid-cols-2 md:items-center md:gap-12 md:pl-0"
              style={{ perspective: 1400 }}
            >
              <span
                className="absolute left-5 top-4 z-10 -translate-x-1/2 md:left-1/2"
                aria-hidden="true"
              >
                <JourneyNode active={index === timeline.length - 1}>{index + 1}</JourneyNode>
              </span>
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={
                  book
                    ? {
                        rotateY: right ? 13 : -13,
                        x: right ? 34 : -34,
                        y: -4,
                        scale: 1.015,
                        zIndex: 20,
                        boxShadow: right
                          ? "-28px 34px 70px -40px color-mix(in oklab, var(--brand-glow) 95%, transparent)"
                          : "28px 34px 70px -40px color-mix(in oklab, var(--brand-glow) 95%, transparent)",
                      }
                    : { y: -5 }
                }
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`relative rounded-[22px] border p-5 backdrop-blur-xl will-change-transform ${
                  right ? "md:col-start-2" : "md:col-start-1 md:text-right"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: right ? "left center" : "right center",
                  borderColor: "color-mix(in oklab, var(--brand-glow) 26%, transparent)",
                  background:
                    "linear-gradient(150deg, color-mix(in oklab, var(--brand-glow) 8%, var(--card)), var(--card))",
                  boxShadow:
                    "0 26px 60px -44px color-mix(in oklab, var(--brand-glow) 90%, transparent)",
                }}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-y-3 w-px ${right ? "left-0" : "right-0"}`}
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--brand-glow) 55%, transparent), transparent)",
                  }}
                />
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--brand-glow)]">
                  {date}
                </div>
                <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-foreground/65">{body}</p>
              </motion.article>

            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function JourneyNode({
  active = false,
  children,
}: {
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`relative z-10 grid size-10 shrink-0 place-items-center rounded-full border ${active ? "border-emerald-400 bg-emerald-400 text-slate-950 shadow-[0_0_28px_rgba(52,211,153,.75)]" : "border-emerald-500/35 bg-white/80 text-emerald-700"}`}
    >
      {children}
    </span>
  );
}
