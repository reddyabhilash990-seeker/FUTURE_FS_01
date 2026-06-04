import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const EDUCATION = [
  {
    school: "VIT-AP University",
    degree: "Integrated M.Tech, Computer Science",
    period: "2024 — 2029",
    location: "Andhra Pradesh, India",
    detail:
      "Pursuing an integrated Master's in Computer Science, focusing on software engineering, algorithms and modern web technologies.",
  },
  {
    school: "Sri Chaitanya Jr College",
    degree: "Intermediate (MPC)",
    period: "2022 — 2024",
    location: "India",
    detail:
      "Completed higher secondary education with Mathematics, Physics and Chemistry, building a strong analytical foundation.",
  },
];

export function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Education"
          title="My academic journey"
          description="Where I've studied and what I'm learning along the way."
        />

        <div className="relative mt-4">
          <div className="absolute left-5 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {EDUCATION.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.school}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative md:grid md:grid-cols-2 md:gap-16 md:items-start"
                >
                  <span className="absolute left-5 md:left-1/2 top-7 w-3.5 h-3.5 rounded-full bg-gradient-primary -translate-x-1/2 ring-4 ring-background shadow-[0_0_0_4px_oklch(0.28_0.03_250/0.4)] glow" />

                  <div
                    className={`pl-12 md:pl-0 ${
                      isLeft ? "md:pr-12 md:text-right md:col-start-1" : "md:pl-12 md:col-start-2"
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary ${
                        isLeft ? "md:ml-auto" : ""
                      }`}
                    >
                      <Calendar size={12} /> {item.period}
                    </div>
                    <h3 className="mt-4 text-2xl md:text-[1.6rem] font-bold leading-tight tracking-tight">
                      {item.school}
                    </h3>
                    <p
                      className={`mt-2 inline-flex items-center gap-2 text-sm font-medium text-foreground/80 ${
                        isLeft ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <GraduationCap size={14} className="text-primary" />
                      {item.degree}
                    </p>
                    <p className="mt-4 text-[15px] text-muted-foreground leading-[1.7] max-w-md md:max-w-none">
                      {item.detail}
                    </p>
                    <p
                      className={`mt-5 inline-flex items-center gap-1.5 text-xs text-muted-foreground/80 ${
                        isLeft ? "md:ml-auto" : ""
                      }`}
                    >
                      <MapPin size={12} /> {item.location}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
