import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Calculator,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  FileCheck2,
  Gauge,
  Headphones,
  Landmark,
  LockKeyhole,
  Network,
  Palette,
  ReceiptText,
  ScanText,
  ServerCog,
  Smartphone,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react";

type Cat = "All" | "AI & Banking" | "Cloud & Infra" | "Development" | "Business";

const SERVICES: { name: string; cat: Exclude<Cat, "All">; body: string; tags: string[] }[] = [
  {
    name: "Immortal Intelligence Suite (IIS)",
    cat: "AI & Banking",
    body: "AI automation for Infosys Finacle — EOD, loans, KYC, treasury, RBI reporting.",
    tags: ["Finacle APIs", "Python", "Oracle"],
  },
  {
    name: "ASKBOT",
    cat: "AI & Banking",
    body: "RAG-powered Finacle training assistant with FAISS search and RBAC.",
    tags: ["RAG", "FAISS", "LangChain"],
  },
  {
    name: "Finacle Implementation",
    cat: "AI & Banking",
    body: "Module implementation, workflow development, upgrades, migration and go-live.",
    tags: ["Finacle", "Migration"],
  },
  {
    name: "Finacle Training",
    cat: "AI & Banking",
    body: "Core, internet and mobile banking training with lab sessions and certification.",
    tags: ["Training", "Cert"],
  },
  {
    name: "AWS Cloud Services",
    cat: "Cloud & Infra",
    body: "Architecture, migration, EC2/RDS/S3/Lambda/EKS, CI/CD and FinOps.",
    tags: ["AWS", "FinOps"],
  },
  {
    name: "Enterprise Networking",
    cat: "Cloud & Infra",
    body: "LAN, WAN, SD-WAN, firewalls, IDS, WiFi and NOC with 99.9% uptime.",
    tags: ["SD-WAN", "NOC"],
  },
  {
    name: "IoT Solutions",
    cat: "Cloud & Infra",
    body: "Device fleets, telemetry, edge computing, predictive maintenance, patient monitoring.",
    tags: ["Edge", "IoT"],
  },
  {
    name: "Cyber Security",
    cat: "Cloud & Infra",
    body: "VAPT, SOC, compliance, endpoint security and incident response.",
    tags: ["SOC", "VAPT"],
  },
  {
    name: "Full Stack Development",
    cat: "Development",
    body: "React, Next.js, Vue, Node.js, Java, Python, PostgreSQL, MongoDB, REST & GraphQL.",
    tags: ["React", "Node"],
  },
  {
    name: "Mobile App Development",
    cat: "Development",
    body: "Native Android, Flutter and React Native apps.",
    tags: ["Flutter", "RN"],
  },
  {
    name: "E-Commerce Development",
    cat: "Development",
    body: "Online stores, payment gateways, inventory, analytics and SEO.",
    tags: ["Commerce"],
  },
  {
    name: "UI/UX Design",
    cat: "Development",
    body: "Research, wireframes, prototypes, design systems and accessibility.",
    tags: ["Design"],
  },
  {
    name: "Data Science & Analytics",
    cat: "Development",
    body: "ML, BI dashboards, visualization, Apache Spark and NLP.",
    tags: ["ML", "Spark"],
  },
  {
    name: "CRM Implementation",
    cat: "Business",
    body: "CRM setup, leads, pipeline, marketing and workflow automation.",
    tags: ["CRM"],
  },
  {
    name: "ERP & SAP",
    cat: "Business",
    body: "SAP ERP, BW, process optimization, integration and reporting.",
    tags: ["SAP"],
  },
  {
    name: "Customized Billing Software",
    cat: "Business",
    body: "GST billing, multi-currency, recurring billing, payment tracking and reports.",
    tags: ["GST"],
  },
  {
    name: "HR & Payroll",
    cat: "Business",
    body: "Payroll, attendance, leave, tax, employee portal and recruitment.",
    tags: ["HRMS"],
  },
  {
    name: "Digital Marketing",
    cat: "Business",
    body: "SEO, PPC, Google Ads, social, email marketing and analytics.",
    tags: ["SEO", "Ads"],
  },
  {
    name: "Core Banking Support (AMS)",
    cat: "AI & Banking",
    body: "24×7 application managed services, L1–L3 support and release management for Finacle estates.",
    tags: ["AMS", "L3 Support"],
  },
  {
    name: "Digital Banking Channels",
    cat: "AI & Banking",
    body: "Internet banking, mobile banking, UPI and payment channel integration.",
    tags: ["UPI", "Mobile"],
  },
  {
    name: "RBI Compliance & Reporting",
    cat: "AI & Banking",
    body: "Automated regulatory returns, audit trails and compliance dashboards.",
    tags: ["RBI", "Audit"],
  },
  {
    name: "Loan Origination Automation",
    cat: "AI & Banking",
    body: "Digital LOS with credit scoring, document AI and disbursement workflows.",
    tags: ["LOS", "OCR"],
  },
  {
    name: "DevOps & SRE",
    cat: "Cloud & Infra",
    body: "CI/CD pipelines, IaC with Terraform, observability and on-call runbooks.",
    tags: ["Terraform", "K8s"],
  },
  {
    name: "Disaster Recovery & BCP",
    cat: "Cloud & Infra",
    body: "DR strategy, backup automation, failover drills and RPO/RTO assurance.",
    tags: ["DR", "Backup"],
  },
  {
    name: "Managed IT & Helpdesk",
    cat: "Cloud & Infra",
    body: "End-user support, asset management, patching and branch IT operations.",
    tags: ["ITSM"],
  },
  {
    name: "Data Engineering & Warehousing",
    cat: "Development",
    body: "ETL pipelines, data lakes, warehouse modelling and real-time streaming.",
    tags: ["ETL", "Kafka"],
  },
  {
    name: "API & System Integration",
    cat: "Development",
    body: "Middleware, REST/SOAP integration, message queues and partner onboarding.",
    tags: ["API", "MQ"],
  },
  {
    name: "QA & Test Automation",
    cat: "Development",
    body: "Automated regression, performance testing and UAT support for core systems.",
    tags: ["Cypress", "JMeter"],
  },
  {
    name: "Generative AI Solutions",
    cat: "Development",
    body: "Custom LLM assistants, document intelligence and agentic workflows.",
    tags: ["LLM", "RAG"],
  },
  {
    name: "IT Consulting & Advisory",
    cat: "Business",
    body: "Technology roadmaps, vendor evaluation, architecture reviews and audits.",
    tags: ["Advisory"],
  },
  {
    name: "Staff Augmentation",
    cat: "Business",
    body: "Certified Finacle, AWS and full-stack engineers embedded in your team.",
    tags: ["Talent"],
  },
  {
    name: "Document Management System",
    cat: "Business",
    body: "Digitization, OCR indexing, e-sign workflows and retention policies.",
    tags: ["DMS", "OCR"],
  },
];

