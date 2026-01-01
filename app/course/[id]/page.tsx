"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Users, BookOpen } from "lucide-react";
import Link from "next/link";
import { coursesApi, type Course } from "@/lib/api/courses";

export default function CoursePage() {
  const sections = [
    {
      id: 1,
      section: "A",
      instructor: "Andre Redmond",
      lecture: {
        day: "Mon",
        time: "09:30 - 11:00",
        location: "SLH B",
      },
      labs: [
        { day: "Tue", time: "14:30 - 16:00", location: "LAS 1003" },
        { day: "Thu", time: "14:30 - 16:00", location: "LAS 1003" },
      ],
    },
    {
      id: 2,
      section: "B",
      instructor: "Jacob Wong",
      lecture: {
        day: "Wed",
        time: "11:30 - 13:00",
        location: "CB 122",
      },
      labs: [
        { day: "Mon", time: "16:00 - 17:30", location: "LAS 1004" },
        { day: "Fri", time: "16:00 - 17:30", location: "LAS 1004" },
      ],
    },
    {
      id: 3,
      section: "C",
      instructor: "Salman Ahmadzadeh",
      lecture: {
        day: "Tue",
        time: "14:30 - 16:00",
        location: "SLH C",
      },
      labs: [
        { day: "Wed", time: "09:30 - 11:00", location: "LAS 1005" },
        { day: "Thu", time: "11:30 - 13:00", location: "LAS 1005" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-7 w-7 text-primary" />
            <span className="text-2xl font-bold text-primary">YUPlan</span>
          </Link>
          <p className="text-sm text-muted-foreground hidden md:block">
            Course selection, de-cluttered.
          </p>
          {/* <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm">Sign Up</Button>
          </div> */}
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="max-w-6xl mx-auto mb-8">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block"
          >
            ← Back to search
          </Link>

          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-3">EECS 2030</h1>
              <p className="text-2xl text-muted-foreground mb-4">
                Advanced Object-Oriented Programming
              </p>
            </div>
            <Badge variant="secondary" className="text-base px-4 py-2">
              EECS 2030 · 3.0
            </Badge>
          </div>

          <Card className="p-8 bg-muted/30">
            <p className="text-base text-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Card>

          <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Fall 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>6 sections available</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Lassonde School of Engineering</span>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Available Sections</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((section) => (
              <Card
                key={section.id}
                className="p-5 hover:shadow-lg transition-all hover:border-primary/50"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">
                    Section {section.section}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {section.instructor}
                  </p>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <BookOpen className="h-3 w-3" />
                      <span>Lecture</span>
                    </div>
                    <p className="text-sm font-medium">
                      {section.lecture.day}: {section.lecture.time}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {section.lecture.location}
                    </p>
                  </div>

                  {section.labs.map((lab, idx) => (
                    <div key={idx} className="bg-muted/30 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                        <BookOpen className="h-3 w-3" />
                        <span>Lab {idx + 1}</span>
                      </div>
                      <p className="text-sm font-medium">
                        {lab.day}: {lab.time}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {lab.location}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                Y
              </div>
              <span className="text-xl font-bold text-primary">YorkUPlan</span>
            </div>
            <nav className="flex items-center gap-6 text-sm">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
