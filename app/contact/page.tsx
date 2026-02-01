"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageSquare, AlertCircle, Send, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "feedback",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const errorData = await res.json()
        console.error("Failed to submit form:", res.status, errorData)
        alert(`Submission failed: ${errorData.error || "Unknown error"}`)
      } else {
        setSubmitted(true)
        setFormData({ name: "", email: "", type: "feedback", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (err) {
      console.error("Error submitting form", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header subtitle="Course selection, de-cluttered." />

      <div className="container mx-auto px-4 py-10 sm:py-16 lg:py-20 flex-1 w-full">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-10 sm:mb-16 text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance bg-linear-to-b from-foreground to-foreground/70 bg-clip-text ">
            We'd Love to Hear From You
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
            Have feedback about YuPlan? Found an error in our course data? Have
            a feature suggestion? Let us know!
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                How can we help?
              </h2>
              <p className="text-muted-foreground">
                Choose from the options below and we'll get back to you as soon
                as possible.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-5 sm:p-6 hover:shadow-lg hover:border-primary/30 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-linear-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Feedback</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Share your thoughts and help us improve the platform
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 sm:p-6 hover:shadow-lg hover:border-primary/30 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-linear-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <AlertCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Report Issues</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Found incorrect course information? Let us know
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 sm:p-6 hover:shadow-lg hover:border-primary/30 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-linear-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">
                      Feature Suggestions
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Have a feature idea? We'd love to hear it!
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-5 sm:p-6 bg-muted/50 border-dashed">
              <p className="text-sm text-muted-foreground text-center">
                <span className="font-semibold text-foreground">
                  Response Time:
                </span>{" "}
                We typically respond within 24-48 hours during business days.
              </p>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <div className="xl:sticky xl:top-8 xl:self-start">
            <Card className="p-6 sm:p-8 shadow-xl border-primary/10">
              {submitted ? (
                <div className="text-center py-12 sm:py-16">
                  <div className="relative inline-flex mb-6">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                    <div className="relative h-16 w-16 sm:h-20 sm:w-20 bg-linear-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                      <Send className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                    Thank You!
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
                    We've received your message and will get back to you soon.
                    Your feedback helps us improve YuPlan.
                  </p>
                  <div className="h-1 w-24 bg-linear-to-r from-transparent via-primary/50 to-transparent rounded-full mx-auto" />
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                      Send us a message
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Fill out the form below and we'll get back to you.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold mb-2.5"
                      >
                        Name <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-11 transition-all focus:ring-2 focus:ring-primary/30"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold mb-2.5"
                      >
                        Email <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-11 transition-all focus:ring-2 focus:ring-primary/30"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="type"
                        className="block text-sm font-semibold mb-2.5"
                      >
                        Message Type <span className="text-primary">*</span>
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full h-11 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      >
                        <option value="feedback">General Feedback</option>
                        <option value="bug">Report Incorrect Data</option>
                        <option value="feature">Feature Suggestion</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold mb-2.5"
                      >
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us what's on your mind..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none transition-all"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 text-base font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all bg-linear-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary disabled:opacity-50"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="inline-block animate-pulse">
                          Sending
                        </span>
                        <span className="inline-block animate-bounce">...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
