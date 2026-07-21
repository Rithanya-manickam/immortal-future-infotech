import { Github, Linkedin, Twitter } from "lucide-react";
import logoUrl from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border/10 px-6 py-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <img src={logoUrl} alt="Immortal Future Info Tech" className="h-10 w-10 object-contain" style={{ filter: "drop-shadow(0 0 12px oklch(0.62 0.14 170 / .45))" }} />
          <div className="leading-tight">
            <div className="font-display text-base font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>Immortal Future Info Tech</div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-foreground/40">Technology Lives Forever</div>
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
              <Icon className="h-4 w-4 text-foreground/70" />
            </a>
          ))}
        </div>

        <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
          © {new Date().getFullYear()} · All timelines reserved
        </div>
      </div>
    </footer>
  );
}
