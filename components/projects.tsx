import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Route, Zap, Eye, Users, Package, Shield } from "lucide-react"

const projects = [
  {
    title: "Seller-Based User Rating System",
    description:
      "An intelligent rating system that empowers sellers to set minimum buyer rating thresholds, automatically declining orders from low-rated buyers. This innovative approach helps Amazon identify and promote trusted buyers while giving sellers more control over their business relationships.",
    icon: Users,
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "JavaScript"],
    features: [
      "Sellers can set numeric rating thresholds (0-5 stars) for automatic order filtering",
      "Real-time buyer credibility assessment and verification system",
      "Enhanced seller dashboard with comprehensive buyer analytics",
      "Automated order management based on predefined rating criteria",
      "Trust score calculation algorithm for improved marketplace reliability",
    ],
    link: "https://user-filter-phi.vercel.app/",
    github: "https://github.com/mangalpratyush",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "shadow-blue-500/10",
  },
  {
    title: "Open Box Delivery System",
    description:
      "Revolutionary delivery option allowing customers to inspect items before final acceptance. Leverages Gemini Vision Pro AI to analyze product discrepancies in real-time, comparing shipping photos with delivery photos to detect tampering and reduce return fraud.",
    icon: Package,
    technologies: ["React.js", "Gemini Vision Pro API", "TensorFlow", "Python", "Computer Vision", "Node.js"],
    features: [
      "Real-time product inspection during delivery with AI-powered analysis",
      "Gemini Vision Pro integration for intelligent image comparison and discrepancy detection",
      "Instant reporting system for product inconsistencies and damage assessment",
      "Advanced computer vision algorithms to identify tampering and authenticity issues",
      "Comprehensive fraud prevention system reducing return fraud by up to 15%",
    ],
    link: "https://open-box-delivery.vercel.app/",
    github: "https://github.com/mangalpratyush",
    gradient: "from-green-500 to-emerald-500",
    glowColor: "shadow-green-500/10",
  },
  {
    title: "Fake Review Detection Model",
    description:
      "Advanced AI-powered system using Gemini Vision Pro and custom NLP models to identify and flag fraudulent reviews. Features sophisticated analysis algorithms that protect customers from misleading feedback while ensuring only verified buyers can submit authentic reviews.",
    icon: Shield,
    technologies: ["Gemini Vision Pro", "NLP", "Python", "Machine Learning", "TensorFlow", "React.js"],
    features: [
      "Advanced NLP model trained to detect fraudulent review patterns and suspicious language",
      "Gemini Vision Pro integration for comprehensive review authenticity analysis",
      "Real-time fraud detection capable of flagging up to 310 million fake reviews annually",
      "Verified buyer authentication system ensuring review legitimacy",
      "Intelligent sentiment analysis and behavioral pattern recognition",
    ],
    link: null,
    github: "https://github.com/mangalpratyush",
    gradient: "from-red-500 to-pink-500",
    glowColor: "shadow-red-500/10",
  },
  {
    title: "Pathfinder Visualizer",
    description:
      "Interactive pathfinding algorithm visualizer that attracted 1000+ monthly interactions, helping users explore and understand complex pathfinding algorithms through stunning real-time visualizations and educational content.",
    icon: Route,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Data Structures", "Algorithm Visualization"],
    features: [
      "Implemented 8+ pathfinding algorithms including Dijkstra's, A*, BFS, and DFS",
      "Achieved 100% accuracy in shortest-path algorithm implementations",
      "Enhanced performance to handle 2,000+ concurrent users with smooth animations",
      "Optimized visualizations reducing computation times by 20% for real-time feedback",
      "Interactive grid system with customizable obstacles and start/end points",
    ],
    link: "https://mangalpratyush.github.io/Pathfinder_Visualiser/",
    github: "https://github.com/mangalpratyush",
    gradient: "from-purple-500 to-indigo-500",
    glowColor: "shadow-purple-500/10",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-300 text-xl">Some of my recent work</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 shadow-2xl hover:${project.glowColor} transition-all duration-500 transform hover:scale-[1.02] group relative overflow-hidden`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-4 rounded-full bg-gradient-to-r ${project.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-white text-2xl font-bold">{project.title}</CardTitle>
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      className="bg-gray-800/80 hover:bg-gray-700/80 text-white border border-gray-600/50 hover:border-gray-500/50 transition-all duration-300"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.link && (
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Eye className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <p className="text-gray-200 leading-relaxed text-lg">{project.description}</p>

                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    <h4 className="text-white font-semibold text-lg">Key Features:</h4>
                  </div>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-start">
                        <span className="text-cyan-400 mr-3 mt-1">▶</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3 text-lg">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-2 rounded-full text-sm bg-gray-800/60 text-gray-200 border border-gray-600/40 hover:border-cyan-400/50 hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-105 font-medium"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
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
