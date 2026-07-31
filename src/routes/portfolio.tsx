import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import imgBank from "@/assets/hero-bank.jpg";
import imgCloud from "@/assets/img-cloud.jpg";
import imgAi from "@/assets/img-ai.jpg";
import imgHealth from "@/assets/img-healthcare.jpg";
import imgSec from "@/assets/img-security.jpg";
import imgDash from "@/assets/accent-dashboard.jpg";
import bgPortfolio from "@/assets/bg-portfolio.jpg";

type Case = { title: string; client: string; body: string; stats: [string, string][]; tech: string[]; image: string };

const GROUPS: { name: string; cases: Case[] }[] = [
  {
    name: "Banking",
    cases: [
      { title: "EOD Automation", client: "Cooperative Bank", body: "Automated End-of-Day reconciliation on Finacle.", stats: [["80%", "Effort ↓"], ["4hr", "Saved/day"], ["0", "Errors"]], tech: ["Finacle APIs", "IIS", "Python", "Oracle"], image: imgBank },
      { title: "ASKBOT Deployment", client: "Private Bank · 200+ staff", body: "RAG assistant for Finacle documentation.", stats: [["3×", "Onboarding"], ["70%", "Faster Q&A"], ["200+", "Users"]], tech: ["RAG", "FAISS", "LangChain", "FastAPI"], image: imgDash },
      { title: "Finacle Implementation", client: "New NBFC", body: "Five modules delivered in 14 weeks, 100% on-time.", stats: [["14w", "Delivery"], ["5", "Modules"], ["100%", "On-time"]], tech: ["Finacle", "Migration"], image: imgAi },
      { title: "AWS Cloud Migration", client: "Regional Private Bank", body: "Lift-and-modernize onto AWS with FinOps.", stats: [["40%", "Cost ↓"], ["99.9%", "Uptime"], ["3×", "Perf"]], tech: ["AWS", "EC2", "RDS", "EKS"], image: imgCloud },
    ],
  },
  {
    name: "Healthcare",
    cases: [
      { title: "Patient Monitoring Platform", client: "Hospital network", body: "IoT-based 24×7 patient vitals monitoring.", stats: [["500+", "Devices"], ["24×7", "Monitoring"], ["60%", "Faster alerts"]], tech: ["IoT", "Edge"], image: imgHealth },
      { title: "AI Diagnostics", client: "12 diagnostic centers", body: "AI-assisted report generation and detection.", stats: [["12", "Centers"], ["50%", "Faster reports"], ["98%", "Accuracy"]], tech: ["ML", "Python"], image: imgAi },
    ],
  },
  {
    name: "Enterprise",
    cases: [
      { title: "SD-WAN Deployment", client: "40+ branches", body: "Reliable multi-branch WAN with real-time monitoring.", stats: [["40+", "Branches"], ["35%", "Cost ↓"], ["99.9%", "Uptime"]], tech: ["SD-WAN", "NOC"], image: imgCloud },
      { title: "Smart Branch Security", client: "15 branches", body: "CCTV analytics and IoT-based intrusion detection.", stats: [["15", "Branches"], ["CCTV", "Analytics"], ["60%", "Faster IR"]], tech: ["IoT", "AI", "Security"], image: imgSec },
    ],
  },
];

const STATS = [["150+", "Projects delivered"], ["50+", "Enterprise clients"], ["10+", "Years combined exp"], ["80%", "Avg effort ↓"]] as const;

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Case Studies | Immortal Future Info Tech" },
      { name: "description", content: "Real deployments across banking, healthcare and enterprise. EOD automation, ASKBOT, AWS migration, IoT patient monitoring and more." },
      { property: "og:title", content: "IFIT Portfolio — Real deployments" },
      { property: "og:description", content: "Case studies across banking, healthcare and enterprise." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <img src={bgPortfolio} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--background) 0%, transparent 35%, var(--background) 100%)" }} />
      </div>

      <PageHeader eyebrow="Portfolio" title="Work that already|ships in production.">
        Selected case studies across banking, healthcare and enterprise — with the numbers that matter.
      </PageHeader>

      <section className="px-6 pb-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-3 md:grid-cols-4">
          {STATS.map(([k, v]) => (
            <div key={v} className="glass-panel p-5 text-center">
              <div className="text-2xl font-semibold text-foreground">{k}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-foreground/50">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {GROUPS.map((g) => (
        <section key={g.name} className="px-6 py-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Vertical</div>
                <h2 className="mt-2 text-3xl font-semibold text-foreground">{g.name}</h2>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {g.cases.map((c, i) => (
                <motion.article key={c.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: i * 0.06 }} className="glass-panel group overflow-hidden">
                  <div className="h-44 overflow-hidden">
                    <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--brand-glow)]">{c.client}</div>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-2 text-sm text-foreground/60">{c.body}</p>
                    <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border/10 pt-4">
                      {c.stats.map(([k, v]) => (
                        <div key={v}>
                          <div className="text-base font-semibold text-foreground">{k}</div>
                          <div className="text-[10px] uppercase tracking-[0.25em] text-foreground/45">{v}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {c.tech.map((t) => (
                        <span key={t} className="rounded-full border border-border/15 px-2 py-0.5 text-[10px] text-foreground/60">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      ))}

    </>
  );
}