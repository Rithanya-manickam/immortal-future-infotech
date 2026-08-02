import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  Check,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  HeartPulse,
  Layers3,
  LockKeyhole,
  Megaphone,
  Network,
  Palette,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Smartphone,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";

import imgAi from "@/assets/img-ai.jpg";
import imgDash from "@/assets/accent-dashboard.jpg";
import imgOps from "@/assets/img-ops.jpg";
import imgBank from "@/assets/hero-bank.jpg";
import imgTraining from "@/assets/img-training.jpg";
import imgNetwork from "@/assets/img-network.jpg";
import imgCloud from "@/assets/img-cloud.jpg";
import imgHealthcare from "@/assets/img-healthcare.jpg";
import imgSecurity from "@/assets/img-security.jpg";
import imgTeam from "@/assets/img-team.jpg";
import imgCircuit from "@/assets/accent-circuit.jpg";
import bgPortfolio from "@/assets/bg-portfolio.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      {
        title: "Products & Solutions — Immortal Future Info Tech",
      },
      {
        name: "description",
        content:
          "AI products, enterprise solutions and technology implementations from Immortal Future Info Tech.",
      },
      {
        property: "og:title",
        content: "Products & Solutions — Immortal Future Info Tech",
      },
      {
        property: "og:description",
        content:
          "Technology that doesn't just work. It moves your business forward.",
      },
      {
        property: "og:image",
        content:
          "https://immortal-future-infotech.lovable.app/logo.png",
      },
    ],
  }),

  component: Products,
});

/* =========================================================
   DATA
========================================================= */

const IIS_FEATURES = [
  "EOD Automation",
  "Loan Workflow Automation",
  "KYC Processing",
  "Treasury Automation",
  "RBI Reporting",
  "Finacle API Integration",
];

