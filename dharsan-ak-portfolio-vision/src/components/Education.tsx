
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function Education() {
  const educationData = [
    {
      degree: "B.E. in Electronics and Communication Engineering",
      institution: "SNS College of Engineering",
      year: "2022–2026",
      grade: "CGPA: 8.77",
    },
    {
      degree: "Class XII",
      institution: "Sri Gopal Naidu Hr. Sec. School",
      year: "2022",
      grade: "76%",
    },
    {
      degree: "Class X",
      institution: "Vimal Jyothi Convent Matric Hr. Sec. School",
      year: "2020",
      grade: "76%",
    },
  ];

  return (
    <section id="education" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="mb-8 relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-blue-200 dark:before:bg-blue-900"
            >
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-100 border-2 border-blue-500 dark:bg-blue-900 dark:border-blue-400 transform -translate-x-[11px] flex items-center justify-center">
                <GraduationCap className="h-3 w-3 text-blue-500 dark:text-blue-300" />
              </div>
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <span className="text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    {edu.institution}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">
                    {edu.grade}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
