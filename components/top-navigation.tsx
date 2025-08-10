"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, GraduationCap, Code, FolderOpen, Trophy, Mail } from "lucide-react"

const navigationItems = [
  { id: "education", title: "Academics", icon: GraduationCap },
  { id: "skills", title: "Technologies", icon: Code },
  { id: "projects", title: "Projects", icon: FolderOpen },
  { id: "achievements", title: "Achievements", icon: Trophy },
  { id: "contact", title: "Contact Me", icon: Mail },
]

interface TopNavigationProps {
  activeSection: string
}

export function TopNavigation({ activeSection }: TopNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative">
        {/* Toggle Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 text-white hover:bg-gray-800/90 p-3 rounded-full shadow-2xl"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {/* Navigation Menu */}
        {isOpen && (
          <div className="absolute top-16 right-0 bg-gray-900/95 backdrop-blur-lg border border-gray-700/50 rounded-2xl shadow-2xl p-4 min-w-[200px]">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  variant="ghost"
                  className={`w-full justify-start text-left p-3 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-cyan-600/20 to-purple-600/20 text-cyan-400 border border-cyan-500/30"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  {item.title}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
