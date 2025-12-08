import { Container } from "@/components/ui/Container";
import { H1, Lead, H2, H3, P } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { ArchitectureDiagram } from "@/components/features/ArchitectureDiagram";

export function MicrofrontendsPage() {
  const moduleFederationArchitecture = {
    title: "Module Federation Architecture",
    layers: [
      {
        name: "Host Application",
        components: ["Shell App", "Navigation", "Routing", "Shared Layout"],
        description: "Main container application that orchestrates microfrontends",
      },
      {
        name: "Remote Microfrontends",
        components: ["User MFE", "Product MFE", "Checkout MFE", "Analytics MFE"],
        description: "Independent applications loaded at runtime",
      },
      {
        name: "Shared Dependencies",
        components: ["React", "React Router", "Design System", "Utils"],
        description: "Common libraries shared across all microfrontends",
      },
      {
        name: "Build & Deploy",
        components: ["Webpack 5", "CI/CD Pipeline", "CDN", "Version Control"],
        description: "Build tools and deployment infrastructure",
      },
    ],
  };

  const benefits = [
    {
      title: "Independent Deployment",
      description: "Each microfrontend can be deployed independently without affecting others, enabling faster release cycles.",
    },
    {
      title: "Team Autonomy",
      description: "Different teams can work on different microfrontends using their preferred tech stack and processes.",
    },
    {
      title: "Incremental Upgrades",
      description: "Upgrade frameworks and libraries incrementally across microfrontends without a big-bang migration.",
    },
    {
      title: "Scalable Development",
      description: "Multiple teams can work in parallel without stepping on each other's toes, scaling development efforts.",
    },
    {
      title: "Technology Flexibility",
      description: "Mix and match different frameworks (React, Vue, Angular) within the same application.",
    },
    {
      title: "Fault Isolation",
      description: "Failures in one microfrontend don't crash the entire application, improving resilience.",
    },
  ];

  const challenges = [
    {
      challenge: "Shared State Management",
      solution: "Use event buses, shared contexts, or state management libraries designed for microfrontends.",
    },
    {
      challenge: "Consistent UX",
      solution: "Implement a shared design system and component library used across all microfrontends.",
    },
    {
      challenge: "Performance Overhead",
      solution: "Carefully manage shared dependencies and use code splitting to minimize bundle sizes.",
    },
    {
      challenge: "Versioning Complexity",
      solution: "Establish clear versioning strategies and maintain backward compatibility for shared modules.",
    },
  ];

  const bestPractices = [
    "Establish clear ownership boundaries for each microfrontend",
    "Use semantic versioning for shared dependencies",
    "Implement comprehensive E2E testing across microfrontends",
    "Monitor performance and bundle sizes continuously",
    "Document integration contracts and APIs",
    "Use feature flags for gradual rollouts",
    "Implement proper error boundaries and fallbacks",
    "Maintain consistent authentication across all microfrontends",
  ];

  return (
    <div className="py-12 space-y-16">
      <Container>
        <section className="space-y-6">
          <div className="space-y-4">
            <Badge variant="secondary">Microfrontend Architecture</Badge>
            <H1>Microfrontends with Module Federation</H1>
            <Lead className="max-w-3xl">
              Building scalable frontend applications using microfrontend architecture and Webpack Module Federation,
              enabling independent development and deployment of frontend features.
            </Lead>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-4">
            <H2>What are Microfrontends?</H2>
            <P>
              Microfrontends extend the microservices concept to frontend development. They break down a monolithic
              frontend into smaller, more manageable pieces that can be developed, tested, and deployed independently
              by different teams.
            </P>
            <P>
              Module Federation, introduced in Webpack 5, makes this architecture practical by allowing JavaScript
              applications to dynamically load code from other independently deployed applications at runtime.
            </P>
          </div>
          <ArchitectureDiagram {...moduleFederationArchitecture} />
        </section>

        <section className="space-y-6">
          <H2>Benefits of Microfrontends</H2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <H2>Common Challenges & Solutions</H2>
          <div className="space-y-4">
            {challenges.map((item) => (
              <Card key={item.challenge}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-destructive">⚠️</span>
                    {item.challenge}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <p className="text-gray-600 dark:text-gray-400">{item.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <H2>Best Practices</H2>
          <Card>
            <CardContent className="p-8">
              <ul className="space-y-3">
                {bestPractices.map((practice, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-0.5 shrink-0">
                      {idx + 1}
                    </Badge>
                    <span className="text-gray-900 dark:text-gray-100">{practice}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <H2>Real-World Implementation</H2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Enterprise Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription>
                  Built a microfrontend architecture serving 1M+ users with 5 independent teams deploying features daily.
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {["Module Federation", "React", "TypeScript", "Webpack 5"].map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Multi-Brand Platform</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription>
                  Implemented white-label solution where different brands share core microfrontends with customized themes.
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {["Shared Components", "Theming", "Runtime Config", "CDN"].map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="pt-12">
          <Card className="bg-gradient-to-br from-blue-50/5 dark:from-blue-950/5 to-gray-50/5 dark:to-gray-950/5">
            <CardContent className="p-8 space-y-4">
              <H3>When to Use Microfrontends</H3>
              <P>
                Microfrontends are not a silver bullet. They work best for large-scale applications with multiple
                teams, where the benefits of independent deployment and team autonomy outweigh the added complexity.
                For smaller applications, a well-structured monolithic frontend might be more appropriate.
              </P>
            </CardContent>
          </Card>
        </section>
      </Container>
    </div>
  );
}
