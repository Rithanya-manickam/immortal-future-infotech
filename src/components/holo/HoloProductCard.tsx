import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { Product } from "@/data/products";

/** Holographic, tilting product card. Image parallaxes independently of the surface. */
export function HoloProductCard({
  product,
  image,
  variant = 0,
}: {
  product: Product;
  image: string;
  variant?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hot, setHot] = useState(false);
  const accent = product.accent;

  const reduced = () =>
    typeof window !== "undefined" &&
    (window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || reduced()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - py) * 7}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * 9}deg`);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.setProperty("--px", `${(px - 0.5) * 18}px`);
    el.style.setProperty("--py", `${(py - 0.5) * 14}px`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--px", "0px");
    el.style.setProperty("--py", "0px");
    setHot(false);
  };

  // small per-product structural differences
  const tall = variant % 2 === 0;
  const corner = variant % 3 === 0 ? "rounded-[26px]" : variant % 3 === 1 ? "rounded-[18px]" : "rounded-[32px]";

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => !reduced() && setHot(true)}
      onMouseLeave={reset}
      className="group relative [perspective:1100px]"
    >
      <article
        className={`relative overflow-hidden ${corner} border bg-[var(--glass-bg)] backdrop-blur-xl transition-all duration-500 ease-out will-change-transform`}
        style={{
          borderColor: `color-mix(in oklab, ${accent} ${hot ? 55 : 22}%, transparent)`,
          transform:
            "perspective(1100px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateZ(0) translateY(var(--lift,0px))",
          ["--lift" as string]: hot ? "-6px" : "0px",
          boxShadow: hot
            ? `0 30px 70px -30px color-mix(in oklab, ${accent} 60%, transparent), inset 0 1px 0 color-mix(in oklab, ${accent} 25%, transparent)`
            : "0 18px 50px -32px rgba(0,0,0,.6)",
        }}
      >
        {/* cursor-following internal light */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(420px circle at var(--mx,50%) var(--my,0%), color-mix(in oklab, ${accent} 18%, transparent), transparent 65%)`,
          }}
        />
        {/* holographic grid */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `linear-gradient(to right, color-mix(in oklab, ${accent} 40%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, ${accent} 40%, transparent) 1px, transparent 1px)`,
            backgroundSize: tall ? "34px 34px" : "26px 26px",
            maskImage: "radial-gradient(120% 90% at 50% 0%, #000 30%, transparent 75%)",
          }}
        />

        {/* visual */}
        <div className={`relative overflow-hidden ${tall ? "h-[190px]" : "h-[165px]"}`}>
          <img
            src={image}
            alt={`${product.name} — ${product.short} concept visual`}
            loading="lazy"
            width={900}
            height={700}
            className="h-full w-full object-cover transition-transform duration-700 ease-out"
            style={{
              transform: `scale(${hot ? 1.08 : 1.02}) translate3d(var(--px,0px), var(--py,0px), 0)`,
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: `linear-gradient(to top, var(--glass-bg) 4%, color-mix(in oklab, ${accent} 8%, transparent) 55%, transparent)`,
            }}
          />
          <span
            className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur"
            style={{ background: `color-mix(in oklab, ${accent} 16%, transparent)`, color: accent }}
          >
            {product.category}
          </span>
        </div>

        {/* content */}
        <div className="relative p-5">
          <div className="flex items-baseline gap-2">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">{product.name}</h3>
            <span className="h-1 w-1 rounded-full" style={{ background: accent }} />
            <span className="min-w-0 truncate text-[12px] text-foreground/55">{product.short}</span>
          </div>

          <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-foreground/60">
            {product.tagline}
          </p>

          {/* hover-revealed detail */}
          <div
            className="grid transition-all duration-500 ease-out"
            style={{ gridTemplateRows: hot ? "1fr" : "0fr", opacity: hot ? 1 : 0 }}
          >
            <ul className="mt-3 grid gap-1.5 overflow-hidden">
              {product.modules.slice(0, 4).map((m) => (
                <li key={m.title} className="flex items-center gap-2 text-[12.5px] text-foreground/72">
                  <Check className="h-3.5 w-3.5 shrink-0" style={{ color: accent }} />
                  <span className="min-w-0 truncate">{m.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-medium transition-colors"
            style={{ color: accent }}
          >
            {hot ? "Explore product" : "Explore"}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* scan line */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
        />
      </article>
    </div>
  );
}
