
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Certifications() {
  const certifications = [
    {
      title: "AI Associate & Specialist",
      issuer: "Salesforce",
      description: "Certification in AI fundamentals and specialist-level applications.",
    },
    {
      title: "Oracle Cloud Infrastructure - Foundation Associate",
      issuer: "Oracle",
      description: "Foundation-level certification in Oracle Cloud infrastructure services.",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      description: "Learn cybersecurity essentials and best practices.",
    },
    {
      title: "Effective Communication",
      issuer: "Great Learning",
      description: "Advanced communication skills for professional settings.",
    },
    {
      title: "Deloitte NLA",
      issuer: "PrepInsta",
      description: "Deloitte National Level Assessment certification.",
    },
    {
      title: "Modern Analytics with Excel & Power BI",
      issuer: "Microsoft",
      description: "Advanced data analytics using Microsoft tools.",
    },
    {
      title: "Data Visualization",
      issuer: "TATA Forage",
      description: "Professional data visualization techniques and practices.",
    },
    {
      title: "DSA, Python, Java, C, CPP Nano Degrees",
      issuer: "PrepInsta",
      description: "Comprehensive technical certifications in multiple programming languages.",
    },
  ];

  return (
    <section id="certifications" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="h-full hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{cert.title}</CardTitle>
                <Badge variant="outline" className="w-fit">
                  {cert.issuer}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription>{cert.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
