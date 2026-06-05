import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Wind,
  GitBranch,
  Github,
  Coffee,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SKILLS } from "@/lib/portfolio-data";

const ICONS = { Code2, Palette, Braces, Atom, Wind, GitBranch, Github, Coffee };

function SkillCard({ skill, i }) {
  const Icon = ICONS[skill.icon] ?? Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.04 }}
      className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/60 transition-colors duration-300 overflow-hidden will-change-transform"
    >
      {/* Hover-only glow */}
      <div
        aria-hidden
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 40px -10px ${skill.color}` }}
      />

      <div className="relative flex flex-col items-center text-center gap-3">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
          className="grid place-items-center w-14 h-14 rounded-xl bg-background/60 border border-border"
          style={{ color: skill.color }}
        >
          <Icon className="w-7 h-7" />
        </motion.div>
        <span className="font-semibold tracking-tight">{skill.name}</span>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted/20 relative overflow-hidden">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
