import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";

export function ContactFab() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hidden = pathname.startsWith("/contact");

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-[95]"
        >
          <Link
            to="/contact"
            data-cursor="Talk"
            aria-label="Contact Immortal Future Info Tech"
            className="group relative inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[oklch(0.1_0.02_275)] transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--gradient-hero)", boxShadow: "0 0 50px -12px oklch(0.78 0.17 168 / 0.8)" }}
          >
            <span className="absolute inset-0 -z-10 animate-pulse-glow rounded-full" style={{ background: "var(--gradient-hero)", filter: "blur(16px)", opacity: 0.6 }} />
            <MessageSquare className="h-4 w-4" />
            <span className="hidden sm:inline">Let's talk</span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}