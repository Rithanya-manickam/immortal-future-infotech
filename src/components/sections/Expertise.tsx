import { motion } from "framer-motion";
import { Brain, Cloud, Building2, Globe, Smartphone, Workflow, ShieldCheck } from "lucide-react";

const CARDS = [
  { icon: Brain, name: "Artificial Intelligence", desc: "Agents, LLM pipelines, RAG, MLOps.", hue: "220" },
  { icon: Cloud, name: "Cloud Native", desc: "Multi-cloud architectures at planetary scale.", hue: "200" },
  { icon: Building2, name: "Enterprise", desc: "Core platforms, Finacle, mission systems.", hue: "260" },
  { icon: Globe, name: "Web", desc: "Product-grade immersive frontends.", hue: "320" },
  { icon: Smartphone, name: "Mobile", desc: "Native iOS & Android performance targets.", hue: "180" },
  { icon: Workflow, name: "Automation", desc: "Workflow orchestration and autonomous ops.", hue: "40" },
  { icon: ShieldCheck, name: "Cyber Security", desc: "Zero-trust, detection, response.", hue: "10" },
];

export function Expertise() {
  return (
    <section id="expertise" className="relative px-6 py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 max-w-2xl">
          <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Section 04 — Expertise</div>
          <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight text-foreground">
            A stack forged for <span className="text-gradient">the next century.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-foreground/40 transition-colors group-hover:text-foreground">
                  <span>Explore</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
