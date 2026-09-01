"use client";

import { useEffect, useRef, useState } from "react";
import { PRODUCTS } from "@/data/products";
import { EXHIBIT_ORDER, PRODUCT_IMAGES } from "@/data/product-images";
import { SectionHead } from "./SectionHead";

type ProductCarouselProps = {
  products: typeof PRODUCTS;
};

const CARD_THEMES = [
  {
    surface: "bg-emerald-100/70 text-emerald-950",
    border: "border-emerald-200/80",
    overlay: "rgba(167, 243, 208, 0.72), rgba(236, 253, 245, 0.84)",
    watermark: "text-current/10",
  },
  {
    surface: "bg-sky-100/70 text-sky-950",
    border: "border-sky-200/80",
    overlay: "rgba(186, 230, 253, 0.72), rgba(240, 249, 255, 0.84)",
    watermark: "text-sky-950/10",
  },
  {
    surface: "bg-rose-100/70 text-rose-950",
    border: "border-rose-200/80",
    overlay: "rgba(254, 205, 211, 0.72), rgba(255, 241, 242, 0.84)",
    watermark: "text-rose-950/10",
  },
  {
    surface: "bg-violet-100/70 text-violet-950",
    border: "border-violet-200/80",
    overlay: "rgba(221, 214, 254, 0.72), rgba(245, 243, 255, 0.84)",
    watermark: "text-violet-950/10",
  },
  {
    surface: "bg-amber-100/70 text-amber-950",
    border: "border-amber-200/80",
    overlay: "rgba(253, 230, 138, 0.68), rgba(255, 251, 235, 0.84)",
    watermark: "text-amber-950/10",
  },
] as const;

export function ProductCarousel({ products }: ProductCarouselProps) {
  const ordered = EXHIBIT_ORDER.map((slug) =>
    products.find((product) => product.slug === slug),
  ).filter(Boolean);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const activeProduct = ordered[activeIndex];
  const activeTheme = CARD_THEMES[activeIndex % CARD_THEMES.length];

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % ordered.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [isPaused, ordered.length]);

  if (!activeProduct) return null;

  const goTo = (index: number) => {
    setActiveIndex((index + ordered.length) % ordered.length);
    setIsPaused(true);
  };

  return (
    <section
      id="products"
      className="relative px-6 py-12 md:py-16"
      aria-label="Immortal product platforms"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionHead eyebrow="Products" title="Five platforms." accent="One connected future.">
          Explore the systems we build for people, institutions and the teams moving them forward.
        </SectionHead>

        <div
          className="mt-10 md:mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const delta = event.changedTouches[0]?.clientX - touchStartX.current;
            if (Math.abs(delta) > 45) goTo(activeIndex + (delta < 0 ? 1 : -1));
            touchStartX.current = null;
          }}
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-stretch">
            <article
              className={`relative isolate overflow-hidden rounded-[32px] border ${activeTheme.border} ${activeTheme.surface} shadow-[inset_10px_10px_24px_rgba(255,255,255,0.55),inset_-10px_-10px_24px_rgba(15,23,42,0.08),0_24px_70px_-30px_rgba(15,23,42,0.22)] backdrop-blur-sm`}
              aria-live="polite"
            >
              <img
                src={PRODUCT_IMAGES[activeProduct.slug]}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 -z-10 size-full object-cover object-left-top opacity-45 mix-blend-multiply transition-opacity duration-700"
              />
              <div
                className="absolute inset-0 -z-10"
                style={{ backgroundImage: `linear-gradient(135deg, ${activeTheme.overlay})` }}
                aria-hidden="true"
              />
              <span
                className={`pointer-events-none absolute -right-8 top-10 -z-10 select-none font-serif text-[clamp(5rem,14vw,11rem)] font-bold uppercase leading-none tracking-[-0.12em] ${activeTheme.watermark}`}
                aria-hidden="true"
              >
                {activeProduct.name}
              </span>
              <div className="flex min-h-[440px] flex-col justify-between gap-8 p-7 sm:p-10 lg:min-h-[520px] lg:p-12">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-current/70">
                      0{activeIndex + 1} / 05
                    </p>
                    <p className="mt-4 text-sm font-medium text-current/75">
                      {activeProduct.category}
                    </p>
                    <h3 className="mt-2 max-w-[560px] text-balance font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                      {activeProduct.name}
                    </h3>
                  </div>
                  <span className="hidden rounded-full border border-emerald-950/25 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-current/75 sm:inline-flex">
                    Live system
                  </span>
                </div>

                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                  <div>
                    <p className="max-w-sm text-pretty text-lg leading-7 text-current/85">
                      {activeProduct.tagline}
                    </p>
                    <p className="mt-4 max-w-md text-sm leading-6 text-current/65">
                      {activeProduct.overview}
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-emerald-950/20 bg-emerald-50/70 shadow-2xl">
                    <img
                      src={PRODUCT_IMAGES[activeProduct.slug]}
                      alt={`${activeProduct.name} product interface`}
                      className="aspect-[16/10] w-full object-cover object-left-top transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </article>

            <nav
              className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0"
              aria-label="Select a product"
            >
              {ordered.map((product, index) => {
                if (!product) return null;
                const isActive = index === activeIndex;
                return (
                  <button
                    key={product.slug}
                    type="button"
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => goTo(index)}
                    className={`group min-w-[148px] shrink-0 border-b px-4 py-4 text-left transition-colors lg:min-w-0 lg:px-5 lg:py-5 ${isActive ? "border-foreground" : "border-foreground/15 hover:border-foreground/50"}`}
                  >
                    <span className="flex items-center gap-3">
                      <img
                        src={PRODUCT_IMAGES[product.slug]}
                        alt={`${product.name} interface preview`}
                        className={`size-14 shrink-0 rounded-lg border object-cover object-left-top grayscale transition duration-300 sm:size-16 ${isActive ? "border-foreground/40 grayscale-0 opacity-100" : "border-foreground/10 opacity-60 group-hover:grayscale-0 group-hover:opacity-90"}`}
                      />
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-3">
                          <span
                            className={`font-serif text-2xl tracking-[-0.04em] transition-opacity ${isActive ? "opacity-100" : "opacity-45 group-hover:opacity-75"}`}
                          >
                            {product.name}
                          </span>
                          <span className="font-mono text-[10px] text-muted-foreground">
                            0{index + 1}
                          </span>
                        </span>
                        <span className="mt-2 block text-xs leading-5 text-muted-foreground">
                          {product.short}
                        </span>
                      </span>
                    </span>
                  </button>
                );
              })}
              <div className="hidden items-center justify-between px-5 pt-7 lg:flex">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {isPaused ? "Paused" : "Autoplay"}
                </span>
                <button
                  type="button"
                  onClick={() => setIsPaused((paused) => !paused)}
                  className="font-mono text-[10px] uppercase tracking-[0.16em] underline underline-offset-4 hover:no-underline"
                  aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
                >
                  {isPaused ? "Resume" : "Pause"}
                </button>
              </div>
            </nav>
          </div>
          <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground lg:hidden">
            Swipe or select a platform
          </p>
        </div>
      </div>
    </section>
  );
}

export function HomeProductCarousel() {
  return <ProductCarousel products={PRODUCTS} />;
}

export default ProductCarousel;
