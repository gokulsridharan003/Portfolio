import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Vulnerability & Security Ops",
    skills: [
      { name: "VAPT (Network, Web, Cloud)", level: 90 },
      { name: "Risk Analysis (CVE, CWE, CVSS)", level: 85 },
      { name: "Incident Response", level: 80 },
      { name: "Phishing Campaign Design", level: 85 },
      { name: "Security Reporting", level: 90 }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Kali Linux / Nmap", level: 95 },
      { name: "Burp Suite / Metasploit", level: 85 },
      { name: "Nessus / OpenVAS", level: 90 },
      { name: "Wazuh (SIEM)", level: 80 },
      { name: "Firewalls (Fortinet, OPNsense)", level: 85 }
    ]
  },
  {
    title: "Systems & Networking",
    skills: [
      { name: "Windows Server / Linux Admin", level: 85 },
      { name: "Active Directory / GPO", level: 80 },
      { name: "TCP/IP, VLANs, VPNs", level: 90 },
      { name: "Endpoint Security (EDR, SentinelOne)", level: 85 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-foreground text-center">
          <span className="text-primary">03.</span> TECHNICAL ARSENAL
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-card border border-border p-6 rounded-lg hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-bold font-display text-primary mb-6 border-b border-border pb-2">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-mono text-muted-foreground">{skill.name}</span>
                      <span className="text-xs font-mono text-primary">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5 bg-muted" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}