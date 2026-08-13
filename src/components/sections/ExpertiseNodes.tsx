import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Cloud, Cpu, Landmark, ShieldCheck, Workflow } from "lucide-react";
import { SectionHead } from "./SectionHead";

const PILLARS = [
  {
    icon: Landmark,
    title: "Core Banking & Finacle",
    body: "Implementation, customisation, EOD automation and reconciliation on Finacle.",
    detail: ["Finacle scripting & menus", "EOD / BOD automation", "Migration & UAT support"],
    accent: "var(--p-iis)",
    cls: "md:col-span-3 md:row-span-2",
    shape: "rounded-[32px]",
  },
  {
    icon: Bot,
    title: "Applied AI",
    body: "Assistants, document intelligence and internal copilots trained on your own material.",
    detail: ["RAG assistants", "Doc extraction", "Custom LLM workflows"],
    accent: "var(--p-askbot)",
    cls: "md:col-span-3",
    shape: "rounded-[24px]",
  },
  {
    icon: Cloud,
    title: "Cloud & AWS",
    body: "Migration, multi-AZ high availability and cost guardrails.",
    detail: ["Landing zones", "Multi-AZ HA", "FinOps guardrails"],
    accent: "var(--brand-teal)",
    cls: "md:col-span-2",
    shape: "rounded-full md:rounded-[999px]",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    body: "RBI-aligned controls, audits and hardening for regulated workloads.",
    detail: ["RBI alignment", "VAPT remediation", "Access governance"],
    accent: "var(--p-campus)",
    cls: "md:col-span-4",
    shape: "rounded-[20px]",
  },
  {
    icon: Workflow,
    title: "Enterprise Platforms",
    body: "HRM, Campus ERP and WorkTrack delivered as configurable products.",
    detail: ["Configurable modules", "Role-based access", "Self-service portals"],
    accent: "var(--p-worktrack)",
    cls: "md:col-span-4",
    shape: "rounded-[36px]",
  },
  {
    icon: Cpu,
    title: "Data & Automation",
    body: "Pipelines, dashboards and back-office automation that cut manual effort.",
    detail: ["ETL pipelines", "Ops dashboards", "RPA-style automation"],
    accent: "var(--p-hrm)",
    cls: "md:col-span-2",
    shape: "rounded-[28px]",
  },
];

export function ExpertiseNodes() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="expertise" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHead eyebrow="Expertise" title="Six pillars." accent="One delivery standard.">
          Hover a node to expand what sits underneath it.
        </SectionHead>

        <div className="mt-12 grid gap-4 md:auto-rows-[minmax(120px,auto)] md:grid-cols-6">
          {PILLARS.map(({ icon: Icon, ...n }, i) => {
            const on = open === n.title;
            return (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, y: i % 2 ? 30 : -22, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setOpen(n.title)}
                onMouseLeave={() => setOpen(null)}
                onFocus={() => setOpen(n.title)}
                onBlur={() => setOpen(null)}
                tabIndex={0}
                className={`group relative min-w-0 overflow-hidden border bg-[var(--glass-bg)] p-6 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1.5 ${n.cls} ${n.shape}`}
                style={{
                  borderColor: `color-mix(in oklab, ${n.accent} ${on ? 55 : 16}%, transparent)`,
                  boxShadow: on
                    ? `0 40px 90px -50px color-mix(in oklab, ${n.accent} 80%, transparent)`
                    : "0 20px 60px -50px rgba(0,0,0,.6)",
                }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition-opacity duration-500"
                  style={{
                    background: `color-mix(in oklab, ${n.accent} 45%, transparent)`,
                    opacity: on ? 0.5 : 0.18,
                  }}
                />
                <Icon className="h-5 w-5" style={{ color: n.accent }} />
                <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">{n.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-foreground/60">{n.body}</p>

                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: on ? "1fr" : "0fr", opacity: on ? 1 : 0 }}
                >
                  <ul className="mt-3 flex flex-wrap gap-1.5 overflow-hidden">
                    {n.detail.map((d) => (
                      <li
                        key={d}
                        className="rounded-full px-2.5 py-1 text-[11px]"
                        style={{ color: n.accent, background: `color-mix(in oklab, ${n.accent} 12%, transparent)` }}
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
