import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import imgOps from "@/assets/accent-dashboard.jpg";
import imgAi from "@/assets/img-ai.jpg";
import imgCloud from "@/assets/img-cloud.jpg";
import { SectionHead } from "./SectionHead";

const CASES = [
  {
    no: "01",
    tag: "Banking · Finacle",
    title: "EOD Automation",
    client: "Cooperative bank, Tamil Nadu",
    body: "Twelve manual end-of-day steps replaced by one automated sequence running on the bank's existing Finacle setup.",
    metrics: [
      ["80%", "Manual effort ↓"],
      ["4 hr", "Saved nightly"],
      ["0", "Recon errors"],
    ],
    image: imgOps,
    accent: "var(--p-iis)",
  },
  {
    no: "02",
    tag: "AI · Enablement",
    title: "ASKBOT Rollout",
    client: "Private bank · 200+ staff",
    body: "An assistant trained on internal banking documentation, deployed across branches with role-based access.",
    metrics: [
      ["3×", "Faster onboarding"],
      ["70%", "Faster answers"],
      ["200+", "Staff served"],
    ],
    image: imgAi,
    accent: "var(--p-askbot)",
  },
  {
    no: "03",
    tag: "Cloud · AWS",
    title: "Core Banking on AWS",
    client: "Regional private bank",
    body: "Ageing on-premise infrastructure migrated to AWS with multi-AZ high availability and cost guardrails.",
    metrics: [
      ["40%", "Infra cost ↓"],
      ["99.9%", "Uptime"],
      ["3×", "Performance"],
    ],
    image: imgCloud,
    accent: "var(--brand-teal)",
  },
];

function Story({ c, i }: { c: (typeof CASES)[number]; i: number }) {
  const flip = i % 2 === 1;
  const [hot, setHot] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      <div
        ref={ref}
        onMouseEnter={() => setHot(true)}
        onMouseLeave={() => setHot(false)}
        className="relative min-w-0 overflow-hidden rounded-[28px] border border-border/12"
        style={{
          boxShadow: hot
            ? `0 50px 110px -60px color-mix(in oklab, ${c.accent} 80%, transparent)`
            : "0 24px 70px -55px rgba(0,0,0,.7)",
        }}
      >
        <motion.img
          src={c.image}
          alt={`${c.title} — ${c.client}`}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover"
          animate={{ scale: hot ? 1.07 : 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            background: `linear-gradient(180deg, transparent 30%, color-mix(in oklab, ${c.accent} 22%, oklch(0.12 0.03 175 / .85)))`,
            opacity: hot ? 1 : 0.75,
          }}
        />
        <motion.div
          className="absolute inset-x-0 bottom-0 grid grid-cols-3 gap-2 p-5"
          animate={{ y: hot ? 0 : 14, opacity: hot ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {c.metrics.map(([k, v]) => (
            <div
              key={v}
              className="rounded-xl border border-border/15 bg-[var(--glass-bg)] p-2.5 backdrop-blur-xl"
            >
              <div className="text-base font-semibold text-foreground">{k}</div>
              <div className="text-[10px] leading-tight text-foreground/55">{v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className={`min-w-0 ${flip ? "lg:text-right" : ""}`}>
        <div className="text-[11px] uppercase tracking-[0.35em]" style={{ color: c.accent }}>
          Case {c.no} · {c.tag}
        </div>
        <h3
          className="mt-3 text-[clamp(1.5rem,3vw,2.1rem)] font-semibold leading-tight tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {c.title}
        </h3>
        <div className="mt-1 text-xs text-foreground/45">{c.client}</div>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-foreground/65 lg:inline-block">
          {c.body}
        </p>
        <div className="mt-6">
          <Link to="/portfolio" className="btn-secondary text-xs">
            Read the case study <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedWork() {
  return (
    <section className="px-6 py-14 md:py-18">
      <div className="mx-auto max-w-[1200px]">
        <SectionHead eyebrow="Featured work" title="Three deployments." accent="Measured outcomes.">
          Live engagements — the challenge, what we built and what changed.
        </SectionHead>
        <div className="mt-10 space-y-14 md:space-y-20">
          {CASES.map((c, i) => (
            <Story key={c.no} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
