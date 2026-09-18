import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Github,
  Mail,
  Sparkles,
  Terminal,
  Code2,
  Cpu,
  Activity,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Play,
  Layers,
  Server,
} from "lucide-react";

export function Hero() {
  const [activeConsoleTab, setActiveConsoleTab] = useState<"stream" | "cascade" | "telemetry">(
    "stream",
  );
  const [streamStep, setStreamStep] = useState(0);

  const streamLogs = [
    {
      time: "12:04:18",
      type: "PROBE",
      color: "text-amber-400",
      msg: "POST /api/v1/checkout -> Intercepted HTTP 500",
    },
    {
      time: "12:04:19",
      type: "AST_DIAG",
      color: "text-indigo-400",
      msg: "Babel AST root trace: TypeError (undefined 'status')",
    },
    {
      time: "12:04:20",
      type: "AI_PATCH",
      color: "text-purple-400",
      msg: "Groq (Llama 3.3 70B) synthesized null-safe fix",
    },
    {
      time: "12:04:21",
      type: "SANDBOX",
      color: "text-emerald-400",
      msg: "Ephemeral port 54321 probe verified: HTTP 200 OK",
    },
    {
      time: "12:04:22",
      type: "MERKLE",
      color: "text-cyan-400",
      msg: "SHA-256 audit ledger signed -> PR #47 generated",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStreamStep((prev) => (prev + 1) % (streamLogs.length + 1));
    }, 2400);
    return () => clearInterval(interval);
  }, [streamLogs.length]);

  return (
    <section
      id="top"
      className="relative mx-auto mb-24 max-w-7xl px-6 pt-8 md:pt-14 overflow-visible"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-[550px] w-[550px] rounded-full bg-indigo-600/15 blur-[140px] dark:bg-indigo-500/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-60 h-[450px] w-[450px] rounded-full bg-emerald-600/10 blur-[130px] dark:bg-emerald-500/15"
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
        {/* Left Column (7 cols): Name, Positioning, Bio, CTAs */}
        <div className="flex flex-col gap-6 lg:col-span-7">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Open to Internships & Collaborations
            </span>
          </motion.div>

          {/* Main Name & Title */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground"
            >
              <Terminal className="size-3.5 text-accent" />
              <span>Kamada Sri Hari Siva Tejash</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-balance font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl"
            >
              Kamada{" "}
              <span className="bg-gradient-to-r from-accent via-indigo-400 to-accent-secondary bg-clip-text text-transparent">
                Tejash
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-base font-semibold text-foreground/90 sm:text-lg md:text-xl"
            >
              <span className="text-accent">AI Full-Stack Engineer</span>
              <span className="text-muted-foreground/40">•</span>
              <span>Software Developer</span>
              <span className="text-muted-foreground/40">•</span>
              <span className="text-accent-secondary">Problem Solver</span>
            </motion.div>
          </div>

          {/* Value Proposition Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg"
          >
            Computer Science student building{" "}
            <span className="font-semibold text-foreground">
              intelligent AI-powered applications
            </span>
            , <span className="font-semibold text-foreground">autonomous developer tools</span>, and{" "}
            <span className="font-semibold text-foreground">resilient full-stack systems</span>.
            Shipped production apps across the MERN/Next.js stack, AST-driven self-healing engines,
            and high-performance browser extensions with a strong foundation in algorithms and
            systems architecture.
          </motion.p>

          {/* Feature Pill Tags */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs"
          >
            <span className="inline-flex items-center gap-1.5 rounded-md border border-foreground/10 bg-card px-2.5 py-1 text-muted-foreground">
              <Cpu className="size-3.5 text-accent" /> Autonomous AI & LLMs
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-foreground/10 bg-card px-2.5 py-1 text-muted-foreground">
              <Code2 className="size-3.5 text-accent-secondary" /> React, Next.js & TS
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-foreground/10 bg-card px-2.5 py-1 text-muted-foreground">
              <Sparkles className="size-3.5 text-amber-400" /> API Reliability & AST
            </span>
          </motion.div>

          {/* Action Button CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 pt-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:scale-[1.02] hover:opacity-95"
            >
              <span>View Projects</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/Kamada Tejash.docx"
              download="Kamada_Tejash_Resume.docx"
              className="inline-flex items-center gap-2 rounded-xl border border-foreground/15 bg-card px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:bg-card/80 hover:text-accent shadow-sm"
            >
              <FileText className="size-4" />
              <span>Download Resume</span>
            </a>

            <a
              href="https://github.com/tejash47"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-foreground/15 bg-card px-4 py-3 text-sm font-semibold text-foreground transition-all hover:border-foreground/40 hover:bg-card/80 shadow-sm"
            >
              <Github className="size-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-foreground/15 bg-card px-4 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent shadow-sm"
            >
              <Mail className="size-4" />
              <span className="hidden sm:inline">Contact</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column (5 cols): Interactive AI System Telemetry & Architecture Terminal */}
        <div className="relative lg:col-span-5">
          {/* Floating Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute -top-5 right-2 z-20 hidden sm:flex items-center gap-1.5 rounded-lg border border-indigo-500/40 bg-card/95 backdrop-blur-md px-3 py-1.5 shadow-lg font-mono text-[11px] text-indigo-300"
          >
            <Zap className="size-3 text-indigo-400" />
            <span>AST Patch Engine · 0 Regressions</span>
          </motion.div>

          {/* Main Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-[#090d16] p-5 shadow-2xl shadow-indigo-500/10 ring-1 ring-white/10"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-500/80" />
                  <span className="size-2.5 rounded-full bg-yellow-500/80" />
                  <span className="size-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  apifix-daemon.ts
                </span>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>ONLINE · Port 54321</span>
              </div>
            </div>

            {/* Interactive Console Tabs */}
            <div className="flex gap-1.5 mb-4 border-b border-white/5 pb-2">
              <button
                type="button"
                onClick={() => setActiveConsoleTab("stream")}
                className={`rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold transition-all ${
                  activeConsoleTab === "stream"
                    ? "bg-accent/20 text-accent border border-accent/40"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Self-Healing Stream
              </button>
              <button
                type="button"
                onClick={() => setActiveConsoleTab("cascade")}
                className={`rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold transition-all ${
                  activeConsoleTab === "cascade"
                    ? "bg-accent/20 text-accent border border-accent/40"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                AI Cascade
              </button>
              <button
                type="button"
                onClick={() => setActiveConsoleTab("telemetry")}
                className={`rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold transition-all ${
                  activeConsoleTab === "telemetry"
                    ? "bg-accent/20 text-accent border border-accent/40"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Telemetry
              </button>
            </div>

            {/* Tab Content Display */}
            <div className="min-h-[200px] font-mono text-xs">
              <AnimatePresence mode="wait">
                {activeConsoleTab === "stream" && (
                  <motion.div
                    key="stream"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2.5"
                  >
                    {streamLogs.map((log, idx) => (
                      <div
                        key={log.msg}
                        className={`flex items-start gap-2 text-[11px] leading-relaxed transition-opacity ${
                          idx <= streamStep ? "opacity-100" : "opacity-30"
                        }`}
                      >
                        <span className="text-muted-foreground/60 select-none">[{log.time}]</span>
                        <span className={`font-bold ${log.color} shrink-0`}>{log.type}:</span>
                        <span className="text-slate-200">{log.msg}</span>
                      </div>
                    ))}
                    <div className="pt-2 flex items-center gap-1.5 text-indigo-400 text-[11px]">
                      <span className="animate-pulse">❯</span>
                      <span className="animate-pulse">Listening for incoming TCP traffic...</span>
                    </div>
                  </motion.div>
                )}

                {activeConsoleTab === "cascade" && (
                  <motion.div
                    key="cascade"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/20 p-2.5 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-emerald-400 text-xs">
                          Tier 1: Groq Llama 3.3 70B
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          Ultra-fast primary AST patch generator
                        </div>
                      </div>
                      <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                        11.8ms (ACTIVE)
                      </span>
                    </div>

                    <div className="rounded-lg border border-indigo-500/20 bg-card p-2.5 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-indigo-300 text-xs">
                          Tier 2: Claude 3.5 Sonnet
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          Deep architectural & multi-file reasoning
                        </div>
                      </div>
                      <span className="rounded bg-indigo-500/10 px-2 py-0.5 text-[10px] font-bold text-indigo-400">
                        STANDBY
                      </span>
                    </div>

                    <div className="rounded-lg border border-purple-500/20 bg-card p-2.5 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-purple-300 text-xs">
                          Tier 3: OpenAI GPT-4o
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          Complex contract failover resolution
                        </div>
                      </div>
                      <span className="rounded bg-purple-500/10 px-2 py-0.5 text-[10px] font-bold text-purple-400">
                        STANDBY
                      </span>
                    </div>
                  </motion.div>
                )}

                {activeConsoleTab === "telemetry" && (
                  <motion.div
                    key="telemetry"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-2 gap-2.5"
                  >
                    <div className="rounded-lg border border-foreground/10 bg-card p-3">
                      <span className="text-[10px] text-muted-foreground block">
                        p95 Response Latency
                      </span>
                      <span className="text-lg font-bold text-emerald-400">12.4 ms</span>
                    </div>

                    <div className="rounded-lg border border-foreground/10 bg-card p-3">
                      <span className="text-[10px] text-muted-foreground block">
                        AST Patch Validity
                      </span>
                      <span className="text-lg font-bold text-indigo-400">100% Passed</span>
                    </div>

                    <div className="rounded-lg border border-foreground/10 bg-card p-3">
                      <span className="text-[10px] text-muted-foreground block">
                        Secret Leak Prevention
                      </span>
                      <span className="text-lg font-bold text-amber-400">0 Redacted</span>
                    </div>

                    <div className="rounded-lg border border-foreground/10 bg-card p-3">
                      <span className="text-[10px] text-muted-foreground block">
                        Ephemeral Sandboxes
                      </span>
                      <span className="text-lg font-bold text-purple-400">28 Verified</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Card Footer with Mini Action */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Activity className="size-3 text-emerald-400" />
                <span>Live Autonomous Loop</span>
              </span>
              <a
                href="https://apifix-ai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline flex items-center gap-1"
              >
                <span>Explore APIFIX AI</span>
                <ArrowRight className="size-3" />
              </a>
            </div>
          </motion.div>

          {/* Floating Bottom Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -bottom-5 left-2 z-20 hidden sm:flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-card/95 backdrop-blur-md px-3 py-1.5 shadow-lg font-mono text-[11px] text-emerald-300"
          >
            <ShieldCheck className="size-3.5 text-emerald-400" />
            <span>Zero-Secret Redaction · SHA-256</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
