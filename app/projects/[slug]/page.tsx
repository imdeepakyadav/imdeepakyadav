import ParticleSystem from "@/components/particle-system"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllProjects, getProjectById } from "@/lib/projects-data"
import {
    AlertCircle,
    ArrowLeft,
    Award,
    Calendar,
    CheckCircle,
    ExternalLink,
    Github,
    Lightbulb,
    TrendingUp,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectById(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - ImDeepakYadav`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      <ParticleSystem />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Navigation */}
        <div className="mb-8 animate-fade-in-up">
          <Button asChild variant="ghost" className="hover-scale">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-12 animate-fade-in-up stagger-1">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-sm">
                  {project.category}
                </Badge>
                <Badge variant={project.license ? "default" : "outline"} className="text-sm">
                  {project.status}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>

              <p className="text-xl text-primary font-medium mb-6">{project.subtitle}</p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.description}</p>

              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <Button asChild className="hover-lift">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Link>
                  </Button>
                )}
                {project.live && (
                  <Button asChild variant="outline" className="hover-scale bg-transparent">
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl hover-lift"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full animate-pulse-glow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Project Info */}
          <Card className="hover-lift animate-fade-in-up stagger-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Project Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Timeline:</span>
                <span className="font-medium">{project.timeline}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Team Size:</span>
                <span className="font-medium">{project.teamSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Role:</span>
                <span className="font-medium">{project.role}</span>
              </div>
              {project.license && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">License:</span>
                  <span className="font-medium">{project.license}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card className="hover-lift animate-fade-in-up stagger-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Impact */}
          <Card className="hover-lift animate-fade-in-up stagger-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.impact}</p>
            </CardContent>
          </Card>
        </div>

        {/* Project Description */}
        <Card className="mb-12 hover-lift animate-fade-in-up stagger-5">
          <CardHeader>
            <CardTitle>About This Project</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="mb-12 hover-lift animate-fade-in-up stagger-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Key Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Challenges & Solutions */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="hover-lift animate-fade-in-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertCircle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{challenge}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift animate-fade-in-right">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Lightbulb className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{solution}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Gallery */}
        <Card className="mb-12 hover-lift animate-fade-in-up stagger-7">
          <CardHeader>
            <CardTitle>Project Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg hover-scale"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <ExternalLink className="h-6 w-6 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="text-center hover-lift animate-fade-in-up stagger-8">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Interested in Similar Work?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'd love to discuss your project and see how we can create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-lift hover-glow">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-scale bg-transparent">
                <Link href="/projects">View More Projects</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
