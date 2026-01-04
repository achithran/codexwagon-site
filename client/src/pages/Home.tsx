import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

/**
 * Home Page
 * Design: Modern Professional Tech
 * 
 * Layout Structure:
 * 1. Header - Sticky navigation with logo and menu
 * 2. Hero - Large headline with professional image and CTA
 * 3. Services - 6-card grid showcasing IT solutions
 * 4. About - Company info with team image and statistics
 * 5. Case Studies - 6-project grid with category tags
 * 6. Testimonials - Client feedback carousel
 * 7. Blog - Latest articles and news
 * 8. CTA - Call-to-action section with contact info
 * 9. Footer - Links, social media, copyright
 * 
 * Color Scheme:
 * - Primary: Professional Blue (oklch(0.5 0.18 258))
 * - Accent: Modern Teal (oklch(0.65 0.2 200))
 * - Background: Clean White
 * - Text: Dark Charcoal
 * 
 * Typography:
 * - Headlines: Poppins Bold (700)
 * - Body: Inter Regular (400)
 * - Accents: Poppins SemiBold (600)
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
