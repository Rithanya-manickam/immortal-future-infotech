import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { SectionHead } from "./SectionHead";

const FAQS: { q: string; a: string }[] = [
  {
    q: "What does Immortal Future Info Tech specialize in?",
    a: "We are an AI-first technology company focused on Indian banking and enterprise IT — Finacle core banking consulting, AI assistants, AWS cloud, security and enterprise platforms.",
  },
  {
    q: "What products and solutions does IFIT provide?",
    a: "Five products: IIS (Finacle automation suite), ASKBOT (AI assistant), HRM, Campus ERP and WorkTrack — alongside consulting and managed delivery services.",
  },
  {
    q: "How does your Finacle automation solution work?",
    a: "IIS sits alongside your existing Finacle setup and automates repetitive sequences such as end-of-day, reconciliation and reporting, without changing the workflows your teams already follow.",
  },
  {
    q: "Do you provide customized enterprise solutions?",
    a: "Yes. Our platforms are configurable per institution, and we build custom modules, integrations and automation around your existing processes.",
  },
  {
    q: "What industries do you serve?",
    a: "Cooperative banks, private banks and NBFCs primarily, plus healthcare, education and general enterprise IT.",
  },
  {
    q: "How can a company get started with IFIT?",
    a: "Reach us through the contact page or at info@ifitipl.com. We begin with a short discovery conversation to understand your systems and priorities.",
  },
  {
    q: "Do you provide implementation and support?",
    a: "Yes — implementation, migration, UAT support, training and ongoing support are part of our engagements.",
  },
  {
    q: "Can your solutions integrate with existing enterprise systems?",
    a: "Our platforms are designed to integrate with core banking, HR and back-office systems already in place, using standard interfaces and secure access controls.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-6 py-10 md:py-12">
      <div className="mx-auto max-w-[1100px]">
        <SectionHead eyebrow="FAQ" title="Questions," accent="answered.">
          The things enterprises ask us most before an engagement starts.
        </SectionHead>

        <div className="mt-6 divide-y divide-border/12 overflow-hidden rounded-[24px] border border-border/12 bg-[var(--glass-bg)] backdrop-blur-xl">
          {FAQS.map((f, i) => {
            const on = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(on ? null : i)}
                  aria-expanded={on}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[color-mix(in_oklab,var(--brand-glow)_7%,transparent)] md:px-7 md:py-5"
                >
                  <span
                    className={`text-sm font-medium leading-snug transition-colors md:text-[15px] ${on ? "text-foreground" : "text-foreground/80"}`}
                  >
                    {f.q}
                  </span>
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
                    style={{
                      borderColor: on
                        ? "var(--brand-glow)"
                        : "color-mix(in oklab, var(--brand-glow) 35%, transparent)",
                      background: on
                        ? "color-mix(in oklab, var(--brand-glow) 16%, transparent)"
                        : "transparent",
                      boxShadow: on
                        ? "0 0 0 6px color-mix(in oklab, var(--brand-glow) 10%, transparent)"
                        : "none",
                    }}
                  >
                    {on ? (
                      <Minus className="size-4 text-[var(--brand-glow)]" aria-hidden="true" />
                    ) : (
                      <Plus className="size-4 text-foreground/60" aria-hidden="true" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 pr-14 text-sm leading-relaxed text-foreground/70 md:px-7 md:pb-6">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
