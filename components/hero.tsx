import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-bold text-balance animate-fade-in-up">
                <span className="gradient-text">James</span> <span className="text-foreground">Adedini</span>
              </h1>
              <div className="h-1 w-24 gradient-bg rounded-full animate-fade-in-up animate-delay-200" />
            </div>

            <h2 className="text-2xl lg:text-3xl text-muted-foreground animate-fade-in-up animate-delay-300">
              Software Engineer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty animate-fade-in-up animate-delay-400 max-w-lg">
              I build scalable, high-performance backend systems and full-stack applications using Java, Spring Boot,
              and modern web technologies.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-500">
            <Button size="lg" className="gap-2 btn-gradient text-white hover:scale-105 hover-glow">
              <Mail className="w-4 h-4" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="gap-2 glass hover:scale-105 hover-lift bg-transparent">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>

          <div className="flex gap-4 animate-fade-in-up animate-delay-700">
            <Button variant="ghost" size="icon" className="glass hover:scale-110 hover-glow rounded-full">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="glass hover:scale-110 hover-glow rounded-full">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="glass hover:scale-110 hover-glow rounded-full">
              <Phone className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="hidden lg:block animate-fade-in-right animate-delay-500">
          <div className="space-y-6">
            {[
              { label: "About", delay: "animate-delay-500" },
              { label: "Experience", delay: "animate-delay-700" },
              { label: "Projects", delay: "animate-delay-1000" },
              { label: "Services", delay: "animate-delay-300" },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`glass-card p-4 rounded-xl hover-lift cursor-pointer animate-fade-in-right ${item.delay}`}
              >
                <div className="text-sm text-muted-foreground uppercase tracking-wider hover:text-primary">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