const CATS: Cat[] = ["All", "AI & Banking", "Cloud & Infra", "Development", "Business"];

const CATEGORY_META: Record<
  Exclude<Cat, "All">,
  { icon: typeof Bot; accent: string; tint: string }
> = {
  "AI & Banking": { icon: Bot, accent: "#0f766e", tint: "rgba(20,184,166,.16)" },
  "Cloud & Infra": { icon: Cloud, accent: "#2563eb", tint: "rgba(96,165,250,.16)" },
  Development: { icon: Code2, accent: "#7c3aed", tint: "rgba(167,139,250,.16)" },
  Business: { icon: BriefcaseBusiness, accent: "#c2410c", tint: "rgba(251,146,60,.16)" },
};

const SERVICE_ICONS: Record<string, typeof Bot> = {
  "Immortal Intelligence Suite (IIS)": Sparkles,
  ASKBOT: Bot,
  "Finacle Implementation": Landmark,
  "Finacle Training": UsersRound,
  "AWS Cloud Services": Cloud,
  "Enterprise Networking": Network,
  "IoT Solutions": Activity,
  "Cyber Security": LockKeyhole,
  "Full Stack Development": Code2,
  "Mobile App Development": Smartphone,
  "E-Commerce Development": ReceiptText,
  "UI/UX Design": Palette,
  "Data Science & Analytics": Database,
  "CRM Implementation": Workflow,
  "ERP & SAP": ServerCog,
  "Customized Billing Software": Calculator,
  "HR & Payroll": UsersRound,
  "Digital Marketing": Gauge,
  "Core Banking Support (AMS)": Headphones,
  "Digital Banking Channels": Smartphone,
  "RBI Compliance & Reporting": FileCheck2,
  "Loan Origination Automation": ScanText,
  "DevOps & SRE": ServerCog,
  "Disaster Recovery & BCP": Activity,
  "Managed IT & Helpdesk": Headphones,
  "Data Engineering & Warehousing": Database,
  "API & System Integration": Workflow,
  "QA & Test Automation": Gauge,
  "Generative AI Solutions": Sparkles,
  "IT Consulting & Advisory": Landmark,
  "Staff Augmentation": UsersRound,
  "Document Management System": FileCheck2,
};

