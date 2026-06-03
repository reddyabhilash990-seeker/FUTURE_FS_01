import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-foreground font-semibold">{PROFILE.name}</span>. Built with React & Tailwind.
        </p>
        <div className="flex items-center gap-3">
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
              className="grid place-items-center w-10 h-10 rounded-xl bg-muted border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
