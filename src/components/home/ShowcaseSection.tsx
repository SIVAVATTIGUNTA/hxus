import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const slides = [
  {
    title: "AI-Powered Sourcing",
    description: "See how our AI agents surface qualified candidates with explainability and recruiter controls.",
    cta: { label: "View AI Agents", href: "/services/ai-agents" },
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Global Staffing at Speed",
    description: "Coordinate multi-country hiring with local compliance and curated specialist vendors.",
    cta: { label: "Explore Global Staffing", href: "/solutions/global-staffing" },
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Data & Insights",
    description: "Leadership dashboards for time-to-hire, supplier performance, and market rates.",
    cta: { label: "See Insights", href: "/solutions/data-insights" },
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
];

export const ShowcaseSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-3 mb-6 text-primary">
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold text-sm uppercase tracking-wide">Highlights</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">What’s New</h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore our latest capabilities across AI agents, global staffing, and data-driven workforce insights.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
            <span>Hover or use arrows to browse</span>
          </div>
        </div>

        <div className="relative">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="lg:-ml-6">
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="lg:basis-1/3">
                  <div className="group overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">{slide.title}</h3>
                      <p className="text-sm text-muted-foreground">{slide.description}</p>
                      <Button variant="ghost" size="sm" asChild className="inline-flex items-center gap-2">
                        <a href={slide.cta.href}>
                          {slide.cta.label}
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

