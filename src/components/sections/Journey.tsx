import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgBank from "@/assets/hero-bank.jpg";
import imgAi from "@/assets/img-ai.jpg";
import imgDash from "@/assets/accent-dashboard.jpg";
import imgOps from "@/assets/img-ops.jpg";
import imgCloud from "@/assets/img-cloud.jpg";
import imgNetwork from "@/assets/img-network.jpg";

const MILESTONES = [
  { year: "May 2024", title: "Company Founded", body: "Immortal Future Info Tech Pvt. Ltd. incorporated in Tiruchirapalli.", image: imgBank },
  { year: "Jun 2024", title: "First Finacle Engagement", body: "First cooperative banking client — Finacle implementation and customization.", image: imgOps },
  { year: "Aug 2024", title: "IIS Launched", body: "Immortal Intelligence Suite — AI automation platform for Infosys Finacle.", image: imgDash },
  { year: "Oct 2024", title: "ASKBOT Launched", body: "RAG-powered Finacle training assistant for banking staff.", image: imgAi },
  { year: "Dec 2024", title: "AWS Technology Partner", body: "Became an official AWS Technology Partner.", image: imgCloud },
  { year: "Mar 2025", title: "Pan-India Expansion", body: "Serving Tamil Nadu, Karnataka, Maharashtra and more.", image: imgNetwork },
];

export function Journey() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (!track.current || !wrap.current) return;
      const distance = track.current.scrollWidth - window.innerWidth + 120;
      gsap.to(track.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${distance + 200}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" ref={wrap} className="relative h-[100svh] w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-16 z-10 mx-auto max-w-[1400px] px-6">
        <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Section 02 — The Journey</div>
        <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight text-foreground">
          A timeline that keeps <span className="text-gradient">building forward.</span>
        </h2>
      </div>

      <div className="absolute inset-0 flex items-center">
        <div ref={track} className="flex items-center gap-10 pl-[10vw] will-change-transform">
          {MILESTONES.map((m, i) => (
            <div
              key={m.title}
              data-cursor="View"
              className="glass-panel group relative flex h-[46vh] min-h-[360px] w-[70vw] max-w-[520px] shrink-0 flex-col justify-between overflow-hidden p-8 md:w-[38vw]"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <div className="pointer-events-none absolute inset-0 -z-10">
                <img src={m.image} alt={m.title} loading="lazy" className="h-full w-full object-cover opacity-30 transition-transform duration-[1200ms] group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0 0 0 / .2), var(--background) 88%)" }} />
              </div>
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/50">{m.year}</span>
                <span className="h-2 w-2 rounded-full bg-[var(--brand-glow)] shadow-[0_0_16px_var(--brand-glow)]" />
              </div>
              <div className="relative">
                <div className="text-[10px] uppercase tracking-[0.35em] text-foreground/40">Milestone {String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">{m.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/60">{m.body}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(160deg, oklch(1 0 0 / 0.06), transparent 50%)" }} />
            </div>
          ))}
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 -z-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.17 168 / .5), oklch(0.72 0.24 160 / .5), transparent)" }} />
        </div>
      </div>
    </section>
  );
}
