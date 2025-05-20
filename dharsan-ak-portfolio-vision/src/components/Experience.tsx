
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experienceData = [
    {
      position: "Research & Development Intern",
      company: "iHub",
      period: "Aug 2024 – Dec 2024",
      description: [
        "Designed algorithms for real-time document processing.",
        "Worked in UI/UX and research-driven problem solving.",
      ],
    },
    {
      position: "Data Science Intern",
      company: "Postulate",
      period: "June 2024 – July 2024",
      description: [
        "Worked with large datasets to build predictive models.",
        "Developed data-driven strategies and documentation.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Internship Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="mb-8 relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-green-200 dark:before:bg-green-900"
            >
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-green-100 border-2 border-green-500 dark:bg-green-900 dark:border-green-400 transform -translate-x-[11px] flex items-center justify-center">
                <Briefcase className="h-3 w-3 text-green-500 dark:text-green-300" />
              </div>
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <span className="text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">
                    {exp.company}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-slate-600 dark:text-slate-400"
                      >
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
