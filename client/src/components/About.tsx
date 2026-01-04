import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * About Component
 * Design: Modern Professional Tech
 * - Asymmetric layout with image on left, content on right
 * - Company statistics with bold numbers
 * - Professional company description
 * - Call-to-action button
 * - Alternating layout for visual variety
 */

export default function About() {
  const stats = [
    { number: "38", label: "Years in Business" },
    { number: "700+", label: "Happy Clients" },
    { number: "3200+", label: "Projects Completed" },
    { number: "245+", label: "Skilled Experts" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/team-collaboration.jpg"
                alt="Codexwagon Team"
                className="w-full h-auto rounded-lg shadow-2xl object-cover"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg blur-3xl -z-10 transform -translate-x-4 translate-y-4"></div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <p className="text-primary font-accent font-semibold text-sm uppercase tracking-wide">
                About Codexwagon
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                We've Been Thriving in IT Solutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Codexwagon specializes in technological and IT-related services including product engineering, warranty management, cloud infrastructure, network solutions, and more. We focus on understanding your business needs to deliver solutions that fit perfectly.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <p className="text-3xl md:text-4xl font-accent font-bold text-primary">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-accent flex items-center gap-2 group"
              >
                Join Us Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
