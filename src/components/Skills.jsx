import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { SKILLS } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted/20 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A growing toolkit I use to design and build modern web apps."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-xs text-primary font-mono">{skill.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                  className="h-full bg-gradient-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
