import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState } from "react";

/**
 * Testimonials Component
 * Design: Modern Professional Tech
 * - Carousel-style testimonial cards
 * - Star ratings for credibility
 * - Client name and position
 * - Navigation arrows for carousel
 * - Smooth transitions between testimonials
 */

const testimonials = [
  {
    name: "Robert Amplilian",
    position: "Marketing",
    company: "Tech Innovations Inc",
    rating: 5,
    text: "I discovered Codexwagon services by chance on the Internet to find a suitable IT services provider. This must be fate, not an accident at all. Their team is professional and responsive.",
  },
  {
    name: "Stephen Mearsley",
    position: "PR Officer",
    company: "Global Solutions Ltd",
    rating: 5,
    text: "IT service is not an easy path to follow. But these guys can make it to the top with premium services and dedicated customer support. Highly recommended!",
  },
  {
    name: "Monica Blews",
    position: "PR Officer",
    company: "Digital Ventures",
    rating: 5,
    text: "There are thousands of IT service companies in the US. But there's nothing like Codexwagon. Their popularity and reputation are just evident from their portfolio.",
  },
  {
    name: "Maggie Strickland",
    position: "Web Designer",
    company: "Creative Studios",
    rating: 5,
    text: "The Codexwagon team works really hard to ensure high level of quality. Their attention to detail and commitment to excellence is unmatched in the industry.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-primary font-accent font-semibold text-sm uppercase tracking-wide mb-4">
            Client Feedback
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Why Do People Praise Codexwagon?
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear directly from our satisfied clients about their experiences working with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground text-base leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </CardHeader>

                <CardContent className="space-y-2">
                  <p className="font-accent font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
