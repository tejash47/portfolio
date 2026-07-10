import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
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
          { title: "Project not found — Tejash" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Kamada Sri Hari Siva Tejash`;
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

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="size-4 transition-transform group-hover:translate-x-1">
      <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
    </svg>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pb-24 pt-32">
        <article className="mx-auto max-w-5xl px-6">
          <Reveal>
            <Link
              to="/"
              hash="projects"
              className="group mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Back to work
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">
              {project.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-[60ch] text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              {project.summary}
            </p>
          </Reveal>

          {project.video && (
            <Reveal delay={0.3}>
              <div className="mt-12 overflow-hidden rounded-lg ring-1 ring-foreground/10">
                <div className="relative aspect-video w-full bg-black">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${project.video.id}?rel=0`}
                    title={`${project.title} demo video`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                ▶ Live product demo
              </p>
            </Reveal>
          )}

          {project.highlights && (
            <Stagger className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
              {project.highlights.map((h: { label: string; value: string }) => (
                <motion.div
                  key={h.label}
                  variants={item}
                  className="brutalist-border pl-5"
                >
                  <div className="font-display text-3xl font-medium text-accent">{h.value}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {h.label}
                  </div>
                </motion.div>
              ))}
            </Stagger>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <section className="mt-20">
              <Reveal>
                <div className="mb-6 flex items-baseline justify-between border-b border-foreground/5 pb-3">
                  <h2 className="font-display text-2xl font-medium">Screenshots</h2>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    [ from the README ]
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <GalleryCarousel items={project.gallery} />
              </Reveal>
            </section>
          )}

          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <Reveal>
                <h2 className="mb-6 border-b border-foreground/5 pb-3 font-display text-2xl font-medium">
                  What I built
                </h2>
              </Reveal>
              <Stagger className="space-y-4">
                {project.bullets.map((b: string) => (
                  <motion.div
                    key={b}
                    variants={item}
                    className="flex gap-3 text-base leading-relaxed text-foreground/80"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    <span>{b}</span>
                  </motion.div>
                ))}
              </Stagger>
            </div>

            <aside className="md:col-span-4">
              <Reveal>
                <h3 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t: string) => (
                    <span
                      key={t}
                      className="rounded border border-foreground/10 bg-foreground/5 px-2 py-1 font-mono text-[11px] text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 space-y-3">
                  {project.links.map((l: { label: string; href: string }) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between border-b border-foreground/10 py-2 text-sm font-semibold text-foreground hover:text-accent"
                    >
                      <span>{l.label}</span>
                      <ArrowIcon />
                    </a>
                  ))}
                </div>
              </Reveal>
            </aside>
          </div>

          <Reveal>
            <div className="mt-24 flex items-center justify-between border-t border-foreground/10 pt-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                More work
              </span>
              <div className="flex gap-6">
                {projects
                  .filter((p) => p.slug !== project.slug)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      to="/projects/$slug"
                      params={{ slug: p.slug }}
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-accent"
                    >
                      {p.title.split(" — ")[0]}
                      <ArrowIcon />
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
        <p className="font-mono text-xs uppercase tracking-widest text-accent">404</p>
        <h1 className="mt-4 font-display text-4xl font-medium">Project not found</h1>
        <Link to="/" className="mt-8 inline-block text-accent underline">
          Back home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
