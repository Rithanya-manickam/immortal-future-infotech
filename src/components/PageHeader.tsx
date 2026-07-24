import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, gradient, children }: { eyebrow: string; title: string; gradient?: string; children?: ReactNode }) {
  return (
    <section className="relative px-6 pt-40 pb-16">
      <div className="mx-auto max-w-[1400px]">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">
          {eyebrow}
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="mt-3 max-w-4xl text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[1] tracking-tight text-foreground">
          {title.split("|")[0]}
          {title.includes("|") && <span className="text-gradient"> {title.split("|")[1]}</span>}
        </motion.h1>
        {gradient && <p className="sr-only">{gradient}</p>}
        {children && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.9 }} className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/60">
            {children}
          </motion.p>
        )}
      </div>
    </section>
  );
}