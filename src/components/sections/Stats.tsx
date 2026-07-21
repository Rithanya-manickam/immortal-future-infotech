import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const STATS = [
  { v: 480, suffix: "+", label: "Projects Shipped" },
  { v: 120, suffix: "+", label: "Global Clients" },
  { v: 34, suffix: "", label: "Countries" },
  { v: 260, suffix: "+", label: "Engineers" },
];

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const mv = useMotionValue(0);
  const s = useSpring(mv, { stiffness: 60, damping: 20 });
  const rounded = useTransform(s, (v) => Math.floor(v).toString());
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && mv.set(target),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mv, target]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 max-w-2xl">
          <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Section 06 — Signal</div>
          <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight text-foreground">
            Measured in <span className="text-gradient">outcomes.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass-panel relative overflow-hidden p-8"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-40 blur-3xl" style={{ background: "var(--gradient-hero)" }} />
              <div className="relative text-[10px] uppercase tracking-[0.3em] text-foreground/40">{`0${i + 1}`.slice(-2)}</div>
              <div className="relative mt-6 text-[clamp(2.2rem,5vw,3.6rem)] font-semibold text-foreground">
                <Counter target={s.v} suffix={s.suffix} />
              </div>
              <div className="relative mt-2 text-xs text-foreground/60">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
