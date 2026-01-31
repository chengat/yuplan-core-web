import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Linkedin,
  Github,
  Sparkles,
  BookOpen,
  Search,
  Calendar,
  Info,
  Users,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About YuPlan - York University Course Planning Made Easy",
  description:
    "Learn about YuPlan, the modern course planning platform built for York University students. Discover how we help YorkU students find courses, compare sections, and plan their academic journey.",
  openGraph: {
    title: "About YuPlan - York University Course Planning",
    description:
      "Meet the team behind YuPlan, the course planning tool designed specifically for York University students.",
    url: "https://yuplan.ca/about",
  },
}

export default function AboutPage() {
  const team = [
    {
      name: "Svastik Sharma",
      role: "Engineer",
      initials: "SS",
      linkedin: "https://www.linkedin.com/in/svastiksharma/",
      github: "https://github.com/svastiks",
    },
    {
      name: "Nikhil N Chengat",
      role: "Engineer",
      initials: "NC",
      linkedin: "https://www.linkedin.com/in/chengat/",
      github: "https://github.com/chengat",
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header subtitle="Course selection, de-cluttered." />

      <div className="container mx-auto px-3 sm:px-4 py-10 sm:py-14 md:py-18 grow">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-14 md:mb-16 text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">About YuPlan</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance bg-linear-to-b from-foreground to-foreground/70 bg-clip-text">
            Course planning, reimagined for YorkU students
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
            YuPlan is a modern course planning platform designed to help York
            University (YorkU) students discover, explore, and plan their
            academic journey. We provide an intuitive interface for browsing
            York University courses, viewing detailed information, comparing
            sections, and making informed decisions about your education at York
            University.
          </p>
        </div>

        {/* Value Highlights */}
        <section className="container mx-auto px-3 sm:px-4 py-10 sm:py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-5 lg:gap-6 lg:grid-cols-3">
              <Card className="p-7 lg:col-span-2 bg-linear-to-br from-primary/10 via-primary/5 to-background border-primary/20">
                <div className="flex items-start gap-4 mb-5 min-h-22">
                  <div className="h-12 w-12 min-w-12 rounded-xl bg-primary/20 flex items-center justify-center ring-2 ring-primary/30">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">
                      Smarter search, faster decisions
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Filter by level and faculty in seconds.
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    "Student reviews + ratings",
                    "Prereqs clearly surfaced",
                    "RateMyProf links",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border-2 border-border/80 px-4 py-3 bg-background shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                    >
                      <span className="text-sm font-medium text-foreground whitespace-nowrap">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-7 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-5 min-h-22">
                  <div className="h-12 w-12 min-w-12 rounded-xl bg-primary/20 flex items-center justify-center ring-2 ring-primary/30">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      Section comparison
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      View all available sections side-by-side.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="rounded-lg bg-muted/60 px-4 py-3 border border-border/50">
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      See all meeting times
                    </span>
                  </div>
                  <div className="rounded-lg bg-muted/60 px-4 py-3 border border-border/50">
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      Compare instructor options
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-7 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-5 min-h-22">
                  <div className="h-12 w-12 min-w-12 rounded-xl bg-primary/20 flex items-center justify-center ring-2 ring-primary/30">
                    <Info className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      Unofficial course data
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Sourced from YorkU listings, not verified by the
                      university.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="rounded-lg bg-muted/60 px-4 py-3 border border-border/50">
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      Updated regularly
                    </span>
                  </div>
                  <div className="rounded-lg bg-muted/60 px-4 py-3 border border-border/50">
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      Faculty + credit info included
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-7 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-5 min-h-22">
                  <div className="h-12 w-12 min-w-12 rounded-xl bg-primary/20 flex items-center justify-center ring-2 ring-primary/30">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      Deep course details
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Everything you need in one view.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="rounded-lg bg-muted/60 px-4 py-3 border border-border/50">
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      Descriptions, prereqs, credits
                    </span>
                  </div>
                  <div className="rounded-lg bg-muted/60 px-4 py-3 border border-border/50">
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      Student reviews + feedback
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-7 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-5 min-h-22">
                  <div className="h-12 w-12 min-w-12 rounded-xl bg-primary/20 flex items-center justify-center ring-2 ring-primary/30">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      Instructor insights
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Learn about who's teaching before you enroll.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="rounded-lg bg-muted/60 px-4 py-3 border border-border/50">
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      Direct RateMyProfessors links
                    </span>
                  </div>
                  <div className="rounded-lg bg-muted/60 px-4 py-3 border border-border/50">
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      Browse courses by instructor
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-10">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {team.map((member) => (
              <Card
                key={member.name}
                className="p-5 sm:p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <Avatar className="h-12 w-12 sm:h-16 sm:w-16">
                    <AvatarFallback className="bg-primary/10 text-primary text-base sm:text-lg font-bold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 pt-3 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 w-9 p-0 shadow-md hover:shadow-lg border-2"
                    asChild
                  >
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 w-9 p-0 shadow-md hover:shadow-lg border-2"
                    asChild
                  >
                    <Link
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
