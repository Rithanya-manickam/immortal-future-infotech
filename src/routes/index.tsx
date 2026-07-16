import { createFileRoute } from "@tanstack/react-router";
import { BackgroundFX } from "@/components/BackgroundFX";
import { ClientOnly } from "@/components/ClientOnly";
import { CustomCursor } from "@/components/CustomCursor";
import { LenisProvider } from "@/components/LenisProvider";
import { Navbar } from "@/components/Navbar";
import { PageLoader } from "@/components/PageLoader";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { CreativeVault } from "@/components/sections/CreativeVault";
import { Expertise } from "@/components/sections/Expertise";
import { Gallery } from "@/components/sections/Gallery";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <LenisProvider>
      <ClientOnly>
        <PageLoader />
      </ClientOnly>
      <ClientOnly>
        <CustomCursor />
      </ClientOnly>
      <BackgroundFX />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Journey />
        <CreativeVault />
        <Expertise />
        <Gallery />
        <Stats />
        <CTA />
        <Footer />
      </main>
    </LenisProvider>
  );
}
