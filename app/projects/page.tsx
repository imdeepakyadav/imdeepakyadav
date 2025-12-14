import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import WaveBackground from "@/components/wave-background"
import { ExternalLink, Github } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Projects - Deepak Yadav",
  description: "Explore the portfolio of projects by Deepak Yadav - Full Stack Developer",
}

const projects = [
  {
    id: "yogaapp",
    title: "YogaApp",
    description: "Cross-platform Yoga Management System built with React Native and Expo",
    image: "/yoga_app_mockup_1765692114993.png",
    tags: ["React Native", "Expo", "TypeScript", "Firebase"],
    status: "Private",
    featured: true,
  },
  {
    id: "reconnect",
    title: "ReConnect",
    description: "Global Video Chat & Social Platform with random video calls worldwide",
    image: "/reconnect_app_mockup_1765692136282.png",
    tags: ["React Native", "TypeScript", "Firebase", "WebRTC"],
    status: "Private",
    featured: true,
  },
  {
    id: "paisapilot",
    title: "PaisaPilot",
    description: "Smart Personal Finance Manager with AI-powered insights",
    image: "/paisapilot_app_mockup_1765692157320.png",
    tags: ["React Native", "Firebase", "OpenAI", "TailwindCSS"],
    status: "Open Source",
    featured: true,
  },
  {
    id: "astroapp",
    title: "AstroApp",
    description: "AI-Powered Astrology Android App with personalized predictions",
    image: "/astroapp_mockup_1765692181532.png",
    tags: ["Java", "OpenAI API", "Android"],
    status: "Open Source",
    featured: false,
  },
  {
    id: "suggestkaro",
    title: "SuggestKaro",
    description: "Smart Product Comparison Platform with AI recommendations",
    image: "/suggestkaro_interface_1765692203807.png",
    tags: ["TypeScript", "AI APIs", "E-commerce"],
    status: "Open Source",
    featured: false,
  },
  {
    id: "quiztrix",
    title: "Quiztrix",
    description: "Interactive Quiz Platform for dynamic learning and entertainment",
    image: "/quiztrix_interface_1765692221395.png",
    tags: ["React.js", "Node.js", "Express", "MongoDB"],
    status: "Open Source",
    featured: false,
  },
]

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <WaveBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1">
            A showcase of my work spanning mobile apps, web applications, and AI-powered solutions
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 animate-fade-in-left">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group hover-lift animate-fade-in-up stagger-${index + 1} bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden`}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <Badge
                      className={`absolute top-4 right-4 ${
                        project.status === "Open Source"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs bg-muted/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1">
                      <Link href={`/projects/${project.id}`}>
                        View Details
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent border-border hover:bg-muted/30">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8 animate-fade-in-left">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group hover-lift animate-fade-in-up stagger-${index + 4} bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden`}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <Badge
                      className={`absolute top-4 right-4 ${
                        project.status === "Open Source"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs bg-muted/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1">
                      <Link href={`/projects/${project.id}`}>
                        View Details
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent border-border hover:bg-muted/30">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
