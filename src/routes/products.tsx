import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Cpu,
  Layers3,
  Megaphone,
  Network,
  Palette,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Users,
  WalletCards,
} from "lucide-react";
import { DataToAction } from "@/components/sections/DataToAction";
import { RealResults } from "@/components/sections/RealResults";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { CTABand } from "@/components/sections/CTABand";
import { SectionHead } from "@/components/sections/SectionHead";
import iisUi from "@/assets/product-iis-ui.jpg";
import askbotUi from "@/assets/product-askbot-ui.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Solutions — Immortal Future Info Tech" },
      { name: "description", content: "IIS automates Finacle core banking work and ASKBOT answers staff questions with AI. Plus cloud, security, IoT and enterprise solutions from IFIT." },
      { property: "og:title", content: "IFIT Products — IIS and ASKBOT" },
      { property: "og:description", content: "AI products built for Indian banking, with enterprise solutions across cloud, security and development." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Products,
});

const PRODUCTS = [
  {
    icon: Sparkles,
    name: "Immortal Intelligence Suite (IIS)",
    purpose: "AI automation layer for Infosys Finacle.",
    body: "IIS sits on top of an existing Finacle estate and takes over the repetitive core banking work — without disrupting the setup your operations team already trusts.",
    features: [
      "EOD Automation",
      "Loan Workflow Automation",
      "KYC Processing",
      "Treasury Automation",
      "RBI Reporting",
      "Finacle API Integration",
    ],
    image: iisUi,
    alt: "IIS end-of-day reconciliation dashboard",
  },
  {
    icon: Bot,
    name: "ASKBOT",
    purpose: "AI training assistant for banking staff.",
    body: "ASKBOT answers Finacle questions in natural language, grounded in your own documentation, so new staff become productive faster and senior staff get interrupted less.",
    features: [
      "Natural Language Q&A",
      "Retrieval-Augmented Generation",
      "FAISS Vector Search",
      "Role-Based Access",
      "Staff Onboarding Kits",
      "Multi-Branch Deployment",
    ],
    image: askbotUi,
    alt: "ASKBOT AI assistant interface with document sources",
  },
];

const SOLUTIONS = [
  {
    icon: Building2,
    category: "Core Banking",
    title: "Finacle Implementation",
    description:
      "Complete Finacle implementation lifecycle management for cooperative banks, private banks and NBFCs.",
  },
  {
    icon: Cloud,
    category: "AWS Partner",
    title: "AWS Cloud Services",
    description:
      "Secure, scalable and highly available AWS cloud architecture designed for modern enterprise workloads.",
  },
  {
    icon: Network,
    category: "Infrastructure",
    title: "Enterprise Networking",
    description:
      "LAN, WAN, SD-WAN and network infrastructure designed for reliable enterprise connectivity.",
  },
  {
    icon: Cpu,
    category: "Smart Systems",
    title: "IoT Solutions",
    description:
      "Connected IoT systems that bring real-time monitoring, automation and intelligence to physical environments.",
  },
  {
    icon: Code2,
    category: "Development",
    title: "Fullstack Development",
    description:
      "Modern full-stack applications built for scalability, performance and long-term maintainability.",
  },
  {
    icon: Smartphone,
    category: "Development",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications designed around real customer and business needs.",
  },
  {
    icon: ShoppingCart,
    category: "E-Commerce",
    title: "E-Commerce Development",
    description:
      "Secure, scalable commerce platforms with payments, inventory, analytics and customer workflows.",
  },
  {
    icon: Users,
    category: "CRM",
    title: "CRM Implementation",
    description:
      "CRM implementation and customization designed to improve customer management and business operations.",
  },
  {
    icon: WalletCards,
    category: "ERP / SAP",
    title: "ERP & SAP Solutions",
    description:
      "Enterprise resource planning and SAP solutions for manufacturing, retail and service organizations.",
  },
  {
    icon: BarChart3,
    category: "Analytics",
    title: "Data Science & Analytics",
    description:
      "Turn operational data into useful insights through analytics, dashboards and machine learning.",
  },
  {
    icon: Palette,
    category: "Design",
    title: "UI/UX Design",
    description:
      "Human-centered interfaces designed around clarity, accessibility and meaningful digital experiences.",
  },
  {
    icon: ShieldCheck,
    category: "Security",
    title: "Cybersecurity Services",
    description:
      "Security assessments, monitoring, vulnerability testing and enterprise cybersecurity support.",
  },
  {
    icon: Layers3,
    category: "Training",
    title: "Finacle Training Programs",
    description:
      "Expert-led Finacle training programs designed to build practical banking platform knowledge.",
  },
  {
    icon: WalletCards,
    category: "Software",
    title: "Custom Billing Software",
    description:
      "Custom billing and invoicing systems designed around your business processes and workflows.",
  },
  {
    icon: BriefcaseBusiness,
    category: "HR Tech",
    title: "HR & Payroll Management",
    description:
      "Employee management, payroll, leave and HR workflows brought together in one structured system.",
  },
  {
    icon: Megaphone,
    category: "Marketing",
    title: "Digital Marketing",
    description:
      "SEO, social media, content, PPC and analytics designed to strengthen digital visibility and growth.",
  },
];

