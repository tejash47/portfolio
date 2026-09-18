import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Credentials } from "@/components/portfolio/Credentials";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { Reveal } from "@/components/portfolio/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <Nav />
      <main className="pb-20 pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
