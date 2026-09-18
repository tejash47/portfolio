import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  Github,
  Linkedin,
  Code,
  Send,
} from "lucide-react";
import { Reveal } from "./Reveal";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kamada-sri-hari-siva-tejash",
    handle: "kamada-sri-hari-siva-tejash",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/tejash47",
    handle: "tejash47",
    icon: Github,
  },
  {
    name: "CodeChef",
    href: "https://www.codechef.com/users/tejash_47",
    handle: "tejash_47",
    icon: Code,
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "tejesh.kamada47@gmail.com";
  const phone = "+91 7396480220";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="mx-auto mb-20 max-w-7xl px-6">
      <Reveal>
        <div className="mb-10 flex items-baseline justify-between border-b border-foreground/10 pb-4">
          <h2 className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            <Mail className="size-6 text-accent" />
            Let's Connect
          </h2>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            [ Contact ]
          </span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 items-start">
        {/* Left Pitch */}
        <div className="space-y-4 md:col-span-5">
          <h3 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Open to Internships <br />& Engineering Roles
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            I am actively seeking software engineering and AI full-stack opportunities. Whether you
            have an internship opening, a collaboration idea, or want to discuss architecture — feel
            free to reach out.
          </p>

          <div className="pt-2 flex flex-col gap-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4 text-accent" />
              <span>Visakhapatnam, Andhra Pradesh, India</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-500 font-semibold">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for immediate onboarding (Remote / Hybrid / On-site)</span>
            </div>
          </div>
        </div>

        {/* Right Contact Card & Links */}
        <div className="rounded-2xl border border-foreground/10 bg-card p-6 sm:p-8 space-y-6 md:col-span-7 shadow-sm">
          {/* Email Quick Copy */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-foreground/10 bg-card-subtle p-4">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                Direct Email
              </span>
              <a
                href={`mailto:${email}`}
                className="font-display text-lg sm:text-xl font-bold text-foreground hover:text-accent transition-colors"
              >
                {email}
              </a>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-foreground/15 bg-card px-3.5 py-2 text-xs font-semibold text-foreground hover:border-accent hover:text-accent transition-colors shrink-0"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-emerald-500" />
                  <span className="text-emerald-500">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="size-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between rounded-xl border border-foreground/10 bg-card-subtle p-4">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                Phone / WhatsApp
              </span>
              <a
                href={`tel:${phone}`}
                className="font-mono text-base font-semibold text-foreground hover:text-accent transition-colors"
              >
                {phone}
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3">
              Coding & Professional Profiles
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-xl border border-foreground/10 bg-card p-3 text-xs font-semibold text-foreground transition-all hover:border-accent hover:text-accent shadow-sm"
                  >
                    <Icon className="size-4 text-accent" />
                    <span>{s.name}</span>
                    <ExternalLink className="size-3 ml-auto text-muted-foreground" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-foreground/10 bg-card py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <p className="font-display text-sm font-bold text-foreground">
            Kamada Sri Hari Siva Tejash
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            AI Full-Stack Engineer · © {year} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs text-muted-foreground">
          <a
            href="https://github.com/tejash47"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kamada-sri-hari-siva-tejash"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.codechef.com/users/tejash_47"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            CodeChef
          </a>
          <a
            href="/Kamada Tejash.docx"
            download="Kamada_Tejash_Resume.docx"
            className="hover:text-accent transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
