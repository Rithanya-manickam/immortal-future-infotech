import { Award, Cloud, ShieldCheck, Building2, Landmark } from "lucide-react";

const ITEMS = [
  { icon: Landmark, label: "Finacle Certified Partner" },
  { icon: Cloud, label: "AWS Technology Partner" },
  { icon: Award, label: "NASSCOM Member" },
  { icon: Building2, label: "MCA Registered" },
  { icon: ShieldCheck, label: "MSME Recognized" },
];

export function TrustBar() {
  return (
    <section aria-label="Certifications" className="relative px-6 py-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="glass-panel flex flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-5">
          {ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-foreground/60">
              <Icon className="h-4 w-4 text-[var(--brand-glow)]" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}