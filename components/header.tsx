import { GraduationCap } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  subtitle?: string
}

export function Header({ subtitle }: HeaderProps) {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 grid grid-cols-3 items-center">
        <Link href="/" className="flex items-center gap-2 justify-self-start">
          <GraduationCap className="h-7 w-7" style={{ color: "#e31837" }} />
          <span className="text-2xl font-bold" style={{ color: "#e31837" }}>
            YUPlan
          </span>
        </Link>
        {subtitle && (
          <p className="text-sm text-muted-foreground text-center justify-self-center hidden md:block">
            {subtitle}
          </p>
        )}
        <div className="flex items-center gap-4 justify-self-end">
          <Link href="/courses">
            <Button variant="outline" className="shadow-md shadow-primary">
              View All Courses
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
