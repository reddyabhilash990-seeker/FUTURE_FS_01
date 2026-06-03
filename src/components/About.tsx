import { motion } from "framer-motion";
import { Code2, GraduationCap, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const cards = [
  {
    Icon: GraduationCap,
    title: "Computer Science",
    text: "Building strong foundations in algorithms, data structures and modern software engineering practices.",
  },
  {
    Icon: Code2,
    title: "Web Development",
    text: "Focused on crafting clean, responsive interfaces with React, Tailwind CSS and modern tooling.",
  },
  {
    Icon: Rocket,
    title: "Always Learning",
    text: "Exploring new tools, frameworks and best practices to grow as a developer every single day.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="About Me"
          title="A passionate student developer"
          description="A short look at who I am and what I love to build."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <h3 className="text-2xl font-semibold text-foreground">
              Hello! I'm <span className="text-primary">Abhilash Reddy</span>.
            </h3>
            <p>
              I'm a Computer Science student fascinated by web development and the
              way modern technologies make experiences feel alive on the screen.
            </p>
            <p>
              I love turning ideas into responsive, interactive web applications —
              focusing on clean UI, smooth interactions, and code that's a joy to
              maintain.
            </p>
            <p>
              When I'm not coding, you'll catch me exploring new frameworks,
              reading dev blogs, and shipping small side projects to keep my
              skills sharp.
            </p>

            <div className="flex gap-4 pt-2">
              <div className="px-5 py-3 rounded-xl bg-card border border-border">
                <p className="text-2xl font-bold text-gradient">3+</p>
                <p className="text-xs text-muted-foreground">Projects Built</p>
              </div>
              <div className="px-5 py-3 rounded-xl bg-card border border-border">
                <p className="text-2xl font-bold text-gradient">9+</p>
                <p className="text-xs text-muted-foreground">Skills Learning</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors flex gap-4"
              >
                <span className="shrink-0 grid place-items-center w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground">
                  <c.Icon size={20} />
                </span>
                <div>
                  <h4 className="font-semibold text-lg">{c.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{c.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
