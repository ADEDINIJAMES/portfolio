import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Airway",
    description:
      "Full-stack web application for flight booking with secure payment integration and user authentication.",
    technologies: [
      "Java Spring Boot",
      "ReactJS",
      "MySQL",
      "JWT",
      "Paystack",
      "Spring Security",
    ],
    type: "Full-Stack Application",
  },
  {
    title: "Smart Quiz App",
    description:
      "Comprehensive quiz management system allowing examiners to create and manage quizzes while students can take them seamlessly.",
    technologies: [
      "Java Spring Boot",
      "ReactJS",
      "MySQL",
      "JWT",
      "Google OAuth",
      "Spring Security",
    ],
    type: "Web Application",
  },
  {
    title: "Registration Portal",
    description:
      "User-friendly registration system with responsive design and efficient data management. Built to handle high-volume user registrations with seamless user experience.",
    technologies: [
      "Java",
      // "PHP",
      // "HTML",
      // "CSS",
      "Spring Boot",
      "ReactJs",
      "Tailwind",
      "Bootstrap",
      "MongoDB",
      "Firebase Cloud storage",
      "Google Cloud Platform (GCP)",
    ],
    type: "Web Application",
  },
  {
    title: "Fashion Blog API",
    description:
      "RESTful API for a fashion blog where owners can post designs and users can interact through comments and likes.",
    technologies: [
      "Spring Boot",
      "H2 Database",
      "PostgreSQL",
      "JWT",
      "Google OAuth2",
    ],
    type: "REST API",
  },
  {
    title: "E-commerce Application",
    description:
      "Trade store application for fashion products with shopping cart functionality and secure checkout process.",
    technologies: ["Java", "Servlet", "MySQL"],
    type: "Web Application",
  },
  {
    title: "Smart Payment Notifier",
    description:
      "Fintech backend system that automates payment notifications, transcribes voice transactions using Deepgram API, and sends real-time WhatsApp alerts to users. Features webhook handling, transactional consistency, and secure JWT-based authentication.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Deepgram API",
      "RabbitMQ",
      // "WhatsApp Cloud API",
      "Twillo",
      "Paystack Payment",
      // "Docker",
      // "Flyway",
    ],
    type: "Fintech Backend Service",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-l from-accent/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="space-y-4 animate-fade-in-left">
              <h2 className="text-4xl font-bold gradient-text">Projects</h2>
              <div className="h-1 w-20 gradient-bg rounded-full" />
              <p className="text-muted-foreground text-pretty">
                A showcase of my technical expertise and problem-solving
                capabilities
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`group glass-card hover-lift hover-glow transition-all duration-500 animate-fade-in-up animate-delay-${
                    (index + 1) * 100
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="gradient-text font-medium">
                          {project.type}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="glass hover:scale-110 hover-glow rounded-full"
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="glass hover:scale-110 hover-glow rounded-full"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-pretty">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 glass text-xs rounded-full transition-all duration-300 hover:scale-105 hover:gradient-bg hover:text-white animate-fade-in-up animate-delay-${
                            (techIndex + 1) * 50
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
