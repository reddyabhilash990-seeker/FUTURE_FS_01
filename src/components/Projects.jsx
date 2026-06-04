import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { PROJECTS } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A few of the projects I've created while learning and exploring web development."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-[0_20px_60px_-20px_oklch(0.70_0.18_245/0.4)] transition-all"
            >
              <a
                href={p.live}
                target="_blank" rel="noopener noreferrer"
                className="block relative aspect-[16/10] overflow-hidden bg-muted"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  width={800} height={600}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-60" />
              </a>

              <div className="p-6">
                <a
                  href={p.live}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-lg font-semibold hover:text-primary transition-colors"
                >
                  {p.title}
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                </a>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-5 pt-5 border-t border-border">
                  <a
                    href={p.live}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 hover:scale-[1.02] transition-all"
                  >
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={p.repo}
                    target="_blank" rel="noopener noreferrer"
                    aria-label="GitHub repository"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-muted border border-border text-sm font-semibold hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
