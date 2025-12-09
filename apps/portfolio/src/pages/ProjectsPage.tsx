import { Container } from '@/components/ui/Container';
import { H1, Lead, H2 } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';
import { ProjectCard } from '@/components/features/ProjectCard';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

type ProjectCategory = 'all' | 'web' | 'architecture' | 'tools' | 'open-source';

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A scalable e-commerce platform built with React and Node.js, handling 100K+ daily users.',
      image: undefined,
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'Redis',
        'AWS',
      ],
      category: 'web' as ProjectCategory,
      highlights: [
        'Implemented real-time inventory management',
        'Integrated multiple payment gateways',
        'Built admin dashboard with analytics',
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Microfrontend Architecture',
      description:
        'Enterprise-scale microfrontend system using Module Federation and Webpack 5.',
      technologies: [
        'React',
        'Module Federation',
        'TypeScript',
        'Webpack',
        'Docker',
      ],
      category: 'architecture' as ProjectCategory,
      highlights: [
        'Independent deployment for 5+ teams',
        'Shared component library and design system',
        'Runtime integration with version control',
      ],
      githubUrl: 'https://github.com',
    },
    {
      title: 'Developer CLI Tool',
      description:
        'A command-line interface tool to automate common development workflows and boost productivity.',
      technologies: ['Node.js', 'TypeScript', 'Commander.js', 'Chalk'],
      category: 'tools' as ProjectCategory,
      highlights: [
        'Scaffolding templates for new projects',
        'Automated code generation',
        'Git workflow automation',
      ],
      githubUrl: 'https://github.com',
    },
    {
      title: 'Real-Time Dashboard',
      description:
        'Analytics dashboard with real-time data updates using WebSockets and React.',
      technologies: ['React', 'TypeScript', 'WebSocket', 'D3.js', 'Express'],
      category: 'web' as ProjectCategory,
      highlights: [
        'Live data visualization',
        'Customizable widgets and layouts',
        'Export to PDF and Excel',
      ],
      liveUrl: 'https://example.com',
    },
    {
      title: 'Open Source UI Library',
      description:
        'A comprehensive component library for React with accessibility and theming support.',
      technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'Rollup'],
      category: 'open-source' as ProjectCategory,
      highlights: [
        '50+ accessible components',
        'Full TypeScript support',
        'Comprehensive documentation',
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Cloud Infrastructure',
      description:
        'Multi-cloud infrastructure management using Terraform and Kubernetes.',
      technologies: ['Terraform', 'Kubernetes', 'AWS', 'GCP', 'Docker'],
      category: 'architecture' as ProjectCategory,
      highlights: [
        'Infrastructure as Code',
        'Auto-scaling and load balancing',
        'Multi-region deployment',
      ],
      githubUrl: 'https://github.com',
    },
  ];

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'tools', label: 'Tools' },
    { id: 'open-source', label: 'Open Source' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-12 py-12">
      <Container>
        <section className="space-y-6">
          <div className="space-y-4">
            <Badge variant="secondary">Portfolio</Badge>
            <H1>Featured Projects</H1>
            <Lead className="max-w-3xl">
              A selection of projects showcasing my expertise in web
              development, software architecture, and developer tooling.
            </Lead>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="space-y-4">
            <H2>
              {activeCategory === 'all'
                ? 'All Projects'
                : categories.find((c) => c.id === activeCategory)?.label}
            </H2>
            <p className="text-gray-600 dark:text-gray-400">
              Showing {filteredProjects.length} project
              {filteredProjects.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </section>

        <section className="pt-12">
          <div className="bg-card space-y-4 rounded-lg border p-8 text-center">
            <H2>More Projects Coming Soon</H2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              I'm constantly working on new projects and experiments. Check back
              regularly or follow me on GitHub to see what I'm building next.
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}
