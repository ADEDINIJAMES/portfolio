import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Server, Smartphone } from "lucide-react"

const services = [
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Scalable REST APIs and microservices using Java Spring Boot, with secure authentication and optimized database integration.",
    features: [
      "REST API Development",
      "Microservices Architecture",
      "Database Optimization",
      "Security Implementation",
    ],
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description:
      "Database design, optimization, and migration services for PostgreSQL, MySQL, and MongoDB with performance tuning.",
    features: ["Schema Design", "Query Optimization", "Data Migration", "Performance Tuning"],
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "End-to-end web application development combining robust backend systems with modern frontend technologies.",
    features: ["React Applications", "Spring Boot APIs", "Payment Integration", "User Authentication"],
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Smartphone,
    title: "Technical Consulting",
    description:
      "Architecture review, code audits, and technical guidance for scaling applications and improving performance.",
    features: ["Code Reviews", "Architecture Planning", "Performance Analysis", "Best Practices"],
    gradient: "from-orange-500/10 to-red-500/10",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="space-y-4 animate-fade-in-left">
              <h2 className="text-4xl font-bold gradient-text">Services</h2>
              <div className="h-1 w-20 gradient-bg rounded-full" />
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Comprehensive software development services, from backend architecture to full-stack solutions.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`glass-card hover-lift hover-glow transition-all duration-500 animate-fade-in-up animate-delay-${(index + 1) * 150}`}
                >
                  <CardHeader>
                    <div
                      className={`flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r ${service.gradient} border border-white/10 mb-4`}
                    >
                      <div className="p-3 glass rounded-xl animate-float">
                        <service.icon className="w-6 h-6 gradient-text" />
                      </div>
                      <CardTitle className="text-xl gradient-text">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-pretty leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={feature}
                          className={`text-sm text-muted-foreground flex items-center gap-3 animate-fade-in-up animate-delay-${featureIndex * 100}`}
                        >
                          <div className="w-2 h-2 gradient-bg rounded-full animate-pulse-slow" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
