import { Calendar, Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Network Engineer",
    company: "Necurity Solutions Network Security Pvt. Ltd",
    location: "Chennai",
    period: "Jan 2025 – Present",
    description: [
      "Configured and administered Windows Server 2019, managing Active Directory, DHCP, DNS, and Group Policies.",
      "Implemented and optimized VPN tunnels, VLAN segmentation, and firewall rules (Fortinet, OPNsense).",
      "Diagnosed and resolved LAN/WAN connectivity issues and IP conflicts.",
      "Deployed endpoint security solutions (antivirus, EDR, patch management) compliant with ISO 27001.",
      "Managed VMs using VMware/Hyper-V for high availability."
    ]
  },
  {
    title: "Cyber Security Researcher",
    company: "Necurity Solutions Network Security Pvt. Ltd",
    location: "Chennai",
    period: "Jun 2024 – Present",
    description: [
      "Performed network and infrastructure vulnerability assessments using industry-standard tools.",
      "Conducted penetration testing activities to validate exploitable vulnerabilities.",
      "Executed vulnerability scans on Windows/Linux systems and analyzed findings.",
      "Monitored published vulnerabilities (CVE, CWE) and assessed impact.",
      "Supported security incident response activities and maintained security documentation.",
      "Executed Phishing Campaigns to evaluate employee awareness."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-foreground text-center">
          <span className="text-primary">02.</span> MISSION HISTORY
        </h2>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border md:block hidden"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 items-center md:items-start`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 mt-1 md:block hidden shadow-[0_0_10px_var(--color-primary)]"></div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 group">
                  <div className={`p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                    
                    {/* Hover Glow */}
                    <div className="absolute top-0 right-0 p-20 bg-primary/5 blur-3xl rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                        <h3 className="text-xl font-bold text-foreground font-display">{exp.title}</h3>
                        <span className="flex items-center text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                          <Calendar className="w-3 h-3 mr-1" /> {exp.period}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground mb-4 font-mono">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {exp.company} | {exp.location}
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <ChevronRight className="w-4 h-4 mr-2 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}