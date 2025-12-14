"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import WaveBackground from "@/components/wave-background"
import { ArrowRight, Award, Coffee, Download, ExternalLink, Github, Linkedin, Mail, Star, Users } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const featuredProjects = [
    {
      id: "yogaapp",
      title: "YogaApp",
      description: "Cross-platform Yoga Management System with student & trainer management",
      image: "/yoga_app_mockup_1765692114993.png",
      tags: ["React Native", "Expo", "TypeScript"],
      status: "Private",
    },
    {
      id: "reconnect",
      title: "ReConnect",
      description: "Global Video Chat & Social Platform with random video calls worldwide",
      image: "/reconnect_app_mockup_1765692136282.png",
      tags: ["React Native", "Firebase", "WebRTC"],
      status: "Private",
    },
    {
      id: "paisapilot",
      title: "PaisaPilot",
      description: "Smart Personal Finance Manager with AI-powered insights",
      image: "/paisapilot_app_mockup_1765692157320.png",
      tags: ["React Native", "OpenAI", "Firebase"],
      status: "Open Source",
    },
  ]

  const skills = [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "React Native", level: 88 },
    { name: "TypeScript", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "Firebase", level: 88 },
  ]

  const stats = [
    { icon: Star, value: "10+", label: "Projects" },
    { icon: Users, value: "5+", label: "Clients" },
    { icon: Coffee, value: "3+", label: "Years Exp" },
    { icon: Award, value: "100%", label: "Success" },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <WaveBackground />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center">
            {/* Greeting */}
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">
                Welcome to my portfolio
              </span>
            </div>

            {/* Main Heading */}
            <div className="animate-fade-in-up stagger-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
                Hi, I'm <span className="text-gradient">Deepak Yadav</span>
              </h1>
            </div>

            {/* Role */}
            <div className="animate-fade-in-up stagger-2">
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-6 font-mono">
                Full Stack Developer
                <span className="animate-blink ml-1 text-primary">|</span>
              </p>
            </div>

            {/* Description */}
            <div className="animate-fade-in-up stagger-3">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                I build fast, reliable web apps with delightful UX. I turn business goals into scalable systems across
                frontend, backend, and DevOps.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up stagger-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="hover-lift hover-glow">
                  <Link href="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover-scale bg-transparent border-border hover:bg-muted/30"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up stagger-5">
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-up stagger-6">
              <div className="flex justify-center space-x-4">
                <Link
                  href="https://github.com/imdeepakyadav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-lg transition-all duration-300"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/imdeepakyadav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-lg transition-all duration-300"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="mailto:deepak@example.com"
                  className="p-3 text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-lg transition-all duration-300"
                >
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1">
              A showcase of my recent work across mobile and web platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group hover-lift animate-fade-in-up stagger-${index + 1} bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden`}
              >
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
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center animate-fade-in-up">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hover-scale bg-transparent border-border hover:bg-muted/30"
            >
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1">
              Technologies I work with to bring your ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className={`hover-lift animate-fade-in-up stagger-${index + 1} bg-card/50 backdrop-blur-sm border-border/50`}
              >
                <CardContent className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-primary font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center animate-fade-in-up">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hover-scale bg-transparent border-border hover:bg-muted/30"
            >
              <Link href="/skills">
                View All Skills
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="hover-lift animate-fade-in-up bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <CardContent className="relative p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Start Your Project?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and bring innovative ideas to life. Let's discuss your
                project and see how we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="hover-lift hover-glow">
                  <Link href="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hover-scale bg-transparent border-border hover:bg-muted/30"
                >
                  <Link href="/projects">View My Work</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
