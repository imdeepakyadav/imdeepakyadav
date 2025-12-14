"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Clock, Github, Linkedin, Mail, MapPin, MessageCircle, MessageSquare, Phone, Send, Twitter } from "lucide-react"
import type React from "react"
import { useState } from "react"


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "work.deepak.yadav@gmail.com",
      description: "I'll respond within 24 hours",
      href: "mailto:work.deepak.yadav@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 88608 91342",
      description: "Mon-Fri, 9AM-6PM IST",
      href: "tel:+918860891342",
    },
    { icon: MapPin, title: "Location", value: "Faridabad, Haryana 121001, India", description: "Open to remote work", href: null },
  ]

  const socialLinks = [
    { icon: Github, name: "GitHub", href: "https://github.com/imdeepakyadav" },
    { icon: Linkedin, name: "LinkedIn", href: "https://linkedin.com/in/imdeepakyadav" },
    { icon: Twitter, name: "Twitter", href: "https://twitter.com/imdeepakyadav" },
  ]

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer: "Most web applications take 2-8 weeks from start to deployment.",
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes! I work with clients worldwide and am comfortable with different time zones.",
    },
    {
      question: "What technologies do you specialize in?",
      answer: "React, Next.js, Node.js, React Native, and modern web technologies.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "I offer maintenance packages and ongoing support for all projects.",
    },
  ]

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">


      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <Card className="hover-lift animate-fade-in-left bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <MessageSquare className="h-5 w-5 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-muted/30 border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-muted/30 border-border"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-muted/30 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="project">New Project</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-muted/30 border-border"
                  />
                </div>
                <Button type="submit" className="w-full hover-lift hover-glow" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
              
            </CardContent>
            <CardContent className="flex items-center justify-center">
              {/* Add A WhatsApp Button With Message input typed by user */}
              <Button className="w-full hover-lift hover-glow" onClick={() => window.open("https://wa.me/918860891342?text=" + encodeURIComponent(formData.message), "_blank")}>
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>

            </CardContent>
            
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in-right">
            <Card className="hover-lift bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{info.title}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground text-sm hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.name}
                      variant="outline"
                      size="icon"
                      asChild
                      className="bg-transparent border-border hover:bg-muted/30"
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Clock className="h-5 w-5 text-primary" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-foreground font-medium text-sm">Available for new projects</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-muted/50">
                    Full-time
                  </Badge>
                  <Badge variant="secondary" className="bg-muted/50">
                    Freelance
                  </Badge>
                  <Badge variant="secondary" className="bg-muted/50">
                    Remote
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center animate-fade-in-up">FAQ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className={`hover-lift animate-fade-in-up stagger-${index + 1} bg-card/50 backdrop-blur-sm border-border/50`}
              >
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2 flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <Card className="text-center hover-lift animate-fade-in-up bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <CardContent className="relative p-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Start?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              I'm excited to learn about your project and discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-lift hover-glow">
                <Mail className="mr-2 h-5 w-5" />
                Email Me Directly
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover-scale bg-transparent border-border hover:bg-muted/30"
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
