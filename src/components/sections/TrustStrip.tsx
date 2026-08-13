import { motion } from "framer-motion";

const ITEMS = [
  "Finacle Certified Partner",
  "AWS Technology Partner",
  "NASSCOM Member",
  "MCA Registered",
  "MSME Recognized",
];

export function TrustStrip() {
  return (
    <section aria-label="Certifications" className="px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-full border border-border/12 bg-[var(--glass-bg)] px-6 py-3 backdrop-blur-xl"
      >
        {ITEMS.map((t, i) => (
          <div key={t} className="flex items-center gap-8">
            <span className="text-[11px] uppercase tracking-[0.22em] text-foreground/55">{t}</span>
            {i < ITEMS.length - 1 && (
              <span aria-hidden className="hidden h-1 w-1 rounded-full bg-[var(--brand-glow)]/50 md:block" />
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