const ASKBOT_FEATURES = [
  "Natural Language Q&A",
  "Retrieval-Augmented Generation",
  "FAISS Vector Search",
  "Role-Based Access",
  "Staff Onboarding Kits",
  "Multi-Branch Deployment",
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

const IMPLEMENTATIONS = [
  {
    image: imgOps,
    category: "IIS Platform",
    domain: "Banking",
    title: "EOD Automation for Cooperative Bank",
    subtitle: "A leading cooperative bank in Tamil Nadu",
    description:
      "Deployed IIS to automate end-of-day processing, removing 12 manual steps and 4 hours of nightly staff work.",
    metrics: [
      ["80%", "Manual effort reduced"],
      ["4h", "Time saved"],
      ["0", "Reconciliation errors"],
    ],
    tags: ["Finacle APIs", "IIS Platform", "Python", "Oracle DB"],
  },
  {
    image: imgTraining,
    category: "ASKBOT",
    domain: "Banking",
    title: "AI Training Assistant for Private Bank",
    subtitle: "Private bank with 200+ branch staff",
    description:
      "Implemented ASKBOT across 3 branches with 200+ staff. New tellers onboarded in 2 weeks versus 6 weeks previously.",
    metrics: [
      ["3×", "Faster onboarding"],
      ["70%", "Query time reduced"],
      ["200+", "Staff served"],
    ],
    tags: ["ASKBOT", "RAG", "FAISS", "LangChain", "FastAPI"],
  },
  {
    image: imgBank,
    category: "Finacle Implementation",
    domain: "Banking",
    title: "Greenfield Finacle for New NBFC",
    subtitle: "A new NBFC entering the market",
    description:
      "End-to-end Finacle implementation covering loan management, customer management and reporting modules.",
    metrics: [
      ["14 wk", "Implementation time"],
      ["5", "Modules launched"],
      ["100%", "On-time delivery"],
    ],
    tags: ["Finacle Core", "Java", "Oracle DB", "RBI Engine"],
  },
  {
    image: imgCloud,
    category: "AWS Cloud",
    domain: "Banking",
    title: "Core Banking Cloud Migration",
    subtitle: "Regional private bank",
    description:
      "Migrated on-premise core banking infrastructure to AWS with high availability, automated scaling and S3-based backup architecture.",
    metrics: [
      ["40%", "Cost reduction"],
      ["99.9%", "Uptime SLA"],
      ["3×", "Performance gain"],
    ],
    tags: ["AWS EC2", "RDS Multi-AZ", "S3", "Terraform"],
  },
  {
    image: imgHealthcare,
    category: "IoT & AI",
    domain: "Healthcare",
    title: "Patient Vitals Monitoring Platform",
    subtitle: "Multi-speciality hospital, Chennai",
    description:
      "Built an IoT platform connecting 500+ bedside devices to a central AI dashboard with real-time monitoring and predictive alerts.",
    metrics: [
      ["500+", "Devices connected"],
      ["60%", "Alert response time"],
      ["24/7", "Live monitoring"],
    ],
    tags: ["IoT Gateway", "AWS IoT Core", "React", "ML Alerts"],
  },
  {
    image: imgAi,
    category: "AI Diagnostics",
    domain: "Healthcare",
    title: "AI-Assisted Diagnostic Reporting",
    subtitle: "Diagnostic chain with 12 centers",
    description:
      "Deployed AI models to pre-analyze lab reports and flag abnormal results for pathologist review.",
    metrics: [
      ["50%", "Faster turnaround"],
      ["12", "Centers deployed"],
      ["98%", "Detection accuracy"],
    ],
    tags: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
  },
  {
    image: imgNetwork,
    category: "Enterprise Networking",
    domain: "Enterprise",
    title: "Multi-Branch WAN for Banking Group",
    subtitle: "Banking group with 40+ branches",
    description:
      "Designed and deployed SD-WAN connecting 40+ bank branches with centralized NOC monitoring.",
    metrics: [
      ["40+", "Branches connected"],
      ["35%", "Connectivity cost down"],
      ["99.9%", "Network uptime"],
    ],
    tags: ["SD-WAN", "MPLS", "Cisco", "Fortinet"],
  },
  {
    image: imgSecurity,
    category: "Smart Branch IoT",
    domain: "Enterprise",
    title: "Intelligent Branch Security & Access",
    subtitle: "Cooperative bank — 15 branches",
    description:
      "Deployed smart access control, ATM environment monitoring and CCTV analytics across 15 bank branches.",
    metrics: [
      ["15", "Branches secured"],
      ["100%", "Remote visibility"],
      ["60%", "Incident response faster"],
    ],
    tags: ["IoT Sensors", "CCTV AI", "AWS IoT", "React Dashboard"],
  },
];

const WHY_IFIT = [
  {
    icon: ShieldCheck,
    title: "Finacle Certified",
    description:
      "Our team holds active Finacle certifications and understands the platform from the inside.",
  },
  {
    icon: Sparkles,
    title: "Banking-First AI",
    description:
      "We build AI around real banking workflows instead of generic AI experiments.",
  },
  {
    icon: Globe,
    title: "On-Site + Remote",
    description:
      "Flexible engagement models for distributed teams and managed environments.",
  },
  {
    icon: Check,
    title: "Proven Delivery",
    description:
      "Structured project management and quality gates keep delivery measurable and reliable.",
  },
  {
    icon: Zap,
    title: "Founded May 2024",
    description:
      "A young technology company focused on building practical solutions for what comes next.",
  },
  {
    icon: Network,
    title: "Pan India Reach",
    description:
      "Active projects across Tamil Nadu, Maharashtra, Karnataka, Kerala and other regions.",
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

/* =========================================================
   PRODUCT PANEL
========================================================= */

function ProductPanel({
  icon: Icon,
  tag,
  title,
  subtitle,
  body,
  features,
  metric,
  image,
  reverse = false,
}: {
  icon: React.ElementType;
  tag: string;
  title: string;
  subtitle: string;
  body: string;
  features: string[];
  metric: string;
  image: string;
  reverse?: boolean;
}) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 md:grid-cols-2 lg:gap-20"
    >
      <div className={reverse ? "md:order-2" : ""}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.35 }}
          className="group relative overflow-hidden rounded-[2rem] border border-border/20 bg-background shadow-2xl"
        >
          <div className="absolute inset-x-0 top-0 z-10 h-[2px] bg-gradient-to-r from-transparent via-[var(--brand-glow)] to-transparent" />

          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs text-white backdrop-blur-md">
              {tag}
            </div>
          </div>
        </motion.div>
      </div>

      <div className={reverse ? "md:order-1" : ""}>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/20 bg-foreground/[0.04]">
            <Icon className="h-5 w-5 text-[var(--brand-glow)]" />
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-foreground/45">
            {tag}
          </span>
        </div>

        <h2 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {title}
        </h2>

        <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-glow)]">
          {subtitle}
        </p>

        <p className="mt-6 max-w-xl text-[15px] leading-7 text-foreground/65">
          {body}
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-xl border border-border/15 bg-foreground/[0.025] px-4 py-3 transition hover:bg-foreground/[0.05]"
            >
              <Check className="h-4 w-4 shrink-0 text-[var(--brand-glow)]" />
              <span className="text-sm text-foreground/75">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--brand-glow)]/20 bg-[var(--brand-glow)]/[0.06] px-5 py-3 text-sm font-medium">
          <Sparkles className="h-4 w-4 text-[var(--brand-glow)]" />
          {metric}
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   SOLUTION CARD
========================================================= */

