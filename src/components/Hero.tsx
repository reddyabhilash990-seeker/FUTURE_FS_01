import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, FileText, Github, Linkedin, Mail } from "lucide-react";
import profile from "@/assets/profile.jpg";
import { PROFILE } from "@/lib/portfolio-data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-hero-glow overflow-hidden pt-28 pb-16"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center w-full">
        <div>
          <motion.span
            variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Available for projects
          </motion.span>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Hey, I'm
            <br />
            <span className="text-gradient">{PROFILE.name}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="mt-6 text-xl md:text-2xl font-semibold"
          >
            Aspiring <span className="text-primary">{PROFILE.role}</span>
          </motion.p>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="mt-5 max-w-xl text-muted-foreground leading-relaxed"
          >
            {PROFILE.intro}
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold hover:scale-105 transition-transform glow"
            >
              View Projects
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted border border-border font-semibold hover:bg-muted/70 hover:border-primary/50 transition-colors"
            >
              Contact Me
            </a>
            <a
              href={PROFILE.resumeUrl}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted border border-border font-semibold hover:bg-muted/70 hover:border-primary/50 transition-colors"
            >
              <FileText size={16} /> Resume
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={5}
            className="mt-10 pt-8 border-t border-border/60 flex items-center gap-3"
          >
            {[
              { Icon: Github, href: PROFILE.github, label: "GitHub" },
              { Icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
              { Icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank" rel="noopener noreferrer"
                aria-label={label}
                className="grid place-items-center w-11 h-11 rounded-xl bg-muted border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:-translate-y-0.5 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md aspect-square"
        >
          <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 rounded-full" />
          <div className="absolute inset-6 rounded-3xl border border-primary/30" />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full rounded-3xl overflow-hidden border border-border bg-card shadow-[0_20px_80px_-20px_oklch(0.70_0.18_245/0.5)]"
          >
            <img
              src={profile}
              alt={PROFILE.name}
              width={640} height={640}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-2 right-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium backdrop-blur"
          >
            <span className="text-primary">&lt;dev&gt;</span> React
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-4 -left-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium backdrop-blur"
          >
            Tailwind
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
      >
        Scroll down
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="grid place-items-center w-8 h-8 rounded-full border border-border"
        >
          <ChevronDown size={14} />
        </motion.span>
      </motion.button>
    </section>
  );
}
