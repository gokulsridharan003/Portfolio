import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Cybersecurity Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6 glitch-text" data-text="GOKUL S">
          GOKUL S
        </h1>

        <div className="text-xl md:text-3xl text-muted-foreground font-mono mb-8 h-20">
          <Typewriter
            options={{
              strings: [
                "Cybersecurity Engineer",
                "Penetration Tester",
                "Network Security Specialist",
                "Vulnerability Analyst"
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </div>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-primary text-background hover:bg-primary/90 font-mono tracking-wider"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            VIEW OPERATIONS
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto border-primary/50 text-primary hover:bg-primary/10 font-mono tracking-wider"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            INITIATE CONTACT <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Decorative Grid at bottom */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}