import { Award, FileCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const certifications = [
  {
    name: "Certified Ethical Hacker [CEH]",
    issuer: "EC Council",
    year: "2025",
    icon: Award,
    color: "text-primary"
  },
  {
    name: "Ethical Hacking",
    issuer: "Cisco",
    year: "2024",
    note: "Certificate of Course Completion",
    icon: FileCheck,
    color: "text-blue-400"
  },
  {
    name: "Diploma in CyberSecurity",
    issuer: "Alison",
    year: "2024",
    note: "Certified in Course Completion",
    icon: FileCheck,
    color: "text-blue-400"
  }
];

const education = [
  {
    degree: "Bachelor of Business Administration",
    school: "DG Vaishnav College, Chennai",
    year: "2024",
    note: "Member of Department Student Council"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Certifications Column */}
          <div>
            <h2 className="text-3xl font-bold font-display mb-8 text-foreground">
              <span className="text-primary">04.</span> CERTIFICATIONS
            </h2>
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-colors group">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className={`p-2 rounded-full bg-background border border-border group-hover:border-primary/50 transition-colors ${cert.color}`}>
                      <cert.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold font-display">{cert.name}</CardTitle>
                      <p className="text-sm font-mono text-muted-foreground">{cert.issuer} • {cert.year}</p>
                    </div>
                  </CardHeader>
                  {cert.note && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground/80 italic">{cert.note}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h2 className="text-3xl font-bold font-display mb-8 text-foreground">
              <span className="text-primary">05.</span> EDUCATION
            </h2>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <Card key={idx} className="bg-card border-border hover:border-secondary/50 transition-colors h-full">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold font-display">{edu.degree}</CardTitle>
                    <p className="text-sm font-mono text-primary">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground border-l-2 border-primary pl-4">
                      {edu.note}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}