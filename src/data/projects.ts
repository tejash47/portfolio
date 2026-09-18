import kalaAiImg from "@/assets/kala-ai.jpg";
import focus1 from "@/assets/projects/focus-1.png";
import focus2 from "@/assets/projects/focus-2.png";
import focus3 from "@/assets/projects/focus-3.png";
import focus4 from "@/assets/projects/focus-4.png";
import focus5 from "@/assets/projects/focus-5.png";
import focus6 from "@/assets/projects/focus-6.png";
import dcdHome from "@/assets/projects/dcd-home.png";
import dcdDashboard from "@/assets/projects/dcd-dashboard.png";
import dcdClass from "@/assets/projects/dcd-class.png";
import dcdTeacher from "@/assets/projects/dcd-teacher.png";
import dcdLogin from "@/assets/projects/dcd-login.png";

export type ProjectCategory = "all" | "ai-devtools" | "fullstack" | "extensions";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  cover?: string;
  coverAlt?: string;
  eyebrow: string;
  category: ProjectCategory;
  isFlagship?: boolean;
  problem?: string;
  solution?: string;
  tech: string[];
  bullets: string[];
  links: { label: string; href: string; isPrimary?: boolean }[];
  video?: { provider: "youtube"; id: string };
  highlights?: { label: string; value: string }[];
  gallery?: { src: string; alt: string }[];
  workflow?: { step: string; name: string; desc: string }[];
};

