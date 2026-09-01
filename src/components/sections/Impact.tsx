import { motion } from "framer-motion";

const STATS = [
  { k: "1 Yr", v: "Operational" },
  { k: "50+", v: "Projects delivered" },
  { k: "20+", v: "Clients" },
  { k: "3", v: "Verticals" },
  { k: "80%", v: "Avg effort reduction" },
];

export function Impact() {
  return (
    <section aria-label="Impact" className="px-6 py-8">
      <div className="mx-auto grid max-w-[1200px] gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {STATS.map((s, i) => (
          <motion.div
            key={s.v}
            initial={{ opacity: 0, y: i % 2 ? 18 : -18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-border/12 bg-[var(--glass-bg)] px-5 py-6 text-center backdrop-blur-xl"
          >
            <div
              className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-tight text-gradient"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {s.k}
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-foreground/50">
              {s.v}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
