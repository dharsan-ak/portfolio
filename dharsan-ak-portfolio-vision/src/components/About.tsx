import { Card, CardContent } from "@/components/ui/card";
export function About() {
  const personalInfo = [{
    label: "Name",
    value: "Dharsan A K"
  }, {
    label: "Date of Birth",
    value: "October 15, 2004"
  }, {
    label: "Gender",
    value: "Male"
  }, {
    label: "Phone",
    value: "9445905053"
  }, {
    label: "Email",
    value: "dharsan.ak.ece.2022@snsce.ac.in"
  }, {
    label: "Location",
    value: "Coimbatore, Tamil Nadu, India"
  }];
  return <section id="about" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Enthusiastic and innovative ECE student passionate about AI, IoT, and embedded systems. 
              Experienced in leadership, event coordination, and both hardware/software project development. 
              Skilled in problem-solving and real-world research with exposure to hackathons and R&D internships. 
              Actively seeking impactful opportunities in tech to grow as a professional.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="https://linkedin.com/in/dharsan-ak-snsinstitution" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>
              <a href="https://leetcode.com/u/Daneildharsan/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LeetCode
              </a>
            </div>
          </div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => <div key={index} className="mb-2">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {info.label}
                    </p>
                    <p className="font-medium text-xs">{info.value}</p>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
}