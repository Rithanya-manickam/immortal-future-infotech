import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@/components/ClientOnly";
import { PageLoader } from "@/components/PageLoader";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { OurStory } from "@/components/sections/OurStory";
import { ProductExhibit } from "@/components/sections/ProductExhibit";
import { ExpertiseNodes } from "@/components/sections/ExpertiseNodes";
import { HomeJourney } from "@/components/sections/HomeJourney";
import { Impact } from "@/components/sections/Impact";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { CTABand } from "@/components/sections/CTABand";
import { ClientStories } from "@/components/sections/ClientStories";
import { FAQ } from "@/components/sections/FAQ";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Immortal Future Info Tech — AI for Banking & Enterprise IT" },
      {
        name: "description",
        content:
          "Empowering enterprises with intelligent technology. Finacle automation, AI assistants, AWS cloud, security and enterprise platforms for Indian banking.",
      },
      { property: "og:title", content: "Empowering Enterprises with Intelligent Technology" },
      {
        property: "og:description",
        content:
          "IIS, ASKBOT, HRM, Campus and WorkTrack — AI automation for Finacle core banking. Founded 2024 in Tiruchirapalli.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <ClientOnly>
        <PageLoader />
      </ClientOnly>
      <Hero />
      <OurStory />
      <TrustStrip />
      <HomeJourney />
      <ProductExhibit />
      <ExpertiseNodes />
      <Impact />
      <FeaturedWork />
      <ClientStories />
      <FAQ />
      <CTABand />
    </>
  );
}
