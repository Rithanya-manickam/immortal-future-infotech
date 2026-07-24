import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@/components/ClientOnly";
import { PageLoader } from "@/components/PageLoader";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { CreativeVault } from "@/components/sections/CreativeVault";
import { Expertise } from "@/components/sections/Expertise";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProductsStrip } from "@/components/sections/ProductsStrip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Immortal Future Info Tech — AI-First Banking & Enterprise IT" },
      { name: "description", content: "AI-first technology for Indian banking. Finacle automation, AWS cloud, cyber security and IoT — engineered to last." },
      { property: "og:title", content: "Immortal Future Info Tech — Technology Lives Forever" },
      { property: "og:description", content: "AI-first technology for Indian banking. IIS + ASKBOT reduce manual work by 80%." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <ClientOnly><PageLoader /></ClientOnly>
      <Hero />
      <TrustBar />
      <ProductsStrip />
      <Journey />
      <Expertise />
      <CreativeVault />
      <Stats />
      <CTA />
    </>
  );
}