const BUILD_HIGHLIGHTS: Record<string, string[]> = {
  "Finacle Implementation": [
    "Core module rollout & customization",
    "Data migration and parallel runs",
    "RBI-ready reporting setup",
  ],
  "AWS Cloud Services": [
    "Landing zone & VPC architecture",
    "Multi-AZ HA and DR strategy",
    "Cost optimization reviews",
  ],
  "Enterprise Networking": [
    "Branch SD-WAN rollouts",
    "Firewall & segmentation design",
    "24/7 NOC monitoring",
  ],
  "IoT Solutions": [
    "Sensor-to-cloud gateways",
    "Real-time monitoring dashboards",
    "Predictive alerting rules",
  ],
  "Fullstack Development": [
    "React + Node/Python platforms",
    "Secure API and auth layers",
    "CI/CD and observability",
  ],
  "Mobile App Development": [
    "iOS, Android and cross-platform",
    "Offline-first field apps",
    "Store release management",
  ],
  "E-Commerce Development": [
    "Payments and UPI checkout",
    "Inventory and order workflows",
    "Conversion analytics",
  ],
  "CRM Implementation": [
    "Lead-to-service pipelines",
    "Custom modules and automations",
    "Migration from legacy CRMs",
  ],
  "ERP & SAP Solutions": [
    "Finance, inventory and HR modules",
    "SAP integration and interfaces",
    "Process mapping workshops",
  ],
  "Data Science & Analytics": [
    "Executive KPI dashboards",
    "Forecasting and risk models",
    "Data warehouse pipelines",
  ],
  "UI/UX Design": [
    "Design systems and tokens",
    "Accessibility-first interfaces",
    "Interactive prototypes",
  ],
  "Cybersecurity Services": [
    "VAPT and security audits",
    "SOC monitoring and response",
    "Compliance hardening",
  ],
  "Finacle Training Programs": [
    "Role-based teller & officer tracks",
    "Hands-on sandbox exercises",
    "ASKBOT-assisted refreshers",
  ],
  "Custom Billing Software": [
    "GST-compliant invoicing",
    "Recurring and usage billing",
    "Payment gateway integration",
  ],
  "HR & Payroll Management": [
    "Attendance and leave workflows",
    "Payroll runs with statutory filings",
    "Employee self-service portals",
  ],
  "Digital Marketing": [
    "SEO and content strategy",
    "Performance campaigns",
    "Analytics and attribution",
  ],
};


function Products() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hero — short, product-first */}
      <section className="px-6 pt-28 pb-10 md:pt-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Products & Solutions</div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 max-w-3xl text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.06] tracking-tight text-foreground"
          >
            Two products in banks. <span className="text-gradient">One delivery bar.</span>
          </motion.h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/65">
            Built on deep Finacle and enterprise IT domain expertise — and backed by solutions
            across cloud, security, data and development.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="px-6 pb-6">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6">
          {PRODUCTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`glass-panel grid gap-0 overflow-hidden lg:grid-cols-2 ${i % 2 ? "lg:[&>figure]:order-first" : ""}`}
              >
                <div className="min-w-0 p-7 md:p-9">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border/15 bg-foreground/[0.04]">
                      <Icon className="h-4 w-4 text-[var(--brand-glow)]" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="truncate text-xl font-semibold text-foreground">{p.name}</h2>
                      <div className="truncate text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                        {p.purpose}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-foreground/65">{p.body}</p>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-foreground/70">
                        <Check className="mt-[2px] h-3.5 w-3.5 shrink-0 text-[var(--brand-glow)]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link to="/contact" data-cursor="Talk" className="btn-primary">
                      Book a Demo <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link to="/portfolio" className="btn-secondary">
                      See Real Results <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <figure className="relative m-0 min-h-[240px]">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="h-full w-full object-cover"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{ background: "linear-gradient(180deg, transparent 60%, oklch(0.1 0.02 180 / 0.35))" }}
                  />
                </figure>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Solutions — compact, progressive disclosure */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="Solutions" title="Everything else we" accent="build and run.">
            Expand any solution to see what a typical engagement includes.
          </SectionHead>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s) => {
              const Icon = s.icon;
              const highlights = BUILD_HIGHLIGHTS[s.title] ?? [];
              return (
                <details key={s.title} className="glass-panel group p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border/15 bg-foreground/[0.04]">
                      <Icon className="h-4 w-4 text-[var(--brand-glow)]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] uppercase tracking-[0.25em] text-foreground/45">
                        {s.category}
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-foreground">{s.title}</span>
                    </span>
                    <ChevronDown className="mt-1 h-4 w-4 shrink-0 text-foreground/40 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-xs leading-relaxed text-foreground/60">{s.description}</p>
                  {highlights.length > 0 && (
                    <ul className="mt-3 space-y-1.5 border-t border-border/10 pt-3">
                      {highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-[11px] text-foreground/65">
                          <Check className="mt-[2px] h-3 w-3 shrink-0 text-[var(--brand-glow)]" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* Discover what we build — expandable */}
      <section className="px-6 pb-8">
        <div className="mx-auto flex max-w-[1200px] justify-center">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="discover-panel"
            data-cursor={open ? "Collapse" : "Discover"}
            className="btn-primary"
          >
            Discover What We Build
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
        </div>
      </section>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="discover-panel"
            key="discover"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <DataToAction />
            <RealResults />
            <TrustedBy compact />
          </motion.div>
        )}
      </AnimatePresence>

      <CTABand title="Not sure which product fits?" body="Book a short consultation and we'll map your workflow to the right solution." />
    </>
  );
}
