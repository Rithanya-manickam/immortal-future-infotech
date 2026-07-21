import { motion } from "framer-motion";

const TILES = [
  { label: "Neural Ops Center", grad: "linear-gradient(135deg, oklch(0.35 0.15 175), oklch(0.7 0.22 168))", h: "md:row-span-2" },
  { label: "Autonomous Data Grid", grad: "linear-gradient(135deg, oklch(0.4 0.2 160), oklch(0.75 0.24 160))" },
  { label: "Cyber Perimeter", grad: "linear-gradient(135deg, oklch(0.35 0.15 20), oklch(0.7 0.24 40))" },
  { label: "Cloud Fabric", grad: "linear-gradient(135deg, oklch(0.3 0.12 200), oklch(0.72 0.18 195))", h: "md:row-span-2" },
  { label: "Finacle Suite", grad: "linear-gradient(135deg, oklch(0.35 0.1 155), oklch(0.8 0.16 155))" },
  { label: "Enterprise HQ", grad: "linear-gradient(135deg, oklch(0.28 0.06 180), oklch(0.6 0.15 180))" },
];

export function Gallery() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Section 05 — Frames</div>
            <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight text-foreground">
              Where our work <span className="text-gradient">lives.</span>
            </h2>
          </div>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {TILES.map((t, i) => (
            <motion.div
              key={t.label}
              data-cursor="View"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-border/10 ${t.h ?? ""}`}
              style={{ background: t.grad, boxShadow: "var(--shadow-elegant)" }}
            >
              <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 30% 25%, oklch(1 0 0 / 0.4), transparent 55%)" }} />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0.05 0.02 180 / 0.85))" }} />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/70">Frame {String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-1 text-lg font-semibold text-foreground">{t.label}</div>
                </div>
                <div className="translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 text-foreground text-sm">→</div>
              </div>
              <div className="noise-overlay" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
