import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 lg:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-gray-300 text-xl">Let's connect and discuss opportunities</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <Card className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 transform hover:scale-[1.02]">
            <CardHeader className="pb-6">
              <CardTitle className="text-white text-2xl font-bold flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-cyan-400" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a
                    href="mailto:pmangaljpr@gmail.com"
                    className="text-white hover:text-cyan-400 transition-colors text-lg font-semibold"
                  >
                    pmangaljpr@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-white text-lg font-semibold">Jaipur, Rajasthan, India</p>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-gray-300 mb-6 text-lg">Connect with me on social platforms</p>
                <div className="flex space-x-4">
                  <Button
                    className="bg-gray-800/80 hover:bg-gray-700/80 text-white border border-gray-600/50 hover:border-gray-500/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <a href="https://github.com/mangalpratyush" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/pratyush-mangal-490816271/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:scale-[1.02]">
            <CardHeader className="pb-6">
              <CardTitle className="text-white text-2xl font-bold flex items-center">
                <Send className="w-6 h-6 mr-3 text-purple-400" />
                Let's Work Together
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="p-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 w-24 h-24 mx-auto mb-8 flex items-center justify-center border border-gray-600/30">
                  <Send className="w-10 h-10 text-cyan-400" />
                </div>
                <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                  technology and innovation.
                </p>
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <a href="mailto:pmangaljpr@gmail.com?subject=Portfolio%20Contact&body=Hi%20Pratyush,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0ABest%20regards">
                    <Mail className="w-5 h-5 mr-3" />
                    Send Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
