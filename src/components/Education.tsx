import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {EDUCATION.map((item, i) => (
              <motion.div
                key={item.school}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
              >
                {/* Dot */}
                <span className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-gradient-primary -translate-x-1/2 ring-4 ring-background glow" />

                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                    <GraduationCap size={14} /> {item.period}
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{item.school}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.degree}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  <p className={`mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground ${i % 2 === 0 ? "md:justify-end md:w-full" : ""}`}>
                    <MapPin size={12} /> {item.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
