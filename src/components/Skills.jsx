import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Wind,
  GitBranch,
  Github,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SKILLS } from "@/lib/portfolio-data";

const ICONS = { Code2, Palette, Braces, Atom, Wind, GitBranch, Github, Zap, ShieldCheck };

function SkillCard({ skill, i }) {
  const Icon = ICONS[skill.icon] ?? Code2;
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.03 }}
      style={{
        background: `radial-gradient(220px circle at ${pos.x}% ${pos.y}%, color-mix(in oklab, ${skill.color} 18%, transparent), transparent 60%), hsl(var(--card))`,
      }}
      className="group relative p-6 rounded-2xl border border-border hover:border-primary/60 transition-all duration-300 overflow-hidden will-change-transform"
    >
      {/* Glow pulse */}
      <div
        aria-hidden
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `0 0 40px -10px ${skill.color}`,
        }}
      />

      {/* Orbiting particles */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[0, 1, 2].map((p) => (
          <motion.span
            key={p}
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full"
            style={{
              background: skill.color,
              boxShadow: `0 0 8px ${skill.color}`,
              transformOrigin: "0 0",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6 + p * 2, repeat: Infinity, ease: "linear" }}
          >
            <span
              className="absolute block w-1.5 h-1.5 rounded-full"
              style={{
                background: skill.color,
                transform: `translate(${36 + p * 12}px, 0)`,
              }}
            />
          </motion.span>
        ))}
      </div>

      <div className="relative flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Floating + pulsing icon */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
            className="relative grid place-items-center w-11 h-11 rounded-xl bg-background/60 border border-border"
            style={{ color: skill.color }}
          >
            <span
              aria-hidden
              className="absolute inset-0 rounded-xl animate-ping opacity-20"
              style={{ background: skill.color }}
            />
            <Icon className="w-5 h-5 relative z-10" />
          </motion.div>
          <span className="font-semibold tracking-tight">{skill.name}</span>
        </div>
        <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
          {skill.level}%
        </span>
      </div>

      <div className="relative h-1.5 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 + i * 0.05, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, color-mix(in oklab, ${skill.color} 50%, white))`,
            boxShadow: `0 0 10px ${skill.color}`,
          }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted/20 relative overflow-hidden">
      {/* Infinite subtle background motion */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(600px circle at 20% 30%, hsl(var(--primary) / 0.12), transparent 60%), radial-gradient(500px circle at 80% 70%, hsl(var(--primary) / 0.10), transparent 60%)",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A growing toolkit I use to design and build modern web apps."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
