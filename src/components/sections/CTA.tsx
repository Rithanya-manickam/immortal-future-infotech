import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="connect" className="relative overflow-hidden px-6 py-40">
      <div className="mx-auto max-w-[1200px]">
        {/* Portal */}
        <div className="relative flex flex-col items-center text-center">
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="relative h-[520px] w-[520px] max-w-[92vw]">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full border animate-pulse-glow"
                  style={{
                    borderColor: "oklch(0.78 0.17 220 / 0.35)",
                    transform: `scale(${1 - i * 0.16})`,
                    animationDelay: `${i * 0.4}s`,
                    boxShadow: "0 0 60px oklch(0.78 0.17 220 / 0.3), inset 0 0 60px oklch(0.72 0.24 340 / 0.15)",
                  }}
                />
              ))}
              <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at center, oklch(0.78 0.17 220 / 0.35), transparent 60%)", filter: "blur(30px)" }} />
            </div>
          </div>

          {/* Grid floor */}
          <div
            className="pointer-events-none absolute inset-x-0 -bottom-20 -z-10 h-72 opacity-40"
            style={{
              backgroundImage: "linear-gradient(oklch(0.85 0.18 220 / .5) 1px, transparent 1px), linear-gradient(90deg, oklch(0.85 0.18 220 / .5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage: "linear-gradient(180deg, transparent, black 30%, transparent)",
              transform: "perspective(600px) rotateX(60deg)",
              transformOrigin: "top",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/15 bg-foreground/5 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-foreground/70 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-[var(--brand-glow)]" />
            Enter the portal
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1] tracking-tight text-foreground"
          >
            Let's build the <span className="text-gradient">future</span> together.
          </motion.h2>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-foreground/60 md:text-base">
            Bring us the ambition — the impossible enterprise system, the intelligent product, the platform meant to endure. We'll engineer it to last.
          </p>

          <motion.a
            href="mailto:hello@immortalfuture.tech"
            data-cursor="Launch"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="group relative mt-12 inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-medium text-[oklch(0.1_0.02_275)]"
            style={{ background: "var(--gradient-hero)", boxShadow: "0 0 80px -10px oklch(0.78 0.17 220 / 0.7)" }}
          >
            <span>Start Your Journey</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
