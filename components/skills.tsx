import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Wrench, Layers } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C", "C++", "Java", "JavaScript", "SQL", "Python"],
    color: "from-blue-500 to-cyan-500",
    glowColor: "shadow-blue-500/10",
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: ["VS Code", "Git", "GitHub", "Vercel"],
    color: "from-green-500 to-emerald-500",
    glowColor: "shadow-green-500/10",
  },
  {
    title: "Technologies & Frameworks",
    icon: Layers,
    skills: ["HTML", "CSS", "ReactJS", "NodeJS", "Tailwind", "MongoDB"],
    color: "from-purple-500 to-pink-500",
    glowColor: "shadow-purple-500/10",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technologies
          </h2>
          <p className="text-gray-300 text-xl">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 shadow-2xl hover:${category.glowColor} transition-all duration-500 transform hover:scale-105 group relative overflow-hidden`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-4 rounded-full bg-gradient-to-r ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl font-bold">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="px-4 py-3 rounded-lg text-sm font-semibold bg-gray-800/60 text-gray-200 border border-gray-600/40 hover:border-white/40 hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-105 text-center"
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
