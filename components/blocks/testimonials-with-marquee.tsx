import { cn } from "@/lib/utils"
import { TestimonialCard, type TestimonialAuthor, type TestimonialCategory } from "@/components/ui/testimonial-card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Palette, TrendingUp, Shield } from "lucide-react"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    category: TestimonialCategory
    href?: string
  }>
  className?: string
}

const categoryStats = {
  ai: {
    icon: Brain,
    label: "AI & ML",
    color: "text-category-ai",
    bg: "bg-category-ai-light dark:bg-category-ai-dark",
    border: "border-category-ai/30 hover:border-category-ai/50",
    accent: "bg-category-ai/20",
  },
  development: {
    icon: Code,
    label: "Development",
    color: "text-category-development",
    bg: "bg-category-development-light dark:bg-category-development-dark",
    border: "border-category-development/30 hover:border-category-development/50",
    accent: "bg-category-development/20",
  },
  design: {
    icon: Palette,
    label: "Design",
    color: "text-category-design",
    bg: "bg-category-design-light dark:bg-category-design-dark",
    border: "border-category-design/30 hover:border-category-design/50",
    accent: "bg-category-design/20",
  },
  business: {
    icon: TrendingUp,
    label: "Business",
    color: "text-category-business",
    bg: "bg-category-business-light dark:bg-category-business-dark",
    border: "border-category-business/30 hover:border-category-business/50",
    accent: "bg-category-business/20",
  },
  security: {
    icon: Shield,
    label: "Security",
    color: "text-category-security",
    bg: "bg-category-security-light dark:bg-category-security-dark",
    border: "border-category-security/30 hover:border-category-security/50",
    accent: "bg-category-security/20",
  },
}

export function TestimonialsSection({ title, description, testimonials, className }: TestimonialsSectionProps) {
  // Calculate category distribution
  const categoryCount = testimonials.reduce(
    (acc, testimonial) => {
      acc[testimonial.category] = (acc[testimonial.category] || 0) + 1
      return acc
    },
    {} as Record<TestimonialCategory, number>,
  )

  return (
    <section
      className={cn(
        "relative bg-background text-foreground transition-colors duration-300",
        "py-16 sm:py-24 md:py-32 px-0",
        "overflow-hidden",
        className,
      )}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="relative mx-auto flex max-w-container flex-col items-center gap-8 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-6 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-4xl font-bold leading-tight sm:text-6xl sm:leading-tight">
            <span className="text-brand-gradient">{title.split(" ").slice(0, 2).join(" ")}</span>
            <span className="text-foreground"> {title.split(" ").slice(2).join(" ")}</span>
          </h2>
          <p className="text-lg max-w-[600px] font-medium text-muted-foreground sm:text-xl leading-relaxed">
            {description}
          </p>

          {/* Category legend */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            {Object.entries(categoryCount).map(([category, count]) => {
              const config = categoryStats[category as TestimonialCategory]
              const IconComponent = config.icon
              return (
                <Badge
                  key={category}
                  variant="outline"
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 text-sm transition-colors duration-300",
                    config.border,
                    config.bg,
                    config.color,
                  )}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{config.label}</span>
                  <span className={cn("px-1.5 py-0.5 rounded-full text-xs font-medium", config.accent, config.color)}>
                    {count}
                  </span>
                </Badge>
              )
            })}
          </div>

          {/* Brand accent line */}
          <div className="w-24 h-1 bg-brand-gradient rounded-full" />
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)] flex-row [--duration:50s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) =>
                testimonials.map((testimonial, i) => <TestimonialCard key={`${setIndex}-${i}`} {...testimonial} />),
              )}
            </div>
          </div>

          {/* Enhanced gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background via-background/80 to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background via-background/80 to-transparent sm:block" />
        </div>
      </div>
    </section>
  )
}
