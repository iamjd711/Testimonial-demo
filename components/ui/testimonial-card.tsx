import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Palette, TrendingUp, Shield } from "lucide-react"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export type TestimonialCategory = "ai" | "development" | "design" | "business" | "security"

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  category: TestimonialCategory
  href?: string
  className?: string
}

const categoryConfig = {
  ai: {
    label: "AI & ML",
    icon: Brain,
    description: "Artificial Intelligence & Machine Learning",
  },
  development: {
    label: "Development",
    icon: Code,
    description: "Software Development & Engineering",
  },
  design: {
    label: "Design",
    icon: Palette,
    description: "UI/UX Design & Creative",
  },
  business: {
    label: "Business",
    icon: TrendingUp,
    description: "Business Growth & Strategy",
  },
  security: {
    label: "Security",
    icon: Shield,
    description: "Cybersecurity & Data Protection",
  },
}

export function TestimonialCard({ author, text, category, href, className }: TestimonialCardProps) {
  const Card = href ? "a" : "div"
  const config = categoryConfig[category]
  const IconComponent = config.icon

  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group flex flex-col rounded-xl border border-border/50",
        "bg-gradient-to-br from-card via-card to-muted/20",
        "p-6 text-start",
        "hover:shadow-lg transition-all duration-500 ease-out",
        "max-w-[320px] sm:max-w-[320px]",
        "relative overflow-hidden",
        `category-${category}`,
        // Category-specific hover effects using CSS variables
        "hover:border-[var(--category-color)] hover:shadow-[var(--category-color)]/10",
        "hover:from-card hover:via-[var(--category-bg)] hover:to-[var(--category-bg)]",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--category-color)]/5 before:to-[var(--category-color)]/10 before:opacity-0 before:transition-opacity before:duration-500",
        "hover:before:opacity-100",
        className,
      )}
    >
      {/* Category badge */}
      <div className="flex items-center justify-between mb-4">
        <Badge
          variant="secondary"
          className={cn(
            "flex items-center gap-1.5 px-3 py-1 transition-colors duration-300",
            "bg-[var(--category-bg)] text-[var(--category-color)] border-[var(--category-color)]/20",
            "hover:bg-[var(--category-color)]/10",
          )}
        >
          <IconComponent className="w-3 h-3" />
          <span className="text-xs font-medium">{config.label}</span>
        </Badge>

        {/* Category accent dot */}
        <div
          className="w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: "var(--category-color)" }}
        />
      </div>

      <div className="relative z-10 flex items-center gap-4 mb-4">
        <Avatar
          className={cn(
            "h-14 w-14 ring-2 transition-all duration-300",
            "ring-[var(--category-color)]/20 group-hover:ring-[var(--category-color)]/40",
          )}
        >
          <AvatarImage src={author.avatar || "/placeholder.svg"} alt={author.name} />
          <AvatarFallback
            className="font-semibold"
            style={{
              backgroundColor: "var(--category-bg)",
              color: "var(--category-color)",
            }}
          >
            {author.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold leading-none text-foreground group-hover:text-[var(--category-color)] transition-colors duration-300">
            {author.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 group-hover:text-[var(--category-color)]/70 transition-colors duration-300">
            {author.handle}
          </p>
        </div>
      </div>

      <p className="relative z-10 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        {text}
      </p>

      {/* Category-colored accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(to right, var(--category-color)/0.2, var(--category-color)/0.4, var(--category-color)/0.2)`,
        }}
      />

      {/* Subtle category pattern overlay */}
      <div
        className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
        style={{ color: "var(--category-color)" }}
      >
        <IconComponent className="w-full h-full" />
      </div>
    </Card>
  )
}
