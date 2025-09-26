const skillCategories = [
  {
    title: "Backend Development",
    skills: [
      "Java Programming",
      "Spring Framework",
      "Spring Boot",
      "Spring Security",
      "Spring MVC",
      "Hibernate",
      "Microservices",
      "REST API",
      "JWT",
      "OAuth2",
    ],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "H2 Database", "Database Optimization", "Schema Design"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Frontend & Full-Stack",
    skills: ["ReactJS", "HTML", "CSS", "Bootstrap", "Thymeleaf", "PHP", "JavaScript"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "Git", "AWS", "Azure", "Postman", "Swagger", "JMeter", "Jira"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Testing & Quality",
    skills: ["JUnit", "Mockito", "Unit Testing", "Integration Testing", "Code Reviews", "Agile/Scrum"],
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "Messaging & Monitoring",
    skills: ["Kafka", "RabbitMQ", "WebSocket", "Dynatrace", "Performance Monitoring"],
    color: "from-teal-500/20 to-cyan-500/20",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-l from-accent/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="space-y-4 animate-fade-in-left">
              <h2 className="text-4xl font-bold gradient-text">Skills</h2>
              <div className="h-1 w-16 gradient-bg rounded-full" />
              <p className="text-muted-foreground text-pretty">Technical expertise across the full development stack</p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className={`glass-card p-6 rounded-xl hover-lift space-y-4 animate-fade-in-up animate-delay-${(index + 1) * 100}`}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} border border-white/10`}>
                    <h3 className="text-lg font-semibold gradient-text">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 glass text-sm rounded-full transition-all duration-300 hover:scale-105 hover:gradient-bg hover:text-white animate-fade-in-up animate-delay-${skillIndex * 30}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
