
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function Skills() {
  const skillCategories = [
    {
      category: "Languages & Tools",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "HTML/CSS", level: 85 },
        { name: "Data Structures", level: 75 },
        { name: "Tableau", level: 70 },
        { name: "Power BI", level: 65 },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Communication", level: 95 },
        { name: "Leadership", level: 90 },
        { name: "Teamwork", level: 95 },
        { name: "Public Speaking", level: 85 },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Notion", level: 90 },
        { name: "Canva", level: 80 },
        { name: "Figma", level: 70 },
        { name: "Microsoft Office", level: 85 },
      ],
    },
    {
      category: "Languages Known",
      skills: [
        { name: "English", level: 95 },
        { name: "Tamil", level: 100 },
        { name: "Japanese", level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-slate-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