function SolutionCard({
  solution,
  index,
}: {
  solution: (typeof SOLUTIONS)[number];
  index: number;
}) {
  const Icon = solution.icon;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -7 }}
      className="group relative overflow-hidden rounded-2xl border border-border/20 bg-background/80 p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-[var(--brand-glow)] transition-transform duration-500 group-hover:scale-x-100" />

      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/[0.04]">
          <Icon className="h-5 w-5 text-[var(--brand-glow)] transition-transform duration-300 group-hover:scale-110" />
        </div>

        <span className="font-mono text-[9px] text-foreground/30">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-5 text-[9px] uppercase tracking-[0.25em] text-foreground/40">
        {solution.category}
      </div>

      <h3 className="mt-2 text-lg font-semibold tracking-tight">
        {solution.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-foreground/60">
        {solution.description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-xs text-foreground/40 transition-colors group-hover:text-[var(--brand-glow)]">
        Discover what we can build
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.article>
  );
}

/* =========================================================
   IMPLEMENTATION CARD
========================================================= */

function ImplementationCard({
  item,
}: {
  item: (typeof IMPLEMENTATIONS)[number];
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-3xl border border-border/20 bg-background/90 shadow-sm transition-shadow duration-500 hover:shadow-2xl"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1000ms] group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-white backdrop-blur-md">
            {item.category}
          </span>

          <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-white backdrop-blur-md">
            {item.domain}
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-xl font-semibold tracking-tight text-white">
            {item.title}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs font-medium text-[var(--brand-glow)]">
          {item.subtitle}
        </p>

        <p className="mt-3 text-sm leading-6 text-foreground/60">
          {item.description}
        </p>

        <div className="mt-6 grid grid-cols-3 gap-2">
          {item.metrics.map(([value, label]) => (
            <div
              key={`${value}-${label}`}
              className="rounded-xl bg-foreground/[0.035] px-2 py-4 text-center"
            >
              <div className="text-xl font-semibold">{value}</div>

              <div className="mt-1 text-[8px] uppercase leading-3 tracking-wide text-foreground/40">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/20 px-2.5 py-1 text-[9px] text-foreground/45"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   WHY IFIT CARD
========================================================= */

function WhyCard({
  item,
}: {
  item: (typeof WHY_IFIT)[number];
}) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-border/15 bg-background/75 p-6 text-center shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-glow)]/10">
        <Icon className="h-5 w-5 text-[var(--brand-glow)]" />
      </div>

      <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>

      <p className="mt-2 text-xs leading-5 text-foreground/55">
        {item.description}
      </p>
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

function Products() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden px-6 pb-24 pt-12">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <img
            src={imgCircuit}
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--brand-glow)]/[0.08] blur-[130px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-glow)]/20 bg-[var(--brand-glow)]/[0.05] px-4 py-2"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--brand-glow)]" />

            <span className="text-[9px] uppercase tracking-[0.3em] text-foreground/55">
              Products · Solutions · Real Results
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.045em] md:text-7xl"
          >
            Technology That Doesn't Just Work.
            <span className="block bg-gradient-to-r from-[var(--brand-glow)] to-cyan-400 bg-clip-text text-transparent">
              It Moves Your Business Forward.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-foreground/60 md:text-base"
          >
            From intelligent banking automation to enterprise technology,
            we build solutions that transform complex operations into
            simpler, faster and smarter experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <a
              href="#ai-products"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand-glow)] px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-[var(--brand-glow)]/20 transition hover:-translate-y-1"
            >
              Explore our products
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#implementations"
              className="inline-flex items-center gap-2 rounded-full border border-border/25 px-6 py-3 text-xs font-semibold transition hover:bg-foreground/[0.05]"
            >
              See real results
            </a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          QUOTE
      ===================================================== */}

      <section className="px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto mb-6 h-px w-12 bg-[var(--brand-glow)]" />

          <blockquote className="text-2xl font-medium leading-relaxed md:text-3xl">
            “The best technology isn't the technology you notice.
            <span className="text-[var(--brand-glow)]">
              {" "}
              It's the complexity you no longer have to deal with.
            </span>
            ”
          </blockquote>
        </motion.div>
      </section>

      {/* =====================================================
          AI PRODUCTS
      ===================================================== */}

      <section id="ai-products" className="relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-glow)]" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-foreground/45">
                Flagship AI Products
              </span>
            </div>

            <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Products built to turn{" "}
              <span className="text-[var(--brand-glow)]">
                complexity into advantage.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/55">
              Purpose-built AI products designed around real banking
              workflows, real operational challenges and measurable outcomes.
            </p>
          </motion.div>
        </div>

        <ProductPanel
          icon={Sparkles}
          tag="IIS"
          title="Turn Banking Complexity Into Intelligent Automation."
          subtitle="Immortal Intelligence Suite · AI Banking Automation on Finacle"
          body="IIS is an automation layer built on Infosys Finacle. It replaces manual reconciliation, KYC verification and reporting steps with reliable AI workflows — while leaving the core banking system untouched."
          features={IIS_FEATURES}
          metric="Up to 80% reduction in manual processing"
          image={imgDash}
        />

        <ProductPanel
          icon={Bot}
          tag="ASKBOT"
          title="Give Every New Joiner an Expert in Their Pocket."
          subtitle="AI Finacle Training Assistant"
          body="ASKBOT uses Retrieval-Augmented Generation over your Finacle documentation. New joiners get accurate, cite-backed answers on day one — and support tickets drop as staff learn."
          features={ASKBOT_FEATURES}
          metric="3× faster employee onboarding"
          image={imgAi}
          reverse
        />
      </section>

      {/* =====================================================
          SOLUTIONS
      ===================================================== */}

      <section id="solutions" className="px-6 py-24">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-glow)]" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-foreground/45">
                Enterprise Solutions
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              Whatever your business needs next,
              <span className="block text-[var(--brand-glow)]">
                build it with us.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/55">
              From core banking and cloud infrastructure to AI, cybersecurity,
              software and digital experiences — one technology partner,
              built around your business.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {SOLUTIONS.map((solution, index) => (
              <SolutionCard
                key={solution.title}
                solution={solution}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          REAL RESULTS
      ===================================================== */}

      <section
        id="implementations"
        className="relative overflow-hidden px-6 py-24"
      >
        <div className="absolute inset-0 -z-10 opacity-[0.13]">
          <img
            src={bgPortfolio}
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-glow)]/20 bg-[var(--brand-glow)]/[0.05] px-4 py-2">
              <Activity className="h-3.5 w-3.5 text-[var(--brand-glow)]" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-foreground/55">
                Real Work · Real Results
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              Real Problems.
              <span className="text-[var(--brand-glow)]">
                {" "}
                Real Systems.
              </span>
              <span className="block">Real Results.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-foreground/55">
              Behind every number is a business problem we helped solve.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 grid gap-5 md:grid-cols-2"
          >
            {IMPLEMENTATIONS.map((item) => (
              <ImplementationCard key={item.title} item={item} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[var(--brand-glow)]/20 bg-background p-8 shadow-2xl md:p-14"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[var(--brand-glow)]/10 blur-[100px]" />

          <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--brand-glow)]" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-foreground/45">
                  Build what's next
                </span>
              </div>

              <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
                Your next advantage
                <span className="block text-[var(--brand-glow)]">
                  could start here.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-foreground/60">
                Whether you're automating a banking workflow, modernizing
                infrastructure or building something entirely new — let's
                turn the challenge into something measurable.
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-[var(--brand-glow)] px-7 py-4 text-xs font-semibold text-white shadow-xl shadow-[var(--brand-glow)]/20 transition-all hover:-translate-y-1"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          CLOSING QUOTE
      ===================================================== */}

      <section className="px-6 pb-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-7 h-px w-10 bg-border" />

          <p className="text-xl font-medium leading-relaxed text-foreground/60 md:text-2xl">
            “The future belongs to businesses that don't wait for change —
            <span className="text-foreground">
              {" "}
              they build for it.
            </span>
            ”
          </p>

          <p className="mt-5 text-[9px] uppercase tracking-[0.35em] text-foreground/35">
            Immortal Future Info Tech
          </p>
        </motion.div>
      </section>
    </>
  );
}