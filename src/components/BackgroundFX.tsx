import { useEffect, useRef } from "react";

/**
 * Immersive fixed-position background: animated gradient nebula, particle
 * canvas, subtle light rays, noise. Mouse parallax on the gradient blobs.
 */
export function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth * devicePixelRatio);
    let h = (canvas.height = window.innerHeight * devicePixelRatio);

    const N = 90;
    const stars = Array.from({ length: N }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 0.9 + 0.1,
      vy: (Math.random() * 0.15 + 0.05) * devicePixelRatio,
      r: (Math.random() * 1.4 + 0.3) * devicePixelRatio,
      hue: 200 + Math.random() * 120,
    }));

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.y += s.vy;
        if (s.y > h) s.y = 0;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${s.hue}, 90%, 75%, ${0.35 + s.z * 0.5})`;
        ctx.shadowBlur = 12 * devicePixelRatio;
        ctx.shadowColor = `hsla(${s.hue}, 90%, 75%, 0.8)`;
        ctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      w = canvas.width = window.innerWidth * devicePixelRatio;
      h = canvas.height = window.innerHeight * devicePixelRatio;
    };
    window.addEventListener("resize", onResize);

    const onMove = (e: MouseEvent) => {
      const blobs = blobsRef.current;
      if (!blobs) return;
      const cx = (e.clientX / window.innerWidth - 0.5) * 30;
      const cy = (e.clientY / window.innerHeight - 0.5) * 30;
      blobs.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Deep base */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, oklch(0.16 0.03 275), oklch(0.07 0.02 275))" }} />
      {/* Animated nebula blobs */}
      <div ref={blobsRef} className="absolute inset-0 transition-transform duration-500 ease-out" style={{ background: "var(--gradient-radial)" }} />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / .6) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / .6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      {/* Light rays */}
      <div
        className="absolute -top-1/3 left-1/2 h-[80vh] w-[120vw] -translate-x-1/2 opacity-[0.10]"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 50%, transparent 0deg, oklch(0.85 0.18 220 / .5) 40deg, transparent 90deg, oklch(0.72 0.24 340 / .4) 170deg, transparent 220deg)",
          filter: "blur(30px)",
        }}
      />
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* Noise */}
      <div className="noise-overlay" />
      {/* Vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 55%, oklch(0.05 0.02 275 / .85))" }} />
    </div>
  );
}
