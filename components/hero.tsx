"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, MapPin, Mail, Sparkles } from "lucide-react"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const textArray = ["Pratyush Mangal", "Full Stack Developer", "Problem Solver", "Tech Enthusiast"]

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % textArray.length
      const fullText = textArray[i]

      setDisplayText(
        isDeleting ? fullText.substring(0, displayText.length - 1) : fullText.substring(0, displayText.length + 1),
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, typingSpeed, textArray])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative">
      <div className="max-w-5xl mx-auto text-center relative z-10 mb-12">
        <h1 className="text-5xl lg:text-8xl font-bold text-white mb-8 min-h-[120px] flex items-center justify-center">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {displayText}
          </span>
          <span className="animate-pulse text-cyan-400 ml-2">|</span>
        </h1>

        <p className="text-2xl lg:text-3xl text-gray-300 mb-10 leading-relaxed font-light">
          Computer Science Engineering Student
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-300 mb-12">
          <div className="flex items-center space-x-3 bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700/30">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <span className="text-lg">Jaipur, Rajasthan, India</span>
          </div>
          <div className="flex items-center space-x-3 bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700/30">
            <Mail className="w-5 h-5 text-purple-400" />
            <span className="text-lg">pmangaljpr@gmail.com</span>
          </div>
        </div>

        <div className="space-y-8">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-12 py-4 text-xl font-semibold rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Let's Connect
            <Sparkles className="w-5 h-5 ml-3" />
          </Button>

          <div className="flex justify-center space-x-3">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>

        <div className="mt-20 animate-bounce">
          <ArrowDown className="w-8 h-8 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  )
}
