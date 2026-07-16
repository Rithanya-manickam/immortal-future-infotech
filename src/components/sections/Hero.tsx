import { lazy, Suspense, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ClientOnly } from "@/components/ClientOnly";

const AICoreScene = lazy(() =>
  import("@/three/AICoreScene").then((m) => ({ default: m.AICoreScene })),
);

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
        <span key={i} className="inline-block overflow-hidden align-baseline" style={{ lineHeight: 1.05 }}>
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-white/70 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-glow)] shadow-[0_0_10px_var(--brand-glow)]" />
            Immortal Future · Info Tech
          </motion.div>

          <h1 className="text-[clamp(2.6rem,7vw,6rem)] font-semibold leading-[0.95] tracking-tight text-white">
            <SplitReveal text="Technology" delay={0.15} />
            <br />
            <span className="text-gradient">
              <SplitReveal text="lives forever." delay={0.45} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg"
          >
            We engineer intelligent enterprise systems — AI, cloud, cyber security,
            automation and Finacle — designed to outlive the era that built them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#journey"
              data-cursor="Launch"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-6 py-3 text-sm font-medium text-[oklch(0.1_0.02_275)] transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
            >
              <span>Explore Journey</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#connect"
              data-cursor="Connect"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.08]"
            >
              Book Consultation
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-14 flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-white/40"
          >
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-white/30" />
              Scroll to enter
            </div>
            <div className="hidden md:flex gap-6">
              <span>AI</span>
              <span>Cloud</span>
              <span>Finacle</span>
              <span>Security</span>
            </div>
          </motion.div>
        </div>

        {/* Right — 3D scene */}
        <div className="relative h-[62vh] min-h-[420px] w-full lg:h-[80vh]">
          <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(circle at center, oklch(0.65 0.24 300 / .25), transparent 60%)", filter: "blur(20px)" }} />
          <ClientOnly
            fallback={
              <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.35em] text-white/40">
                Initializing core…
              </div>
            }
          >
            <Suspense fallback={null}>
              <AICoreScene />
            </Suspense>
          </ClientOnly>
        </div>
      </div>
    </section>
  );
}
