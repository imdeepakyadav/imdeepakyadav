import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Code, Smartphone, Database, Cloud, Palette, Zap } from "lucide-react"
import Link from "next/link"
import WaveBackground from "@/components/wave-background"

export const metadata: Metadata = {
  title: "Skills - Deepak Yadav",
  description: "Technical skills and expertise of Deepak Yadav - Full Stack Developer",
}

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 88 },
        { name: "Expo", level: 85 },
        { name: "Android (Java)", level: 75 },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "Firebase", level: 88 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: Zap,
      skills: [
        { name: "OpenAI API", level: 85 },
        { name: "AI Integration", level: 80 },
      ],
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      skills: [
        { name: "Figma", level: 80 },
        { name: "Responsive Design", level: 90 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: Cloud,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Vercel", level: 85 },
      ],
    },
  ]

  const softSkills = [
    "Problem Solving",
    "Team Leadership",
    "Communication",
    "Project Management",
    "Agile/Scrum",
    "Mentoring",
  ]
  const currentlyLearning = ["GraphQL", "Kubernetes", "Web3", "DevOps", "Microservices"]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <WaveBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Skills & <span className="text-gradient">Expertise</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className={`hover-lift animate-fade-in-up stagger-${categoryIndex + 1} bg-card/50 backdrop-blur-sm border-border/50`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-primary font-mono">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center animate-fade-in-up">Additional Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover-lift animate-fade-in-left bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-muted/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift animate-fade-in-right bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Currently Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {currentlyLearning.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-muted/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <Card className="text-center hover-lift animate-fade-in-up bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <CardContent className="relative p-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Leverage These Skills?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how my expertise can help bring your project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-lift hover-glow">
                <Link href="/contact">
                  Start a Project
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
    </div>
  )
}
