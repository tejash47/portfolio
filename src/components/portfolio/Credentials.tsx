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

export function Credentials() {
  return (
    <section id="certifications" className="mx-auto mb-32 max-w-7xl px-6">
      <div className="mb-12 flex items-baseline justify-between border-b border-foreground/5 pb-6">
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Certifications & Achievements
        </h2>
        <span className="font-mono text-sm text-muted-foreground/70">[ what I've learned ]</span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {certs.map((c) => (
          <div
            key={c.title}
            className="flex flex-col gap-4 rounded-sm border border-foreground/10 bg-card p-6 transition-colors hover:border-accent"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
              {c.date}
            </span>
            <h4 className="font-display text-lg font-medium text-foreground">{c.title}</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
            <div className="mt-auto flex flex-wrap gap-3 pt-2">
              {c.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold uppercase tracking-widest text-accent hover:underline"
                >
                  {l.label} →
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
