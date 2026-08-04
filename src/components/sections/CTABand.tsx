import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTABand({
  title = "Let's build what comes next.",
  body = "Tell us what you're trying to solve. We'll map it to a practical, intelligent solution.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="px-6 pb-20 pt-4">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="glass-panel mx-auto grid max-w-[1200px] gap-5 p-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-10"
      >
        <div className="min-w-0">
          <h2 className="text-[clamp(1.4rem,2.6vw,2rem)] font-semibold tracking-tight text-foreground">
            {title}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-foreground/60">{body}</p>
        </div>
        <Link to="/contact" data-cursor="Talk" className="btn-primary shrink-0">
          Book a Consultation <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  );
}
