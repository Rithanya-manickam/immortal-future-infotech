import { Github, Linkedin, Twitter, MapPin, Mail } from "lucide-react";
import type { CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/logo.png";
import footerBg from "@/assets/footer-bg.jpg";

export function Footer() {
  return (
    <footer
      className="relative z-10 mt-20 overflow-hidden border-t border-[var(--brand-emerald)]/25 px-6 py-16"
      style={
        {
          "--foreground": "oklch(0.97 0.01 165)",
          "--border": "oklch(0.72 0.12 168)",
        } as CSSProperties
      }
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={footerBg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1920}
          height={720}
          className="h-full w-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--background) 0%, oklch(0.16 0.05 175 / 0.92) 45%, oklch(0.12 0.05 175 / 0.96) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: "var(--gradient-hero)", opacity: 0.6 }}
        />
      </div>
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="Immortal Future Info Tech" className="h-10 w-10 object-contain" style={{ filter: "drop-shadow(0 0 12px oklch(0.62 0.14 170 / .45))" }} />
              <div className="leading-tight">
                <div className="text-base font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>Immortal Future Info Tech</div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-foreground/40">Technology Lives Forever</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-foreground/55">
              AI-first technology company building intelligent solutions for Indian banking, healthcare and enterprise IT.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-xs text-foreground/60">
              <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Tiruchirapalli, Tamil Nadu 621211, India</div>
              <a href="mailto:info@ifitipl.com" className="flex items-center gap-2 hover:text-foreground"><Mail className="h-3.5 w-3.5" /> info@ifitipl.com</a>
              <a href="tel:+919159855985" className="flex items-center gap-2 hover:text-foreground"><Phone className="h-3.5 w-3.5" /> +91 91598 55985</a>
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">Company</div>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">Certifications</div>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              <li>Finacle Certified Partner</li>
              <li>AWS Technology Partner</li>
              <li>NASSCOM Member</li>
              <li>MCA Registered · MSME</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/10 pt-6 md:flex-row">
          <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
            © {new Date().getFullYear()} Immortal Future Info Tech Pvt. Ltd. · All rights reserved
          </div>
          <div className="flex items-center gap-3">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" data-cursor="Follow" aria-label="social" className="glass-panel flex h-9 w-9 items-center justify-center transition-transform hover:-translate-y-0.5">
                <Icon className="h-3.5 w-3.5 text-foreground/70" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
