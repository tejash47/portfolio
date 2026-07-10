## Import content from kamada-tejash.vercel.app

Overwrite the current portfolio copy/data with the content scraped from your existing site, keeping the Brutalist accent design + dark mode already built.

### Content changes

**Hero** (`Hero.tsx`)
- Eyebrow: "CSE Undergrad @ VIIT Visakhapatnam"
- Name: Kamada Sri Hari Siva Tejash
- Tagline: "Software Developer · AI Enthusiast · Problem Solver"
- Description: "Building AI-integrated applications and browser extensions that solve real-world problems. Proficient in C++, Java, Python and full-stack web development. Open to internships and collaborative projects."
- CTAs: "View Projects" → `#projects`, "Get in Touch" → `#contact`

**About** (new section between Hero and Experience)
- Heading "About Me", eyebrow "Who I Am"
- Body copy from the source site (VIIT 2024–2028, CGPA 8.22, tech foundation, certifications)
- Stat tiles: `8.22 CGPA at VIIT`, `5+ Certifications`, `2 Projects Shipped`, `1 Hackathon`

**Skills** (`Skills.tsx`) — replace clusters with the 6 groups:
- Languages: C, C++, Java, Python, SQL
- Web & Frontend: HTML5, CSS3, JavaScript, React.js
- Frameworks & Libraries: Django, Flask, Node.js, Express.js, STL
- Databases & Backend: MySQL, MongoDB, Firebase, REST APIs
- AI & Tools: NLP APIs, Prompt Engineering, Gen AI Tools
- Dev Tools: Git, GitHub, VS Code, Vercel, Postman, MS Office

**Projects** (`Projects.tsx`) — replace with two entries:
1. **Kala AI — AI-Powered Cultural Marketplace** (Featured · Team). Full description + 4 bullet metrics (99.94% uptime, ~780ms API, 169% conversion lift, 5-language NLP 92–96% accuracy). Stack chips: React.js, Next.js, Node.js, Express.js, MongoDB, NLP APIs, Vercel, REST API. Links: Live Demo, Dashboard. Keep existing `kala-ai.jpg` art.
2. **Focus Shield — Productivity Browser Extension** (Chrome Extension). Bullets on Manifest V3, AI prompts, <50KB size, ExtenHack 2026. Chips: JavaScript, HTML5, CSS3, Chrome APIs, Manifest V3, AI Tools. Link: Certificate.
- Remove the third "Digital Class Diary" project (not on source site).

**Experience** (`Experience.tsx`)
- Source site has no internship section, so replace this section with an **Education** timeline instead:
  - VIIT — B.Tech CSE, Visakhapatnam · 8.22 CGPA · 2024–2028
  - Sr. Junior College — Intermediate, SSC Board · 815 · 2022–2024
  - St. Joseph's Secondary School — ICSE · 859 · 2021–2022
- Rename nav link "Experience" → "Education".

**Credentials** (`Credentials.tsx`) — replace with 3 certification cards:
- Nov 2025 — Python Programming (Basics, Data Analysis, Django/Flask, Automation) · LOA link
- Aug 2025 — Java Programming (Syntax, OOP, Web Dev, Frameworks) · Certificate, LOR, LOA links
- Jun 2025 — C++ Programming (OOP, STL, Core C++) · Certificate link

**Contact** (`Contact.tsx`)
- Heading "Open to Internships & Collaborations", eyebrow "Let's Connect"
- Body from source site
- Links: mailto:tejesh.kamada47@gmail.com, tel:+917396480220, LinkedIn `kamada-sri-hari-siva-tejash`, CodeChef `tejash_47`

**Nav** (`Nav.tsx`)
- Anchors: About, Education, Projects, Skills, Certifications, Contact
- Keep resume download + theme toggle

**SEO** (`__root.tsx`)
- Title: "Kamada Sri Hari Siva Tejash — Software Developer & AI Enthusiast"
- Description: matches hero tagline

### Out of scope
- Kala AI video embed (skipping YouTube iframe — link only). Say if you want the embed added.
- No design token, layout, or dark-mode changes.