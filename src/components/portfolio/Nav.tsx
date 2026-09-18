import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, FileText, Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { hash: "about", label: "About" },
  { hash: "projects", label: "Projects" },
  { hash: "skills", label: "Skills" },
  { hash: "experience", label: "Experience" },
  { hash: "certifications", label: "Certifications" },
  { hash: "contact", label: "Contact" },
];

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-foreground/10 bg-background/85 shadow-sm backdrop-blur-xl"
            : "border-b border-transparent bg-background/50 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            to="/"
            hash="top"
            className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent"
          >
            <span className="flex size-7 items-center justify-center rounded-lg bg-accent/15 text-accent ring-1 ring-accent/30 transition-transform group-hover:scale-105">
              <Sparkles className="size-4" />
            </span>
            <span>
              Tejash<span className="text-accent">.dev</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex" aria-label="Main Navigation">
            {navLinks.map((l) => (
              <Link
                key={l.hash}
                to="/"
                hash={l.hash}
                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}

            <div className="h-4 w-px bg-foreground/10" />

            <a
              href="/Kamada Tejash.docx"
              download="Kamada_Tejash_Resume.docx"
              className="inline-flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent transition-all hover:bg-accent/20 hover:border-accent/60"
            >
              <FileText className="size-3.5" />
              <span>Resume</span>
            </a>

            <ThemeToggle />
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-foreground/10 text-foreground transition-colors hover:bg-foreground/5"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs border-l border-foreground/10 bg-card p-6 shadow-2xl transition-transform">
            <div className="flex items-center justify-between pb-6 border-b border-foreground/10">
              <span className="font-display font-bold text-foreground">Navigation</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground"
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              {navLinks.map((l) => (
                <Link
                  key={l.hash}
                  to="/"
                  hash={l.hash}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-foreground/10">
                <a
                  href="/Kamada Tejash.docx"
                  download="Kamada_Tejash_Resume.docx"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-semibold text-accent-foreground shadow-md transition-opacity hover:opacity-90"
                >
                  <FileText className="size-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
