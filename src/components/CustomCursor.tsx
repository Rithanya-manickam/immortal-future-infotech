import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(hover: none)").matches) {
      document.documentElement.classList.remove("has-custom-cursor");
      return;
    }

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      setHidden(false);

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("[data-cursor]") as HTMLElement | null;
      if (interactive) {
        setLabel(interactive.getAttribute("data-cursor"));
      } else if (target?.closest("a,button")) {
        setLabel("");
      } else {
        setLabel(null);
      }
    };

    const onLeave = () => setHidden(true);

    let raf = 0;
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const active = label !== null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          width: active ? 72 : 34,
          height: active ? 72 : 34,
          borderRadius: 9999,
          border: "1px solid oklch(0.85 0.18 168 / 0.55)",
          boxShadow: "0 0 30px oklch(0.78 0.17 168 / 0.35)",
          mixBlendMode: "screen",
          transition: "width .25s ease, height .25s ease, opacity .2s",
          opacity: hidden ? 0 : 1,
          backdropFilter: "invert(1)",
        }}
      >
        {label ? (
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-medium uppercase tracking-[0.2em]"
            style={{ fontSize: 10, color: "oklch(0.98 0.01 175)" }}
          >
            {label}
          </span>
        ) : null}
      </div>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          width: 6,
          height: 6,
          borderRadius: 9999,
          background: "oklch(0.95 0.02 175)",
          boxShadow: "0 0 12px oklch(0.85 0.18 168)",
          opacity: hidden ? 0 : 1,
        }}
      />
    </>
  );
}
