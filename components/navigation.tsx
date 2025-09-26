"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    console.log("[v0] Attempting to scroll to:", href)
    const targetId = href.slice(1)
    const element = document.getElementById(targetId)

    if (element) {
      console.log("[v0] Found element:", element)
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top + window.scrollY
      const navHeight = 80
      const offsetPosition = elementTop - navHeight

      console.log("[v0] Element rect:", rect)
      console.log("[v0] Element top from page:", elementTop)
      console.log("[v0] Scrolling to position:", offsetPosition)

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsMobileMenuOpen(false)
    } else {
      console.log("[v0] Element not found for ID:", targetId)
      // Fallback: try scrolling after a short delay in case elements are still loading
      setTimeout(() => {
        const retryElement = document.getElementById(targetId)
        if (retryElement) {
          console.log("[v0] Found element on retry:", retryElement)
          const rect = retryElement.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const navHeight = 80
          const offsetPosition = elementTop - navHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        } else {
          console.log("[v0] Element still not found after retry:", targetId)
        }
      }, 100)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/20 animate-fade-in-up">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse-slow">
            TumTech
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <Button
                key={item.name}
                variant={activeSection === item.href.slice(1) ? "secondary" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className={`text-sm transition-all duration-300 hover:scale-105 hover:bg-primary/10 animate-fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                {item.name}
              </Button>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant={activeSection === item.href.slice(1) ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className="justify-start text-sm transition-all duration-300"
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
