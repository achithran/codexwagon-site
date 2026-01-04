import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

/**
 * Footer Component
 * Design: Modern Professional Tech
 * - Multi-column footer layout
 * - Links organized by category
 * - Social media icons
 * - Copyright information
 * - Professional styling with proper spacing
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Managed IT", href: "#" },
      { label: "IT Support", href: "#" },
      { label: "IT Consultancy", href: "#" },
      { label: "Cloud Computing", href: "#" },
      { label: "Cyber Security", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Support", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-accent text-lg font-bold">CW</span>
              </div>
              <span className="font-accent text-lg font-bold">Codexwagon</span>
            </div>
            <p className="text-sm opacity-75 leading-relaxed">
              Expert IT solutions and services for businesses worldwide.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-accent font-semibold text-sm uppercase tracking-wide mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm opacity-75 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-accent font-semibold text-sm uppercase tracking-wide mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm opacity-75 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-accent font-semibold text-sm uppercase tracking-wide mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm opacity-75 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-accent font-semibold text-sm uppercase tracking-wide mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="tel:1900-68668" className="hover:opacity-100 transition-opacity">
                  1900 68668
                </a>
              </li>
              <li>
                <a href="mailto:hello@codexwagon.com" className="hover:opacity-100 transition-opacity">
                  hello@codexwagon.com
                </a>
              </li>
              <li>San Francisco, CA 94107</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm opacity-75">
            © {currentYear} Codexwagon. All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
