import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";

type Cat = "All" | "AI & Banking" | "Cloud & Infra" | "Development" | "Business";

const SERVICES: { name: string; cat: Exclude<Cat, "All">; body: string; tags: string[] }[] = [
  { name: "Immortal Intelligence Suite (IIS)", cat: "AI & Banking", body: "AI automation for Infosys Finacle — EOD, loans, KYC, treasury, RBI reporting.", tags: ["Finacle APIs", "Python", "Oracle"] },
  { name: "ASKBOT", cat: "AI & Banking", body: "RAG-powered Finacle training assistant with FAISS search and RBAC.", tags: ["RAG", "FAISS", "LangChain"] },
  { name: "Finacle Implementation", cat: "AI & Banking", body: "Module implementation, workflow development, upgrades, migration and go-live.", tags: ["Finacle", "Migration"] },
  { name: "Finacle Training", cat: "AI & Banking", body: "Core, internet and mobile banking training with lab sessions and certification.", tags: ["Training", "Cert"] },
  { name: "AWS Cloud Services", cat: "Cloud & Infra", body: "Architecture, migration, EC2/RDS/S3/Lambda/EKS, CI/CD and FinOps.", tags: ["AWS", "FinOps"] },
  { name: "Enterprise Networking", cat: "Cloud & Infra", body: "LAN, WAN, SD-WAN, firewalls, IDS, WiFi and NOC with 99.9% uptime.", tags: ["SD-WAN", "NOC"] },
  { name: "IoT Solutions", cat: "Cloud & Infra", body: "Device fleets, telemetry, edge computing, predictive maintenance, patient monitoring.", tags: ["Edge", "IoT"] },
  { name: "Cyber Security", cat: "Cloud & Infra", body: "VAPT, SOC, compliance, endpoint security and incident response.", tags: ["SOC", "VAPT"] },
  { name: "Full Stack Development", cat: "Development", body: "React, Next.js, Vue, Node.js, Java, Python, PostgreSQL, MongoDB, REST & GraphQL.", tags: ["React", "Node"] },
  { name: "Mobile App Development", cat: "Development", body: "Native Android, Flutter and React Native apps.", tags: ["Flutter", "RN"] },
  { name: "E-Commerce Development", cat: "Development", body: "Online stores, payment gateways, inventory, analytics and SEO.", tags: ["Commerce"] },
  { name: "UI/UX Design", cat: "Development", body: "Research, wireframes, prototypes, design systems and accessibility.", tags: ["Design"] },
  { name: "Data Science & Analytics", cat: "Development", body: "ML, BI dashboards, visualization, Apache Spark and NLP.", tags: ["ML", "Spark"] },
  { name: "CRM Implementation", cat: "Business", body: "CRM setup, leads, pipeline, marketing and workflow automation.", tags: ["CRM"] },
  { name: "ERP & SAP", cat: "Business", body: "SAP ERP, BW, process optimization, integration and reporting.", tags: ["SAP"] },
  { name: "Customized Billing Software", cat: "Business", body: "GST billing, multi-currency, recurring billing, payment tracking and reports.", tags: ["GST"] },
  { name: "HR & Payroll", cat: "Business", body: "Payroll, attendance, leave, tax, employee portal and recruitment.", tags: ["HRMS"] },
  { name: "Digital Marketing", cat: "Business", body: "SEO, PPC, Google Ads, social, email marketing and analytics.", tags: ["SEO", "Ads"] },
  { name: "Core Banking Support (AMS)", cat: "AI & Banking", body: "24×7 application managed services, L1–L3 support and release management for Finacle estates.", tags: ["AMS", "L3 Support"] },
  { name: "Digital Banking Channels", cat: "AI & Banking", body: "Internet banking, mobile banking, UPI and payment channel integration.", tags: ["UPI", "Mobile"] },
  { name: "RBI Compliance & Reporting", cat: "AI & Banking", body: "Automated regulatory returns, audit trails and compliance dashboards.", tags: ["RBI", "Audit"] },
  { name: "Loan Origination Automation", cat: "AI & Banking", body: "Digital LOS with credit scoring, document AI and disbursement workflows.", tags: ["LOS", "OCR"] },
  { name: "DevOps & SRE", cat: "Cloud & Infra", body: "CI/CD pipelines, IaC with Terraform, observability and on-call runbooks.", tags: ["Terraform", "K8s"] },
  { name: "Disaster Recovery & BCP", cat: "Cloud & Infra", body: "DR strategy, backup automation, failover drills and RPO/RTO assurance.", tags: ["DR", "Backup"] },
  { name: "Managed IT & Helpdesk", cat: "Cloud & Infra", body: "End-user support, asset management, patching and branch IT operations.", tags: ["ITSM"] },
  { name: "Data Engineering & Warehousing", cat: "Development", body: "ETL pipelines, data lakes, warehouse modelling and real-time streaming.", tags: ["ETL", "Kafka"] },
  { name: "API & System Integration", cat: "Development", body: "Middleware, REST/SOAP integration, message queues and partner onboarding.", tags: ["API", "MQ"] },
  { name: "QA & Test Automation", cat: "Development", body: "Automated regression, performance testing and UAT support for core systems.", tags: ["Cypress", "JMeter"] },
  { name: "Generative AI Solutions", cat: "Development", body: "Custom LLM assistants, document intelligence and agentic workflows.", tags: ["LLM", "RAG"] },
  { name: "IT Consulting & Advisory", cat: "Business", body: "Technology roadmaps, vendor evaluation, architecture reviews and audits.", tags: ["Advisory"] },
  { name: "Staff Augmentation", cat: "Business", body: "Certified Finacle, AWS and full-stack engineers embedded in your team.", tags: ["Talent"] },
  { name: "Document Management System", cat: "Business", body: "Digitization, OCR indexing, e-sign workflows and retention policies.", tags: ["DMS", "OCR"] },
];

const CATS: Cat[] = ["All", "AI & Banking", "Cloud & Infra", "Development", "Business"];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Immortal Future Info Tech" },
      { name: "description", content: "32 services across AI banking automation, Finacle, AWS cloud, cyber security, IoT, development and business systems." },
      { property: "og:title", content: "IFIT Services — 32 offerings" },
      { property: "og:description", content: "AI banking, Finacle, AWS, cyber security, IoT and more." },
    ],
  }),
  component: Services,
});

function Services() {
  const [cat, setCat] = useState<Cat>("All");
  const items = useMemo(() => SERVICES.filter((s) => cat === "All" || s.cat === cat), [cat]);

  return (
    <>
      <PageHeader eyebrow="Services" title="Thirty-two offerings.|One delivery bar.">
        Everything IFIT ships — from AI banking automation to enterprise networking — organized so you can find what you need in seconds.
      </PageHeader>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${cat === c ? "border-[var(--brand-glow)] bg-[var(--brand-glow)]/10 text-foreground" : "border-border/20 text-foreground/60 hover:text-foreground"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: (i % 6) * 0.05 }} className="glass-panel group p-6 transition-transform hover:-translate-y-1">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--brand-glow)]">{s.cat}</div>
                <h3 className="mt-2 text-base font-semibold text-foreground">{s.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-foreground/60">{s.body}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border/15 px-2 py-0.5 text-[10px] text-foreground/60">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}