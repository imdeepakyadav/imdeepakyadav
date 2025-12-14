import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import {
  ArrowRight,
  Award,
  Briefcase,
  Calendar,
  Code,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Smartphone,
  Star,
  TrendingUp,
  Users,
} from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About - Deepak Yadav | Full Stack & Mobile Developer",
  description:
    "Full Stack and Mobile Developer with 6+ years of experience. Founder of Teamkul & AdsToLive Technologies. Expert in React Native, Android, Node.js, and AI integration.",
}

export default function AboutPage() {
  const achievements = [
    { icon: Star, value: "20+", label: "Apps Published" },
    { icon: Users, value: "70+", label: "Satisfied Clients" },
    { icon: Briefcase, value: "6+", label: "Years Experience" },
    { icon: TrendingUp, value: "50K+", label: "App Downloads" },
  ]

  const expertise = [
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Building high-performance Android apps and cross-platform solutions with React Native.",
      skills: ["Android SDK", "React Native", "Expo", "Kotlin", "Java", "Flutter"],
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Creating scalable web applications with modern technologies and cloud architecture.",
      skills: ["React.js", "Next.js", "Node.js", "TypeScript", "Express.js", "GraphQL"],
    },
    {
      icon: Rocket,
      title: "AI Integration",
      description: "Implementing AI-powered features using OpenAI API and machine learning solutions.",
      skills: ["OpenAI API", "Machine Learning", "Data Analytics", "AI Features"],
    },
  ]

  const experience = [
    {
      title: "Founder & Chief Technology Officer",
      company: "Teamkul",
      location: "Faridabad, Haryana",
      period: "March 2023 – Present",
      highlights: [
        "Established and scaled IT solutions company achieving 150% year-over-year revenue growth",
        "Architected 10+ enterprise-grade applications serving 100,000+ monthly active users",
        "Built and managed cross-functional team of 8+ engineers using Agile methodologies",
        "Designed scalable backend infrastructure on AWS ensuring 99.9% uptime",
      ],
    },
    {
      title: "Android Developer",
      company: "Inforises Technologies",
      location: "Faridabad, Haryana",
      period: "May 2022 – Present",
      highlights: [
        "Developed 15+ production Android apps achieving 4.5+ star ratings with 30,000+ downloads",
        "Optimized performance reducing load times by 40% and crash rates by 60%",
        "Integrated Firebase, RESTful APIs, and payment gateways for enhanced functionality",
        "Mentored junior developers improving team productivity by 25%",
      ],
    },
    {
      title: "Co-Founder & Account Relationship Manager",
      company: "AdsToLive Technologies",
      location: "Faridabad, Haryana",
      period: "January 2022 – Present",
      highlights: [
        "Co-founded digital marketing company achieving 150% year-over-year revenue growth",
        "Developed automated advertising solutions improving campaign ROI by 45%",
        "Built CRM system reducing client churn by 30% with 98% retention rate",
      ],
    },
    {
      title: "Digital Marketing Executive",
      company: "Inforises Technologies",
      location: "Faridabad, Haryana",
      period: "February 2020 – May 2022",
      highlights: [
        "Increased organic website traffic by 200% and conversion rates by 35%",
        "Managed ad campaigns with 500K+ INR monthly budgets achieving 4.2x ROAS",
        "Improved search rankings for 50+ keywords to first page through SEO",
      ],
    },
  ]

  const skills = {
    "Programming Languages": ["Java", "Kotlin", "JavaScript", "TypeScript", "Python", "PHP"],
    "Mobile Development": ["Android SDK", "React Native", "Expo", "Flutter", "Material Design"],
    "Frontend": ["React.js", "Next.js", "Redux", "TailwindCSS", "Bootstrap"],
    "Backend": ["Node.js", "Express.js", "Laravel", "RESTful APIs", "GraphQL"],
    "Databases": ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "DynamoDB"],
    "Cloud & DevOps": ["AWS", "GCP", "Azure", "Docker", "CI/CD", "Git"],
  }

  const certifications = [
    "Google Play Academy – Store Listing Certificate",
    "100+ Published Apps on Google Play & App Store",
    "15+ Open Source Repositories on GitHub",
  ]

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">


      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-1">
            Results-driven Full Stack and Mobile Developer with 6+ years of experience. Founder of two technology
            companies, delivering 20+ production applications with 50,000+ downloads.
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="space-y-6 animate-fade-in-left">
            <h2 className="text-2xl font-bold text-foreground">Hi, I'm Deepak Yadav</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack and Mobile Developer specializing in architecting and delivering scalable
              Android and web applications. I've founded and scaled two technology companies, managing cross-functional
              teams and delivering production applications that serve thousands of users.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans React Native, Android SDK, cloud architecture, and AI integration. I have a proven
              track record of optimizing application performance, reducing load times by 40% and crash rates by 60%. I'm
              passionate about building user-centric solutions that drive business growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:work.deepak.yadav@gmail.com" className="hover:text-primary transition-colors">
                  work.deepak.yadav@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91-8860891342</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Faridabad, Haryana, India</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="hover-lift hover-glow" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover-scale bg-transparent border-border hover:bg-muted/30"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border border-border/50 overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Deepak Yadav"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-pulse-glow blur-xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full animate-float blur-lg" />
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`text-center hover-lift animate-fade-in-up stagger-${index + 1} bg-card/50 backdrop-blur-sm border-border/50`}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{achievement.value}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expertise Areas */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center animate-fade-in-up">Areas of Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((area, index) => (
              <Card
                key={index}
                className={`hover-lift animate-fade-in-up stagger-${index + 1} bg-card/50 backdrop-blur-sm border-border/50`}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <area.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs bg-muted/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center animate-fade-in-up">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card
                key={index}
                className={`hover-lift animate-fade-in-up stagger-${index + 1} bg-card/50 backdrop-blur-sm border-border/50`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center animate-fade-in-up">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card
                key={category}
                className={`hover-lift animate-fade-in-up stagger-${index + 1} bg-card/50 backdrop-blur-sm border-border/50`}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-primary">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs bg-muted/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Education */}
            <Card className="hover-lift animate-fade-in-left bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Bachelors of Computer Application</h4>
                  <p className="text-primary text-sm">Indira Gandhi National Open University (IGNOU)</p>
                  <p className="text-muted-foreground text-sm">January 2022 – July 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Higher Secondary - Commerce</h4>
                  <p className="text-primary text-sm">GBSSS, Faridabad</p>
                  <p className="text-muted-foreground text-sm">April 2019 – December 2020</p>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="hover-lift animate-fade-in-right bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Certifications & Achievements</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                      <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <Card className="text-center hover-lift animate-fade-in-up bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <CardContent className="relative p-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects. Whether you need a
              mobile app, web application, or AI-powered solution, let's build something amazing together.
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
