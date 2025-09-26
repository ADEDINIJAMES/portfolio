import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Microservices with Spring Boot",
    excerpt:
      "Learn how to design and implement microservices architecture using Spring Boot, including best practices for service communication and data management.",
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["Spring Boot", "Microservices", "Java"],
    slug: "building-scalable-microservices-spring-boot",
  },
  {
    id: 2,
    title: "Optimizing Database Performance in Java Applications",
    excerpt:
      "Discover techniques to improve database query performance, connection pooling strategies, and caching mechanisms for Java applications.",
    date: "2024-12-10",
    readTime: "6 min read",
    tags: ["Database", "Performance", "Java"],
    slug: "optimizing-database-performance-java",
  },
  {
    id: 3,
    title: "JWT Authentication and Authorization Best Practices",
    excerpt:
      "A comprehensive guide to implementing secure JWT-based authentication in Spring Boot applications with proper token management.",
    date: "2024-12-05",
    readTime: "10 min read",
    tags: ["Security", "JWT", "Spring Security"],
    slug: "jwt-authentication-best-practices",
  },
  {
    id: 4,
    title: "From Monolith to Microservices: A Migration Strategy",
    excerpt:
      "Step-by-step approach to breaking down monolithic applications into microservices, including challenges and solutions.",
    date: "2024-11-28",
    readTime: "12 min read",
    tags: ["Architecture", "Migration", "Microservices"],
    slug: "monolith-to-microservices-migration",
  },
  {
    id: 5,
    title: "Testing Strategies for Spring Boot Applications",
    excerpt:
      "Comprehensive testing approaches including unit tests, integration tests, and test containers for robust Spring Boot applications.",
    date: "2024-11-20",
    readTime: "9 min read",
    tags: ["Testing", "Spring Boot", "Quality Assurance"],
    slug: "testing-strategies-spring-boot",
  },
  {
    id: 6,
    title: "Docker and Kubernetes for Java Developers",
    excerpt:
      "Learn containerization and orchestration concepts specifically tailored for Java applications and Spring Boot services.",
    date: "2024-11-15",
    readTime: "11 min read",
    tags: ["Docker", "Kubernetes", "DevOps"],
    slug: "docker-kubernetes-java-developers",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Blog</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Sharing insights, tutorials, and best practices from my journey as a Software Engineer. Explore articles on
            Java, Spring Boot, microservices, and modern development practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 leading-relaxed">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" className="w-full group/btn justify-between p-0 h-auto">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Posts
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
