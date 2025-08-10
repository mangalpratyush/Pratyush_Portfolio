import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award, Star } from "lucide-react"

const achievements = [
  {
    title: "Top 9 Finalist - Amazon HackOn 2025",
    description:
      "Selected as a Top 9 Finalist out of 12,000+ teams in Amazon HackOn 2025 for developing an AI-powered trust and safety solution to combat fake reviews and fraudulent returns.",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    glowColor: "shadow-yellow-500/10",
  },
  {
    title: "Second Runner-Up - Aanvikishiki Case Study Competition",
    description:
      "Secured Second Runner-Up position among 100+ teams by delivering a comprehensive solution on profit maximization strategies for startups.",
    icon: Award,
    color: "from-purple-500 to-pink-500",
    glowColor: "shadow-purple-500/10",
  },
  {
    title: "Highest SGPA in Department",
    description: "Achieved the Highest SGPA in the department during the first semester.",
    icon: Star,
    color: "from-blue-500 to-cyan-500",
    glowColor: "shadow-blue-500/10",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-gray-300 text-xl">Recognition and accomplishments</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 shadow-2xl hover:${achievement.glowColor} transition-all duration-500 transform hover:scale-[1.02] group relative overflow-hidden`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-start space-x-6">
                  <div
                    className={`p-4 rounded-full bg-gradient-to-r ${achievement.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-3">{achievement.title}</h3>
                    <p className="text-gray-200 leading-relaxed text-lg">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
