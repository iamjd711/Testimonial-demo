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
    color: "text-category-ai",
    bg: "bg-category-ai-light dark:bg-category-ai-dark",
    border: "border-category-ai",
    ring: "ring-category-ai/20 group-hover:ring-category-ai/40",
    hover: "hover:border-category-ai hover:text-category-ai",
    accent: "bg-category-ai",
  },
  development: {
    label: "Development",
    icon: Code,
    color: "text-category-development",
    bg: "bg-category-development-light dark:bg-category-development-dark",
    border: "border-category-development",
    ring: "ring-category-development/20 group-hover:ring-category-development/40",
    hover: "hover:border-category-development hover:text-category-development",
    accent: "bg-category-development",
  },
  design: {
    label: "Design",
    icon: Palette,
    color: "text-category-design",
    bg: "bg-category-design-light dark:bg-category-design-dark",
    border: "border-category-design",
    ring: "ring-category-design/20 group-hover:ring-category-design/40",
    hover: "hover:border-category-design hover:text-category-design",
    accent: "bg-category-design",
  },
  business: {
    label: "Business",
    icon: TrendingUp,
    color: "text-category-business",
    bg: "bg-category-business-light dark:bg-category-business-dark",
    border: "border-category-business",
    ring: "ring-category-business/20 group-hover:ring-category-business/40",
    hover: "hover:border-category-business hover:text-category-business",
    accent: "bg-category-business",
  },
  security: {
    label: "Security",
    icon: Shield,
    color: "text-category-security",
    bg: "bg-category-security-light dark:bg-category-security-dark",
    border: "border-category-security",
    ring: "ring-category-security/20 group-hover:ring-category-security/40",
    hover: "hover:border-category-security hover:text-category-security",
    accent: "bg-category-security",
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
        config.hover,
        "hover:shadow-current/10",
        className,
      )}
    >
      {/* Category badge */}
      <div className="flex items-center justify-between mb-4">
        <Badge
          variant="secondary"
          className={cn(
            "flex items-center gap-1.5 px-3 py-1 transition-colors duration-300",
            config.bg,
            config.color,
            config.border + "/20",
            "hover:bg-current/10",
          )}
        >
          <IconComponent className="w-3 h-3" />
          <span className="text-xs font-medium">{config.label}</span>
        </Badge>

        {/* Category accent dot */}
        <div
          className={cn(
            "w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300",
            config.accent,
          )}
        />
      </div>

      <div className="relative z-10 flex items-center gap-4 mb-4">
        <Avatar className={cn("h-14 w-14 ring-2 transition-all duration-300", config.ring)}>
          <AvatarImage src={author.avatar || "/placeholder.svg"} alt={author.name} />
          <AvatarFallback className={cn("font-semibold", config.bg, config.color)}>
            {author.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3
            className={cn(
              "text-lg font-semibold leading-none text-foreground transition-colors duration-300",
              config.hover.replace("hover:border-", "group-hover:text-").replace(" hover:text-category-", ""),
            )}
          >
            {author.name}
          </h3>
          <p
            className={cn(
              "text-sm text-muted-foreground mt-1 transition-colors duration-300",
              config.hover.replace("hover:border-", "group-hover:text-").replace(" hover:text-category-", "") + "/70",
            )}
          >
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
          "absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-gradient-to-r from-transparent via-current to-transparent",
          config.color,
        )}
      />

      {/* Subtle category pattern overlay */}
      <div
        className={cn(
          "absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-500",
          config.color,
        )}
      >
        <IconComponent className="w-full h-full" />
      </div>
    </Card>
  )
}
