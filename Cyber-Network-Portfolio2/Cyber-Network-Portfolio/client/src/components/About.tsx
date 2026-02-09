import { Shield, Lock, Server, Eye } from "lucide-react";
import shieldImg from "@/assets/security-shield.png";

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-card border border-border rounded-lg p-2">
              <img 
                src={shieldImg} 
                alt="Security Shield" 
                className="w-full h-auto rounded shadow-2xl grayscale group-hover:grayscale-0 transition duration-500"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -right-6 bg-background border border-primary/30 p-4 rounded-lg shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full text-primary">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase">Certification</p>
                    <p className="font-bold font-display text-primary">CEH Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-foreground">
              <span className="text-primary">01.</span> TARGET IDENTIFIED
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I am a <strong className="text-primary">CEH-certified Cybersecurity Engineer</strong> with a strong foundation in network defense and offensive security operations. 
                My mission is to identify vulnerabilities before they can be exploited, ensuring the integrity and confidentiality of enterprise data.
              </p>
              
              <p>
                Currently serving as a Cyber Security Researcher at <span className="text-foreground font-semibold">Necurity Solutions</span>, 
                I specialize in VAPT (Vulnerability Assessment and Penetration Testing), network infrastructure hardening, and security incident response.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Eye, text: "Vulnerability Monitoring" },
                  { icon: Lock, text: "Penetration Testing" },
                  { icon: Server, text: "Network Security" },
                  { icon: Shield, text: "Risk Analysis" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 border border-border/50 rounded hover:border-primary/50 transition-colors bg-card/50">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-mono text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}