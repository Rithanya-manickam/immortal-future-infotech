import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PRODUCTS, getProduct, type Product } from "@/data/products";
import { ProductDemo } from "@/components/ProductDemo";
import { TiltCard } from "@/components/TiltCard";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found — IFIT" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    const title = `${p.name} — ${p.short} | IFIT`;
    return {
      meta: [
        { title },
        { name: "description", content: p.overview.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: p.tagline },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductDetail,
});

function Num({ n, label }: { n: string; label: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="font-mono text-[11px] text-foreground/40">{n}</span>
      <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">{label}</span>
    </div>
  );
}

function ProductDetail() {
  const { product: p } = Route.useLoaderData() as { product: Product };
  const others = PRODUCTS.filter((x) => x.slug !== p.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-28 pb-12 md:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
          style={{ background: `radial-gradient(700px circle at 15% 0%, color-mix(in oklab, ${p.accent} 14%, transparent), transparent 70%)` }}
        />
        <div className="relative mx-auto max-w-[1200px]">
          <Link to="/products" className="inline-flex items-center gap-1.5 text-[12px] text-foreground/55 hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5" /> All products
          </Link>
          <div className="mt-5 text-[10px] uppercase tracking-[0.35em]" style={{ color: p.accent }}>
            {p.short}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 max-w-3xl text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.06] tracking-tight text-foreground"
          >
            {p.name} — <span className="text-gradient">{p.tagline}</span>
          </motion.h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/65">{p.overview}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#demo" className="btn-primary text-xs">
              Open {p.name} demo <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <Link to="/contact" className="btn-secondary text-xs">Request a demo</Link>
          </div>
        </div>
      </section>

      {/* 02 problem + 03 solution */}
      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-[1200px] gap-4 lg:grid-cols-2">
          <div className="glass-panel p-6 md:p-8">
            <Num n="02" label="The problem" />
            <ul className="space-y-2.5">
              {p.problems.map((q) => (
                <li key={q} className="flex gap-2.5 text-sm leading-relaxed text-foreground/70">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="glass-panel p-6 md:p-8"
            style={{ borderColor: `color-mix(in oklab, ${p.accent} 28%, transparent)` }}
          >
            <Num n="03" label="Our solution" />
            <p className="text-sm leading-relaxed text-foreground/75">{p.solution}</p>
            <div className="mt-6">
              <div className="text-[10px] uppercase tracking-[0.25em] text-foreground/45">Who it's for</div>
              <ul className="mt-2 flex flex-wrap gap-2">
                {p.audience.map((a) => (
                  <li
                    key={a}
                    className="rounded-full px-3 py-1 text-[12px]"
                    style={{ background: `color-mix(in oklab, ${p.accent} 12%, transparent)`, color: p.accent }}
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 04 capabilities — bento */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-[1200px]">
          <Num n="04" label="Key capabilities" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {p.modules.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
                className={i === 0 ? "sm:col-span-2" : ""}
              >
                <TiltCard accent={p.accent} className="h-full">
                  <div className="h-full rounded-2xl border border-border/15 bg-foreground/[0.03] p-5">
                    <div className="text-sm font-semibold text-foreground">{m.title}</div>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-foreground/60">{m.body}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 + 10 demo */}
      <section id="demo" className="scroll-mt-28 px-6 py-10">
        <div className="mx-auto max-w-[1200px]">
          <Num n="05" label="Product preview & interactive demo" />
          <p className="mb-5 max-w-2xl text-sm text-foreground/60">
            A representative preview using sample data. No login needed — click through the sections.
          </p>
          <ProductDemo product={p} />
        </div>
      </section>

      {/* 06 how it works */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-[1200px]">
          <Num n="06" label="How it works" />
          <ol className="grid gap-3 md:grid-cols-5">
            {p.workflow.map((w, i) => (
              <motion.li
                key={w.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="relative rounded-2xl border border-border/15 p-5"
              >
                <span className="font-mono text-[11px]" style={{ color: p.accent }}>0{i + 1}</span>
                <div className="mt-2 text-sm font-semibold text-foreground">{w.step}</div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-foreground/60">{w.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* 07 tech + 08 outcomes */}
      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-[1200px] gap-4 lg:grid-cols-[1fr_1.2fr]">
          <div className="glass-panel p-6 md:p-8">
            <Num n="07" label="Technology" />
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-border/15 px-3 py-1.5 font-mono text-[12px] text-foreground/75"
                  style={{ background: `color-mix(in oklab, ${p.accent} 8%, transparent)` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="glass-panel p-6 md:p-8">
            <Num n="08" label="Business outcomes" />
            <div className="grid gap-4 sm:grid-cols-2">
              {p.outcomes.map((o) => (
                <div key={o.label} className="min-w-0">
                  <div className="text-sm font-semibold text-foreground">{o.label}</div>
                  <p className="mt-1 text-[13px] leading-relaxed text-foreground/60">{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA + other products */}
      <section className="px-6 pb-20 pt-6">
        <div className="mx-auto max-w-[1200px]">
          <div
            className="glass-panel grid gap-5 p-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-10"
            style={{ background: `radial-gradient(600px circle at 0% 0%, color-mix(in oklab, ${p.accent} 14%, transparent), transparent 70%), var(--glass-bg)` }}
          >
            <div className="min-w-0">
              <h2 className="text-[clamp(1.3rem,2.4vw,1.9rem)] font-semibold tracking-tight text-foreground">
                See {p.name} with your own data.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-foreground/60">
                We'll walk your team through a working setup and map it to how you operate today.
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0 text-xs">
              Request a demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8">
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/45">Other products</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to="/products/$slug"
                  params={{ slug: o.slug }}
                  className="rounded-full border border-border/15 px-4 py-2 text-[13px] text-foreground/70 transition-colors hover:text-foreground"
                >
                  {o.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}