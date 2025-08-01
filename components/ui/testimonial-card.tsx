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
        "hover:border-[hsl(var(--category-color))] hover:shadow-lg hover:shadow-[hsl(var(--category-color))]/10",
        "hover:from-card hover:via-[hsl(var(--category-bg))] hover:to-[hsl(var(--category-bg))]",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-all duration-500 ease-out",
        "relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-[hsl(var(--category-color))]/5 before:to-[hsl(var(--category-color))]/10 before:opacity-0 before:transition-opacity before:duration-500",
        "hover:before:opacity-100",
        `category-${category}`,
        className,
      )}
    >
      {/* Category badge */}
      <div className="flex items-center justify-between mb-4">
        <Badge
          variant="secondary"
          className={cn(
            "bg-[hsl(var(--category-bg))] text-[hsl(var(--category-color))] border-[hsl(var(--category-color))]/20",
            "hover:bg-[hsl(var(--category-color))]/10 transition-colors duration-300",
            "flex items-center gap-1.5 px-3 py-1",
          )}
        >
          <IconComponent className="w-3 h-3" />
          <span className="text-xs font-medium">{config.label}</span>
        </Badge>

        {/* Category accent dot */}
        <div className="w-2 h-2 rounded-full bg-[hsl(var(--category-color))] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="relative z-10 flex items-center gap-4 mb-4">
        <Avatar
          className={cn(
            "h-14 w-14 ring-2 ring-[hsl(var(--category-color))]/20 group-hover:ring-[hsl(var(--category-color))]/40 transition-all duration-300",
          )}
        >
          <AvatarImage src={author.avatar || "/placeholder.svg"} alt={author.name} />
          <AvatarFallback
            className={cn("bg-[hsl(var(--category-bg))] text-[hsl(var(--category-color))] font-semibold")}
          >
            {author.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold leading-none text-foreground group-hover:text-[hsl(var(--category-color))] transition-colors duration-300">
            {author.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 group-hover:text-[hsl(var(--category-color))]/70 transition-colors duration-300">
            {author.handle}
          </p>
        </div>
      </div>

      <p className="relative z-10 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        {text}
      </p>

      {/* Category-colored accent line */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r",
          "from-[hsl(var(--category-color))]/20 via-[hsl(var(--category-color))]/40 to-[hsl(var(--category-color))]/20",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        )}
      />

      {/* Subtle category pattern overlay */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <IconComponent className="w-full h-full text-[hsl(var(--category-color))]" />
      </div>
    </Card>
  )
}
