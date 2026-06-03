import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { PROFILE } from "@/lib/portfolio-data";

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-muted/20 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a project, idea, or just want to say hi? My inbox is open."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {[
              { Icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
              { Icon: Github, label: "GitHub", value: "@abhilashreddy", href: PROFILE.github },
              { Icon: Linkedin, label: "LinkedIn", value: "Abhilash Reddy", href: PROFILE.linkedin },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 hover:-translate-y-0.5 transition-all"
              >
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="font-medium">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            className="p-6 rounded-2xl bg-card border border-border space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <input
                required type="email" placeholder="Your email"
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <input
              required placeholder="Subject"
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
            />
            <textarea
              required rows={5} placeholder="Your message..."
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold hover:scale-[1.02] hover:opacity-95 transition-all glow"
            >
              {sent ? "Message sent ✓" : (<>Send Message <Send size={16} /></>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
