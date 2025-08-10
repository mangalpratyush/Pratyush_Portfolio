"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { User, GraduationCap, Code, FolderOpen, Trophy, Mail, Github, Linkedin } from "lucide-react"

const menuItems = [
  { id: "hero", title: "About", icon: User },
  { id: "education", title: "Education", icon: GraduationCap },
  { id: "skills", title: "Skills", icon: Code },
  { id: "projects", title: "Projects", icon: FolderOpen },
  { id: "achievements", title: "Achievements", icon: Trophy },
  { id: "contact", title: "Contact", icon: Mail },
]

interface AppSidebarProps {
  activeSection: string
}

export function AppSidebar({ activeSection }: AppSidebarProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Sidebar className="border-r border-purple-800/30">
      <SidebarHeader className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
            PM
          </div>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-white">Pratyush Mangal</h2>
            <p className="text-sm text-gray-400">Software Developer</p>
          </div>
          <div className="flex space-x-3">
            <a
              href="https://github.com/mangalpratyush"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Github className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/pratyush-mangal-490816271/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton
                onClick={() => scrollToSection(item.id)}
                isActive={activeSection === item.id}
                className="w-full justify-start text-gray-300 hover:text-white hover:bg-purple-800/30 data-[active=true]:bg-purple-600 data-[active=true]:text-white"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
