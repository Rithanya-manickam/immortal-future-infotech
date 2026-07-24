import { motion } from "framer-motion";
import { Brain, Cloud, Building2, Cpu, Network, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";

const CARDS = [
  { icon: Brain, name: "AI Banking Automation", desc: "IIS + ASKBOT — Finacle EOD, KYC, loan workflows, RAG assistants.", hue: "170" },
  { icon: Building2, name: "Finacle Expertise", desc: "Certified implementation, migration, upgrades and staff training.", hue: "160" },
  { icon: Cloud, name: "AWS Cloud", desc: "Architecture, migration, EC2/RDS/S3/Lambda/EKS, FinOps.", hue: "195" },
  { icon: ShieldCheck, name: "Cyber Security", desc: "VAPT, SOC, endpoint security, compliance, incident response.", hue: "185" },
  { icon: Cpu, name: "IoT Solutions", desc: "Device fleets, telemetry, edge, predictive maintenance, healthcare.", hue: "175" },
  { icon: Network, name: "Enterprise Networking", desc: "LAN/WAN/SD-WAN, firewalls, IDS, NOC with 99.9% uptime.", hue: "200" },
];

export function Expertise() {
  return (
    <section id="expertise" className="relative px-6 py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Expertise</div>
            <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight text-foreground">
              Six pillars, built for <span className="text-gradient">Indian enterprise.</span>
            </h2>
          </div>
          <Link to="/services" className="text-xs uppercase tracking-[0.3em] text-foreground/60 hover:text-foreground">
            All 18 services →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.name}
                data-cursor="Explore"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06 }}
                whileHover={{ y: -8, rotateX: 6, rotateY: -6 }}
                style={{ transformStyle: "preserve-3d" }}
                className="group glass-panel relative overflow-hidden p-6"
              >
                <div
                  className="pointer-events-none absolute -inset-24 -z-10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: `radial-gradient(circle, oklch(0.75 0.22 ${c.hue} / .6), transparent 60%)` }}
                />
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border/10"
                  style={{ background: `linear-gradient(135deg, oklch(0.75 0.20 ${c.hue} / .35), oklch(0.4 0.15 ${c.hue} / .15))` }}
                >
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{c.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-foreground/55">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
