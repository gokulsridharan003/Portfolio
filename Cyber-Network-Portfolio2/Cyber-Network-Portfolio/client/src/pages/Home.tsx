import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <div className="scanlines"></div>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      
      <footer className="py-6 text-center text-xs text-muted-foreground font-mono border-t border-border">
        <p>&copy; {new Date().getFullYear()} GOKUL S | CYBERSECURITY ENGINEER. ALL RIGHTS SECURED.</p>
      </footer>
    </div>
  );
}