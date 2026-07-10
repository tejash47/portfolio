const certs = [
  {
    date: "November 2025",
    title: "Python Programming",
    detail:
      "Python Basics & Syntax · Data Analysis · Web Dev with Django/Flask · Automation with Python. Awarded Letter of Appreciation.",
    links: [
      {
        label: "LOA",
        href: "https://drive.google.com/file/d/1fqlsvC2UKdBZr-ZmuXx7z6xqf62JauMj/view?usp=drive_link",
      },
    ],
  },
  {
    date: "August 2025",
    title: "Java Programming",
    detail:
      "Java Syntax & Basics · OOP in Java · Java Web Development · Java Frameworks. Awarded LOR and LOA.",
    links: [
      {
        label: "Certificate",
        href: "https://drive.google.com/file/d/11GzWvrwCms4vfNz2qOJMeOU6UNeAHvjL/view?usp=drive_link",
      },
      {
        label: "LOR",
        href: "https://drive.google.com/file/d/1qwTPXQEZ2WEkor3DBVgIH6nC6YXrGs34/view?usp=drive_link",
      },
      {
        label: "LOA",
        href: "https://drive.google.com/file/d/1d2sDukDwxEcVJ2YjTpmTSrl66TE8fNA_/view?usp=drive_link",
      },
    ],
  },
  {
    date: "June 2025",
    title: "C++ Programming",
    detail:
      "Object-Oriented Programming (OOP) · Standard Template Library (STL) · Core C++ proficiency.",
    links: [
      {
        label: "Certificate",
        href: "https://drive.google.com/file/d/1d9-pg0j4fiFgpSCWE2Q7f8oggSu1NLxR/view?usp=drive_link",
      },
    ],
  },
];

import { motion } from "framer-motion";
import { Award, ExternalLink, BadgeCheck } from "lucide-react";
import { Reveal, Stagger, item } from "./Reveal";

export function Credentials() {
  return (
    <section id="certifications" className="mx-auto mb-32 max-w-7xl px-6">
      <Reveal>
        <div className="mb-12 flex items-baseline justify-between border-b border-foreground/5 pb-6">
          <h2 className="flex items-center gap-3 font-display text-3xl font-medium tracking-tight">
            <BadgeCheck className="size-6 text-accent" strokeWidth={1.75} />
            Certifications & Achievements
          </h2>
          <span className="font-mono text-sm text-muted-foreground/70">[ what I've learned ]</span>
        </div>
      </Reveal>

      <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {certs.map((c) => (
          <motion.div
            key={c.title}
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="group relative flex flex-col gap-4 overflow-hidden rounded-sm border border-foreground/10 bg-card p-6 transition-colors hover:border-accent"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            />
            <div className="flex items-start justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
                {c.date}
              </span>
              <Award
                className="size-5 text-accent/60 transition-transform group-hover:scale-110 group-hover:text-accent"
                strokeWidth={1.75}
              />
            </div>
            <h4 className="font-display text-lg font-medium text-foreground">{c.title}</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
            <div className="mt-auto flex flex-wrap gap-3 pt-2">
              {c.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-accent hover:underline"
                >
                  {l.label}
                  <ExternalLink className="size-3" strokeWidth={2.25} />
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}
