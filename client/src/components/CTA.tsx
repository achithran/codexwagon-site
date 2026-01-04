import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

/**
 * CTA Component
 * Design: Modern Professional Tech
 * - Full-width call-to-action section
 * - Contact information display
 * - Primary action buttons
 * - Professional gradient background
 * - Contact details with icons
 */

export default function CTA() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA Content */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Take Steps to Get Closer to Success
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Ready to transform your business with expert IT solutions? Contact us today for a consultation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-accent"
            >
              Get Started Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-accent"
            >
              Schedule a Call
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/20">
          {/* Phone */}
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-accent font-semibold text-lg mb-2">Call Us</h3>
            <p className="opacity-90">1900 68668</p>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-accent font-semibold text-lg mb-2">Email Us</h3>
            <p className="opacity-90">hello@codexwagon.com</p>
          </div>

          {/* Address */}
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-accent font-semibold text-lg mb-2">Visit Us</h3>
            <p className="opacity-90">San Francisco, CA 94107</p>
          </div>
        </div>
      </div>
    </section>
  );
}
