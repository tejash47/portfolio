const stats = [
  { value: "8.22", label: "CGPA at VIIT" },
  { value: "5+", label: "Certifications Earned" },
  { value: "2", label: "Projects Shipped" },
  { value: "1", label: "Hackathon Participated" },
];

export function About() {
  return (
    <section id="about" className="mx-auto mb-32 max-w-7xl px-6">
      <div className="mb-12 flex items-baseline justify-between border-b border-foreground/5 pb-6">
        <h2 className="font-display text-3xl font-medium tracking-tight">About Me</h2>
        <span className="font-mono text-sm text-muted-foreground/70">[ who I am ]</span>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="space-y-6 md:col-span-7">
          <p className="text-pretty text-lg leading-relaxed text-foreground/80">
            I'm a Computer Science and Engineering student at Vignan's Institute of Information
            Technology, Visakhapatnam (Batch 2024–2028), maintaining a CGPA of 8.22.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            My technical foundation spans C, C++, Java, Python and modern web technologies. I
            enjoy building things that work — from AI-powered cultural marketplaces to
            productivity browser extensions that actually help people focus.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            I've earned certifications in Python, Java, and C++ programming, and I actively seek
            opportunities to apply my skills in real-world, team-driven environments.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:col-span-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="brutalist-border flex flex-col gap-2 pl-6 py-4"
            >
              <span className="font-display text-4xl font-medium text-accent">{s.value}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
