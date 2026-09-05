import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  Building2,
  ChevronLeft,
  ChevronRight,
  Cpu,
  LineChart,
  Sparkles,
} from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";

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

export function WhyCarousel({ items }: { items: WhyCardProps[] }) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = items[active];
  const Icon = current.icon;

  function move(direction: 1 | -1) {
    setActive((value) => (value + direction + items.length) % items.length);
  }

  return (
    <div className="mt-7" aria-label="Why choose IFIT">
      <div className="relative overflow-hidden rounded-[30px] border border-emerald-900/10 bg-white/45 p-4 shadow-[0_24px_70px_-48px_rgba(6,95,70,0.7)] backdrop-blur-xl sm:p-6">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(45,212,191,.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,.6),transparent)]"
          aria-hidden="true"
        />
        <div className="relative grid items-center gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <div className="flex items-center gap-4 md:flex-col md:items-start">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-emerald-400/30 bg-emerald-50 text-emerald-700 shadow-[0_10px_30px_-18px_rgba(5,150,105,.8)]">
              <Icon className="size-7" aria-hidden="true" />
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-700">
                0{active + 1} / 0{items.length}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-950">{current.title}</h3>
            </div>
          </div>
          <motion.p
            key={current.title}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-base leading-7 text-slate-600 md:text-lg"
          >
            {current.body}
          </motion.p>
        </div>
        <div className="relative mt-6 flex items-center justify-between border-t border-emerald-900/10 pt-4">
          <div className="flex gap-2" role="tablist" aria-label="Why IFIT slides">
            {items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={`Show ${item.title}`}
                onClick={() => setActive(index)}
                className={`h-1.5 rounded-full transition-all ${index === active ? "w-10 bg-emerald-600" : "w-5 bg-emerald-900/15 hover:bg-emerald-900/30"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous reason"
              className="grid size-9 place-items-center rounded-full border border-emerald-900/15 bg-white/60 text-emerald-800 transition-colors hover:bg-emerald-50"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next reason"
              className="grid size-9 place-items-center rounded-full border border-emerald-900/15 bg-white/60 text-emerald-800 transition-colors hover:bg-emerald-50"
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ValuesPanels({ values }: { values: Array<[string, string]> }) {
  return (
    <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
      {values.map(([title, body], index) => (
        <motion.article
          key={title}
          initial={{ opacity: 0, y: 16, rotate: index % 2 === 0 ? -1.2 : 1.2 }}
          whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1.2 : 1.2 }}
          whileHover={{ y: -6, rotate: 0, scale: 1.015 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, delay: index * 0.06 }}
          className="group relative overflow-hidden rounded-[22px] border border-emerald-900/10 bg-white/60 p-5 shadow-[0_20px_45px_-36px_rgba(6,95,70,.8)] backdrop-blur-xl"
        >
          <div
            className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-emerald-300/20 blur-2xl transition-transform duration-500 group-hover:scale-150"
            aria-hidden="true"
          />
          <div className="relative flex items-start justify-between gap-4">
            <h3 className="text-base font-semibold text-slate-950">{title}</h3>
            <span className="grid size-7 shrink-0 place-items-center rounded-full border border-emerald-500/20 bg-emerald-50 text-xs font-semibold text-emerald-700">
              0{index + 1}
            </span>
          </div>
          <p className="relative mt-3 text-sm leading-6 text-slate-600">{body}</p>
        </motion.article>
      ))}
    </div>
  );
}

export function HolographicDashboard() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-[30px] border border-emerald-900/15 bg-slate-950/[0.94] p-5 text-slate-100 shadow-[0_32px_85px_-45px_rgba(0,82,60,0.75)] md:p-7"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(52,211,153,.16),transparent_40%,rgba(14,165,233,.12))]"
        aria-hidden="true"
      />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-300">
            IFIT intelligence layer
          </p>
          <h3 className="mt-2 text-xl font-semibold">Operational clarity, surfaced.</h3>
        </div>
        <Sparkles className="size-5 text-emerald-300" aria-hidden="true" />
      </div>
      <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
        {["Revenue", "Projects", "Clients"].map((label) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
            <p className="text-xs text-slate-400">{label}</p>
            <p className="mt-2 text-lg font-semibold text-white">Live view</p>
          </div>
        ))}
      </div>
      <div className="relative mt-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Performance signal</span>
          <BarChart3 className="size-4 text-emerald-300" aria-hidden="true" />
        </div>
        <div
          className="mt-5 flex h-24 items-end gap-2"
          aria-label="Abstract performance visualization"
        >
          {[32, 48, 40, 68, 55, 78, 64, 88].map((height, index) => (
            <motion.span
              key={height + index}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.6 }}
              className="flex-1 rounded-t-md bg-gradient-to-t from-emerald-500/80 to-cyan-300/70"
            />
          ))}
        </div>
      </div>
      {!reduceMotion && (
        <div
          className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-emerald-400/15 blur-3xl"
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
}

export function JourneyRail({ timeline }: { timeline: Array<[string, string, string]> }) {
  return (
    <div className="relative mt-7 overflow-x-auto pb-3">
      <div className="flex min-w-[760px] items-start gap-3">
        {timeline.map(([date, title, body], index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className={`relative flex-1 rounded-[22px] border p-4 ${index === timeline.length - 1 ? "border-emerald-400 bg-emerald-50/80 shadow-[0_15px_35px_-20px_rgba(5,150,105,.8)]" : "border-emerald-900/10 bg-white/55"}`}
          >
            <div className="flex items-center gap-3">
              <JourneyNode active={index === timeline.length - 1}>{index + 1}</JourneyNode>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-700">
                {date}
              </div>
            </div>
            <h3 className="mt-5 text-sm font-semibold text-slate-950">{title}</h3>
            <p className="mt-2 text-xs leading-5 text-slate-600">{body}</p>
          </motion.article>
        ))}
      </div>
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
