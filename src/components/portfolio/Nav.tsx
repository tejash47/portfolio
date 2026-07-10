import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { hash: "experience", label: "Experience" },
  { hash: "projects", label: "Projects" },
  { hash: "skills", label: "Skills" },
  { hash: "certifications", label: "Certifications" },
  { hash: "contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-foreground/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-lg font-semibold uppercase tracking-tight">
          Tejash<span className="text-accent">.dev</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.hash}
              to="/"
              hash={l.hash}
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
          <div className="h-4 w-px bg-foreground/10" />
          <a
            href="/Tejash_Resume.docx"
            download
            className="border-b-2 border-accent pb-0.5 text-sm font-medium"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
