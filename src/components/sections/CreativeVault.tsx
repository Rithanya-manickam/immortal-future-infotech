import { motion } from "framer-motion";

import { Link } from "@tanstack/react-router";

const PROJECTS = [
  {
    tag: "Banking · Finacle",
    title: "EOD Automation — Cooperative Bank",
    body: "Automated End-of-Day reconciliation on Finacle. Zero errors, four hours saved daily.",
    stats: [{ k: "80%", v: "Effort ↓" }, { k: "4hr", v: "Saved/day" }, { k: "0", v: "Errors" }],
    accent: "linear-gradient(135deg, oklch(0.78 0.17 168), oklch(0.72 0.18 195))",
  },
  {
    tag: "AI · Training",
    title: "ASKBOT Deployment — Private Bank",
    body: "RAG-powered Finacle assistant serving 200+ staff across multiple branches.",
    stats: [{ k: "3×", v: "Onboarding" }, { k: "70%", v: "Faster Q&A" }, { k: "200+", v: "Staff" }],
    accent: "linear-gradient(135deg, oklch(0.72 0.24 160), oklch(0.65 0.24 175))",
  },
  {
    tag: "Cloud · AWS",
    title: "AWS Migration — Regional Bank",
    body: "Lift-and-modernize onto AWS with FinOps guardrails and multi-AZ high availability.",
    stats: [{ k: "40%", v: "Cost ↓" }, { k: "99.9%", v: "Uptime" }, { k: "3×", v: "Perf" }],
    accent: "linear-gradient(135deg, oklch(0.82 0.16 155), oklch(0.72 0.24 160))",
  },
];

export function CreativeVault() {
  return (
    <section id="vault" className="relative px-6 py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Featured Work</div>
            <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight text-foreground">
              Case studies from <span className="text-gradient">real deployments.</span>
            </h2>
          </div>
          <Link to="/portfolio" className="text-xs uppercase tracking-[0.3em] text-foreground/60 hover:text-foreground">Full portfolio →</Link>
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
