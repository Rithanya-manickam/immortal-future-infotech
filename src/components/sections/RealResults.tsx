import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHead } from "./SectionHead";

const CASES = [
  {
    tag: "Banking · Finacle",
    title: "EOD Automation",
    client: "Cooperative bank, Tamil Nadu",
    challenge: "End-of-day reconciliation ran as 12 manual steps every night.",
    solution: "IIS automated the full EOD sequence on top of the existing Finacle setup.",
    result: [["80%", "Manual effort ↓"], ["4hr", "Nightly time saved"], ["0", "Reconciliation errors"]],
  },
  {
    tag: "AI · Training",
    title: "ASKBOT Rollout",
    client: "Private bank, 200+ staff",
    challenge: "New tellers took weeks to become productive on Finacle.",
    solution: "ASKBOT deployed across branches with role-based access to internal documentation.",
    result: [["3×", "Faster onboarding"], ["70%", "Faster query resolution"], ["200+", "Staff served"]],
  },
  {
    tag: "Cloud · AWS",
    title: "Core Banking on AWS",
    client: "Regional private bank",
    challenge: "Ageing on-premise infrastructure limited availability and scale.",
    solution: "Migration to AWS with multi-AZ high availability and cost guardrails.",
    result: [["40%", "Infra cost ↓"], ["99.9%", "Uptime"], ["3×", "Performance"]],
  },
];

export function RealResults() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <SectionHead eyebrow="Proof" title="Real results for" accent="real clients.">
            Every engagement below is a live deployment — the challenge, what we built, and what
            changed.
          </SectionHead>
          <Link to="/portfolio" className="btn-secondary text-xs">
            Full portfolio <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass-panel flex flex-col p-6"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--brand-glow)]">{c.tag}</div>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{c.title}</h3>
              <div className="text-xs text-foreground/45">{c.client}</div>

              <dl className="mt-4 space-y-3 text-xs leading-relaxed">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-foreground/40">Challenge</dt>
                  <dd className="mt-1 text-foreground/65">{c.challenge}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-foreground/40">Solution</dt>
                  <dd className="mt-1 text-foreground/65">{c.solution}</dd>
                </div>
              </dl>

              <div className="mt-auto grid grid-cols-3 gap-2 border-t border-border/10 pt-4">
                {c.result.map(([k, v]) => (
                  <div key={v}>
                    <div className="text-base font-semibold text-foreground">{k}</div>
                    <div className="text-[10px] leading-tight tracking-wide text-foreground/45">{v}</div>
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