export const projects: Project[] = [
  {
    slug: "apifix-ai",
    title: "APIFIX AI — Autonomous API Reliability & Self-Repair Platform",
    tagline:
      "Autonomous AI reliability engineer that detects failures, traces root causes, generates safe AST patches, and verifies fixes in ephemeral sandboxes.",
    summary:
      "A production-grade developer platform built to eliminate on-call alert fatigue and multi-hour MTTR. APIFIX autonomously scans REST endpoints, intercepts runtime crash stack traces, reasons through failures with a 3-tier multi-provider AI cascade (Groq → Claude → GPT-4o), and validates generated patches inside ephemeral dynamic port sandboxes before opening pull requests.",
    eyebrow: "⚡ Flagship Project · AI Developer Tools",
    category: "ai-devtools",
    isFlagship: true,
    problem:
      "Software teams lose hundreds of engineering hours debugging preventable runtime null pointers, broken REST contracts, and backend exceptions during incident response — often deploying untested hotfixes directly to production at 3 AM.",
    solution:
      "APIFIX AI replaces manual triage with an autonomous self-healing loop: from real-time endpoint probing and AST-level root cause diagnosis to sandboxed verification on ephemeral TCP ports and automated GitHub PR creation.",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Node.js",
      "Babel AST",
      "Groq (Llama 3.3 70B)",
      "Claude 3.5 Sonnet",
      "OpenAI GPT-4o",
      "Supabase (PostgreSQL)",
      "Stripe",
      "Tailwind CSS",
      "Vercel",
    ],
    bullets: [
      "Designed an autonomous 8-stage self-healing lifecycle: Discover → Detect (500) → AST Investigation → Syntax-Safe Patch → Governance Gate → Ephemeral Port Sandbox → Regression Suite → Canary PR.",
      "Engineered a high-resilience 3-tier AI Fallback Cascade: primary ultra-fast inference via Groq Llama 3.3 70B with automated circuit-breaker failover to Claude 3.5 Sonnet and GPT-4o for complex reasoning.",
      "Built ephemeral dynamic TCP port sandboxing in isolated runtime environments to validate syntax changes with automated probe requests and regression suites before touching branches.",
      "Implemented strict zero-secret regex redaction sanitizing Bearer tokens, Stripe keys, and credentials prior to AI prompt injection or telemetry logging, backed by an immutable SHA-256 Merkle audit trail.",
    ],
    links: [
      { label: "Live Platform", href: "https://apifix-ai.vercel.app/", isPrimary: true },
      { label: "Interactive Demo", href: "https://apifix-ai.vercel.app/dashboard?demo=true" },
    ],
    highlights: [
      { label: "p95 Latency", value: "<15ms" },
      { label: "AI Cascade", value: "3 Tiers" },
      { label: "Audit Chain", value: "SHA-256" },
      { label: "Tenant Isolation", value: "100% RLS" },
    ],
    workflow: [
      { step: "01", name: "Discover", desc: "Static AST & TCP Probe" },
      { step: "02", name: "Detect", desc: "Runtime 500 Captured" },
      { step: "03", name: "Investigate", desc: "Multi-AI Root Cause" },
      { step: "04", name: "AST Patch", desc: "Syntax-Safe Code Diff" },
      { step: "05", name: "Govern", desc: "Risk Policy Scoring" },
      { step: "06", name: "Sandbox", desc: "Ephemeral Port Probe" },
      { step: "07", name: "Verify", desc: "Regression Pass" },
      { step: "08", name: "Deploy", desc: "Git PR & Canary" },
    ],
  },
  {
    slug: "kala-ai",
    title: "Kala AI — AI-Powered Cultural Marketplace",
    tagline:
      "Full-stack AI marketplace empowering traditional artisans with multilingual AI storytelling.",
    summary:
      "A full-stack AI-driven marketplace that empowers traditional artisans to connect with a global audience — eliminating intermediaries, breaking language barriers, and using AI to tell the story behind every handmade product.",
    cover: kalaAiImg,
    coverAlt: "Kala AI — cultural marketplace illustration with interconnected motifs",
    eyebrow: "⭐ Featured · Full-Stack & AI",
    category: "fullstack",
    problem:
      "Traditional Indian artisans often lack access to international digital commerce and struggle with language barriers, resulting in heavy reliance on intermediaries and low profit margins.",
    solution:
      "An end-to-end e-commerce platform that pairs modern full-stack web architecture with multilingual NLP AI agents to auto-generate culturally resonant product narratives in 5 languages.",
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "NLP APIs",
      "Vercel",
      "REST API",
    ],
    bullets: [
      "Built on a three-tier architecture: React/Next.js frontend → Node.js/Express REST API → MongoDB, deployed on Vercel.",
      "Integrated NLP-based AI storytelling module that auto-generates culturally rich product descriptions with multilingual translation across 5 languages (EN/HI/TA/FR/ES) achieving ~92–96% accuracy.",
      "System achieved 99.94% uptime with sub-780ms API response times under 500 concurrent users in load simulation.",
      "Purchase conversion improved 169% vs. baseline in user engagement testing. Developed using Design Thinking methodology under Dr. A. Sampath Dakshina Murthy, VIIT(A).",
    ],
    links: [
      { label: "Live Demo", href: "https://kala-ai-1evf.vercel.app/", isPrimary: true },
      { label: "Dashboard", href: "https://kala-ai-1evf.vercel.app/dashboard" },
    ],
    video: { provider: "youtube", id: "3Lzlm6qf7hI" },
    highlights: [
      { label: "Uptime", value: "99.94%" },
      { label: "API latency", value: "<780ms" },
      { label: "Conversion lift", value: "+169%" },
      { label: "Languages", value: "5" },
    ],
  },
  {
    slug: "focus-shield",
    title: "Focus Shield — Productivity Browser Extension",
    tagline:
      "Chrome Manifest V3 extension with real-time distraction defense and Pomodoro workflows.",
    summary:
      "A lightweight, zero-dependency Chrome browser extension that detects non-productive websites in real time and fires AI-powered motivational prompts to redirect attention and keep students in the zone.",
    cover: focus1,
    coverAlt: "Focus Shield dashboard screenshot",
    eyebrow: "🏆 Hackathon Project · ExtenHack 2026",
    category: "extensions",
    problem:
      "Students and developers lose deep focus due to compulsive browsing on social media and video platforms without timely interruption or accountability.",
    solution:
      "A client-side Manifest V3 extension featuring customizable dynamic blocklists, hardcore non-bypassable focus modes, and privacy-preserving local storage analytics.",
    tech: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Chrome Extension APIs",
      "Manifest V3",
      "Chrome Storage API",
    ],
    bullets: [
      "Blocks distracting websites with a customizable blocklist stored locally via the Chrome Storage API.",
      "Built-in Pomodoro timer, scheduled break windows, and a Hardcore Focus Mode that prevents easy overrides.",
      "Productivity analytics dashboard visualizes focused time, breaks, and blocked-site attempts.",
      "Implemented Chrome Manifest V3 background service workers and content scripts for permission-efficient real-time monitoring. Built with a 3-member team at ExtenHack 2026.",
    ],
    links: [
      { label: "GitHub Repo", href: "https://github.com/tejash47/focus-shield", isPrimary: true },
      {
        label: "View Certificate",
        href: "https://drive.google.com/file/d/1misWefJ3Ms7vPUCJRvzQXMgTd2b67aVW/view",
      },
    ],
    highlights: [
      { label: "Bundle size", value: "<50KB" },
      { label: "Dependencies", value: "0" },
      { label: "Team", value: "3 devs" },
      { label: "Event", value: "ExtenHack '26" },
    ],
    gallery: [
      { src: focus1, alt: "Focus Shield main dashboard" },
      { src: focus2, alt: "Focus Shield popup interface" },
      { src: focus3, alt: "Focus Shield settings" },
      { src: focus4, alt: "Focus Shield blocklist" },
      { src: focus5, alt: "Focus Shield analytics" },
      { src: focus6, alt: "Focus Shield focus mode" },
    ],
  },
  {
    slug: "digital-class-diary",
    title: "Digital Class Diary — Classroom Management System",
    tagline:
      "Full-stack MERN platform for teachers and students with JWT auth and classroom codes.",
    summary:
      "A modern full-stack classroom management system that helps teachers run classrooms, assignments, attendance, and student records through a clean, responsive interface — built with React + TypeScript on the frontend and Node/Express + MongoDB Atlas on the backend.",
    cover: dcdDashboard,
    coverAlt: "Digital Class Diary teacher dashboard",
    eyebrow: "Full-Stack · MERN + TS",
    category: "fullstack",
    problem:
      "Managing academic records, attendance rosters, and assignments across fragmented physical sheets leads to lost data and inefficient teacher-student coordination.",
    solution:
      "A unified full-stack MERN application providing role-based portals with unique alphanumeric teacher codes for instant classroom enrollment.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Mongoose",
      "Render",
    ],
    bullets: [
      "Teacher dashboard for managing classrooms, assignments, attendance, and student records in real time.",
      "Secure JWT-based authentication with unique per-teacher classroom codes for fast student onboarding.",
      "Responsive React + Vite frontend backed by a modular Express REST API and MongoDB Atlas via Mongoose.",
      "Deployed end-to-end on Render with environment-driven configuration and CORS security.",
    ],
    links: [
      { label: "Live Demo", href: "https://digital-class-diary.onrender.com", isPrimary: true },
      { label: "GitHub Repo", href: "https://github.com/tejash47/digital-class-diary" },
    ],
    highlights: [
      { label: "Stack", value: "MERN + TS" },
      { label: "Auth", value: "JWT" },
      { label: "Database", value: "Atlas" },
      { label: "Hosting", value: "Render" },
    ],
    gallery: [
      { src: dcdHome, alt: "Digital Class Diary home page" },
      { src: dcdDashboard, alt: "Teacher dashboard" },
      { src: dcdClass, alt: "Classroom view" },
      { src: dcdTeacher, alt: "Unique teacher code" },
      { src: dcdLogin, alt: "Login page" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
