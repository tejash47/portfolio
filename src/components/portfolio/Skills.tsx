import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
  type LucideIcon,
} from "lucide-react";
import { Stagger, item } from "./Reveal";

const groups: { title: string; icon: LucideIcon; items: string[] }[] = [
  { title: "Languages", icon: Code2, items: ["Java", "Python", "C", "C++", "JavaScript", "SQL"] },
  { title: "Frontend", icon: Layout, items: ["React.js", "Next.js", "HTML5", "CSS3"] },
  { title: "Backend", icon: Server, items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Databases", icon: Database, items: ["MongoDB", "SQL"] },
  {
    title: "Developer Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Postman", "VS Code", "Vercel"],
  },
  { title: "Core CS", icon: Brain, items: ["DSA", "OOP", "DBMS", "Operating Systems"] },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto mb-32 max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-2xl bg-panel p-8 ring-1 ring-black/5 md:p-12">
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent blur-3xl"
        />
        <div className="relative mb-10 flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-medium tracking-tight text-panel-foreground">
            Technical Skills
          </h2>
          <span className="font-mono text-xs text-panel-foreground/40">[ what I work with ]</span>
        </div>
        <Stagger className="relative grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                variants={item}
                whileHover={{ y: -4 }}
                className="group space-y-4 rounded-lg p-4 transition-colors hover:bg-white/[0.03]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-9 items-center justify-center rounded-md bg-accent/10 text-accent ring-1 ring-accent/20 transition-transform group-hover:scale-110">
                    <Icon className="size-4" strokeWidth={2} />
                  </span>
                  <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-panel-foreground/60">
                    {g.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-3">
                  {g.items.map((i) => (
                    <motion.span
                      key={i}
                      whileHover={{ y: -2, color: "var(--color-accent)" }}
                      className="cursor-default text-lg font-medium text-panel-foreground"
                    >
                      {i}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
