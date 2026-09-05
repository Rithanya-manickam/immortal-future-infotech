import { motion } from "framer-motion";
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
    tone: "light",
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
    tone: "light",
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
    tone: "dark",
  },
] as const;

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
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {CARDS.map((card, index) => {
            const Icon = card.icon;
            const dark = card.tone === "dark";
            return (
              <motion.article
                key={card.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`relative overflow-hidden rounded-[26px] border p-7 shadow-[0_20px_45px_-32px_rgba(15,23,42,0.45)] ${dark ? "border-slate-800 bg-slate-900 text-slate-100" : "border-border/15 bg-background/75 text-foreground backdrop-blur-xl"}`}
              >
                <div
                  className={`grid size-14 place-items-center rounded-2xl border ${dark ? "border-orange-300/40 bg-orange-500 text-white" : index === 0 ? "border-emerald-300/60 bg-emerald-500 text-white" : "border-blue-300/60 bg-blue-500 text-white"}`}
                >
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <p
                  className={`mt-6 font-mono text-xs font-semibold uppercase tracking-[0.3em] ${dark ? "text-orange-300" : "text-[var(--brand-teal)]"}`}
                >
                  {card.label}
                </p>
                <h3 className="mt-4 font-serif text-2xl leading-tight tracking-[-0.04em]">
                  {card.title}
                </h3>
                <p
                  className={`mt-4 text-sm leading-7 ${dark ? "text-slate-300" : "text-foreground/70"}`}
                >
                  {card.body}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className={`flex items-start gap-2 text-sm leading-6 ${dark ? "text-slate-300" : "text-foreground/70"}`}
                    >
                      <CheckCircle2
                        className={`mt-1 size-4 shrink-0 ${dark ? "text-orange-300" : "text-[var(--brand-teal)]"}`}
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
