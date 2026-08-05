import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import imgNetwork from "@/assets/img-network.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact IFIT — Let's Build What Comes Next" },
      { name: "description", content: "Tell us what you're trying to solve. Book a consultation with Immortal Future Info Tech — HQ in Tiruchirapalli, Tamil Nadu, serving banks and enterprises across India." },
      { property: "og:title", content: "Let's Build What Comes Next — Contact IFIT" },
      { property: "og:description", content: "Start a conversation about Finacle automation, AI assistants, cloud or enterprise IT." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const TOPICS = ["IIS / Finacle automation", "ASKBOT", "Finacle implementation", "AWS & cloud", "Security / networking", "Something else"];

const DETAILS = [
  { icon: MapPin, label: "Head office", value: "Tiruchirapalli, Tamil Nadu 621211, India" },
  { icon: Mail, label: "Email", value: "info@ifitipl.com" },
  { icon: Phone, label: "Phone", value: "+91 91598 55985" },
  { icon: Clock, label: "Response time", value: "We reply to every enquiry within one working day." },
];

function Field({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "mt-2 w-full rounded-xl border border-border/15 bg-foreground/[0.03] px-4 py-3 text-sm text-[var(--brand-emerald)] caret-[var(--brand-glow)] outline-none transition-colors placeholder:text-foreground/30 focus:border-[var(--brand-glow)]";
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--brand-teal)]">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={base} />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="relative px-6 pt-28 pb-20 md:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70vh] overflow-hidden">
        <img src={imgNetwork} alt="" loading="lazy" className="h-full w-full object-cover opacity-[0.12]" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, var(--background) 0%, transparent 40%, var(--background) 100%)" }}
        />
      </div>

      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Contact</div>
          <h1 className="mt-3 text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.06] tracking-tight text-foreground">
            Let's build <span className="text-gradient">what comes next.</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-foreground/65">
            Tell us what you're trying to solve. We'll explore how intelligent technology can turn
            the challenge into a practical solution.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          {/* Form — the page's primary surface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="rounded-2xl border border-border/15 bg-card/60 p-7 backdrop-blur md:p-9"
          >
            {sent ? (
              <div className="flex min-h-[320px] flex-col items-start justify-center">
                <CheckCircle2 className="h-8 w-8 text-[var(--brand-glow)]" />
                <h2 className="mt-4 text-xl font-semibold text-foreground">Thanks — message received.</h2>
                <p className="mt-2 max-w-sm text-sm text-foreground/60">
                  A member of our team will get back to you within one working day.
                </p>
                <button type="button" onClick={() => setSent(false)} className="btn-secondary mt-6">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Work email" name="email" type="email" required />
                  <Field label="Company" name="company" />
                  <Field label="Phone" name="phone" type="tel" />
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--brand-teal)]">
                    What can we help you with?
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {TOPICS.map((t) => (
                      <label key={t} className="cursor-pointer">
                        <input type="radio" name="topic" value={t} className="peer sr-only" />
                        <span className="inline-block rounded-full border border-border/15 px-3 py-1.5 text-xs text-foreground/60 transition-colors hover:border-border/40 peer-checked:border-[var(--brand-glow)] peer-checked:bg-[var(--brand-glow)]/10 peer-checked:text-foreground">
                          {t}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <Field label="Message" name="message" textarea required />

                <div>
                  <button type="submit" className="btn-primary w-full sm:w-auto" data-cursor="Send">
                    Start a Conversation <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Details rail — deliberately different from other pages */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            <div className="rounded-2xl border border-border/15 p-6">
              <div className="text-[10px] uppercase tracking-[0.35em] text-foreground/45">Direct</div>
              <ul className="mt-4 space-y-4">
                {DETAILS.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex min-w-0 gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-glow)]" />
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-foreground/40">{label}</div>
                      <div className="mt-0.5 break-words text-sm text-foreground/80">{value}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-6 text-[oklch(0.14_0.02_180)]"
              style={{ background: "var(--gradient-hero)" }}
            >
              <div className="text-[10px] uppercase tracking-[0.35em] opacity-70">Consultation</div>
              <div className="mt-2 text-lg font-semibold">A 30-minute working session.</div>
              <p className="mt-2 text-sm opacity-80">
                Walk us through one workflow. We'll tell you honestly whether AI and automation are
                the right answer for it.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
