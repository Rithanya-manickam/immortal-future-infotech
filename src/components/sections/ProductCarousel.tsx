"use client";

import { useEffect, useRef, useState } from "react";
import { PRODUCTS } from "@/data/products";
import { EXHIBIT_ORDER, PRODUCT_IMAGES } from "@/data/product-images";
import { SectionHead } from "./SectionHead";

type ProductCarouselProps = {
  products: typeof PRODUCTS;
};

export function ProductCarousel({ products }: ProductCarouselProps) {
  const ordered = EXHIBIT_ORDER.map((slug) =>
    products.find((product) => product.slug === slug),
  ).filter(Boolean);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const activeProduct = ordered[activeIndex];

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
      className="relative px-6 py-16 md:py-24"
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
              className="relative isolate overflow-hidden rounded-[32px] border border-foreground/10 bg-foreground text-background shadow-[0_24px_70px_-30px_rgba(0,0,0,0.5)]"
              aria-live="polite"
            >
              <img
                src={PRODUCT_IMAGES[activeProduct.slug]}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 -z-10 size-full object-cover object-left-top opacity-55 transition-opacity duration-700"
              />
              <div className="absolute inset-0 -z-10 bg-foreground/75" aria-hidden="true" />
              <div className="flex min-h-[440px] flex-col justify-between gap-8 p-7 sm:p-10 lg:min-h-[520px] lg:p-12">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-background/70">
                      0{activeIndex + 1} / 05
                    </p>
                    <p className="mt-4 text-sm font-medium text-background/75">
                      {activeProduct.category}
                    </p>
                    <h3 className="mt-2 max-w-[560px] text-balance font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                      {activeProduct.name}
                    </h3>
                  </div>
                  <span className="hidden rounded-full border border-background/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-background/75 sm:inline-flex">
                    Live system
                  </span>
                </div>

                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                  <div>
                    <p className="max-w-sm text-pretty text-lg leading-7 text-background/85">
                      {activeProduct.tagline}
                    </p>
                    <p className="mt-4 max-w-md text-sm leading-6 text-background/65">
                      {activeProduct.overview}
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-background/20 bg-background/10 shadow-2xl">
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
