const education = [
  {
    period: "2024 – 2028",
    institution: "Vignan's Institute of Information Technology",
    detail: "B.Tech — Computer Science & Engineering · Visakhapatnam",
    score: "8.22 CGPA",
  },
  {
    period: "2022 – 2024",
    institution: "Sr. Junior College",
    detail: "Intermediate · SSC Board",
    score: "815",
  },
  {
    period: "2021 – 2022",
    institution: "St. Joseph's Secondary School",
    detail: "Secondary School · ICSE Board",
    score: "859",
  },
];

export function Experience() {
  return (
    <section id="education" className="mx-auto mb-32 max-w-7xl px-6">
      <div className="mb-12 flex items-baseline justify-between border-b border-foreground/5 pb-6">
        <h2 className="font-display text-3xl font-medium tracking-tight">Education</h2>
        <span className="font-mono text-sm text-muted-foreground/70">[ academic background ]</span>
      </div>

      <div className="space-y-12">
        {education.map((e) => (
          <div key={e.institution} className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground/70">
                {e.period}
              </p>
            </div>
            <div className="brutalist-border pl-8 md:col-span-8">
              <h3 className="font-display text-xl font-medium text-foreground">
                {e.institution}
              </h3>
              <p className="mt-1 text-muted-foreground">{e.detail}</p>
              <p className="mt-2 font-mono text-sm text-accent">{e.score}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
