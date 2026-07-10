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

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  cover: string;
  coverAlt: string;
  eyebrow: string;
  tech: string[];
  bullets: string[];
  links: { label: string; href: string }[];
  video?: { provider: "youtube"; id: string };
  highlights?: { label: string; value: string }[];
  gallery?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "kala-ai",
    title: "Kala AI — AI-Powered Cultural Marketplace",
    tagline: "Full-stack AI marketplace connecting artisans to a global audience.",
    summary:
      "A full-stack AI-driven marketplace that empowers traditional artisans to connect with a global audience — eliminating intermediaries, breaking language barriers, and using AI to tell the story behind every handmade product.",
    cover: kalaAiImg,
    coverAlt: "Kala AI — abstract cultural marketplace illustration with interconnected motifs",
    eyebrow: "⭐ Featured · Team Project",
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "NLP APIs", "Vercel", "REST API"],
    bullets: [
      "Built on a three-tier architecture: React/Next.js frontend → Node.js/Express REST API → MongoDB, deployed on Vercel.",
      "Integrated NLP-based AI storytelling module that auto-generates culturally rich product descriptions with multilingual translation across 5 languages (EN/HI/TA/FR/ES) achieving ~92–96% accuracy.",
      "System achieved 99.94% uptime with sub-780ms API response times under 500 concurrent users in load simulation.",
      "Purchase conversion improved 169% vs. baseline in user engagement testing. Developed using Design Thinking methodology under Dr. A. Sampath Dakshina Murthy, VIIT(A).",
    ],
    links: [
      { label: "Live Demo", href: "https://kala-ai-1evf.vercel.app/" },
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
    tagline: "Chrome Manifest V3 extension that keeps students in the zone.",
    summary:
      "A Chrome browser extension that detects non-productive websites in real time and fires AI-powered motivational prompts to redirect attention and keep students in the zone.",
    cover: focus1,
    coverAlt: "Focus Shield dashboard screenshot",
    eyebrow: "🏆 Chrome Extension · ExtenHack 2026",
    tech: ["JavaScript", "HTML5", "CSS3", "Chrome APIs", "Manifest V3", "Chrome Storage API"],
    bullets: [
      "Blocks distracting websites with a customizable blocklist stored via the Chrome Storage API.",
      "Built-in Pomodoro timer, scheduled break windows, and a Hardcore Focus Mode that prevents easy overrides.",
      "Productivity analytics dashboard visualizes focused time, breaks, and blocked-site attempts.",
      "Implemented Chrome Manifest V3 — background service workers and content scripts — for permission-efficient real-time monitoring. Built with a 3-member team at ExtenHack 2026.",
    ],
    links: [
      { label: "GitHub Repo", href: "https://github.com/tejash47/focus-shield" },
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
    tagline: "Full-stack MERN classroom platform for teachers and students.",
    summary:
      "A modern full-stack classroom management system that helps teachers run classrooms, assignments, attendance, and student records through a clean, responsive interface — built with React + TypeScript on the frontend and Node/Express + MongoDB Atlas on the backend.",
    cover: dcdDashboard,
    coverAlt: "Digital Class Diary teacher dashboard",
    eyebrow: "MERN · Full-Stack",
    tech: ["React", "TypeScript", "Vite", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "Render"],
    bullets: [
      "Teacher dashboard for managing classrooms, assignments, attendance, and student records.",
      "Secure JWT-based authentication with unique per-teacher classroom codes for student onboarding.",
      "Responsive React + Vite frontend backed by an Express REST API and MongoDB Atlas via Mongoose.",
      "Deployed end-to-end on Render with environment-driven configuration.",
    ],
    links: [
      { label: "Live Demo", href: "https://digital-class-diary.onrender.com" },
      { label: "GitHub Repo", href: "https://github.com/tejash47/digital-class-diary" },
    ],
    highlights: [
      { label: "Stack", value: "MERN + TS" },
      { label: "Auth", value: "JWT" },
      { label: "DB", value: "Atlas" },
      { label: "Deploy", value: "Render" },
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