const GROUPS: { cat: Exclude<Cat, "All">; blurb: string; tech: string[]; outcomes: string[] }[] = [
  {
    cat: "AI & Banking",
    blurb: "Core banking platforms, Finacle expertise and applied AI for Indian banks and NBFCs.",
    tech: ["Python", "Finacle APIs", "Oracle", "LangChain", "FAISS", "LLMs"],
    outcomes: [
      "Manual back-office work removed",
      "Regulatory reporting on time",
      "Faster staff onboarding",
      "Fewer processing errors",
    ],
  },
  {
    cat: "Cloud & Infra",
    blurb:
      "Cloud architecture, networks, security and operations that stay up and stay affordable.",
    tech: ["AWS", "Terraform", "Kubernetes", "SD-WAN", "Linux", "Grafana"],
    outcomes: [
      "Reliable multi-branch connectivity",
      "Predictable cloud spend",
      "Faster incident response",
      "Recoverable by design",
    ],
  },
  {
    cat: "Development",
    blurb:
      "Product engineering — web, mobile, data and AI — built to be maintained, not rewritten.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Java",
      "Spring Boot",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
    ],
    outcomes: [
      "Ideas shipped as working products",
      "Scalable, testable codebases",
      "Insight from operational data",
      "Interfaces people can actually use",
    ],
  },
  {
    cat: "Business",
    blurb: "Enterprise systems and advisory that make day-to-day operations measurable.",
    tech: ["SAP", "CRM platforms", "Power BI", "GST billing", "HRMS", "DMS"],
    outcomes: [
      "Operations centralised",
      "Compliance handled",
      "Better decisions from live data",
      "Teams supported, not slowed",
    ],
  },
];

const PROCESS = [
  ["Discover", "Understand the requirement, constraints and the people affected."],
  ["Design", "Shape the experience and the architecture before writing code."],
  ["Develop", "Build in increments you can see and review."],
  ["Test", "Validate functionality, performance and security."],
  ["Deploy", "Release with rollback, monitoring and handover."],
  ["Improve", "Measure, refine and extend once it is live."],
];

