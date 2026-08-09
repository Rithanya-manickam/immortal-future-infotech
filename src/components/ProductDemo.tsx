import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "@/data/products";

export function ProductDemo({ product }: { product: Product }) {
  const [active, setActive] = useState(product.demo[0].key);
  const tab = product.demo.find((t) => t.key === active) ?? product.demo[0];

  return (
    <div
      className="glass-panel overflow-hidden"
      style={{ borderColor: `color-mix(in oklab, ${product.accent} 30%, transparent)` }}
    >
      {/* window chrome */}
      <div className="flex items-center gap-3 border-b border-border/15 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden>
          <i className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
          <i className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
          <i className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
        </span>
        <span className="truncate text-[11px] uppercase tracking-[0.2em] text-foreground/50">
          {product.name} — Interactive product preview
        </span>
        <span
          className="ml-auto shrink-0 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.15em]"
          style={{ background: `color-mix(in oklab, ${product.accent} 14%, transparent)`, color: product.accent }}
        >
          Demo data
        </span>
      </div>

      <div className="grid gap-0 md:grid-cols-[190px_minmax(0,1fr)]">
        {/* nav */}
        <div
          role="tablist"
          aria-label={`${product.name} demo sections`}
          className="flex gap-1 overflow-x-auto border-b border-border/15 p-2 md:flex-col md:overflow-visible md:border-b-0 md:border-r"
        >
          {product.demo.map((t) => {
            const on = t.key === active;
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(t.key)}
                className="shrink-0 rounded-lg px-3 py-2 text-left text-[13px] font-medium transition-colors md:w-full"
                style={{
                  background: on ? `color-mix(in oklab, ${product.accent} 14%, transparent)` : "transparent",
                  color: on ? product.accent : "color-mix(in oklab, currentColor 65%, transparent)",
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* panel */}
        <div className="min-w-0 p-5 md:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-base font-semibold text-foreground">{tab.headline}</h3>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {tab.kpis.map((k) => (
                  <div key={k.label} className="min-w-0 rounded-xl border border-border/15 bg-foreground/[0.03] p-3">
                    <div className="truncate text-[10px] uppercase tracking-[0.2em] text-foreground/50">{k.label}</div>
                    <div className="mt-1 truncate text-lg font-semibold" style={{ color: product.accent }}>
                      {k.value}
                    </div>
                  </div>
                ))}
              </div>

              {tab.table && (
                <div className="mt-4 overflow-x-auto rounded-xl border border-border/15">
                  <table className="w-full min-w-[520px] text-left text-[13px]">
                    <thead>
                      <tr className="bg-foreground/[0.04]">
                        {tab.table.cols.map((c) => (
                          <th key={c} className="px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-foreground/50">
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tab.table.rows.map((row, i) => (
                        <tr key={i} className="border-t border-border/10">
                          {row.map((cell, j) => (
                            <td key={j} className={`px-3 py-2 ${j === 0 ? "text-foreground" : "text-foreground/65"}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {tab.chips && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {tab.chips.map((c) => (
                    <li key={c} className="rounded-full border border-border/15 px-3 py-1 text-[12px] text-foreground/70">
                      {c}
                    </li>
                  ))}
                </ul>
              )}

              {tab.note && <p className="mt-4 text-[13px] leading-relaxed text-foreground/55">{tab.note}</p>}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}