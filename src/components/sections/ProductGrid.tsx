import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Bot, BrainCircuit, GraduationCap, KanbanSquare, Users } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { SectionHead } from "./SectionHead";

const ICONS: Record<string, typeof Users> = {
  hrm: Users,
  campus: GraduationCap,
  worktrack: KanbanSquare,
  iis: BrainCircuit,
  askbot: Bot,
};

const ORDER = ["hrm", "campus", "worktrack", "iis", "askbot"];

export function ProductGrid() {
  const items = ORDER.map((s) => PRODUCTS.find((p) => p.slug === s)!).filter(Boolean);

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionHead eyebrow="Products" title="Five products." accent="One engineering standard.">
          Pick a platform to see what it does, who it is for and what you get.
        </SectionHead>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((p, i) => {
            const Icon = ICONS[p.slug] ?? BrainCircuit;
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[22px] border p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2"
                  style={{
                    borderColor: `color-mix(in oklab, ${p.accent} 22%, transparent)`,
                    background: `linear-gradient(160deg, color-mix(in oklab, ${p.accent} 14%, var(--glass-bg)), var(--glass-bg) 70%)`,
                    boxShadow: `0 24px 60px -45px color-mix(in oklab, ${p.accent} 85%, transparent)`,
                  }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-25 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
                    style={{ background: p.accent }}
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }}
                  />

                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border"
                    style={{
                      color: p.accent,
                      borderColor: `color-mix(in oklab, ${p.accent} 35%, transparent)`,
                      background: `color-mix(in oklab, ${p.accent} 12%, transparent)`,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3
                    className="mt-4 text-lg font-semibold tracking-tight text-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.name}
                  </h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-foreground/55">{p.category}</p>
                  <p className="mt-2 line-clamp-2 text-[12px] leading-relaxed text-foreground/45">{p.short}</p>

                  <span
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[12px] font-medium transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: p.accent }}
                  >
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
