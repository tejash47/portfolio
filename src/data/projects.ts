import kalaAiImg from "@/assets/kala-ai.jpg";

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
    cover: kalaAiImg,
    coverAlt: "Focus Shield extension banner",
    eyebrow: "🏆 Chrome Extension · ExtenHack 2026",
    tech: ["JavaScript", "HTML5", "CSS3", "Chrome APIs", "Manifest V3", "AI Tools"],
    bullets: [
      "Implemented Chrome Manifest V3 APIs — background service workers and content scripts — for real-time, permission-efficient site monitoring.",
      "AI-generated motivational prompts injected dynamically when distraction sites are detected.",
      "Zero external dependencies; extension size under 50KB for instant install. Built with a 3-member team at ExtenHack 2026.",
    ],
    links: [
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
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
