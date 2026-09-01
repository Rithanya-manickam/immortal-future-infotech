import { ArrowUpRight, Building2, ShieldCheck, Sparkles } from "lucide-react";
import storyImage from "@/assets/Gemini_Generated_Image_kl74hykl74hykl74.png";

const STORY_POINTS = [
  { icon: Building2, text: "Built in Tiruchirapalli, Tamil Nadu" },
  { icon: ShieldCheck, text: "Designed around existing banking workflows" },
  { icon: Sparkles, text: "Up to 80% less manual effort" },
];

export function OurStory() {
  return (
    <section id="our-story" className="px-6 py-10 md:py-14" aria-labelledby="our-story-title">
      <div className="mx-auto grid max-w-[1200px] items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="relative overflow-hidden rounded-[28px] border border-sky-200/70 bg-sky-50/70 p-2 shadow-[inset_8px_8px_20px_rgba(255,255,255,0.8),inset_-8px_-8px_20px_rgba(14,116,144,0.08),0_22px_55px_-30px_rgba(14,116,144,0.35)]">
          <div
            className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.2),transparent_45%,rgba(14,165,233,0.12))]"
            aria-hidden="true"
          />
          <img
            src={storyImage.src}
            alt="Professionals collaborating across banking, technology, and business operations"
            className="aspect-[4/3] w-full rounded-[22px] object-cover object-center"
          />
        </div>

        <div className="flex flex-col gap-5">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Our Story</p>
          <h2
            id="our-story-title"
            className="max-w-xl font-serif text-4xl leading-[0.98] tracking-[-0.055em] text-balance md:text-5xl"
          >
            Built from the Ground Up for Indian Banking
          </h2>
          <div className="flex flex-col gap-4 text-sm leading-7 text-muted-foreground md:text-base">
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
          <div className="grid gap-3 border-t border-border/60 pt-5 sm:grid-cols-3">
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
            href="#journey"
            className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:text-foreground"
          >
            Follow the journey <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
