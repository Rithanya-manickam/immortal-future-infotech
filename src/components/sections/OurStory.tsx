import { ArrowUpRight, Building2, ShieldCheck, Sparkles } from "lucide-react";
import storyImage from "@/assets/Gemini_Generated_Image_kl74hykl74hykl74.png";

const STORY_POINTS = [
  { icon: Building2, text: "Built in Tiruchirapalli, Tamil Nadu" },
  { icon: ShieldCheck, text: "Designed around existing banking workflows" },
  { icon: Sparkles, text: "Up to 80% less manual effort" },
];

export function OurStory() {
  return (
    <section id="our-story" className="px-6 py-8 md:py-12" aria-labelledby="our-story-title">
      <div className="relative mx-auto min-h-[680px] max-w-[1200px] overflow-hidden rounded-[32px] border border-sky-200/70 bg-sky-50 shadow-[0_24px_60px_-30px_rgba(14,116,144,0.35)] md:min-h-[620px]">
        <img
          src={storyImage}
          alt="Professionals collaborating across banking, technology, and business operations"
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(239,248,251,0.98)_0%,rgba(239,248,251,0.94)_27%,rgba(239,248,251,0.48)_49%,rgba(239,248,251,0.04)_76%)]"
          aria-hidden="true"
        />
        <div className="relative flex min-h-[680px] max-w-2xl flex-col justify-center gap-5 p-7 md:min-h-[620px] md:p-14 lg:p-16">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Our Story</p>
          <h2
            id="our-story-title"
            className="max-w-xl font-serif text-4xl leading-[0.98] tracking-[-0.055em] text-balance text-foreground md:text-5xl"
          >
            Built from the Ground Up for Indian Banking
          </h2>
          <div className="flex max-w-xl flex-col gap-4 text-sm leading-7 text-foreground/75 md:text-base">
            <p>
              When IFIT was founded in Tiruchirapalli, Tamil Nadu in May 2024, Indian banks were
              still running critical processes manually — end-of-day reconciliations, loan
              approvals, and KYC verifications were slow, error-prone, and expensive.
            </p>
            <p>
              Our founders — with deep roots in Finacle core banking and enterprise IT — saw an
              opportunity: bring AI automation directly into the tools banks already use, without
              disrupting their existing workflows.
            </p>
            <p>
              Today, our Immortal Intelligence Suite (IIS) and ASKBOT are trusted by cooperative
              banks, private banks, and NBFCs across India — reducing manual effort by up to 80% and
              cutting onboarding time by 3x.
            </p>
          </div>
          <div className="grid max-w-xl gap-3 border-t border-sky-900/15 pt-5 sm:grid-cols-3">
            {STORY_POINTS.map((point) => (
              <div
                key={point.text}
                className="flex items-start gap-2 text-xs leading-5 text-foreground/75"
              >
                <point.icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{point.text}</span>
              </div>
            ))}
          </div>
          <a
            href="/about"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-[0_10px_24px_-12px_var(--primary)] transition-transform hover:-translate-y-0.5"
          >
            Read our full story <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
