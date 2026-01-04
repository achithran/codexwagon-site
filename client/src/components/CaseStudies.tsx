import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Case Studies Component
 * Design: Modern Professional Tech
 * - Grid layout showcasing past projects
 * - Professional project cards with images
 * - Category tags for project types
 * - Hover effects for interactivity
 * - Call-to-action for each project
 */

const caseStudies = [
  {
    title: "Arden-Internal Networking",
    category: "Cyber Security",
    description: "The prospects for a company operating in this new market are varied and exciting. The potential for growth is immense.",
    image: "/images/case-study-tech.jpg",
  },
  {
    title: "A Freeserve Case Study",
    category: "Cyber Security",
    description: "The prospects for a company operating in this new market are varied and exciting. The potential for growth is immense.",
    image: "/images/case-study-tech.jpg",
  },
  {
    title: "Aqua - Research and Energy",
    category: "Cyber Security",
    description: "The prospects for a company operating in this new market are varied and exciting. The potential for growth is immense.",
    image: "/images/case-study-tech.jpg",
  },
  {
    title: "Mitech-Smart Vision",
    category: "Cyber Security",
    description: "At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution.",
    image: "/images/case-study-tech.jpg",
  },
  {
    title: "Enterprise Cloud Migration",
    category: "Cloud Computing",
    description: "Successfully migrated legacy systems to cloud infrastructure, reducing operational costs by 40%.",
    image: "/images/case-study-tech.jpg",
  },
  {
    title: "Data Center Optimization",
    category: "Infrastructure",
    description: "Optimized data center operations leading to improved performance and reduced energy consumption.",
    image: "/images/case-study-tech.jpg",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-primary font-accent font-semibold text-sm uppercase tracking-wide mb-4">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Proud Projects That Make Us Stand Out
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our portfolio of successful projects that demonstrate our expertise and commitment to excellence.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="border-border overflow-hidden hover:shadow-lg transition-all duration-300 bg-card group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <CardHeader className="relative">
                <div className="absolute top-0 right-0 -mt-6 mr-4">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-accent font-semibold rounded-full">
                    {study.category}
                  </span>
                </div>
                <CardTitle className="text-xl font-accent text-foreground mt-2">
                  {study.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {study.description}
                </CardDescription>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0 h-auto font-accent flex items-center gap-2"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
