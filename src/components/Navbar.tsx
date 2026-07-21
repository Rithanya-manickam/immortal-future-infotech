import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import logoUrl from "@/assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { label: "The Journey", href: "#journey" },
  { label: "Creative Vault", href: "#vault" },
  { label: "Expertise", href: "#expertise" },
  { label: "Connect", href: "#connect" },
];

function MagneticLink({ label, href }: { label: string; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    };
    const onLeave = () => {
      el.style.transform = "translate(0,0)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      data-cursor="Explore"
      className="group relative inline-block px-3 py-2 text-[13px] font-medium text-foreground/70 transition-[color,letter-spacing] duration-300 hover:text-foreground hover:tracking-[0.06em]"
      style={{ transition: "transform .35s cubic-bezier(.2,.9,.2,1), color .3s, letter-spacing .35s" }}
    >
      <span className="relative">
        {label}
        <span
          className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[var(--brand-emerald)] to-[var(--brand-teal)] transition-[width] duration-500 group-hover:w-full"
        />
      </span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 top-4 z-[100] flex justify-center px-4"
    >
      <div
        className="glass-panel flex items-center justify-between transition-all duration-500"
        style={{
          width: scrolled ? "min(760px, 92vw)" : "min(1140px, 96vw)",
          padding: scrolled ? "8px 14px" : "12px 20px",
          backdropFilter: scrolled ? "blur(28px) saturate(160%)" : "blur(16px) saturate(130%)",
          boxShadow: scrolled
            ? "0 20px 60px -20px oklch(0 0 0 / .7), inset 0 1px 0 oklch(1 0 0 / .08)"
            : "0 10px 30px -15px oklch(0 0 0 / .5)",
        }}
      >
        <Link to="/" data-cursor="Home" className="group flex items-center gap-2.5">
          <span
            className="relative inline-flex items-center justify-center"
            style={{
              width: scrolled ? 28 : 34,
              height: scrolled ? 28 : 34,
              filter: "drop-shadow(0 0 14px oklch(0.62 0.14 170 / .55))",
              transition: "width .4s, height .4s",
            }}
          >
            <img src={logoUrl} alt="Immortal Future Info Tech" className="h-full w-full object-contain" />
          </span>
          <div className="hidden flex-col leading-none sm:flex">
            <span className="text-[15px] font-semibold tracking-tight text-foreground" style={{ fontFamily: "var(--font-display)" }}>
              Immortal Future
            </span>
            <span className="mt-0.5 text-[9px] uppercase tracking-[0.34em] text-foreground/50">
              Info Tech
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <MagneticLink key={n.label} {...n} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#connect"
            data-cursor="Launch"
            className="relative hidden sm:inline-flex items-center gap-2 rounded-full border border-border bg-foreground/[0.04] px-4 py-1.5 text-xs font-medium text-foreground transition-all hover:border-primary/50 hover:bg-primary/10"
          >
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-[var(--brand-glow)]" />
            Book Consultation
          </a>
        </div>
      </div>
    </motion.header>
  );
}
