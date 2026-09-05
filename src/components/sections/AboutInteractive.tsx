import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Boxes,
  Building2,
  ChevronLeft,
  ChevronRight,
  Cpu,
  LineChart,
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
  const [dragStart, setDragStart] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  function move(direction: 1 | -1) {
    setActive((value) => (value + direction + items.length) % items.length);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
  }

  return (
    <div
      className="mt-7"
      aria-label="Why choose IFIT"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={(event) => setDragStart(event.clientX)}
      onPointerUp={(event) => {
        if (dragStart !== null && Math.abs(event.clientX - dragStart) > 45) {
          move(event.clientX < dragStart ? 1 : -1);
        }
        setDragStart(null);
      }}
      onPointerCancel={() => setDragStart(null)}
    >
      <div className="relative overflow-hidden rounded-[30px] border border-emerald-900/10 bg-white/30 px-2 py-7 shadow-[0_24px_70px_-48px_rgba(6,95,70,0.7)] backdrop-blur-xl sm:px-10">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,.2),transparent_32%),linear-gradient(135deg,rgba(255,255,255,.4),transparent)]"
          aria-hidden="true"
        />
        <div className="relative flex min-h-[320px] items-center justify-center [perspective:1200px]">
          {items.map((item, index) => {
            const offset = (index - active + items.length) % items.length;
            const signedOffset = offset > items.length / 2 ? offset - items.length : offset;
            const Icon = item.icon;
            const visible = Math.abs(signedOffset) <= 2;
            return (
              <motion.article
                key={item.title}
                initial={false}
                animate={{
                  x: `${signedOffset * 76}%`,
                  scale: signedOffset === 0 ? 1 : 0.78,
                  rotateY: signedOffset * -7,
                  opacity: visible ? (signedOffset === 0 ? 1 : 0.72) : 0,
                  zIndex: 10 - Math.abs(signedOffset),
                }}
                transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-[76%] max-w-[290px] rounded-[26px] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,.8),rgba(207,250,238,.55))] p-5 text-center shadow-[0_24px_60px_-28px_rgba(6,95,70,.55)] backdrop-blur-xl sm:w-[38%]"
                aria-hidden={signedOffset !== 0}
              >
                <span
                  className={`mx-auto grid size-14 place-items-center rounded-full border ${signedOffset === 0 ? "border-emerald-300 bg-emerald-50 text-emerald-700 shadow-[0_0_28px_rgba(45,212,191,.45)]" : "border-emerald-900/10 bg-white/60 text-emerald-700/75"}`}
                >
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
              </motion.article>
            );
          })}
        </div>
        <div className="relative mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous reason"
            className="grid size-10 place-items-center rounded-full border border-emerald-900/15 bg-white/70 text-emerald-800 shadow-sm transition hover:bg-emerald-50"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Why IFIT slides">
            {items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={`Show ${item.title}`}
                onClick={() => setActive(index)}
                className={`size-2.5 rounded-full transition-all ${index === active ? "scale-125 bg-emerald-600" : "bg-emerald-900/20 hover:bg-emerald-900/40"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next reason"
            className="grid size-10 place-items-center rounded-full border border-emerald-900/15 bg-white/70 text-emerald-800 shadow-sm transition hover:bg-emerald-50"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ValuesPanels({ values }: { values: Array<[string, string]> }) {
  return (
    <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:justify-center">
      {values.map(([title, body], index) => (
        <motion.article
          key={title}
          initial={{ opacity: 0, y: 16, rotate: index % 2 === 0 ? -3 : 3 }}
          whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -3 : 3 }}
          whileHover={{ y: -8, rotate: 0, scale: 1.035, zIndex: 10 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, delay: index * 0.06 }}
          className="group relative min-h-[205px] flex-1 overflow-hidden rounded-[22px] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,.72),rgba(184,243,224,.42))] p-5 shadow-[0_24px_45px_-30px_rgba(6,95,70,.72)] backdrop-blur-xl sm:-ml-2 first:ml-0"
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

export function JourneyRail({ timeline }: { timeline: Array<[string, string, string]> }) {
  return (
    <div className="relative mt-7 space-y-5">
      {[timeline.slice(0, 3), timeline.slice(3)].map((row, rowIndex) => (
        <div key={rowIndex} className="relative grid gap-3 sm:grid-cols-3">
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-5 hidden h-px bg-gradient-to-r from-emerald-300/20 via-emerald-500/70 to-emerald-300/20 sm:block"
            aria-hidden="true"
          />
          {row.map(([date, title, body], index) => {
            const globalIndex = rowIndex * 3 + index;
            return (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: globalIndex * 0.05 }}
                className="relative rounded-[22px] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,.72),rgba(190,243,226,.45))] p-4 shadow-[0_22px_45px_-32px_rgba(6,95,70,.7)] backdrop-blur-xl transition-transform hover:-translate-y-1"
              >
                <div className="relative flex items-center gap-3">
                  <JourneyNode active={globalIndex === timeline.length - 1}>
                    {globalIndex + 1}
                  </JourneyNode>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-700">
                    {date}
                  </div>
                </div>
                <h3 className="mt-5 text-sm font-semibold text-slate-950">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">{body}</p>
              </motion.article>
            );
          })}
        </div>
      ))}
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
