import { motion } from "framer-motion";
import { Award, Building2, Cloud, Landmark, ShieldCheck } from "lucide-react";
import { SectionHead } from "./SectionHead";

const CREDENTIALS = [
  { icon: Landmark, label: "Finacle Certified Partner", note: "Core banking implementation & training" },
  { icon: Cloud, label: "AWS Technology Partner", note: "Cloud architecture and migration" },
  { icon: Award, label: "NASSCOM Member", note: "Indian technology industry body" },
  { icon: Building2, label: "MCA Registered", note: "Incorporated May 2024, Tiruchirapalli" },
  { icon: ShieldCheck, label: "MSME Recognized", note: "Government of India registration" },
];

export function TrustedBy({ compact = false }: { compact?: boolean }) {
  return (
    <section aria-label="Certifications and partnerships" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionHead eyebrow="Trust" title="Trusted by" accent="industry leaders." center>
          Certified where it counts — banking platforms, cloud, and Indian industry bodies.
        </SectionHead>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {CREDENTIALS.map(({ icon: Icon, label, note }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-panel p-5 text-center"
            >
              <Icon className="mx-auto h-5 w-5 text-[var(--brand-glow)]" />
              <div className="mt-3 text-xs font-semibold leading-snug text-foreground">{label}</div>
              {!compact && <div className="mt-1 text-[11px] leading-snug text-foreground/50">{note}</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
