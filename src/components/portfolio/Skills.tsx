const groups = [
  {
    title: "Languages",
    items: ["C", "C++", "Java", "Python", "SQL"],
  },
  {
    title: "Web & Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Django", "Flask", "Node.js", "Express.js", "STL"],
  },
  {
    title: "Databases & Backend",
    items: ["MySQL", "MongoDB", "Firebase", "REST APIs"],
  },
  {
    title: "AI & Tools",
    items: ["NLP APIs", "Prompt Engineering", "Gen AI Tools"],
  },
  {
    title: "Dev Tools",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Postman", "MS Office"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto mb-32 max-w-7xl px-6">
      <div className="rounded-2xl bg-panel p-8 ring-1 ring-black/5 md:p-12">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-medium tracking-tight text-panel-foreground">
            Technical Skills
          </h2>
          <span className="font-mono text-xs text-panel-foreground/40">[ what I work with ]</span>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="space-y-4">
              <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-panel-foreground/50">
                {g.title}
              </h4>
              <div className="flex flex-wrap gap-x-4 gap-y-3">
                {g.items.map((i) => (
                  <span key={i} className="text-lg font-medium text-panel-foreground">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
