import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHead({
  eyebrow,
  title,
  accent,
  children,
  center = false,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">{eyebrow}</div>
      <h2 className="mt-3 text-[clamp(1.6rem,3.2vw,2.4rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
        {title} {accent && <span className="text-gradient">{accent}</span>}
      </h2>
      {children && <p className="mt-3 text-sm leading-relaxed text-foreground/60">{children}</p>}
    </motion.div>
  );
}
