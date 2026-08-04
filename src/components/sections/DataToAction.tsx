import { motion } from "framer-motion";
import { Database, BrainCircuit, Workflow, Target } from "lucide-react";
import { SectionHead } from "./SectionHead";

const STEPS = [
  { icon: Database, k: "Data", body: "Core banking, operational and document data, connected through Finacle APIs and secure integrations." },
  { icon: BrainCircuit, k: "Intelligence", body: "Models and retrieval layers that read that data in context and surface what matters." },
  { icon: Workflow, k: "Automation", body: "Repetitive steps — reconciliation, checks, reporting — handled by rules and AI agents." },
  { icon: Target, k: "Action", body: "Faster decisions for your team, with an audit trail your compliance function can defend." },
];

export function DataToAction() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionHead eyebrow="How we work" title="From raw data to" accent="intelligent action." center>
          A single path from the systems you already run to outcomes your business can measure.
        </SectionHead>

        <div className="relative mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="glass-panel relative p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-border/15 bg-foreground/[0.04]">
                    <Icon className="h-4 w-4 text-[var(--brand-glow)]" />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-foreground/35">
                    0{i + 1}
                  </span>
                </div>
                <div className="mt-4 text-base font-semibold text-foreground">{s.k}</div>
                <p className="mt-2 text-xs leading-relaxed text-foreground/60">{s.body}</p>
                {i < STEPS.length - 1 && (
                  <span className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-4 bg-gradient-to-r from-[var(--brand-glow)] to-transparent lg:block" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
