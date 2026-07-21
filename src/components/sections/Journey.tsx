import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MILESTONES = [
  { year: "Origin", title: "Technology Lives Forever", body: "A promise, not a slogan — systems built to outlast the era." },
  { year: "01", title: "Company Started", body: "Foundation laid in enterprise-grade engineering." },
  { year: "02", title: "Innovation", body: "R&D labs across AI, automation and finance." },
  { year: "03", title: "Enterprise Solutions", body: "Finacle, cloud and cyber security at scale." },
  { year: "04", title: "AI Transformation", body: "Intelligent agents woven into operating cores." },
  { year: "05", title: "The Future", body: "Post-human infrastructure. Always-on intelligence." },
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
              className="glass-panel relative flex h-[46vh] min-h-[360px] w-[70vw] max-w-[520px] shrink-0 flex-col justify-between p-8 md:w-[38vw]"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/50">{m.year}</span>
                <span className="h-2 w-2 rounded-full bg-[var(--brand-glow)] shadow-[0_0_16px_var(--brand-glow)]" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-foreground/40">Milestone {String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">{m.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/60">{m.body}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(160deg, oklch(1 0 0 / 0.06), transparent 50%)" }} />
            </div>
          ))}
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 -z-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.17 220 / .5), oklch(0.72 0.24 340 / .5), transparent)" }} />
        </div>
      </div>
    </section>
  );
}