const QUALITY = [
  ["Quality", "Reviewed code, documented decisions, repeatable delivery."],
  ["Performance", "Measured under realistic load before go-live."],
  ["Scalability", "Designed for multi-branch, multi-entity growth."],
  ["Security", "Least privilege, audit trails and hardening by default."],
  ["Maintainability", "Readable systems your team can own."],
  ["User Experience", "Accessible interfaces that reduce training time."],
  ["Reliability", "Monitoring, alerting and clear runbooks."],
  ["Continuous Improvement", "Post-release reviews turn into the next iteration."],
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Immortal Future Info Tech" },
      {
        name: "description",
        content:
          "32 services across AI banking automation, Finacle, AWS cloud, cyber security, IoT, development and business systems.",
      },
      { property: "og:title", content: "IFIT Services — 32 offerings" },
      {
        property: "og:description",
        content: "AI banking, Finacle, AWS, cyber security, IoT and more.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  const [cat, setCat] = useState<Cat>("All");
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const items = useMemo(() => SERVICES.filter((s) => cat === "All" || s.cat === cat), [cat]);
  const featuredRef = useRef<HTMLDivElement>(null);

  function moveFeatured(direction: number) {
    featuredRef.current?.scrollBy({
      left: direction * featuredRef.current.clientWidth * 0.78,
      behavior: "smooth",
    });
  }

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-12 pt-24 md:pb-16 md:pt-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-emerald-900/15 bg-white/60 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.32em] text-foreground/55 shadow-sm backdrop-blur">
              Our services
            </div>
            <h1 className="mt-5 max-w-3xl text-[clamp(2.75rem,6.2vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-foreground">
              Thirty-two offerings.<span className="text-gradient"> One delivery bar.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground/60 md:text-lg">
              Everything IFIT ships — from AI banking automation to enterprise networking —
              organized so you can find what you need in seconds.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#featured-services" className="btn-primary text-xs">
                Explore services <ArrowRight className="size-4" />
              </a>
              <a
                href="/contact"
                className="rounded-full border border-foreground/15 px-5 py-3 text-xs font-medium text-foreground/70 transition-colors hover:border-foreground/35 hover:text-foreground"
              >
                Talk to an expert
              </a>
            </div>
          </div>
          <div className="relative min-h-[270px] lg:min-h-[410px]">
            <div
              className="absolute inset-10 rounded-full bg-emerald-300/20 blur-3xl"
              aria-hidden="true"
            />
            <img
              src="/services-hero-3d.png"
              alt="Abstract illustration of connected enterprise technology services"
              className="relative z-10 mx-auto h-auto w-full max-w-[620px] mix-blend-multiply object-contain drop-shadow-[0_24px_38px_rgba(20,184,166,.14)]"
            />
          </div>
        </div>
      </section>

      <section id="featured-services" className="px-6 pb-12 md:pb-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">
                Featured services
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Built around your next move.
              </h2>
              <p className="mt-2 text-sm text-foreground/60">
                Explore our core services designed to empower your business.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous featured service"
                onClick={() => moveFeatured(-1)}
                className="grid size-10 place-items-center rounded-full border border-foreground/15 bg-white/60 transition hover:bg-white"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next featured service"
                onClick={() => moveFeatured(1)}
                className="grid size-10 place-items-center rounded-full border border-foreground/15 bg-white/60 transition hover:bg-white"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
          <div
            ref={featuredRef}
            className="mt-7 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {GROUPS.map((g) => {
              const meta = CATEGORY_META[g.cat];
              return (
                <button
                  type="button"
                  key={g.cat}
                  onClick={() => setCat(g.cat)}
                  className="group relative min-w-[82%] snap-start overflow-hidden rounded-[28px] border border-white/80 bg-white/65 p-5 text-left shadow-[0_24px_60px_-42px_rgba(15,118,110,.65)] transition hover:-translate-y-1 sm:min-w-[46%] lg:min-w-[31%]"
                  style={{
                    background: `linear-gradient(145deg,rgba(255,255,255,.82),${meta.tint})`,
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div
                        className="text-[10px] uppercase tracking-[0.25em]"
                        style={{ color: meta.accent }}
                      >
                        0{GROUPS.indexOf(g) + 1} / category
                      </div>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                        {g.cat}
                      </h3>
                    </div>
                    <span
                      className="grid size-10 place-items-center rounded-2xl"
                      style={{ background: meta.tint, color: meta.accent }}
                    >
                      {(() => {
                        const Icon = meta.icon;
                        return <Icon className="size-5" aria-hidden="true" />;
                      })()}
                    </span>
                  </div>
                  <img
                    src={`/category-${g.cat.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-")}.png`}
                    alt=""
                    className="mt-3 h-40 w-full object-contain transition duration-500 group-hover:scale-105"
                  />
                  <p className="text-sm leading-relaxed text-slate-600">{g.blurb}</p>
                  <span
                    className="mt-4 inline-flex items-center gap-2 text-xs font-medium"
                    style={{ color: meta.accent }}
                  >
                    View category{" "}
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compact delivery timeline */}
      <section className="px-6 py-10 md:py-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">
            How we deliver
          </div>
          <ol className="relative mt-6 grid gap-6 md:grid-cols-6 md:gap-3 md:before:absolute md:before:left-[8%] md:before:right-[8%] md:before:top-5 md:before:h-px md:before:bg-emerald-900/15">
            {PROCESS.map(([step, body], i) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="relative flex gap-3 md:block md:text-center"
              >
                <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full border border-emerald-900/15 bg-[#f7fffc] font-mono text-[11px] text-emerald-700 shadow-sm">
                  0{i + 1}
                </span>
                <div className="pt-1 md:pt-3">
                  <div className="text-sm font-semibold text-foreground">{step}</div>
                  <p className="mt-1 text-[11px] leading-relaxed text-foreground/55">{body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Quality */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">
            How we judge our work
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUALITY.map(([t, b]) => (
              <div key={t} className="rounded-2xl border border-border/15 bg-foreground/[0.03] p-4">
                <div className="text-sm font-semibold text-foreground">{t}</div>
                <p className="mt-1 text-[12px] leading-relaxed text-foreground/60">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-6">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-foreground/50">
            All services
          </div>
          <div className="mb-8 flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${cat === c ? "border-[var(--brand-glow)] bg-[var(--brand-glow)]/10 text-foreground" : "border-border/20 text-foreground/60 hover:text-foreground"}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((s, i) => {
              const meta = CATEGORY_META[s.cat];
              const Icon = SERVICE_ICONS[s.name] ?? meta.icon;
              return (
                <motion.article
                  key={s.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
                  className={`group relative overflow-hidden rounded-[24px] border border-white/80 p-5 shadow-[0_20px_48px_-34px_rgba(15,23,42,.55)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_-34px_rgba(15,118,110,.6)] ${i % 5 === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                  style={{
                    background: `linear-gradient(145deg, rgba(255,255,255,.78), ${meta.tint})`,
                  }}
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-150"
                    style={{ background: meta.tint }}
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start justify-between gap-3">
                    <span
                      className="grid size-10 place-items-center rounded-xl border"
                      style={{
                        borderColor: `${meta.accent}45`,
                        background: meta.tint,
                        color: meta.accent,
                      }}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                      {s.cat}
                    </span>
                  </div>
                  <div className="relative mt-4 flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        {s.cat}
                      </div>
                      <h3 className="mt-1 text-base font-semibold text-slate-950">{s.name}</h3>
                    </div>
                    <button
                      type="button"
                      aria-expanded={expandedService === s.name}
                      aria-label={`${expandedService === s.name ? "Collapse" : "Expand"} ${s.name}`}
                      onClick={() => setExpandedService(expandedService === s.name ? null : s.name)}
                      className="grid size-8 shrink-0 place-items-center rounded-full border border-slate-900/10 bg-white/60 text-slate-600 transition hover:bg-white"
                    >
                      <ArrowRight
                        className={`size-4 transition-transform ${expandedService === s.name ? "rotate-90" : ""}`}
                      />
                    </button>
                  </div>
                  <AnimatePresence initial={false}>
                    {expandedService === s.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, y: -4 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -4 }}
                        className="relative overflow-hidden"
                      >
                        <p className="mt-3 text-xs leading-relaxed text-slate-600">{s.body}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {s.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-slate-900/10 bg-white/45 px-2 py-0.5 text-[10px] text-slate-600"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-10">
            <Link to="/contact" className="btn-primary text-xs">
              Discuss your requirement <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
