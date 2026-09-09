import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Gauge, Layers, Target } from "lucide-react";
import { JourneyRail, ValuesPanels, WhyCarousel } from "@/components/sections/AboutInteractive";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { CTABand } from "@/components/sections/CTABand";
import { DirectionCards } from "@/components/sections/DirectionCards";
import { SectionHead } from "@/components/sections/SectionHead";
import teamImg from "@/assets/img-team.jpg";

const WHY = [
  {
    icon: Layers,
    title: "Domain Expertise",
    body: "Finacle and core banking specialists — not generalists learning your systems on your budget.",
  },
  {
    icon: Compass,
    title: "Practical Innovation",
    body: "AI applied only where it removes real work. No experiments running in production.",
  },
  {
    icon: Gauge,
    title: "Built for Scale",
    body: "Multi-branch, multi-entity deployments designed for Indian banking realities.",
  },
  {
    icon: Target,
    title: "Outcome Driven",
    body: "Engagements measured by time saved and errors removed, not features shipped.",
  },
];

const VALUES = [
  ["Trust First", "Transparent delivery and long-term customer relationships."],
  ["Intelligent Innovation", "We apply AI only where it produces measurable value."],
  ["Domain Depth", "Banking, healthcare and enterprise IT — no generalists."],
  ["Quality Certified", "Structured processes with certified delivery gates."],
];

const TIMELINE = [
  ["May 2024", "Company Founded", "IFIT Pvt. Ltd. incorporated in Tiruchirapalli."],
  ["Jun 2024", "First Finacle Client", "Cooperative bank implementation and customization."],
  ["Aug 2024", "IIS Launched", "AI automation platform for Infosys Finacle."],
  ["Oct 2024", "ASKBOT Launched", "RAG-powered Finacle training assistant."],
  ["Dec 2024", "AWS Partnership", "Became an AWS Technology Partner."],
  ["Mar 2025", "Pan-India Expansion", "TN, KA, MH and more."],
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About IFIT — Intelligent Technology for Indian Enterprise" },
      {
        name: "description",
        content:
          "Founded May 2024 in Tiruchirapalli, Immortal Future Info Tech builds AI and automation into Indian banking, healthcare and enterprise IT.",
      },
      { property: "og:title", content: "About Immortal Future Info Tech" },
      {
        property: "og:description",
        content: "Our mission, vision, values, journey and certifications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="px-6 pt-28 pb-12 md:pt-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="min-w-0">
            <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">
              About IFIT
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.06] tracking-tight text-foreground"
            >
              Empowering Enterprises with{" "}
              <span className="text-gradient">Intelligent Technology</span>
            </motion.h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground/65">
              Immortal Future Info Tech is an AI-first technology company headquartered in
              Tiruchirapalli, Tamil Nadu, founded in May 2024. We work with cooperative banks,
              private banks, NBFCs and enterprises across India — embedding AI into the systems they
              already depend on.
            </p>
            <blockquote className="mt-6 border-l-2 border-[var(--brand-glow)] pl-4 text-sm italic text-foreground/70">
              "Technology lives forever — the value it creates should outlast the project that built
              it."
            </blockquote>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel overflow-hidden rounded-2xl"
          >
            <img
              src={teamImg}
              alt="The Immortal Future Info Tech team at work"
              width={1280}
              height={860}
              className="h-[260px] w-full object-cover md:h-[360px]"
            />
          </motion.div>
        </div>
      </section>

      <DirectionCards />

      {/* Why IFIT */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="Differentiators" title="Why" accent="IFIT?" center>
            Four reasons banks and enterprises keep working with us.
          </SectionHead>
          <WhyCarousel items={WHY} />
        </div>
      </section>

      {/* Values + Journey */}
      <section className="relative isolate overflow-hidden px-6 py-10 md:py-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_25%,rgba(52,211,153,.12),transparent_35%),linear-gradient(rgba(16,185,129,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,.06)_1px,transparent_1px)] bg-[size:auto,42px_42px,42px_42px]"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="min-w-0">
            <SectionHead eyebrow="Our Values" title="What we hold" accent="constant." />
            <ValuesPanels values={VALUES} />
          </div>

          <div className="min-w-0">
            <SectionHead eyebrow="Our Journey" title="A year of" accent="shipping." />
            <JourneyRail timeline={TIMELINE} />
            <Link to="/portfolio" className="btn-secondary mt-4 text-xs">
              See the work <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <TrustedBy compact />
      <CTABand
        title="Work with a team that knows banking."
        body="Talk to us about Finacle, AI automation or your cloud roadmap."
      />
    </>
  );
}
