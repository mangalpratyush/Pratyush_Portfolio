import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 px-6 lg:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Academics
          </h2>
          <p className="text-gray-300 text-xl">My educational background</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 transform hover:scale-[1.02]">
            <CardHeader className="pb-6">
              <div className="flex items-start space-x-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-white text-2xl mb-3 font-bold">
                    Bachelor of Technology (Computer Science and Engineering)
                  </CardTitle>
                  <h3 className="text-cyan-400 font-semibold text-xl mb-4">Birla Institute of Technology</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-gray-300">
                    <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 border border-gray-600/30">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-base">November 2022 – June 2026</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 border border-gray-600/30">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span className="text-base">Jharkhand, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mt-6">
                <div className="flex items-center space-x-3 mb-6">
                  <BookOpen className="w-6 h-6 text-cyan-400" />
                  <h4 className="text-white font-semibold text-xl">Relevant Coursework</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Data Structures & Algorithms",
                    "Operating Systems",
                    "Database Management System",
                    "OOPS Concept",
                    "Computer Network",
                    "Design and Analysis of Algorithms",
                    "Web Development",
                    "Computer Architecture",
                  ].map((course, index) => (
                    <div
                      key={course}
                      className="bg-gray-800/60 border border-gray-600/40 rounded-lg px-4 py-3 text-gray-200 font-medium hover:border-cyan-400/50 hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
