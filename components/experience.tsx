const experiences = [
  {
    period: "2025/01 — Present",
    title: "Backend Engineer",
    company: "Simplify Synergy",
    location: "Abuja, Nigeria",
    description:
      "Optimized database queries and schema designs (PostgreSQL, MongoDB), reducing response time by up to 40%. Designed and maintained scalable RESTful APIs and microservices using Java Spring Boot.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "MongoDB", "JWT", "OAuth2"],
  },
  {
    period: "2023 — Present",
    title: "Software Engineer",
    company: "Decagon",
    location: "Lagos, Nigeria",
    description:
      "Spearheaded development of Smart Quiz and Airway projects. Enhanced data retrieval efficiency by 30% and achieved 95% code coverage through rigorous testing.",
    technologies: ["Java", "Spring Boot", "MySQL", "PostgreSQL", "ReactJS"],
  },
  {
    period: "2022 — 2023",
    title: "Web Developer",
    company: "Wetindey inc",
    location: "Ondo, Nigeria",
    description:
      "Elevated user satisfaction by 30% developing responsive web applications. Led development of registration portals and library management systems.",
    technologies: ["Java", "PHP", "HTML", "CSS", "Bootstrap", "MySQL"],
  },
  {
    period: "2021 — 2022",
    title: "Computer Operator/Cafe Manager",
    company: "AbGraphics + Print",
    location: "Ondo, Nigeria",
    description:
      "Managed software and hardware operations, decreasing downtime by 25%. Improved network reliability and explored Python programming fundamentals.",
    technologies: ["Python", "Hardware Management", "Network Administration"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="space-y-4 animate-fade-in-left">
              <h2 className="text-4xl font-bold gradient-text">Experience</h2>
              <div className="h-1 w-24 gradient-bg rounded-full" />
              <p className="text-muted-foreground text-pretty">My professional journey in software development</p>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`glass-card p-6 rounded-xl hover-lift space-y-4 animate-fade-in-up animate-delay-${(index + 1) * 200}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="gradient-text font-medium text-lg">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1 sm:text-right">
                    <div className="font-medium">{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed text-pretty">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 glass text-sm rounded-full transition-all duration-300 hover:scale-105 hover:gradient-bg hover:text-white animate-fade-in-up animate-delay-${techIndex * 50}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
