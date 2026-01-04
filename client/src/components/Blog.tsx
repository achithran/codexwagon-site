import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

/**
 * Blog Component
 * Design: Modern Professional Tech
 * - Grid layout for blog posts
 * - Featured image for each article
 * - Publication date and category
 * - Read more button with hover effect
 * - Responsive design
 */

const blogPosts = [
  {
    title: "5 Ways Technology Has Improved Business Today",
    date: "February 28, 2024",
    category: "Technology",
    excerpt: "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses.",
    image: "/images/services-bg-abstract.jpg",
  },
  {
    title: "How Wireless Technology is Changing Business",
    date: "February 25, 2024",
    category: "Innovation",
    excerpt: "It is far wiser to do your own installations and ensure that all data flowing through the organization has end-to-end encryption.",
    image: "/images/services-bg-abstract.jpg",
  },
  {
    title: "Data Secure on Transitioning to a New Office",
    date: "February 20, 2024",
    category: "Security",
    excerpt: "Ensuring data security during office transitions is critical for maintaining business continuity and protecting sensitive information.",
    image: "/images/services-bg-abstract.jpg",
  },
  {
    title: "Ideas for High Returns on Investment",
    date: "February 15, 2024",
    category: "Business",
    excerpt: "Strategic IT investments can yield significant returns when planned and executed with proper oversight and expertise.",
    image: "/images/services-bg-abstract.jpg",
  },
  {
    title: "How Technology Made Businesses More Efficient",
    date: "February 10, 2024",
    category: "Efficiency",
    excerpt: "Modern technology solutions streamline workflows, reduce manual processes, and improve overall operational efficiency.",
    image: "/images/services-bg-abstract.jpg",
  },
  {
    title: "Blockchain Technology Effects on Logistics Sector",
    date: "February 5, 2024",
    category: "Blockchain",
    excerpt: "Blockchain technology is revolutionizing supply chain management and logistics operations across industries.",
    image: "/images/services-bg-abstract.jpg",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-primary font-accent font-semibold text-sm uppercase tracking-wide mb-4">
            Latest News
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Blogs & News
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest insights, trends, and news from the IT industry.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="border-border overflow-hidden hover:shadow-lg transition-all duration-300 bg-card group flex flex-col"
            >
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <CardHeader className="flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-accent font-semibold text-primary uppercase tracking-wide">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
                <CardTitle className="text-lg font-accent text-foreground line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </CardDescription>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0 h-auto font-accent flex items-center gap-2"
                >
                  Read More
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
