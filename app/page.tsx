import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"
import { ThemeToggle } from "@/components/theme-toggle"

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    category: "ai" as const,
    href: "https://twitter.com/emmaai",
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    category: "development" as const,
    href: "https://twitter.com/davidtech",
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.",
    category: "ai" as const,
  },
  {
    author: {
      name: "Michael Chen",
      handle: "@mikedev",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    text: "The documentation is excellent and the community support is outstanding. Best developer experience I've had.",
    category: "development" as const,
  },
  {
    author: {
      name: "Sarah Johnson",
      handle: "@sarahux",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    text: "Our team productivity has increased dramatically. The intuitive interface makes complex tasks simple.",
    category: "design" as const,
  },
  {
    author: {
      name: "Alex Rivera",
      handle: "@alexbiz",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    text: "ROI increased by 300% within the first quarter. This platform is a game-changer for business growth.",
    category: "business" as const,
  },
  {
    author: {
      name: "Jessica Kim",
      handle: "@jesssec",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    },
    text: "Security is top-notch. We feel confident knowing our data is protected with enterprise-grade encryption.",
    category: "security" as const,
  },
  {
    author: {
      name: "Ryan Foster",
      handle: "@ryandesign",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    },
    text: "The design system is incredibly well thought out. Every component feels cohesive and purposeful.",
    category: "design" as const,
  },
]

export default function TestimonialsSectionDemo() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Enhanced header with brand styling */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <h1 className="text-xl font-bold">
              <span className="text-brand-gradient">Testimonials</span>
              <span className="text-muted-foreground"> Demo</span>
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main content with enhanced styling */}
      <main className="pt-20">
        <TestimonialsSection
          title="Trusted by developers worldwide"
          description="Join thousands of developers who are already building the future with our AI platform"
          testimonials={testimonials}
        />
      </main>
    </div>
  )
}
