import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Sparkles, Bot } from "lucide-react";
import imgAi from "@/assets/img-ai.jpg";
import imgDash from "@/assets/accent-dashboard.jpg";

const PRODUCTS = [
  {
    icon: Sparkles,
    name: "Immortal Intelligence Suite",
    short: "IIS",
    tag: "AI Banking Automation on Finacle",
    body: "EOD automation, loan workflows, KYC, treasury, RBI reporting and Finacle API integration.",
    metric: "80% reduction in manual processing",
    image: imgDash,
  },
  {
    icon: Bot,
    name: "ASKBOT",
    short: "RAG",
    tag: "AI Finacle Training Assistant",
    body: "Natural language Q&A over Finacle documentation with FAISS search, RBAC and multi-branch deployment.",
    metric: "3× faster staff onboarding",
    image: imgAi,
  },
];

export function ProductsStrip() {
  return (
    <section id="products" className="relative px-6 py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 max-w-2xl">
          <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Products</div>
          <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight text-foreground">
            Two products <span className="text-gradient">already in banks.</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {PRODUCTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="glass-panel group relative overflow-hidden p-8"
              >
                <div className="absolute inset-x-0 top-0 h-48 overflow-hidden opacity-40 transition-opacity group-hover:opacity-70">
                  <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent, var(--background))" }} />
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/15 bg-foreground/[0.04]">
                      <Icon className="h-4 w-4 text-[var(--brand-glow)]" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50">{p.short}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-foreground">{p.name}</h3>
                  <div className="mt-1 text-xs uppercase tracking-[0.25em] text-foreground/50">{p.tag}</div>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-foreground/65">{p.body}</p>
                  <div className="mt-6 inline-flex rounded-full border border-border/15 bg-foreground/[0.04] px-3 py-1 text-xs text-foreground">
                    {p.metric}
                  </div>
                  <div className="mt-8">
                    <Link to="/products" className="text-xs uppercase tracking-[0.3em] text-foreground/70 hover:text-foreground">Learn more →</Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}