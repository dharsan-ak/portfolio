
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="mb-10 relative">
        <Avatar className="h-56 w-56 border-4 border-blue-600 shadow-xl">
          <AvatarImage 
            src="/lovable-uploads/baf8e9a7-feb7-4d3f-b5d0-68b6df19fbfa.png" 
            alt="Dharsan A K"
            className="object-cover object-center"
          />
          <AvatarFallback className="bg-blue-100 text-blue-800 text-2xl font-bold">DAK</AvatarFallback>
        </Avatar>
        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-10 blur-xl -z-10 scale-125"></div>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Dharsan A K</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl">
        Electronics and Communication Engineering student passionate about AI, IoT, and embedded systems
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
          <a href="#contact">
            Contact Me
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="gap-2 border-blue-600 text-blue-700 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-900/30">
          <a href="#about">
            Learn More <ArrowDown className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
