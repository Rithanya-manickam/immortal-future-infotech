import { useState } from "react";
import { motion } from "framer-motion";
import { BotMessageSquare, CloudCog, DatabaseZap, Landmark, ShieldCheck, LayoutGrid } from "lucide-react";
import { SectionHead } from "./SectionHead";

const PILLARS = [
  {
    icon: Landmark,
    title: "Core Banking & Finacle",
    body: "Implementation, customisation, EOD automation and reconciliation on Finacle.",
    detail: ["Finacle scripting & menus", "EOD / BOD automation", "Migration & UAT support"],
    accent: "var(--p-iis)",
  },
  {
    icon: BotMessageSquare,
    title: "Applied AI",
    body: "Assistants, document intelligence and internal copilots trained on your own material.",
    detail: ["RAG assistants", "Doc extraction", "Custom LLM workflows"],
    accent: "var(--p-askbot)",
  },
  {
    icon: CloudCog,
    title: "Cloud & AWS",
    body: "Migration, multi-AZ high availability and cost guardrails.",
    detail: ["Landing zones", "Multi-AZ HA", "FinOps guardrails"],
    accent: "var(--brand-teal)",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    body: "RBI-aligned controls, audits and hardening for regulated workloads.",
    detail: ["RBI alignment", "VAPT remediation", "Access governance"],
    accent: "var(--p-campus)",
  },
  {
    icon: LayoutGrid,
    title: "Enterprise Platforms",
    body: "HRM, Campus ERP and WorkTrack delivered as configurable products.",
    detail: ["Configurable modules", "Role-based access", "Self-service portals"],
    accent: "var(--p-worktrack)",
  },
  {
    icon: DatabaseZap,
    title: "Data & Automation",
    body: "Pipelines, dashboards and back-office automation that cut manual effort.",
    detail: ["ETL pipelines", "Ops dashboards", "RPA-style automation"],
    accent: "var(--p-hrm)",
  },
];

export function ExpertiseNodes() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="expertise" className="relative isolate overflow-hidden px-6 py-14 md:py-16">
      {/* soft corporate background: gradient wash + fine grid + glow orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent, color-mix(in oklab, var(--brand-glow) 6%, transparent) 45%, transparent)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--brand-glow) 12%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--brand-glow) 12%, transparent) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent 78%)",
          }}
        />
        <div
          className="absolute -left-24 top-10 size-[420px] rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--brand-glow) 14%, transparent)" }}
        />
        <div
          className="absolute -right-28 bottom-0 size-[380px] rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--brand-teal) 12%, transparent)" }}
        />
      </div>

      <div className="mx-auto max-w-[1200px]">
        <SectionHead eyebrow="Expertise" title="Six pillars." accent="One delivery standard.">
          Hover a pillar to expand what sits underneath it.
        </SectionHead>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map(({ icon: Icon, ...n }, i) => {
            const on = open === n.title;
            return (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setOpen(n.title)}
                onMouseLeave={() => setOpen(null)}
                onFocus={() => setOpen(n.title)}
                onBlur={() => setOpen(null)}
                tabIndex={0}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-[26px] border p-6 transition-transform duration-500 hover:-translate-y-1.5"
                style={{
                  borderColor: `color-mix(in oklab, ${n.accent} ${on ? 45 : 14}%, transparent)`,
                  background: `linear-gradient(160deg, color-mix(in oklab, ${n.accent} ${on ? 10 : 5}%, var(--card)), var(--card))`,
                  boxShadow: on
                    ? `0 30px 70px -46px color-mix(in oklab, ${n.accent} 85%, transparent)`
                    : "0 18px 46px -40px rgba(0,0,0,.55)",
                }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full blur-2xl transition-opacity duration-500"
                  style={{
                    background: `color-mix(in oklab, ${n.accent} 40%, transparent)`,
                    opacity: on ? 0.45 : 0.15,
                  }}
                />

                <span
                  className="flex size-12 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:scale-105"
                  style={{
                    borderColor: `color-mix(in oklab, ${n.accent} ${on ? 60 : 30}%, transparent)`,
                    background: `color-mix(in oklab, ${n.accent} ${on ? 16 : 8}%, transparent)`,
                    boxShadow: on
                      ? `0 0 0 6px color-mix(in oklab, ${n.accent} 10%, transparent)`
                      : "none",
                  }}
                >
                  <Icon className="size-5" strokeWidth={1.6} style={{ color: n.accent }} />
                </span>

                <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-foreground">
                  {n.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/70">{n.body}</p>

                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: on ? "1fr" : "0fr", opacity: on ? 1 : 0 }}
                >
                  <ul className="mt-3 flex flex-wrap gap-1.5 overflow-hidden">
                    {n.detail.map((d) => (
                      <li
                        key={d}
                        className="rounded-full px-2.5 py-1 text-[11px]"
                        style={{
                          color: n.accent,
                          background: `color-mix(in oklab, ${n.accent} 12%, transparent)`,
                        }}
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
