import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Sparkles, Bot } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import imgAi from "@/assets/img-ai.jpg";
import imgDash from "@/assets/accent-dashboard.jpg";
import imgOps from "@/assets/img-ops.jpg";
import imgBank from "@/assets/hero-bank.jpg";
import imgTraining from "@/assets/img-training.jpg";
import imgNetwork from "@/assets/img-network.jpg";
import imgCloud from "@/assets/img-cloud.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — IIS & ASKBOT | Immortal Future Info Tech" },
      { name: "description", content: "Two AI products live in Indian banks: IIS automates Finacle workflows and ASKBOT trains staff faster with RAG." },
      { property: "og:title", content: "IIS & ASKBOT — AI products for banking" },
      { property: "og:description", content: "80% less manual work. 3× faster onboarding. Built on Finacle." },
      { property: "og:image", content: "https://immortal-future-infotech.lovable.app/logo.png" },
      { name: "twitter:image", content: "https://immortal-future-infotech.lovable.app/logo.png" },
    ],
  }),
  component: Products,
});

const IIS_FEATURES = ["EOD Automation", "Loan Workflow Automation", "KYC Processing", "Treasury Automation", "RBI Reporting", "Finacle API Integration"];
const ASKBOT_FEATURES = ["Natural Language Q&A", "Retrieval-Augmented Generation", "FAISS Vector Search", "Role-Based Access", "Staff Onboarding Kits", "Multi-Branch Deployment"];

const IIS_WORK = [
  { image: imgOps, title: "EOD Automation", client: "Cooperative Bank", metric: "80% effort ↓" },
  { image: imgBank, title: "KYC Straight-Through", client: "Regional Bank", metric: "4hr saved / day" },
  { image: imgNetwork, title: "RBI Reporting Engine", client: "NBFC", metric: "Zero manual returns" },
];

const ASKBOT_WORK = [
  { image: imgTraining, title: "Staff Onboarding", client: "Private Bank · 200+ staff", metric: "3× faster" },
  { image: imgAi, title: "Finacle Knowledge Base", client: "Multi-branch rollout", metric: "70% faster Q&A" },
  { image: imgCloud, title: "Secure Cloud Deployment", client: "AWS private VPC", metric: "99.9% uptime" },
];

function FeaturedWork({ label, items }: { label: string; items: { image: string; title: string; client: string; metric: string }[] }) {
  return (
    <section className="px-6 pb-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--brand-glow)]" />
          <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Featured work — {label}</div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((w, i) => (
            <motion.figure
              key={w.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="glass-panel group relative overflow-hidden"
            >
              <div className="h-44 overflow-hidden">
                <img src={w.image} alt={w.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105" />
              </div>
              <figcaption className="p-5">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--brand-glow)]">{w.client}</div>
                <div className="mt-2 text-base font-semibold text-foreground">{w.title}</div>
                <div className="mt-3 inline-flex rounded-full border border-border/15 px-3 py-1 text-[11px] text-foreground/70">{w.metric}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPanel({ icon: Icon, tag, title, subtitle, body, features, metric, image, reverse }: any) {
  return (
    <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 py-16 md:grid-cols-2">
      <div className={reverse ? "md:order-2" : ""}>
        <div className="glass-panel overflow-hidden rounded-3xl">
          <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/15 bg-foreground/[0.04]">
            <Icon className="h-4 w-4 text-[var(--brand-glow)]" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50">{tag}</span>
        </div>
        <h2 className="mt-6 text-4xl font-semibold text-foreground">{title}</h2>
        <div className="mt-1 text-sm uppercase tracking-[0.25em] text-foreground/50">{subtitle}</div>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-foreground/65">{body}</p>
        <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {features.map((f: string) => (
            <li key={f} className="flex items-start gap-2 text-sm text-foreground/75">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-glow)]" /> {f}
            </li>
          ))}
        </ul>
        <div className="mt-8 inline-flex rounded-full border border-border/15 bg-foreground/[0.04] px-4 py-2 text-sm text-foreground">{metric}</div>
      </div>
    </motion.article>
  );
}

function Products() {
  return (
    <>
      <PageHeader eyebrow="Products" title="AI-native products, |already in banks.">
        Two flagship products power AI banking automation for cooperative banks, private banks and NBFCs across India.
      </PageHeader>

      <ProductPanel
        icon={Sparkles}
        tag="IIS"
        title="Immortal Intelligence Suite"
        subtitle="AI Banking Automation on Finacle"
        body="IIS is an automation layer built on Infosys Finacle. It replaces manual reconciliation, KYC verification and reporting steps with reliable AI workflows — while leaving the core banking system untouched."
        features={IIS_FEATURES}
        metric="80% reduction in manual processing"
        image={imgDash}
      />

      <FeaturedWork label="IIS" items={IIS_WORK} />

      <ProductPanel
        icon={Bot}
        tag="ASKBOT"
        title="ASKBOT"
        subtitle="AI Finacle Training Assistant"
        body="ASKBOT uses Retrieval-Augmented Generation over your Finacle documentation. New joiners get accurate, cite-backed answers on day one — and support tickets drop as staff learn."
        features={ASKBOT_FEATURES}
        metric="3× faster employee onboarding"
        image={imgAi}
        reverse
      />

      <FeaturedWork label="ASKBOT" items={ASKBOT_WORK} />
    </>
  );
}