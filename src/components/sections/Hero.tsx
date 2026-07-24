import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import heroBank from "@/assets/hero-bank.jpg";
import accentCircuit from "@/assets/accent-circuit.jpg";
import accentDashboard from "@/assets/accent-dashboard.jpg";

function SplitReveal({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const chars = el.querySelectorAll("[data-char]");
    gsap.fromTo(
      chars,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        stagger: 0.025,
        duration: 1.1,
        delay,
        ease: "expo.out",
      },
    );
  }, [delay]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split("").map((c, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline" style={{ lineHeight: 1.15, paddingBottom: "0.15em" }}>
          <span data-char className="inline-block will-change-transform">
            {c === " " ? "\u00A0" : c}
          </span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden px-6 pt-32 md:pt-24">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_1fr]">
        {/* Left */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/10 bg-foreground/5 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-foreground/70 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-glow)] shadow-[0_0_10px_var(--brand-glow)]" />
            AI-First · Banking · Enterprise IT
          </motion.div>

          <h1 className="text-[clamp(2.6rem,7vw,6rem)] font-semibold leading-[1] tracking-tight text-foreground">
            <SplitReveal text="Technology" delay={0.15} />
            <br />
            <span
              className="text-gradient inline-block animate-hero-line"
              style={{ paddingBottom: "0.15em" }}
            >
              lives forever.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60 md:text-lg"
          >
            We embed AI directly into Indian banking workflows — Finacle automation,
            AWS cloud, cyber security and IoT — engineered to serve real people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/products"
              data-cursor="Launch"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-6 py-3 text-sm font-medium text-[oklch(0.1_0.02_275)] transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
            >
              <span>Explore Products</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/contact"
              data-cursor="Connect"
              className="inline-flex items-center gap-2 rounded-full border border-border/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-border/30 hover:bg-white/[0.08]"
            >
              Book Consultation
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-14 flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-foreground/40"
          >
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-foreground/30" />
              Since May 2024 · Tiruchirapalli
            </div>
            <div className="hidden md:flex gap-6">
              <span>Finacle</span>
              <span>AWS</span>
              <span>AI</span>
              <span>Finacle</span>
            </div>
          </motion.div>
        </div>

        {/* Right — editorial image collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[62vh] min-h-[460px] w-full lg:h-[78vh]"
        >
          <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(circle at 60% 40%, oklch(0.65 0.24 175 / .3), transparent 65%)", filter: "blur(30px)" }} />
          <div className="relative h-full w-full">
            <div className="glass-panel absolute inset-y-0 right-0 w-[76%] overflow-hidden rounded-3xl border border-border/15 shadow-[var(--shadow-elegant)]">
              <img src={heroBank} alt="Modern Indian bank branch with AI data overlay" className="h-full w-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0.06 0.01 180 / 0.55))" }} />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-foreground">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-70">Live in production</div>
                  <div className="mt-1 text-lg font-semibold">Banking, reimagined with AI</div>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] backdrop-blur">80% ↓ manual</div>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-8 w-[42%] overflow-hidden rounded-2xl border border-border/15 shadow-[var(--shadow-elegant)]"
            >
              <img src={accentCircuit} alt="Emerald circuit board detail" className="h-40 w-full object-cover md:h-48" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute bottom-6 left-4 w-[46%] overflow-hidden rounded-2xl border border-border/15 shadow-[var(--shadow-elegant)]"
            >
              <img src={accentDashboard} alt="Finacle analytics dashboard on a laptop" className="h-40 w-full object-cover md:h-48" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
