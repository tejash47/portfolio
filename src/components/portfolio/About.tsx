import { motion } from "framer-motion";
import { User, Sparkles, GraduationCap, Code2, Layers, Cpu } from "lucide-react";
import { Reveal, Stagger, item } from "./Reveal";

const stats = [
  { value: "8.22", label: "CGPA at VIIT", sub: "CSE (2024–2028)" },
  { value: "4+", label: "Projects Shipped", sub: "AI, Full-Stack & Extensions" },
  { value: "3+", label: "Language Certs", sub: "Python, Java & C++" },
  { value: "2026", label: "Hackathon Finalist", sub: "ExtenHack '26" },
];

export function About() {
  return (
    <section id="about" className="mx-auto mb-28 max-w-7xl px-6">
      <Reveal>
        <div className="mb-10 flex items-baseline justify-between border-b border-foreground/10 pb-4">
          <h2 className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            <User className="size-6 text-accent" />
            About Me
          </h2>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            [ Developer Profile ]
          </span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 items-start">
        {/* Bio Copy */}
        <div className="space-y-4 md:col-span-7">
          <p className="text-pretty text-base leading-relaxed text-foreground/90 md:text-lg">
            I am a third-year{" "}
            <span className="font-semibold text-foreground">Computer Science & Engineering</span>{" "}
            undergraduate at{" "}
            <span className="font-semibold text-accent">
              Vignan's Institute of Information Technology (VIIT)
            </span>
            , Visakhapatnam, maintaining an{" "}
            <span className="font-semibold text-accent-secondary">8.22 CGPA</span>.
          </p>

          <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            My technical focus centers on bridging modern{" "}
            <span className="text-foreground font-medium">full-stack web architectures</span> with{" "}
            <span className="text-foreground font-medium">autonomous AI systems</span>. Rather than
            building toy demos, I enjoy engineering tools that solve real bottlenecks — like
            autonomous API self-repair platforms (
            <span className="text-accent font-medium">APIFIX AI</span>), cultural e-commerce
            marketplaces with multilingual NLP (
            <span className="text-accent font-medium">Kala AI</span>), and lightweight browser
            extensions (<span className="text-accent font-medium">Focus Shield</span>).
          </p>

          <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            I continuously strengthen my foundations across Data Structures & Algorithms,
            Object-Oriented Design, and production backend patterns in Java, Python, C++,
            TypeScript, and Node.js.
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-foreground/10 bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground">
              <GraduationCap className="size-3.5 text-accent" /> B.Tech CSE (2024–2028)
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-foreground/10 bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground">
              <Cpu className="size-3.5 text-accent-secondary" /> AI Systems & Fallback Cascades
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-foreground/10 bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground">
              <Layers className="size-3.5 text-indigo-400" /> Full-Stack Architecture
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <Stagger className="grid grid-cols-2 gap-3.5 md:col-span-5">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              whileHover={{ y: -3 }}
              className="flex flex-col justify-between rounded-xl border border-foreground/10 bg-card p-4 transition-colors hover:border-accent/40 shadow-sm"
            >
              <div>
                <span className="font-display text-3xl font-extrabold text-accent">{s.value}</span>
                <h3 className="mt-1 font-display text-sm font-semibold text-foreground">
                  {s.label}
                </h3>
              </div>
              <p className="mt-2 font-mono text-[11px] text-muted-foreground">{s.sub}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
