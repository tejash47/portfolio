import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { Reveal, Stagger, item } from "./Reveal";

const experience = [
  {
    period: "Jul 2026 – Present",
    role: "AI Full Stack Engineer Intern",
    company: "Small Fare Services Pvt. Ltd. · Remote",
    bullets: [
      "Architecting and building end-to-end AI-integrated web applications with responsive React.js front-ends and Node.js/Express REST APIs.",
      "Collaborating with designers and product managers to translate AI/ML research into intuitive, high-impact user experiences using Agile practices.",
      "Debugging full-stack issues spanning data pipelines, API latency, and AI model inference to ensure reliable, production-ready deployments.",
      "Managing source control and collaborative workflows with Git/GitHub across the full project lifecycle, from architecture to monitoring.",
    ],
  },
];

const education = [
  {
    period: "2024 – 2028",
    institution: "Vignan's Institute of Information Technology",
    detail: "B.Tech — Computer Science & Engineering",
    location: "Visakhapatnam",
    score: "8.22 CGPA",
  },
  {
    period: "2022 – 2024",
    institution: "Sri Chaitanya Jr. College",
    detail: "Intermediate — SSC Board (MPC)",
    location: "Visakhapatnam",
    score: "815 / 1000",
  },
  {
    period: "2021 – 2022",
    institution: "St. Joseph's Secondary School",
    detail: "ICSE — Class X",
    location: "Visakhapatnam",
    score: "859 / 1000",
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto mb-32 max-w-7xl px-6">
      <Reveal>
        <div className="mb-12 flex items-baseline justify-between border-b border-foreground/5 pb-6">
          <h2 className="flex items-center gap-3 font-display text-3xl font-medium tracking-tight">
            <Briefcase className="size-6 text-accent" strokeWidth={1.75} />
            Experience
          </h2>
          <span className="font-mono text-sm text-muted-foreground/70">[ where I've worked ]</span>
        </div>
      </Reveal>

      <Stagger className="space-y-12">
        {experience.map((e) => (
          <motion.div
            key={e.role}
            variants={item}
            className="group grid grid-cols-1 gap-6 md:grid-cols-12"
          >
            <div className="md:col-span-4">
              <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground/70">
                <Calendar className="size-3.5" strokeWidth={2} />
                {e.period}
              </p>
            </div>
            <div className="brutalist-border relative pl-8 transition-all group-hover:border-l-accent md:col-span-8">
              <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-accent ring-4 ring-background transition-transform group-hover:scale-125" />
              <h3 className="font-display text-xl font-medium text-foreground">{e.role}</h3>
              <p className="mt-1 font-mono text-sm text-accent">{e.company}</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </Stagger>

      <div id="education" className="mt-24">
        <Reveal>
          <div className="mb-12 flex items-baseline justify-between border-b border-foreground/5 pb-6">
            <h2 className="flex items-center gap-3 font-display text-3xl font-medium tracking-tight">
              <GraduationCap className="size-6 text-accent" strokeWidth={1.75} />
              Education
            </h2>
            <span className="font-mono text-sm text-muted-foreground/70">
              [ academic background ]
            </span>
          </div>
        </Reveal>
        <Stagger className="space-y-10">
          {education.map((e) => (
            <motion.div
              key={e.institution}
              variants={item}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group grid grid-cols-1 gap-6 md:grid-cols-12"
            >
              <div className="md:col-span-4">
                <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground/70">
                  <Calendar className="size-3.5" strokeWidth={2} />
                  {e.period}
                </p>
              </div>
              <div className="brutalist-border relative pl-8 transition-all group-hover:border-l-accent md:col-span-8">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-accent ring-4 ring-background transition-transform group-hover:scale-125" />
                <h3 className="font-display text-xl font-medium text-foreground">
                  {e.institution}
                </h3>
                <p className="mt-1 text-muted-foreground">{e.detail}</p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                  <span className="inline-flex items-center gap-1.5 font-mono text-accent">
                    <Award className="size-3.5" strokeWidth={2} />
                    {e.score}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-muted-foreground/80">
                    <MapPin className="size-3.5" strokeWidth={2} />
                    {e.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
