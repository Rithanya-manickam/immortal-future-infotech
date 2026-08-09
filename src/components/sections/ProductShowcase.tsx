import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { SectionHead } from "./SectionHead";

export function ProductShowcase() {
  const [slug, setSlug] = useState(PRODUCTS[0].slug);
  const p = PRODUCTS.find((x) => x.slug === slug)!;

  return (
    <section id="products" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionHead eyebrow="Products" title="Five products." accent="One engineering standard.">
          Pick a product to see what it does, who it is for and what you get.
        </SectionHead>

        <div className="mt-8 grid gap-4 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* selectors */}
          <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
            {PRODUCTS.map((item) => {
              const on = item.slug === slug;
              return (
                <button
                  key={item.slug}
                  onClick={() => setSlug(item.slug)}
                  aria-pressed={on}
                  className="glass-panel min-w-[190px] shrink-0 px-4 py-3 text-left transition-transform hover:-translate-y-0.5 lg:min-w-0"
                  style={{
                    borderColor: on ? `color-mix(in oklab, ${item.accent} 45%, transparent)` : undefined,
                    background: on ? `color-mix(in oklab, ${item.accent} 10%, transparent)` : undefined,
                  }}
                >
                  <div className="text-sm font-semibold text-foreground">{item.name}</div>
                  <div className="mt-0.5 truncate text-[11px] text-foreground/55">{item.short}</div>
                </button>
              );
            })}
          </div>

          {/* featured panel */}
          <AnimatePresence mode="wait">
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="glass-panel min-w-0 overflow-hidden p-6 md:p-8"
              style={{
                background: `radial-gradient(600px circle at 100% 0%, color-mix(in oklab, ${p.accent} 12%, transparent), transparent 65%), var(--glass-bg)`,
              }}
            >
              <div className="text-[10px] uppercase tracking-[0.3em]" style={{ color: p.accent }}>
                {p.category}
              </div>
              <h3 className="mt-2 text-[clamp(1.3rem,2.4vw,1.8rem)] font-semibold tracking-tight text-foreground">
                {p.name} — {p.short}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/65">{p.overview}</p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-foreground/45">Key modules</div>
                  <ul className="mt-2 space-y-1.5">
                    {p.modules.slice(0, 5).map((m) => (
                      <li key={m.title} className="flex gap-2 text-[13px] text-foreground/70">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full" style={{ background: p.accent }} />
                        {m.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-foreground/45">Outcomes</div>
                  <ul className="mt-2 space-y-1.5">
                    {p.outcomes.slice(0, 4).map((o) => (
                      <li key={o.label} className="text-[13px] text-foreground/70">
                        <span className="text-foreground">{o.label}</span> — {o.body}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-border/15 px-2.5 py-1 text-[11px] text-foreground/60">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/products/$slug" params={{ slug: p.slug }} className="btn-primary text-xs">
                  {p.cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link to="/contact" className="btn-secondary text-xs">
                  Request a demo
                </Link>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}