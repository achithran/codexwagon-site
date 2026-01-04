import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Header Component
 * Design: Modern Professional Tech
 * - Sticky navigation with professional blue primary color
 * - Logo on left, menu items in center, CTA button on right
 * - Mobile-responsive hamburger menu
 * - Smooth hover effects and transitions
 */

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-accent text-lg font-bold">CW</span>
          </div>
          <span className="font-accent text-xl font-bold text-foreground hidden sm:inline">
            Codexwagon
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-accent"
            size="sm"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-accent mt-2">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
