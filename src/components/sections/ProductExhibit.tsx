import { PRODUCTS } from "@/data/products";
import { EXHIBIT, EXHIBIT_ORDER } from "@/data/product-images";
import { ExhibitCard } from "@/components/holo/ExhibitCard";
import { SectionHead } from "./SectionHead";

export function ProductExhibit() {
  const ordered = EXHIBIT_ORDER.map((s) => PRODUCTS.find((p) => p.slug === s)!).filter(Boolean);

  return (
    <section id="products" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionHead eyebrow="Products" title="Five platforms." accent="Hover to open one.">
          A product exhibition, not a list — each platform has its own shape, colour and interface.
        </SectionHead>

        <div className="relative mt-14 flex flex-col gap-16 md:gap-24 lg:gap-14">
          {ordered.map((p, i) => (
            <ExhibitCard key={p.slug} product={p} layout={EXHIBIT[p.slug]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
