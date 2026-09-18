import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Play,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  Terminal,
  Activity,
  CheckCircle2,
} from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Contact";
import { Reveal, Stagger, item } from "@/components/portfolio/Reveal";
import { GalleryCarousel } from "@/components/portfolio/GalleryCarousel";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project Not Found — Kamada Tejash" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Kamada Tejash`;
    return {
      meta: [
        { title },
        { name: "description", content: project.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: project.tagline },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main className="pb-24 pt-28 sm:pt-32">
        <article className="mx-auto max-w-5xl px-6">
          {/* Back to Work link */}
          <Reveal>
            <Link
              to="/"
              hash="projects"
              className="group mb-8 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-accent"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              Back to all projects
            </Link>
          </Reveal>

          {/* Eyebrow & Status */}
          <Reveal delay={0.05}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                {project.eyebrow}
              </span>
              {project.isFlagship && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live Platform
                </span>
              )}
            </div>
          </Reveal>

          {/* Title & Tagline */}
          <Reveal delay={0.1}>
            <h1 className="text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl font-medium">
              {project.tagline}
            </p>
          </Reveal>

          {/* Action Links Bar */}
          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                    link.isPrimary
                      ? "bg-accent text-accent-foreground shadow-md shadow-accent/20 hover:scale-[1.02]"
                      : "border border-foreground/15 bg-card text-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  {link.label.toLowerCase().includes("github") ? (
                    <Github className="size-4" />
                  ) : link.label.toLowerCase().includes("demo") ? (
                    <Play className="size-4 text-emerald-400" />
                  ) : (
                    <ExternalLink className="size-4" />
                  )}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Key Metrics / Highlights */}
          {project.highlights && (
            <Stagger className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
              {project.highlights.map((h) => (
                <motion.div
                  key={h.label}
                  variants={item}
                  className="rounded-xl border border-foreground/10 bg-card p-4 transition-colors hover:border-accent/40"
                >
                  <div className="font-display text-2xl font-extrabold text-accent sm:text-3xl">
                    {h.value}
                  </div>
                  <div className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {h.label}
                  </div>
                </motion.div>
              ))}
            </Stagger>
          )}

          {/* Problem vs Solution Comparison Card */}
          {(project.problem || project.solution) && (
            <section className="mt-12">
              <Reveal>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {project.problem && (
                    <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-6 space-y-3">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-400 uppercase tracking-wider">
                        <span>✕ The Engineering Challenge</span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.problem}
                      </p>
                    </div>
                  )}

                  {project.solution && (
                    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-6 space-y-3">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        <span>✓ The Implemented Architecture</span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.solution}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            </section>
          )}

          {/* Embedded Video (e.g. Kala AI) */}
          {project.video && (
            <Reveal delay={0.25} className="mt-12">
              <div className="overflow-hidden rounded-2xl border border-foreground/15 shadow-xl bg-black">
                <div className="relative aspect-video w-full">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${project.video.id}?rel=0`}
                    title={`${project.title} live demonstration video`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <p className="mt-3 text-center font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                ▶ Interactive Product Walkthrough Video
              </p>
            </Reveal>
          )}

          {/* Workflow Stepper Diagram (APIFIX AI special) */}
          {project.workflow && (
            <section className="mt-14">
              <Reveal>
                <div className="rounded-2xl border border-foreground/10 bg-card p-6 sm:p-8">
                  <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline border-b border-foreground/10 pb-4">
                    <h2 className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
                      <Cpu className="size-5 text-accent" />
                      Autonomous Self-Healing Lifecycle
                    </h2>
                    <span className="font-mono text-xs text-muted-foreground">
                      8-Stage State Transition Engine
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 font-mono text-xs">
                    {project.workflow.map((w) => (
                      <div
                        key={w.step}
                        className="rounded-xl border border-foreground/10 bg-card-subtle p-3.5 space-y-1 transition-colors hover:border-accent/40"
                      >
                        <span className="font-bold text-accent">{w.step}</span>
                        <h4 className="font-bold text-foreground">{w.name}</h4>
                        <p className="text-[11px] text-muted-foreground leading-snug">{w.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>
          )}

          {/* Screenshots Gallery (Focus Shield, Digital Class Diary) */}
          {project.gallery && project.gallery.length > 0 && (
            <section className="mt-14">
              <Reveal>
                <div className="mb-6 flex items-baseline justify-between border-b border-foreground/10 pb-3">
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Interface & Architecture Gallery
                  </h2>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    [ Project Screenshots ]
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <GalleryCarousel items={project.gallery} />
              </Reveal>
            </section>
          )}

          {/* Engineering Deep Dive & Stack Details */}
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-12 items-start">
            <div className="md:col-span-8">
              <Reveal>
                <h2 className="mb-6 border-b border-foreground/10 pb-3 font-display text-2xl font-bold text-foreground">
                  Key Technical Implementations
                </h2>
              </Reveal>

              <Stagger className="space-y-4">
                {project.bullets.map((bullet) => (
                  <motion.div
                    key={bullet}
                    variants={item}
                    className="flex gap-3 text-sm sm:text-base leading-relaxed text-foreground/90"
                  >
                    <CheckCircle2 className="mt-1 size-4.5 flex-shrink-0 text-accent" />
                    <span>{bullet}</span>
                  </motion.div>
                ))}
              </Stagger>
            </div>

            <aside className="space-y-6 md:col-span-4">
              <Reveal>
                <div className="rounded-2xl border border-foreground/10 bg-card p-6">
                  <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-foreground/10 bg-card-subtle px-2.5 py-1 font-mono text-xs text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-foreground/10 space-y-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-foreground/5 hover:text-accent"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="size-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>

          {/* Next Project Footer Switcher */}
          <Reveal>
            <div className="mt-20 flex flex-col gap-4 border-t border-foreground/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Explore Other Projects
              </span>
              <div className="flex flex-wrap gap-4">
                {projects
                  .filter((p) => p.slug !== project.slug)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      to="/projects/$slug"
                      params={{ slug: p.slug }}
                      className="group inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                    >
                      <span>{p.title.split(" — ")[0]}</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
              </div>
            </div>
          </Reveal>
        </article>
      </main>

      <Footer />
    </div>
  );
}

function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-40 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Error / 404</p>
        <h1 className="mt-4 font-display text-4xl font-bold">Project Not Found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The requested case study could not be located.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
