import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Hero Component
 * Design: Modern Professional Tech
 * - Asymmetric layout with text on left, image on right
 * - Large, bold headline using Poppins font
 * - Professional hero image with tech background
 * - Prominent CTA button with icon
 * - Responsive design that stacks on mobile
 */

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <div className="space-y-4">
              <p className="text-primary font-accent font-semibold text-sm uppercase tracking-wide">
                IT Solutions & Services
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Transform Your Business with Expert IT Solutions
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Codexwagon delivers cutting-edge IT infrastructure, management, and security solutions tailored to your business needs. We've been trusted by 700+ customers for 3200+ successful projects.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-accent flex items-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-accent"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 text-sm">
              <div className="flex flex-col">
                <span className="font-accent font-bold text-foreground text-lg">700+</span>
                <span className="text-muted-foreground">Happy Clients</span>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="flex flex-col">
                <span className="font-accent font-bold text-foreground text-lg">3200+</span>
                <span className="text-muted-foreground">Projects Completed</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 md:order-2">
            <div className="relative z-10">
              <img
                src="/images/hero-tech-professional.jpg"
                alt="Professional IT Solutions"
                className="w-full h-auto rounded-lg shadow-2xl object-cover"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-3xl -z-10 transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
