import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Database,
  Cloud,
  Zap,
  Lock,
  Cpu,
} from "lucide-react";

/**
 * Services Component
 * Design: Modern Professional Tech
 * - 3-column grid of service cards
 * - Icon-based visual communication
 * - Hover elevation effects
 * - Alternating light/dark background sections
 * - Responsive grid that adapts to mobile
 */

const services = [
  {
    icon: Shield,
    title: "IT Design",
    description: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
  },
  {
    icon: Database,
    title: "IT Management",
    description: "Simultaneously manage and transform information from one server to another with ease.",
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Back up your database and store it in a safe, secure place while maintaining accessibility.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Scalable cloud infrastructure solutions tailored to your business requirements.",
  },
  {
    icon: Zap,
    title: "Business Reform",
    description: "Feasible and practical plans to successfully transform businesses based on their needs.",
  },
  {
    icon: Cpu,
    title: "Infrastructure Plan",
    description: "Comprehensive infrastructure planning considering all conditions and budgets.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-primary font-accent font-semibold text-sm uppercase tracking-wide mb-4">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            For your very specific industry, we have highly-tailored IT solutions designed to meet your unique challenges.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300 bg-card hover:border-primary/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-accent text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
