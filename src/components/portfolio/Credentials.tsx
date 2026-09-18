import { motion } from "framer-motion";
import { Award, ExternalLink, BadgeCheck, Trophy, Sparkles } from "lucide-react";
import { Reveal, Stagger, item } from "./Reveal";

const achievements = [
  {
    title: "ExtenHack 2026 — Hackathon Finalist",
    date: "February 2026",
    issuer: "ExtenHack & Dev Community",
    detail:
      "Engineered Focus Shield — a Chrome Manifest V3 extension providing real-time website blocking and Pomodoro focus workflows with a 3-member team.",
    badge: "Hackathon",
    links: [
      {
        label: "Certificate",
        href: "https://drive.google.com/file/d/1misWefJ3Ms7vPUCJRvzQXMgTd2b67aVW/view",
      },
    ],
  },
  {
    title: "Python Programming Certification",
    date: "November 2025",
    issuer: "Programming Authority",
    detail:
      "Mastery in Python syntax, data structures, automation scripting, and backend development principles. Awarded Letter of Appreciation (LOA).",
    badge: "Certified",
    links: [
      {
        label: "View LOA",
        href: "https://drive.google.com/file/d/1fqlsvC2UKdBZr-ZmuXx7z6xqf62JauMj/view?usp=drive_link",
      },
    ],
  },
  {
    title: "Java Programming & OOP Certification",
    date: "August 2025",
    issuer: "Programming Authority",
    detail:
      "In-depth proficiency in Java syntax, Object-Oriented Programming (OOP), Collections, and web frameworks. Awarded Letter of Recommendation (LOR) & LOA.",
    badge: "Certified & LOR",
    links: [
      {
        label: "Certificate",
        href: "https://drive.google.com/file/d/11GzWvrwCms4vfNz2qOJMeOU6UNeAHvjL/view?usp=drive_link",
      },
      {
        label: "View LOR",
        href: "https://drive.google.com/file/d/1qwTPXQEZ2WEkor3DBVgIH6nC6YXrGs34/view?usp=drive_link",
      },
      {
        label: "View LOA",
        href: "https://drive.google.com/file/d/1d2sDukDwxEcVJ2YjTpmTSrl66TE8fNA_/view?usp=drive_link",
      },
    ],
  },
  {
    title: "C++ Programming Certification",
    date: "June 2025",
    issuer: "Programming Authority",
    detail:
      "Core proficiency in C++ programming, memory concepts, Standard Template Library (STL), and algorithmic problem solving.",
    badge: "Certified",
    links: [
      {
        label: "Certificate",
        href: "https://drive.google.com/file/d/1d9-pg0j4fiFgpSCWE2Q7f8oggSu1NLxR/view?usp=drive_link",
      },
    ],
  },
];

export function Credentials() {
  return (
    <section id="certifications" className="mx-auto mb-28 max-w-7xl px-6">
      <Reveal>
        <div className="mb-10 flex items-baseline justify-between border-b border-foreground/10 pb-4">
          <h2 className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            <BadgeCheck className="size-6 text-accent" />
            Certifications & Accomplishments
          </h2>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            [ Verified Credentials ]
          </span>
        </div>
      </Reveal>

      <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((c) => (
          <motion.div
            key={c.title}
            variants={item}
            whileHover={{ y: -4 }}
            className="group flex flex-col justify-between rounded-xl border border-foreground/10 bg-card p-5 transition-all hover:border-accent/40 shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground mb-3">
                <span className="uppercase tracking-wider">{c.date}</span>
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-accent font-semibold">
                  {c.badge}
                </span>
              </div>

              <h3 className="font-display text-base font-bold text-foreground group-hover:text-accent transition-colors">
                {c.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.detail}</p>
            </div>

            <div className="mt-4 pt-4 border-t border-foreground/5 flex flex-wrap gap-2">
              {c.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-accent/20 bg-accent/5 px-2 py-1 font-mono text-[11px] font-semibold text-accent hover:bg-accent/15 transition-colors"
                >
                  <span>{l.label}</span>
                  <ExternalLink className="size-3" />
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}
