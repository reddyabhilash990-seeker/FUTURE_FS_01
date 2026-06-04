import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/portfolio-data";
import { useActiveSection } from "@/hooks/use-active-section";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2 group"
        >
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-muted border border-border text-primary">
            <Code2 size={18} />
          </span>
          <span className="font-semibold text-lg tracking-tight">
            {PROFILE.shortName}<span className="text-primary">.</span>
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className={active === l.id ? "text-foreground" : ""}>
                  {l.label}
                </span>
                {active === l.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-gradient-primary"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            go("contact");
          }}
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-primary text-primary-foreground hover:opacity-90 hover:scale-105 transition-all glow"
        >
          HIRE ME
        </a>

        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden grid place-items-center w-10 h-10 rounded-lg bg-muted border border-border"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <ul className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className={`w-full text-left text-base font-medium ${
                      active === l.id ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => go("contact")}
                  className="w-full mt-2 py-3 rounded-full font-semibold bg-gradient-primary text-primary-foreground"
                >
                  HIRE ME
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
