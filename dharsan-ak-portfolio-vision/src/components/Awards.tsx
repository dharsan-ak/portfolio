
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Awards() {
  const achievements = [
    {
      title: "IEEE Member",
      description: "Member with access to journals and publishing opportunities",
    },
    {
      title: "3rd Prize - Paper Presentation",
      description: "Sense Wearable Watch project recognition",
    },
    {
      title: "Coordinator & Judge",
      description: "Space Robotics Event (Mukkudal Robotics)",
    },
    {
      title: "Research Paper",
      description: "Swarm Drones for Search & Rescue",
    },
    {
      title: "Event Organizer",
      description: "Junior induction, road safety campaigns, and multiple college events",
    },
  ];

  const interests = [
    "Artificial Intelligence",
    "Machine Learning",
    "IoT",
    "Embedded Systems",
    "UX Design",
    "Comics",
    "Singing",
    "Dancing",
    "Mentoring",
  ];

  return (
    <section id="awards" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Awards & Achievements
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="h-10 w-10 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                      <Star className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Interests</h3>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
