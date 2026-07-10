import { motion } from "framer-motion";

const words = ["Kamada", "Sri", "Hari", "Siva", "Tejash"];

export function Hero() {
  return (
    <section id="top" className="relative mx-auto mb-32 max-w-7xl overflow-hidden px-6">
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-accent/30 blur-3xl"
      />

      <div className="relative flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/5 px-3 py-1 ring-1 ring-accent/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
            Open to Internships · Available Now
          </span>
        </motion.div>

        <h1 className="text-balance font-display text-4xl font-medium leading-[0.95] tracking-tight text-foreground md:text-6xl lg:text-7xl">
          <span className="sr-only">Kamada Sri Hari Siva Tejash</span>
          <span aria-hidden className="flex flex-wrap gap-x-4 gap-y-2">
            {words.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={i === words.length - 1 ? "text-accent" : ""}
              >
                {w}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-[52ch] font-mono text-sm uppercase tracking-widest text-foreground/70"
        >
          Third-year CS Student · AI Full Stack Engineer Intern
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="max-w-[58ch] text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Hands-on across the MERN stack, Java and Python. I ship full-stack applications
          end-to-end — from REST API architecture to production deployment — with a strong
          foundation in DSA and OOP.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-4 flex flex-wrap gap-4"
        >
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="inline-flex items-center rounded-sm bg-foreground py-2 pl-4 pr-4 text-sm font-medium text-background ring-1 ring-foreground"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-flex items-center rounded-sm border border-foreground/10 px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-foreground/5"
          >
            Get in Touch
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            href="/Tejash_Resume.docx"
            download
            className="inline-flex items-center rounded-sm border border-foreground/10 px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-foreground/5"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
