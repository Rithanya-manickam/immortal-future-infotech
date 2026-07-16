import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Particle = { left: string; top: string; dur: number; delay: number };

export function PageLoader() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 40 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        dur: 2 + Math.random() * 2,
        delay: Math.random() * 1.5,
      })),
    );
  }, []);

  useEffect(() => {
    let cur = 0;
    const id = setInterval(() => {
      cur += Math.random() * 12 + 4;
      if (cur >= 100) {
        cur = 100;
        clearInterval(id);
        setPct(100);
        setTimeout(() => setDone(true), 600);
      } else {
        setPct(Math.floor(cur));
      }
    }, 90);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[oklch(0.06_0.02_275)]"
        >
          {/* Particle field */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {particles.map((p, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: p.dur,
                  delay: p.delay,
                  repeat: Infinity,
                }}
                className="absolute h-[2px] w-[2px] rounded-full bg-[var(--brand-glow)]"
                style={{
                  left: p.left,
                  top: p.top,
                  boxShadow: "0 0 8px oklch(0.85 0.18 220)",
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ scale: 0.6, opacity: 0, filter: "blur(20px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center"
          >
            <div className="text-[clamp(2rem,6vw,4rem)] font-semibold tracking-tight text-gradient">
              IMMORTAL
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.5em] text-muted-foreground">
              Future · Info Tech
            </div>
          </motion.div>

          <div className="mt-10 flex w-64 items-center gap-3">
            <div className="relative h-[2px] flex-1 overflow-hidden bg-white/10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${pct}%` }}
                transition={{ ease: "easeOut" }}
                className="absolute inset-y-0 left-0"
                style={{ background: "var(--gradient-hero)" }}
              />
            </div>
            <span className="w-10 text-right font-mono text-xs text-muted-foreground">
              {pct.toString().padStart(3, "0")}
            </span>
          </div>

          <div className="mt-6 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            Technology Lives Forever
          </div>

          <AnimatePresence>
            {pct >= 100 && (
              <motion.div
                key="flash"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.35 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="pointer-events-none absolute inset-0 bg-white"
                style={{ mixBlendMode: "screen" }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
