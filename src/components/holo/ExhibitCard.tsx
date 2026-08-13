import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import type { Product } from "@/data/products";
import type { ExhibitLayout } from "@/data/product-images";

const EASE = [0.16, 1, 0.3, 1] as const;

function entrance(from: ExhibitLayout["from"], rotate: number) {
  if (from === "left") return { opacity: 0, x: -90, rotate: rotate - 3, scale: 0.96 };
  if (from === "right") return { opacity: 0, x: 90, rotate: rotate + 3, scale: 0.96 };
  return { opacity: 0, y: 90, rotate, scale: 0.92 };
}

export function ExhibitCard({
  product: p,
  layout,
  index,
}: {
  product: Product;
  layout: ExhibitLayout;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hot, setHot] = useState(false);
  const accent = p.accent;

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 140, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-9, 9]), { stiffness: 140, damping: 18 });
  const px = useSpring(useTransform(mx, [0, 1], [-18, 18]), { stiffness: 90, damping: 20 });
  const py = useSpring(useTransform(my, [0, 1], [-14, 14]), { stiffness: 90, damping: 20 });

  const interactive = () =>
    typeof window !== "undefined" &&
    !window.matchMedia("(hover: none)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !interactive()) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  const align =
    layout.align === "right" ? "lg:ml-auto" : layout.align === "center" ? "lg:mx-auto" : "lg:mr-auto";

  return (
    <motion.div
      initial={entrance(layout.from, layout.rotate)}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: layout.rotate, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: EASE, delay: (index % 3) * 0.05 }}
      className={`relative w-full ${layout.width} ${align} ${layout.offset}`}
      style={{ perspective: 1400 }}
    >
      {/* floating aura */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -inset-10 -z-10 blur-3xl"
        animate={{ opacity: hot ? 0.55 : 0.22 }}
        transition={{ duration: 0.5 }}
        style={{
          background: `radial-gradient(60% 60% at 50% 60%, color-mix(in oklab, ${accent} 45%, transparent), transparent 70%)`,
        }}
      />

      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => interactive() && setHot(true)}
        onMouseLeave={() => {
          setHot(false);
          mx.set(0.5);
          my.set(0.5);
        }}
        animate={{ y: hot ? -14 : 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
        style={{
          rotateX: rx,
          rotateY: ry,
          transformStyle: "preserve-3d",
          borderColor: `color-mix(in oklab, ${accent} ${hot ? 60 : 20}%, transparent)`,
          boxShadow: hot
            ? `0 60px 120px -50px color-mix(in oklab, ${accent} 75%, transparent), 0 0 0 1px color-mix(in oklab, ${accent} 30%, transparent), inset 0 1px 0 color-mix(in oklab, ${accent} 35%, transparent)`
            : `0 32px 80px -50px rgba(0,0,0,.7), inset 0 1px 0 color-mix(in oklab, ${accent} 14%, transparent)`,
        }}
        className={`group relative overflow-hidden border bg-[var(--glass-bg)] backdrop-blur-2xl ${layout.radius} transition-colors duration-500`}
      >
        {/* media */}
        <div className={`relative overflow-hidden ${layout.media}`}>
          <motion.img
            src={layout.image}
            alt={`${p.name} — ${p.short} interface`}
            loading="lazy"
            className={`h-full w-full object-cover ${layout.fit}`}
            style={{ x: px, y: py }}
            animate={{ scale: hot ? 1.1 : 1.03 }}
            transition={{ duration: 0.7, ease: EASE }}
          />
          {/* glass tint + reflection */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: `linear-gradient(180deg, color-mix(in oklab, ${accent} 10%, transparent) 0%, transparent 35%, var(--glass-bg) 100%)`,
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-1/3 opacity-40"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,.14), transparent)" }}
          />

          {/* resting label */}
          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5"
            animate={{ opacity: hot ? 0 : 1, y: hot ? 12 : 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div>
              <div className="text-[10px] uppercase tracking-[0.35em]" style={{ color: accent }}>
                {p.category}
              </div>
              <div
                className="mt-1 text-2xl font-semibold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.name}
              </div>
            </div>
            <span className="text-[11px] text-foreground/45">0{index + 1}</span>
          </motion.div>

          {/* hover holographic layer */}
          <motion.div
            className="absolute inset-0 flex items-end p-4 md:p-6"
            initial={false}
            animate={{ opacity: hot ? 1 : 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            style={{ pointerEvents: hot ? "auto" : "none" }}
          >
            <span
              aria-hidden
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, transparent, color-mix(in oklab, ${accent} 12%, oklch(0.14 0.03 175 / .82)) 55%)`,
                backdropFilter: "blur(2px)",
              }}
            />
            <motion.div
              animate={{ y: hot ? 0 : 26, opacity: hot ? 1 : 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="relative w-full rounded-2xl border p-4 md:p-5"
              style={{
                borderColor: `color-mix(in oklab, ${accent} 40%, transparent)`,
                background: "color-mix(in oklab, var(--glass-bg) 88%, transparent)",
                backdropFilter: "blur(18px)",
                transform: "translateZ(60px)",
              }}
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{p.name}</h3>
                <span className="text-[12px] text-foreground/60">{p.short}</span>
              </div>
              <p className="mt-1.5 line-clamp-2 text-[12.5px] leading-relaxed text-foreground/65">
                {p.tagline}
              </p>

              <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                {p.modules.slice(0, 4).map((m) => (
                  <li key={m.title} className="flex items-center gap-2 text-[12px] text-foreground/75">
                    <Check className="h-3.5 w-3.5 shrink-0" style={{ color: accent }} />
                    <span className="min-w-0 truncate">{m.title}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full px-2 py-0.5 text-[10px] tracking-wide"
                    style={{
                      color: accent,
                      background: `color-mix(in oklab, ${accent} 14%, transparent)`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="mt-4 inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[12px] font-medium transition-transform hover:translate-x-0.5"
                style={{
                  color: accent,
                  borderColor: `color-mix(in oklab, ${accent} 45%, transparent)`,
                  background: `color-mix(in oklab, ${accent} 10%, transparent)`,
                }}
              >
                Explore product <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* scan line */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          animate={{ opacity: hot ? 1 : 0 }}
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
        />
      </motion.div>

      {/* mobile-only compact detail (hover isn't available) */}
      <div className="mt-3 lg:hidden">
        <Link
          to="/products/$slug"
          params={{ slug: p.slug }}
          className="inline-flex items-center gap-1.5 text-[12.5px] font-medium"
          style={{ color: accent }}
        >
          {p.name} — {p.short} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}
