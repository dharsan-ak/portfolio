
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      title: "Sense Wearable Watch for Deaf People",
      description: "A haptic-based smart wearable that alerts deaf individuals to sound using IoT sensors.",
      category: "hardware",
      tags: ["IoT", "Wearable", "Haptic Feedback"],
    },
    {
      title: "Voice-Controlled Wheelchair",
      description: "Hands-free wheelchair using AI-based voice recognition and NLP, with obstacle detection.",
      category: "hardware",
      tags: ["AI", "Voice Recognition", "NLP"],
    },
    {
      title: "Smart Street Light (Design Pattern)",
      description: "IoT-enabled street lighting system that adapts to surroundings for energy efficiency.",
      category: "hardware",
      tags: ["IoT", "Energy Efficiency", "Smart City"],
    },
    {
      title: "Li-Fi Data Transfer (RiFi)",
      description: "Laser-based high-speed data transmission system surpassing Wi-Fi speeds.",
      category: "software",
      tags: ["Data Transfer", "Communication", "Laser-based"],
    },
    {
      title: "AI Assistant Project",
      description: "A personal assistant supporting voice/text interaction, with future plans for internet, cloud, and local file handling.",
      category: "software",
      tags: ["AI", "Voice Interaction", "In Progress"],
    },
    {
      title: "eCommerce Brand App",
      description: "Features: AI stylist assistant, 3D avatar try-on, biometric login, influencer blog system.",
      category: "software",
      tags: ["eCommerce", "AI", "3D", "Ongoing"],
    },
    {
      title: "Sports-Powered Performance Analyzer",
      description: "App to analyze athletic performance using sensor input and smart recommendations.",
      category: "software",
      tags: ["Sports Tech", "Analytics", "Prototype"],
    },
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        
        <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="hardware">Hardware</TabsTrigger>
              <TabsTrigger value="software">Software</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="hardware" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="software" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

interface ProjectProps {
  project: {
    title: string;
    description: string;
    category: string;
    tags: string[];
  };
}

function ProjectCard({ project }: ProjectProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <div className="mt-2">
          <Badge variant={project.category === "hardware" ? "secondary" : "default"}>
            {project.category === "hardware" ? "Hardware" : "Software"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-slate-600 dark:text-slate-300">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <Badge key={index} variant="outline">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
