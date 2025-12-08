import { Container } from "@/components/ui/Container";
import { H1, Lead, H2 } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { BlogCard } from "@/components/features/BlogCard";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

type BlogCategory = "all" | "architecture" | "react" | "typescript" | "devops" | "tutorial";

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("all");

  const blogPosts = [
    {
      title: "Building Scalable Microfrontends with Module Federation",
      excerpt: "A deep dive into implementing microfrontend architecture using Webpack Module Federation, sharing lessons learned from production deployments.",
      date: "2024-01-15",
      author: "John Doe",
      readTime: "12 min read",
      tags: ["microfrontends", "webpack", "architecture"],
      category: "architecture" as BlogCategory,
    },
    {
      title: "Advanced TypeScript Patterns for React Applications",
      excerpt: "Explore advanced TypeScript patterns including discriminated unions, branded types, and template literal types to build type-safe React components.",
      date: "2024-01-10",
      author: "John Doe",
      readTime: "10 min read",
      tags: ["typescript", "react", "patterns"],
      category: "typescript" as BlogCategory,
    },
    {
      title: "Optimizing React Performance: A Practical Guide",
      excerpt: "Learn practical techniques to optimize React application performance, from code splitting to memoization and virtualization.",
      date: "2024-01-05",
      author: "John Doe",
      readTime: "15 min read",
      tags: ["react", "performance", "optimization"],
      category: "react" as BlogCategory,
    },
    {
      title: "CI/CD Best Practices for Modern Web Applications",
      excerpt: "Setting up robust CI/CD pipelines with GitHub Actions, including automated testing, security scanning, and deployment strategies.",
      date: "2023-12-20",
      author: "John Doe",
      readTime: "8 min read",
      tags: ["ci-cd", "devops", "automation"],
      category: "devops" as BlogCategory,
    },
    {
      title: "Understanding React Server Components",
      excerpt: "A comprehensive guide to React Server Components, exploring how they work, when to use them, and migrating existing applications.",
      date: "2023-12-15",
      author: "John Doe",
      readTime: "14 min read",
      tags: ["react", "server-components", "next.js"],
      category: "react" as BlogCategory,
    },
    {
      title: "Building a Design System from Scratch",
      excerpt: "Step-by-step guide to creating a scalable design system with React, TypeScript, and Storybook, including component API design and documentation.",
      date: "2023-12-10",
      author: "John Doe",
      readTime: "18 min read",
      tags: ["design-system", "react", "components"],
      category: "tutorial" as BlogCategory,
    },
    {
      title: "Clean Architecture in Frontend Applications",
      excerpt: "Applying Clean Architecture principles to frontend development, creating maintainable and testable React applications.",
      date: "2023-12-05",
      author: "John Doe",
      readTime: "11 min read",
      tags: ["architecture", "clean-code", "patterns"],
      category: "architecture" as BlogCategory,
    },
    {
      title: "Getting Started with TurboRepo",
      excerpt: "A beginner-friendly guide to setting up and configuring TurboRepo for monorepo management with caching and parallel task execution.",
      date: "2023-11-28",
      author: "John Doe",
      readTime: "9 min read",
      tags: ["monorepo", "turborepo", "tooling"],
      category: "tutorial" as BlogCategory,
    },
    {
      title: "Type-Safe API Calls with TypeScript",
      excerpt: "Building type-safe API clients in TypeScript using advanced generics, ensuring compile-time safety for HTTP requests and responses.",
      date: "2023-11-20",
      author: "John Doe",
      readTime: "10 min read",
      tags: ["typescript", "api", "type-safety"],
      category: "typescript" as BlogCategory,
    },
  ];

  const categories: { id: BlogCategory; label: string }[] = [
    { id: "all", label: "All Posts" },
    { id: "architecture", label: "Architecture" },
    { id: "react", label: "React" },
    { id: "typescript", label: "TypeScript" },
    { id: "devops", label: "DevOps" },
    { id: "tutorial", label: "Tutorials" },
  ];

  const filteredPosts = activeCategory === "all"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="py-12 space-y-12">
      <Container>
        <section className="space-y-6">
          <div className="space-y-4">
            <Badge variant="secondary">Blog</Badge>
            <H1>Technical Articles & Insights</H1>
            <Lead className="max-w-3xl">
              Sharing knowledge about software architecture, web development, and engineering best practices.
              Exploring topics from React patterns to system design.
            </Lead>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="space-y-4">
            <H2>
              {activeCategory === "all" ? "Latest Posts" : categories.find(c => c.id === activeCategory)?.label}
            </H2>
            <p className="text-gray-600 dark:text-gray-400">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, idx) => (
              <BlogCard key={idx} {...post} />
            ))}
          </div>
        </section>

        <section className="pt-12">
          <div className="rounded-lg border bg-card p-8 text-center space-y-4">
            <H2>Subscribe to My Newsletter</H2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get notified when I publish new articles. No spam, only quality content about software development.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
