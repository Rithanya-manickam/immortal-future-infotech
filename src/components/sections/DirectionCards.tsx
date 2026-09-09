import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { CheckCircle2, CircleDot, Rocket, Star } from "lucide-react";

const CARDS = [
  {
    label: "Vision",
    icon: Star,
    title: "Technology Lives Forever",
    body: "To be India's foremost AI-first technology company — where every banking system, hospital, and enterprise runs with intelligence built into its core.",
    points: [
      "Every Indian bank automated with domain AI",
      "Healthcare powered by real-time intelligence",
      "Enterprise IT that learns and adapts",
    ],
    accent: "24 205 190",
    surface: "6 46 48",
  },
  {
    label: "Mission",
    icon: CircleDot,
    title: "Intelligent Solutions. Real Impact.",
    body: "To deliver AI-powered systems that create measurable, lasting impact — reducing costs, eliminating errors, and empowering people.",
    points: [
      "Finacle automation that works out of the box",
      "AI that answers real staff questions instantly",
      "Cloud infrastructure that scales without friction",
    ],
    accent: "167 118 255",
    surface: "38 20 66",
  },
  {
    label: "Goals 2025",
    icon: Rocket,
    title: "Building India's AI Future",
    body: "Expand IIS to 100+ banks, launch ASKBOT SaaS, and grow AWS managed services nationally.",
    points: [
      "100+ banking clients on IIS platform",
      "ASKBOT available as SaaS for any bank",
      "National AWS managed services expansion",
    ],
    accent: "74 158 255",
    surface: "9 32 74",
  },
] as const;

function GlassCard({ card, index }: { card: (typeof CARDS)[number]; index: number }) {
  const Icon = card.icon;
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 180, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 180, damping: 18 });

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      whileHover={{ y: -10 }}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformPerspective: 1000,
        background: `linear-gradient(160deg, rgb(${card.surface} / 0.96) 0%, rgb(${card.surface} / 0.72) 55%, rgb(10 12 20 / 0.94) 100%)`,
        borderColor: `rgb(${card.accent} / 0.42)`,
        boxShadow: `0 0 0 1px rgb(${card.accent} / 0.18), 0 26px 60px -30px rgb(${card.accent} / 0.55), 0 0 46px -18px rgb(${card.accent} / 0.45), inset 0 1px 0 rgb(255 255 255 / 0.16)`,
      }}
      className="group relative flex flex-col overflow-hidden rounded-[28px] border p-7 text-slate-100 backdrop-blur-2xl transition-shadow duration-300 will-change-transform"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-70"
        style={{
          background: `radial-gradient(120% 90% at 20% 0%, rgb(${card.accent} / 0.28), transparent 70%)`,
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `0 0 70px -10px rgb(${card.accent} / 0.55) inset` }}
      />
      <div className="relative">
        <div
          className="grid size-14 place-items-center rounded-2xl border backdrop-blur-md"
          style={{
            borderColor: `rgb(${card.accent} / 0.5)`,
            background: `rgb(${card.accent} / 0.14)`,
            boxShadow: `0 0 24px -8px rgb(${card.accent} / 0.8)`,
          }}
        >
          <Icon className="size-6" style={{ color: `rgb(${card.accent})` }} aria-hidden="true" />
        </div>
        <p
          className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: `rgb(${card.accent})` }}
        >
          {card.label}
        </p>
        <h3 className="mt-4 font-serif text-2xl leading-tight tracking-[-0.04em] text-white">
          {card.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{card.body}</p>
        <ul className="mt-6 flex flex-col gap-3">
          {card.points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm leading-6 text-slate-300">
              <CheckCircle2
                className="mt-1 size-4 shrink-0"
                style={{ color: `rgb(${card.accent})` }}
                aria-hidden="true"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function DirectionCards() {
  return (
    <section
      className="relative overflow-hidden px-6 py-12 md:py-16"
      aria-labelledby="direction-title"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(28,126,150,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(28,126,150,0.06)_1px,transparent_1px)] bg-[size:64px_64px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--brand-teal)]">
            Our Direction
          </p>
          <h2
            id="direction-title"
            className="mt-4 font-serif text-4xl font-semibold tracking-[-0.05em] text-foreground text-balance md:text-6xl"
          >
            Vision, Mission <span className="text-gradient">&amp; Goals</span>
          </h2>
        </div>
        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, index) => (
            <GlassCard key={card.label} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
