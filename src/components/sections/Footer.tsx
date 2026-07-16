import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span
            className="relative inline-flex h-8 w-8 items-center justify-center rounded-md"
            style={{ background: "var(--gradient-hero)", boxShadow: "0 0 24px oklch(0.78 0.17 220 / .5)" }}
          >
            <span className="text-sm font-bold text-[oklch(0.12_0.02_275)]">i</span>
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">Immortal Future Info Tech</div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-white/40">Technology Lives Forever</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              data-cursor="Follow"
              className="glass-panel flex h-10 w-10 items-center justify-center transition-transform hover:-translate-y-0.5"
            >
              <Icon className="h-4 w-4 text-white/70" />
            </a>
          ))}
        </div>

        <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
          © {new Date().getFullYear()} · All timelines reserved
        </div>
      </div>
    </footer>
  );
}
