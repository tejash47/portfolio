import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Play,
  Terminal,
} from "lucide-react";
import { Reveal, Stagger, item } from "./Reveal";
import { projects, type Project, type ProjectCategory } from "@/data/projects";

const filterTabs: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "ai-devtools", label: "AI & DevTools" },
  { id: "fullstack", label: "Full-Stack Web" },
  { id: "extensions", label: "Browser Extensions" },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");

  const filteredProjects = projects.filter((p) => {
    if (activeTab === "all") return true;
    return p.category === activeTab;
  });

  const flagshipProject = projects.find((p) => p.isFlagship);

  return (
    <section id="projects" className="mx-auto mb-28 max-w-7xl px-6">
      <Reveal>
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-foreground/10 pb-4 sm:flex-row sm:items-baseline">
          <div>
            <h2 className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              <Layers className="size-6 text-accent" />
              Featured Projects
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Production-grade AI systems, full-stack applications, and developer tools.
            </p>
          </div>

          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            [ Engineering Portfolio ]
          </span>
        </div>
      </Reveal>

      {/* Flagship Standout Project (APIFIX AI) - Always shown prominently when tab is 'all' or 'ai-devtools' */}
      {(activeTab === "all" || activeTab === "ai-devtools") && flagshipProject && (
        <Reveal className="mb-12">
          <div className="relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/20 via-card to-card p-6 shadow-xl sm:p-8 md:p-10">
            {/* Ambient Corner Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
            />

            <div className="relative flex flex-col gap-6">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
                  <Sparkles className="size-3.5 animate-pulse" />
                  <span>FLAGSHIP · AUTONOMOUS AI PLATFORM</span>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Live in Production</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                  {flagshipProject.title}
                </h3>
                <p className="mt-2 text-base font-medium text-accent sm:text-lg">
                  "{flagshipProject.tagline}"
                </p>
              </div>

              {/* Problem & Solution Comparison */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-red-500/20 bg-red-950/10 p-4 text-xs sm:text-sm">
                  <span className="font-mono font-bold text-red-400 uppercase tracking-wider block mb-1">
                    ✕ The Problem
                  </span>
                  <p className="text-muted-foreground leading-relaxed">{flagshipProject.problem}</p>
                </div>
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-4 text-xs sm:text-sm">
                  <span className="font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                    ✓ The APIFIX Solution
                  </span>
                  <p className="text-muted-foreground leading-relaxed">
                    {flagshipProject.solution}
                  </p>
                </div>
              </div>

              {/* Visual Self-Healing Workflow Stepper */}
              {flagshipProject.workflow && (
                <div className="rounded-xl border border-foreground/10 bg-card-subtle/50 p-4 sm:p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Autonomous Self-Healing Lifecycle (8-Stage Pipeline)
                    </span>
                    <span className="font-mono text-[11px] text-accent">Real-Time AST Engine</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8 font-mono text-xs">
                    {flagshipProject.workflow.map((w) => (
                      <div
                        key={w.step}
                        className="rounded-lg border border-foreground/10 bg-card p-2.5 transition-colors hover:border-indigo-500/40"
                      >
                        <span className="text-[10px] font-bold text-accent block">{w.step}</span>
                        <div className="font-bold text-foreground truncate">{w.name}</div>
                        <div className="text-[10px] text-muted-foreground truncate">{w.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Highlights Metrics */}
              {flagshipProject.highlights && (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 font-mono">
                  {flagshipProject.highlights.map((h) => (
                    <div
                      key={h.label}
                      className="rounded-lg border border-foreground/10 bg-card p-3"
                    >
                      <div className="text-xs text-muted-foreground">{h.label}</div>
                      <div className="text-lg font-bold text-accent sm:text-xl">{h.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {flagshipProject.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-foreground/10 bg-card px-2.5 py-1 font-mono text-xs text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-foreground/10">
                <a
                  href={flagshipProject.links[0]?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.02]"
                >
                  <ExternalLink className="size-4" />
                  <span>Launch Live Platform</span>
                </a>

                {flagshipProject.links[1] && (
                  <a
                    href={flagshipProject.links[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-400 hover:bg-emerald-500/20 transition-all"
                  >
                    <Play className="size-3.5" />
                    <span>Interactive Demo</span>
                  </a>
                )}

                <Link
                  to="/projects/$slug"
                  params={{ slug: flagshipProject.slug }}
                  className="group inline-flex items-center gap-2 rounded-xl border border-foreground/15 bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      )}

      {/* Category Filter Tabs */}
      <Reveal className="mb-8">
        <div className="flex flex-wrap gap-2">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-foreground text-background shadow-md"
                    : "border border-foreground/10 bg-card text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Other Projects Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects
            .filter((p) => !(p.isFlagship && activeTab === "all"))
            .map((project) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group flex flex-col justify-between rounded-2xl border border-foreground/10 bg-card overflow-hidden shadow-sm transition-all hover:border-accent/40 hover:shadow-lg"
              >
                {/* Project Cover / Header */}
                <div>
                  {project.cover ? (
                    <div className="relative aspect-video w-full overflow-hidden bg-muted">
                      <img
                        src={project.cover}
                        alt={project.coverAlt || project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                    </div>
                  ) : (
                    <div className="h-3 bg-gradient-to-r from-accent to-accent-secondary" />
                  )}

                  <div className="p-6">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accent mb-2">
                      {project.eyebrow}
                    </p>

                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.title.split(" — ")[0]}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground font-medium">
                      {project.tagline}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Tech Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="rounded border border-foreground/10 bg-card-subtle px-2 py-0.5 font-mono text-[10px] text-foreground/70"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="rounded border border-foreground/10 bg-card-subtle px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                          +{project.tech.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Links */}
                <div className="flex items-center justify-between border-t border-foreground/5 bg-card-subtle/40 px-6 py-3.5">
                  <Link
                    to="/projects/$slug"
                    params={{ slug: project.slug }}
                    className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-accent"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>

                  <div className="flex items-center gap-3">
                    {project.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {l.label.toLowerCase().includes("github") ? (
                          <Github className="size-3.5" />
                        ) : (
                          <ExternalLink className="size-3.5" />
                        )}
                        <span>{l.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
