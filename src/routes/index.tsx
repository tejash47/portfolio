import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Credentials } from "@/components/portfolio/Credentials";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { Reveal } from "@/components/portfolio/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pb-24 pt-32">
        <Hero />
        <Reveal as="section"><About /></Reveal>
        <Reveal as="section"><Experience /></Reveal>
        <Projects />
        <Reveal as="section"><Skills /></Reveal>
        <Reveal as="section"><Credentials /></Reveal>
        <Reveal as="section"><Contact /></Reveal>
      </main>
      <Footer />
    </div>
  );
}
