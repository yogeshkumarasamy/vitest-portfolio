import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { H1, Lead, H2 } from '@/components/ui/Typography';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export function HomePage() {
  const highlights = [
    {
      title: 'Software Architecture',
      description:
        'Expertise in designing scalable, maintainable systems using modern architectural patterns.',
      link: '/architecture',
    },
    {
      title: 'Microfrontends',
      description:
        'Building modular frontend applications with module federation and micro-architectures.',
      link: '/microfrontends',
    },
    {
      title: 'Developer Tooling',
      description:
        'Creating tools and workflows that enhance developer productivity and code quality.',
      link: '/tooling',
    },
  ];

  const techStack = [
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'AWS',
    'Docker',
    'Kubernetes',
    'GraphQL',
    'PostgreSQL',
    'Redis',
    'TurboRepo',
    'Vite',
  ];

  return (
    <div className="space-y-20 py-12">
      <section className="relative">
        <Container>
          <div className="flex flex-col items-center space-y-8 py-20 text-center">
            <Badge variant="secondary" className="px-4 py-1">
              Welcome to My Portfolio
            </Badge>
            <H1 className="max-w-4xl">
              Building Scalable Solutions with Modern Technologies
            </H1>
            <Lead className="max-w-2xl">
              Full-stack developer and software architect specializing in
              creating high-performance, maintainable applications with
              cutting-edge tools and best practices.
            </Lead>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section>
        <Container>
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <H2>Areas of Expertise</H2>
              <Lead>
                Specializing in modern web development and software architecture
              </Lead>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {highlights.map((highlight) => (
                <Link key={highlight.title} to={highlight.link}>
                  <Card className="h-full transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <CardTitle>{highlight.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {highlight.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Tech Stack */}
      <section className="bg-muted/50 py-16">
        <Container>
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <H2>Technologies I Work With</H2>
              <Lead>
                A curated selection of tools and frameworks in my toolkit
              </Lead>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-4 py-2 text-base"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" asChild>
                <Link to="/skills">View All Skills</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section>
        <Container>
          <Card className="border-blue-600/20 bg-gradient-to-r from-blue-50/10 to-gray-50/10 dark:border-blue-400/20 dark:from-blue-950/10 dark:to-gray-950/10">
            <CardHeader className="space-y-4 pb-8 text-center">
              <CardTitle className="text-3xl">
                Let's Build Something Amazing
              </CardTitle>
              <CardDescription className="text-lg">
                I'm always interested in hearing about new projects and
                opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Contact Me</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>
    </div>
  );
}
