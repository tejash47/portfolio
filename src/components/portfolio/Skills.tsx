import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
  Cpu,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Reveal, Stagger, item } from "./Reveal";

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  color: string;
  items: string[];
};

const groups: SkillGroup[] = [
  {
    title: "AI & Intelligent Systems",
    icon: Cpu,
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    items: [
      "Generative AI & LLMs",
      "Multi-AI Fallback Cascades",
      "Prompt Engineering",
      "Babel AST Code Analysis",
      "NLP APIs",
      "Autonomous Agents",
    ],
  },
  {
    title: "Languages",
    icon: Code2,
    color: "text-accent bg-accent/10 border-accent/20",
    items: ["Java", "Python", "C", "C++ (OOP & STL)", "JavaScript (ES6+)", "TypeScript", "SQL"],
  },
  {
    title: "Frontend Engineering",
    icon: Layout,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    items: ["React.js", "Next.js", "Vite", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    items: [
      "Node.js",
      "Express.js",
      "RESTful API Architecture",
      "JWT Authentication",
      "Dynamic Port Probing",
      "Zero-Secret Redaction",
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    items: ["MongoDB & Mongoose", "Supabase (PostgreSQL)", "SQL", "Chrome Storage API"],
  },
  {
    title: "Dev Tools & Cloud",
    icon: Wrench,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    items: [
      "Git & GitHub",
      "Vercel Deployment",
      "Render",
      "Postman",
      "Chrome Manifest V3",
      "VS Code",
    ],
  },
  {
    title: "Core Computer Science",
    icon: Brain,
    color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management (DBMS)",
      "Operating Systems Concepts",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto mb-28 max-w-7xl px-6">
      <Reveal>
        <div className="mb-10 flex items-baseline justify-between border-b border-foreground/10 pb-4">
          <h2 className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            <Sparkles className="size-6 text-accent" />
            Technical Skills
          </h2>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            [ Core Proficiencies ]
          </span>
        </div>
      </Reveal>

      <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => {
          const Icon = g.icon;
          return (
            <motion.div
              key={g.title}
              variants={item}
              whileHover={{ y: -4 }}
              className="group flex flex-col justify-between rounded-xl border border-foreground/10 bg-card p-5 transition-all hover:border-accent/40 shadow-sm"
            >
              <div>
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-foreground/5">
                  <span
                    className={`flex size-9 items-center justify-center rounded-lg border ${g.color}`}
                  >
                    <Icon className="size-4.5" strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                    {g.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-foreground/10 bg-card-subtle px-2.5 py-1 font-mono text-xs text-foreground/80 transition-colors group-hover:border-foreground/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </Stagger>
    </section>
  );
}
