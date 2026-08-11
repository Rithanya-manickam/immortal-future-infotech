import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/data/products";
import { SectionHead } from "./SectionHead";

const NODES = [
  { slug: "askbot", x: 50, y: 12 },
  { slug: "iis", x: 14, y: 46 },
  { slug: "worktrack", x: 86, y: 46 },
  { slug: "hrm", x: 30, y: 84 },
  { slug: "campus", x: 72, y: 84 },
];

export function Ecosystem() {
  const [active, setActive] = useState<string | null>(null);
  const current = PRODUCTS.find((p) => p.slug === active);

  return (
    <section className="relative px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionHead eyebrow="Ecosystem" title="One platform core." accent="Five connected systems.">
          Every IFIT product shares the same data, identity and automation core — hover a node to see how.
        </SectionHead>

        <div className="mt-9 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="glass-panel relative aspect-[4/3] min-w-0 overflow-hidden rounded-2xl sm:aspect-[16/10]">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
              {NODES.map((n) => {
                const on = active === n.slug;
                return (
                  <line
                    key={n.slug}
                    x1="50"
                    y1="50"
                    x2={n.x}
                    y2={n.y}
                    stroke="var(--brand-glow)"
                    strokeWidth={on ? 0.5 : 0.22}
                    strokeDasharray="2 2"
                    opacity={on ? 0.95 : 0.32}
                    className="transition-all duration-500"
                  >
                    <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2.4s" repeatCount="indefinite" />
                  </line>
                );
              })}
            </svg>

            {/* core */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div
                className="grid h-20 w-20 place-items-center rounded-full border border-[var(--brand-glow)]/40 text-sm font-semibold text-foreground backdrop-blur"
                style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--brand-glow) 22%, transparent), transparent 70%)" }}
              >
                IFIT
              </div>
            </div>

            {NODES.map((n) => {
              const p = PRODUCTS.find((x) => x.slug === n.slug)!;
              const on = active === n.slug;
              return (
                <Link
                  key={n.slug}
                  to="/products/$slug"
                  params={{ slug: n.slug }}
                  onMouseEnter={() => setActive(n.slug)}
                  onFocus={() => setActive(n.slug)}
                  onMouseLeave={() => setActive(null)}
                  onBlur={() => setActive(null)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-1.5 text-[12px] font-medium backdrop-blur transition-all duration-300"
                  style={{
                    left: `${n.x}%`,
                    top: `${n.y}%`,
                    borderColor: `color-mix(in oklab, ${p.accent} ${on ? 70 : 28}%, transparent)`,
                    background: `color-mix(in oklab, ${p.accent} ${on ? 20 : 8}%, transparent)`,
                    color: on ? p.accent : "inherit",
                    transform: `translate(-50%,-50%) scale(${on ? 1.1 : 1})`,
                    boxShadow: on ? `0 0 30px -6px ${p.accent}` : "none",
                  }}
                >
                  {p.name}
                </Link>
              );
            })}
          </div>

          <motion.div
            key={current?.slug ?? "idle"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-panel min-w-0 rounded-2xl p-5"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/45">
              {current ? current.category : "The core"}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-foreground">
              {current ? `${current.name} — ${current.short}` : "Shared identity, data and automation"}
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-foreground/62">
              {current
                ? current.overview
                : "Hover any product to see where it plugs into the IFIT core: one login model, one audit trail, one automation engine across banking, workforce, education and delivery."}
            </p>
            {current && (
              <ul className="mt-4 space-y-1.5">
                {current.modules.slice(0, 4).map((m) => (
                  <li key={m.title} className="flex gap-2 text-[12.5px] text-foreground/68">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full" style={{ background: current.accent }} />
                    {m.title}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
