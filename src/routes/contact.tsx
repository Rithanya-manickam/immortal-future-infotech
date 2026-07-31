import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Building2, ArrowRight } from "lucide-react";
import imgNetwork from "@/assets/img-network.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Immortal Future Info Tech" },
      { name: "description", content: "Book a consultation. HQ in Tiruchirapalli, Tamil Nadu. Serving cooperative banks, private banks and NBFCs across India." },
      { property: "og:title", content: "Contact IFIT" },
      { property: "og:description", content: "Reach out about IIS, ASKBOT, Finacle, AWS or enterprise engagements." },
    ],
  }),
  component: Contact,
});

const TICKER = ["Finacle Automation", "ASKBOT RAG", "AWS Cloud", "Cyber Security", "IoT", "Data Science", "SD-WAN", "ERP & SAP"];

const FIELDS = [
  { label: "Name", name: "name", type: "text", required: true, span: false },
  { label: "Company", name: "company", type: "text", required: false, span: false },
  { label: "Work email", name: "email", type: "email", required: true, span: true },
];

function Contact() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <>
      {/* Cinematic split hero — no circles, pure lines + light */}
      <section className="relative overflow-hidden px-6 pt-36 pb-14">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img src={imgNetwork} alt="" loading="lazy" className="h-full w-full object-cover opacity-[0.16]" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--background) 5%, transparent 45%, var(--background) 95%)" }} />
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, oklch(0.85 0.18 168 / .5) 1px, transparent 1px)",
              backgroundSize: "88px 100%",
              maskImage: "linear-gradient(180deg, transparent, black, transparent)",
            }}
          />
        </div>

        <div className="mx-auto max-w-[1400px]">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-foreground/50">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--brand-glow)]" />
            Contact
          </motion.div>

          <h1 className="mt-4 max-w-4xl text-[clamp(2.2rem,6vw,4.8rem)] font-semibold leading-[1.12] tracking-tight text-foreground">
            {["Tell us what", "you want to", "automate."].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  {i === 2 ? <span className="text-gradient">{line}</span> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.9 }} className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60">
            A Finacle module, an AI workflow, a cloud migration — describe the outcome and we'll reply within one working day with a scoped approach.
          </motion.p>
        </div>
      </section>

      {/* Marquee ticker */}
      <div className="relative overflow-hidden border-y border-border/10 py-3">
        <div className="flex w-max animate-[ticker_28s_linear_infinite] gap-10 pr-10">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.35em] text-foreground/40">
              {t}
              <span className="h-1 w-1 rounded-[1px] bg-[var(--brand-glow)]" />
            </span>
          ))}
        </div>
      </div>

      <section className="px-6 py-20 pb-32">
        <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-[1.1fr_1fr]">
          <motion.form initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} onSubmit={onSubmit} className="glass-panel relative overflow-hidden p-8">
            <span className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--brand-glow), transparent)" }} />
            <div className="mb-6 flex items-baseline justify-between">
              <div className="text-[10px] uppercase tracking-[0.35em] text-foreground/45">Project brief</div>
              <div className="font-mono text-[10px] text-foreground/35">01 / 01</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {FIELDS.map((f, i) => (
                <motion.label
                  key={f.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className={`group text-xs uppercase tracking-[0.2em] text-foreground/60 ${f.span ? "sm:col-span-2" : ""}`}
                >
                  {f.label}
                  <input
                    name={f.name}
                    type={f.type}
                    required={f.required}
                    className="mt-2 block w-full rounded-lg border border-border/20 bg-foreground/[0.03] px-3 py-2.5 text-sm text-foreground transition-all duration-300 focus:border-[var(--brand-glow)] focus:bg-foreground/[0.06] focus:outline-none focus:shadow-[0_0_0_3px_oklch(0.78_0.17_168_/_0.12)]"
                  />
                </motion.label>
              ))}
              <motion.label initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.24, duration: 0.5 }} className="text-xs uppercase tracking-[0.2em] text-foreground/60 sm:col-span-2">
                What do you need?
                <select className="mt-2 block w-full rounded-lg border border-border/20 bg-foreground/[0.03] px-3 py-2.5 text-sm text-foreground transition-all duration-300 focus:border-[var(--brand-glow)] focus:outline-none">
                  <option>IIS — Finacle automation</option>
                  <option>ASKBOT — training assistant</option>
                  <option>Finacle implementation</option>
                  <option>AWS cloud engagement</option>
                  <option>Cyber security / VAPT</option>
                  <option>Something else</option>
                </select>
              </motion.label>
              <motion.label initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.32, duration: 0.5 }} className="text-xs uppercase tracking-[0.2em] text-foreground/60 sm:col-span-2">
                Message
                <textarea rows={4} className="mt-2 block w-full rounded-lg border border-border/20 bg-foreground/[0.03] px-3 py-2.5 text-sm text-foreground transition-all duration-300 focus:border-[var(--brand-glow)] focus:bg-foreground/[0.06] focus:outline-none focus:shadow-[0_0_0_3px_oklch(0.78_0.17_168_/_0.12)]" />
              </motion.label>
            </div>
            <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} type="submit" className="group mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[oklch(0.1_0.02_275)]" style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}>
              {sent ? "Thanks — we'll be in touch" : "Send message"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.form>

          <div className="space-y-4">
            {[
              { Icon: MapPin, title: "Headquarters", body: "Tiruchirapalli, Tamil Nadu, India" },
              { Icon: Mail, title: "Email", body: "hello@immortalfuture.tech", href: "mailto:hello@immortalfuture.tech" },
              { Icon: Phone, title: "Talk to sales", body: "Book a 30-min consultation over call" },
              { Icon: Building2, title: "Serving Pan-India", body: "Tamil Nadu · Karnataka · Maharashtra · and more" },
            ].map((c, i) => (
              <motion.a
                key={c.title}
                href={c.href ?? "#"}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel group relative block overflow-hidden p-6 transition-colors hover:border-[var(--brand-glow)]/40"
              >
                <span className="absolute left-0 top-0 h-full w-px scale-y-0 bg-[var(--brand-glow)] transition-transform duration-500 group-hover:scale-y-100" style={{ transformOrigin: "top" }} />
              <div className="flex items-start gap-3">
                  <c.Icon className="mt-0.5 h-4 w-4 text-[var(--brand-glow)]" />
                <div>
                    <div className="text-sm font-semibold text-foreground">{c.title}</div>
                    <div className="mt-1 text-sm text-foreground/60">{c.body}</div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}