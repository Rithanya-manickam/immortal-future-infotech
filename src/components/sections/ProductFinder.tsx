import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";

export function ProductFinder() {
  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[clamp(1.4rem,2.6vw,2rem)] font-semibold tracking-tight text-foreground">
            What are you looking for?
          </h2>
          <p className="text-sm text-foreground/55">Pick the outcome — we'll point you at the right product.</p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <Link
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border/15 p-5 transition-colors"
                style={{ background: `linear-gradient(160deg, color-mix(in oklab, ${p.accent} 10%, transparent), transparent 70%)` }}
              >
                <div>
                  <div className="text-[13px] leading-snug text-foreground/70">{p.category}</div>
                  <div className="mt-3 text-lg font-semibold text-foreground">{p.name}</div>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-[12px]" style={{ color: p.accent }}>
                  Explore <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}