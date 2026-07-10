const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kamada-sri-hari-siva-tejash" },
  { label: "CodeChef", href: "https://www.codechef.com/users/tejash_47" },
  { label: "GitHub", href: "https://github.com/tejash47" },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto mb-24 max-w-7xl px-6">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Let's Connect</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Open to Internships <br />& Collaborations
          </h2>
          <p className="mt-6 max-w-[42ch] text-pretty leading-relaxed text-muted-foreground">
            I'm actively looking for software engineering internship opportunities. Whether you
            have a project idea, an internship opening, or just want to talk tech — feel free to
            reach out.
          </p>
        </div>
        <div className="brutalist-border flex flex-col gap-8 pl-8 md:col-span-7">
          <a
            href="mailto:tejesh.kamada47@gmail.com"
            className="font-display text-2xl font-medium text-foreground transition-colors hover:text-accent"
          >
            tejesh.kamada47@gmail.com
          </a>
          <a
            href="tel:+917396480220"
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            +91 7396480220
          </a>
          <div className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-widest text-foreground/70 transition-colors hover:text-accent"
              >
                {l.label} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-foreground/5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div className="flex flex-col gap-1">
          <p className="font-mono text-xs text-muted-foreground/70">
            Last build · {new Date().getFullYear()}
          </p>
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} Kamada Sri Hari Siva Tejash.
          </p>
        </div>
        <div className="flex gap-6">
          <a
            href="https://github.com/tejash47"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kamada-sri-hari-siva-tejash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="https://www.codechef.com/users/tejash_47"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-accent"
          >
            CodeChef
          </a>
        </div>
      </div>
    </footer>
  );
}
