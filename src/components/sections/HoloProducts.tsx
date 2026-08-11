import { motion } from "framer-motion";
import { PRODUCTS } from "@/data/products";
import { HoloProductCard } from "@/components/holo/HoloProductCard";
import { SectionHead } from "./SectionHead";
import { PRODUCT_IMAGES } from "@/data/product-images";

export function HoloProducts() {
  return (
    <section id="products" className="relative px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionHead eyebrow="Products" title="Five products." accent="One engineering standard.">
          Each platform is built on the same delivery discipline — hover a card to see what is inside.
        </SectionHead>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="min-w-0"
            >
              <HoloProductCard product={p} image={PRODUCT_IMAGES[p.slug]} variant={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
