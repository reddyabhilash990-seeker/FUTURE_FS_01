import { useMemo } from "react";
import { motion } from "framer-motion";

type Star = { x: number; y: number; size: number; delay: number; duration: number };
type Particle = { x: number; y: number; size: number; duration: number; delay: number; drift: number };

function rand(seed: number) {
  // deterministic pseudo-random
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function StarsBackdrop() {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 90 }, (_, i) => ({
      x: rand(i + 1) * 100,
      y: rand(i + 50) * 100,
      size: rand(i + 99) * 2 + 0.6,
      delay: rand(i + 7) * 4,
      duration: 2 + rand(i + 13) * 3,
    }));
  }, []);

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 14 }, (_, i) => ({
      x: rand(i + 200) * 100,
      y: rand(i + 300) * 100,
      size: 2 + rand(i + 400) * 4,
      duration: 10 + rand(i + 500) * 14,
      delay: rand(i + 600) * 6,
      drift: (rand(i + 700) - 0.5) * 60,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Nebula gradient blobs */}
      <div className="absolute -top-32 -right-20 w-[36rem] h-[36rem] rounded-full bg-[radial-gradient(circle,oklch(0.70_0.22_290/0.35),transparent_60%)] blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-[34rem] h-[34rem] rounded-full bg-[radial-gradient(circle,oklch(0.75_0.18_220/0.30),transparent_60%)] blur-3xl" />
      <div className="absolute -bottom-40 left-1/3 w-[40rem] h-[40rem] rounded-full bg-[radial-gradient(circle,oklch(0.65_0.20_320/0.25),transparent_60%)] blur-3xl" />

      {/* Glowing stars */}
      {stars.map((s, i) => (
        <motion.span
          key={`s-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            boxShadow: `0 0 ${s.size * 4}px oklch(0.95 0.05 240 / 0.9)`,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
        />
      ))}

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.span
          key={`p-${i}`}
          className="absolute rounded-full bg-primary/60"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            boxShadow: `0 0 ${p.size * 3}px oklch(0.82 0.15 200 / 0.7)`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, p.drift, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
