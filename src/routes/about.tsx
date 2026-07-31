import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import teamImg from "@/assets/img-team.jpg";

const VALUES = [
  { title: "Trust First", body: "Transparent delivery and long-term customer relationships." },
  { title: "Intelligent Innovation", body: "We apply AI only where it produces measurable value." },
  { title: "Domain Depth", body: "Banking, healthcare and enterprise IT — no generalists." },
  { title: "Quality Certified", body: "Structured processes with certified delivery gates." },
];

const TIMELINE = [
  ["May 2024", "Company Founded", "IFIT Pvt. Ltd. incorporated in Tiruchirapalli."],
  ["Jun 2024", "First Finacle Client", "Cooperative bank implementation and customization."],
  ["Aug 2024", "IIS Launched", "AI automation platform for Infosys Finacle."],
  ["Oct 2024", "ASKBOT Launched", "RAG-powered Finacle training assistant."],
  ["Dec 2024", "AWS Partnership", "Became an AWS Technology Partner."],
  ["Mar 2025", "Pan-India Expansion", "TN, KA, MH and more."],
];

const CERTS = ["Finacle Certified Partner", "AWS Technology Partner", "NASSCOM Member", "MCA Registered", "MSME Recognized"];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Immortal Future Info Tech" },
      { name: "description", content: "AI-first company founded in Tiruchirapalli, May 2024. Building intelligent solutions for Indian banking, healthcare and enterprise IT." },
      { property: "og:title", content: "About Immortal Future Info Tech" },
      { property: "og:description", content: "Our story, mission, values, timeline and certifications." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="About IFIT" title="Building technology that|serves real people.">
        Immortal Future Info Tech is an AI-first company headquartered in Tiruchirapalli, Tamil Nadu. We embed AI directly into Indian banking workflows without disrupting the systems that already run them.
      </PageHeader>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 md:grid-cols-2">
          <div className="glass-panel overflow-hidden rounded-2xl">
            <img src={teamImg} alt="IFIT team collaborating" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Our Mission</div>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">Intelligent technology, real outcomes.</h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/65">
              We started IFIT after seeing the same inefficiencies across Indian banks — manual EOD reconciliation, manual loan processing, slow KYC. With deep Finacle and Enterprise IT expertise, we built IIS and ASKBOT to make banking operations measurably faster.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {VALUES.map((v) => (
                <div key={v.title} className="glass-panel p-4">
                  <div className="text-sm font-semibold text-foreground">{v.title}</div>
                  <div className="mt-1 text-xs text-foreground/60">{v.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Timeline</div>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">A year of shipping.</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {TIMELINE.map(([date, title, body], i) => (
              <motion.li key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.6 }} className="glass-panel p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--brand-glow)]">{date}</div>
                <div className="mt-2 text-base font-semibold text-foreground">{title}</div>
                <div className="mt-1 text-xs text-foreground/60">{body}</div>
              </motion.li>
            ))}
          </ol>

          <div className="mt-16 flex flex-wrap gap-3">
            {CERTS.map((c) => (
              <span key={c} className="glass-panel px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground/70">{c}</span>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}