import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@/components/ClientOnly";
import { PageLoader } from "@/components/PageLoader";
import { Hero } from "@/components/sections/Hero";
import { HoloProducts } from "@/components/sections/HoloProducts";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { ProductFinder } from "@/components/sections/ProductFinder";
import { DataToAction } from "@/components/sections/DataToAction";
import { RealResults } from "@/components/sections/RealResults";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { CTABand } from "@/components/sections/CTABand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Immortal Future Info Tech — AI for Banking & Enterprise IT" },
      { name: "description", content: "Empowering enterprises with intelligent technology. Finacle automation, AI assistants, AWS cloud, security and IoT for Indian banking and enterprise IT." },
      { property: "og:title", content: "Empowering Enterprises with Intelligent Technology" },
      { property: "og:description", content: "IIS and ASKBOT bring AI automation to Finacle core banking. Founded 2024 in Tiruchirapalli." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <ClientOnly><PageLoader /></ClientOnly>
      <Hero />
      <HoloProducts />
      <Ecosystem />
      <ProductFinder />
      <DataToAction />
      <RealResults />
      <TrustedBy />
      <CTABand />
    </>
  );
}
