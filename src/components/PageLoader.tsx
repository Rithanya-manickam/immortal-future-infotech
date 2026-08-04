import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoUrl from "@/assets/logo.png";

export function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{ background: "radial-gradient(60% 50% at 50% 50%, oklch(0.62 0.14 170 / 0.18), transparent 70%)" }}
          />

          <motion.img
            src={logoUrl}
            alt="Immortal Future Info Tech"
            initial={{ x: "-38vw", opacity: 0, scale: 0.7, filter: "blur(14px)" }}
            animate={{ x: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-20 w-auto md:h-24"
            style={{ filter: "drop-shadow(0 0 30px oklch(0.62 0.14 170 / 0.5))" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-6 text-center"
          >
            <div className="text-sm font-semibold tracking-tight text-foreground md:text-base">
              Immortal Future Info Tech
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.45em] text-muted-foreground">
              Technology Lives Forever
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
