import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal, Stagger, item } from "./Reveal";
import { projects } from "@/data/projects";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded border border-foreground/5 bg-foreground/5 px-2 py-1 font-mono text-[11px] text-foreground/70">
      {children}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="size-4 shrink-0 transition-transform group-hover:translate-x-1"
    >
      <path
        fillRule="evenodd"
        d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="mx-auto mb-32 max-w-7xl px-6">
      <Reveal>
        <div className="mb-12 flex items-baseline justify-between border-b border-foreground/5 pb-6">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            Featured Projects
          </h2>
          <span className="font-mono text-sm text-muted-foreground/70">[ what I've built ]</span>
        </div>
      </Reveal>

      {/* Featured */}
      <div className="mb-24 grid grid-cols-1 items-start gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <Link
            to="/projects/$slug"
            params={{ slug: featured.slug }}
            className="group block overflow-hidden rounded-[min(1vw,12px)] ring-1 ring-black/5"
          >
            <motion.img
              src={featured.cover}
              alt={featured.coverAlt}
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </Link>
        </Reveal>

        <div className="brutalist-border flex flex-col gap-6 pl-8 md:col-span-5">
          <Reveal className="space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
              {featured.eyebrow}
            </p>
            <h3 className="font-display text-2xl font-medium text-foreground">
              {featured.title}
            </h3>
            <p className="max-w-[46ch] text-pretty leading-relaxed text-muted-foreground">
              {featured.summary}
            </p>
          </Reveal>

          <Stagger className="flex flex-wrap gap-2">
            {featured.tech.map((t) => (
              <motion.span key={t} variants={item}>
                <Chip>{t}</Chip>
              </motion.span>
            ))}
          </Stagger>

          <Reveal>
            <Link
              to="/projects/$slug"
              params={{ slug: featured.slug }}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              View case study & demo video
              <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Rest */}
      <Stagger className="grid grid-cols-1 gap-8">
        {rest.map((p) => (
          <motion.article
            key={p.slug}
            variants={item}
            className="brutalist-border group flex flex-col gap-4 pl-8"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
              {p.eyebrow}
            </p>
            <h3 className="font-display text-xl font-medium text-foreground">{p.title}</h3>
            <p className="max-w-[70ch] text-pretty leading-relaxed text-muted-foreground">
              {p.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              View case study
              <ArrowIcon />
            </Link>
          </motion.article>
        ))}
      </Stagger>
    </section>
  );
}
