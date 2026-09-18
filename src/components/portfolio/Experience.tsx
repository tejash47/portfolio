import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar, Award, CheckCircle2 } from "lucide-react";
import { Reveal, Stagger, item } from "./Reveal";

const experience = [
  {
    period: "Jul 2026 – Present",
    role: "AI Full Stack Engineer Intern",
    company: "Small Fare Services Pvt. Ltd. · Remote",
    type: "Internship",
    bullets: [
      "Architecting and shipping end-to-end AI-integrated web applications with responsive React.js frontends and Node.js/Express REST APIs.",
      "Collaborating with cross-functional teams to translate AI model outputs into intuitive, high-impact user experiences following Agile principles.",
      "Debugging full-stack bottlenecks across data pipelines, asynchronous API latency, and LLM inference response times for production stability.",
      "Managing version control, code reviews, and deployment pipelines using Git/GitHub across the complete software development lifecycle.",
    ],
  },
];

const education = [
  {
    period: "2024 – 2028",
    institution: "Vignan's Institute of Information Technology",
    degree: "B.Tech — Computer Science & Engineering",
    location: "Visakhapatnam, AP",
    score: "8.22 CGPA",
    details:
      "Focus: Data Structures & Algorithms, Object-Oriented Design, Web Architecture & Intelligent Systems.",
  },
  {
    period: "2022 – 2024",
    institution: "Sr Junior College",
    degree: "Intermediate — State Board (MPC)",
    location: "Visakhapatnam, AP",
    score: "815 / 1000",
    details:
      "Mathematics, Physics, and Chemistry foundation with rigorous competitive problem solving.",
  },
  {
    period: "2021 – 2022",
    institution: "St. Joseph's Secondary School",
    degree: "ICSE — Class X",
    location: "Visakhapatnam, AP",
    score: "859 / 1000",
    details: "Secondary school education with high academic distinction.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto mb-28 max-w-7xl px-6">
      {/* Experience Section */}
      <Reveal>
        <div className="mb-10 flex items-baseline justify-between border-b border-foreground/10 pb-4">
          <h2 className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            <Briefcase className="size-6 text-accent" />
            Engineering Experience
          </h2>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            [ Work History ]
          </span>
        </div>
      </Reveal>

      <Stagger className="space-y-6">
        {experience.map((e) => (
          <motion.div
            key={e.role}
            variants={item}
            className="group rounded-2xl border border-foreground/10 bg-card p-6 sm:p-8 transition-all hover:border-accent/40 shadow-sm"
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center border-b border-foreground/5 pb-4 mb-5">
              <div>
                <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-accent mb-1.5">
                  {e.type}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  {e.role}
                </h3>
                <p className="font-medium text-accent">{e.company}</p>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                <Calendar className="size-3.5 text-accent" />
                <span>{e.period}</span>
              </div>
            </div>

            <ul className="space-y-3">
              {e.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-sm text-foreground/85 leading-relaxed"
                >
                  <CheckCircle2 className="mt-1 size-4 flex-shrink-0 text-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </Stagger>

      {/* Education Section */}
      <div id="education" className="mt-20">
        <Reveal>
          <div className="mb-10 flex items-baseline justify-between border-b border-foreground/10 pb-4">
            <h2 className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              <GraduationCap className="size-6 text-accent" />
              Academic Background
            </h2>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              [ Education ]
            </span>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {education.map((edu) => (
            <motion.div
              key={edu.institution}
              variants={item}
              whileHover={{ y: -4 }}
              className="flex flex-col justify-between rounded-xl border border-foreground/10 bg-card p-6 transition-all hover:border-accent/40 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-muted-foreground mb-2">
                  <span>{edu.period}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-accent">
                    <Award className="size-3.5" />
                    {edu.score}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-foreground">
                  {edu.institution}
                </h3>
                <p className="mt-1 text-xs font-semibold text-accent-secondary">{edu.degree}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{edu.details}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-foreground/5 flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                <MapPin className="size-3" />
                <span>{edu.location}</span>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
