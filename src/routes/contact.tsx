import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Building2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

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

function Contact() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's build|the future together.">
        Tell us about the workflow you want to automate, the Finacle module you're planning, or the cloud footprint you want to modernize.
      </PageHeader>

      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-[1.1fr_1fr]">
          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} onSubmit={onSubmit} className="glass-panel p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                Name
                <input required className="mt-2 block w-full rounded-lg border border-border/20 bg-foreground/[0.03] px-3 py-2 text-sm text-foreground focus:border-[var(--brand-glow)] focus:outline-none" />
              </label>
              <label className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                Company
                <input className="mt-2 block w-full rounded-lg border border-border/20 bg-foreground/[0.03] px-3 py-2 text-sm text-foreground focus:border-[var(--brand-glow)] focus:outline-none" />
              </label>
              <label className="text-xs uppercase tracking-[0.2em] text-foreground/60 sm:col-span-2">
                Work email
                <input type="email" required className="mt-2 block w-full rounded-lg border border-border/20 bg-foreground/[0.03] px-3 py-2 text-sm text-foreground focus:border-[var(--brand-glow)] focus:outline-none" />
              </label>
              <label className="text-xs uppercase tracking-[0.2em] text-foreground/60 sm:col-span-2">
                What do you need?
                <select className="mt-2 block w-full rounded-lg border border-border/20 bg-foreground/[0.03] px-3 py-2 text-sm text-foreground focus:border-[var(--brand-glow)] focus:outline-none">
                  <option>IIS — Finacle automation</option>
                  <option>ASKBOT — training assistant</option>
                  <option>Finacle implementation</option>
                  <option>AWS cloud engagement</option>
                  <option>Cyber security / VAPT</option>
                  <option>Something else</option>
                </select>
              </label>
              <label className="text-xs uppercase tracking-[0.2em] text-foreground/60 sm:col-span-2">
                Message
                <textarea rows={4} className="mt-2 block w-full rounded-lg border border-border/20 bg-foreground/[0.03] px-3 py-2 text-sm text-foreground focus:border-[var(--brand-glow)] focus:outline-none" />
              </label>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[oklch(0.1_0.02_275)]" style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}>
              {sent ? "Thanks — we'll be in touch" : "Send message →"}
            </button>
          </motion.form>

          <div className="space-y-4">
            <div className="glass-panel p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--brand-glow)]" />
                <div>
                  <div className="text-sm font-semibold text-foreground">Headquarters</div>
                  <div className="mt-1 text-sm text-foreground/60">Tiruchirapalli, Tamil Nadu, India</div>
                </div>
              </div>
            </div>
            <a href="mailto:hello@immortalfuture.tech" className="glass-panel block p-6 transition-colors hover:border-[var(--brand-glow)]/40">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[var(--brand-glow)]" />
                <div>
                  <div className="text-sm font-semibold text-foreground">Email</div>
                  <div className="mt-1 text-sm text-foreground/60">hello@immortalfuture.tech</div>
                </div>
              </div>
            </a>
            <div className="glass-panel p-6">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[var(--brand-glow)]" />
                <div>
                  <div className="text-sm font-semibold text-foreground">Talk to sales</div>
                  <div className="mt-1 text-sm text-foreground/60">Book a 30-min consultation over call</div>
                </div>
              </div>
            </div>
            <div className="glass-panel p-6">
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-4 w-4 text-[var(--brand-glow)]" />
                <div>
                  <div className="text-sm font-semibold text-foreground">Serving Pan-India</div>
                  <div className="mt-1 text-sm text-foreground/60">Tamil Nadu · Karnataka · Maharashtra · and more</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}