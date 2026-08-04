import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Bot, Sparkles, ArrowRight } from "lucide-react";
import { SectionHead } from "./SectionHead";

const PRODUCTS = [
  {
    icon: Sparkles,
    name: "Immortal Intelligence Suite (IIS)",
    tag: "AI automation layer for Infosys Finacle",
    body: "Automates the repetitive core-banking work that eats operations time — without disrupting the Finacle setup already in place.",
    points: ["EOD automation", "Loan & KYC workflows", "Treasury and RBI reporting"],
  },
  {
    icon: Bot,
    name: "ASKBOT",
    tag: "AI training assistant for banking staff",
    body: "Answers Finacle questions in natural language, grounded in your own documentation with role-based access.",
    points: ["Retrieval-augmented answers", "FAISS vector search", "Multi-branch rollout"],
  },
];

export function BankingAI() {
  return (
    <section id="products" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionHead eyebrow="Products" title="AI solutions built for" accent="real banking.">
          Built on deep Finacle and enterprise IT domain expertise — not generic software resold to
          banks.
        </SectionHead>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {PRODUCTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass-panel flex min-w-0 flex-col p-6 transition-transform hover:-translate-y-1 md:p-7"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border/15 bg-foreground/[0.04]">
                    <Icon className="h-4 w-4 text-[var(--brand-glow)]" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-semibold text-foreground">{p.name}</h3>
                    <div className="truncate text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                      {p.tag}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-foreground/65">{p.body}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="rounded-full border border-border/15 px-3 py-1 text-[11px] text-foreground/65"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-1">
                  <Link to="/products" className="btn-secondary text-xs" data-cursor="Open">
                    Explore product <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
