import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBank from "@/assets/hero-bank.jpg";
import heroVideo from "@/assets/hero-tech.mp4.asset.json";

const CHIPS = ["Finacle & Core Banking", "AI Automation", "AWS Cloud", "Cyber Security", "IoT"];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-12 md:pt-32 md:pb-16">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative z-10 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/10 bg-foreground/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-foreground/70 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-glow)] shadow-[0_0_10px_var(--brand-glow)]" />
            AI-First · Banking · Enterprise IT
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.1rem,5vw,3.9rem)] font-semibold leading-[1.05] tracking-tight text-foreground"
          >
            Empowering Enterprises with{" "}
            <span className="text-gradient">Intelligent Technology</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-foreground/65"
          >
            We build AI and automation into the systems Indian banks and enterprises already run —
            Finacle, cloud, networks and business workflows — so teams spend less time on manual
            work and more on customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link to="/contact" data-cursor="Talk" className="btn-primary">
              Book Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/products" data-cursor="Explore" className="btn-secondary">
              Explore Products
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {CHIPS.map((c) => (
              <li
                key={c}
                className="rounded-full border border-border/15 px-3 py-1 text-[11px] text-foreground/55"
              >
                {c}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div
            className="absolute inset-6 -z-10 rounded-full opacity-60 blur-3xl"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="glass-panel overflow-hidden rounded-2xl border border-border/15 shadow-[var(--shadow-elegant)]">
            <div className="relative h-[280px] w-full overflow-hidden md:h-[380px]">
              {/* Futuristic hero video. Swap the src for your own MP4/WebM anytime. */}
              <video
                className="h-full w-full object-cover"
                src={heroVideo.url}
                poster={heroBank}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Abstract visualisation of connected enterprise systems and AI automation"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--glass-bg) 2%, color-mix(in oklab, var(--brand-glow) 8%, transparent) 60%, transparent)",
                }}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.14]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--brand-glow) 1px, transparent 1px), linear-gradient(to bottom, var(--brand-glow) 1px, transparent 1px)",
                  backgroundSize: "38px 38px",
                  maskImage: "radial-gradient(120% 80% at 50% 100%, #000 20%, transparent 70%)",
                }}
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-border/15 bg-background/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground/75 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand-glow)]" />
                Live systems view
              </span>
            </div>
            <div className="grid grid-cols-3 divide-x divide-border/10 border-t border-border/10">
              {[
                ["IIS", "Finacle automation"],
                ["ASKBOT", "AI training assistant"],
                ["May 2024", "Founded in Trichy"],
              ].map(([k, v]) => (
                <div key={k} className="p-4">
                  <div className="text-sm font-semibold text-foreground">{k}</div>
                  <div className="mt-0.5 text-[11px] leading-tight text-foreground/50">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
