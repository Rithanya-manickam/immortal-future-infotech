import { motion } from "framer-motion";

const PROJECTS = [
  {
    tag: "Banking · Finacle",
    title: "Continental Core Migration",
    body: "Zero-downtime migration of a 40M-account core banking platform onto next-gen Finacle.",
    stats: [{ k: "40M", v: "Accounts" }, { k: "0", v: "Downtime" }, { k: "6mo", v: "Rollout" }],
    accent: "linear-gradient(135deg, oklch(0.78 0.17 168), oklch(0.72 0.18 195))",
  },
  {
    tag: "AI · Automation",
    title: "Sentinel Autonomous Ops",
    body: "Self-healing AI agent mesh handling 12k enterprise workflows without human intervention.",
    stats: [{ k: "12k", v: "Workflows" }, { k: "99.99%", v: "Uptime" }, { k: "3×", v: "Throughput" }],
    accent: "linear-gradient(135deg, oklch(0.72 0.24 160), oklch(0.65 0.24 175))",
  },
  {
    tag: "Cyber · Defense",
    title: "Obsidian Threat Grid",
    body: "Real-time anomaly detection across a global perimeter — trained on 4B daily signals.",
    stats: [{ k: "4B", v: "Signals/day" }, { k: "<40ms", v: "Response" }, { k: "18", v: "Regions" }],
    accent: "linear-gradient(135deg, oklch(0.82 0.16 155), oklch(0.72 0.24 160))",
  },
];

export function CreativeVault() {
  return (
    <section id="vault" className="relative px-6 py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Section 03 — Creative Vault</div>
            <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight text-foreground">
              Signature builds from <span className="text-gradient">our archives.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-foreground/55">
            A curated vault of enterprise systems shipping in production — banking cores, autonomous operations, and adversarial defense at planetary scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              data-cursor="Launch"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group glass-panel relative overflow-hidden p-8"
            >
              <div
                className="absolute -inset-px -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
                style={{ background: p.accent }}
              />
              <div className="h-40 w-full overflow-hidden rounded-lg border border-border/10" style={{ background: p.accent }}>
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 30% 20%, oklch(1 0 0 / 0.5), transparent 60%)" }} />
                  <div className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-[0.25em] text-black/70">{p.tag}</div>
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">{p.body}</p>
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border/10 pt-5">
                {p.stats.map((s) => (
                  <div key={s.v}>
                    <div className="text-lg font-semibold text-foreground">{s.k}</div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-foreground/40">{s.v}</div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
