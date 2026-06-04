import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold tracking-tight"
      >
        {title.split(" ").map((w, i, arr) => (
          <span key={i} className={i === arr.length - 1 ? "text-gradient" : ""}>
            {w}{i < arr.length - 1 ? " " : ""}
          </span>
        ))}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-muted-foreground"
        >
          {description}
        </motion.p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-1 bg-gradient-primary rounded-full mx-auto mt-6"
      />
    </div>
  );
}
