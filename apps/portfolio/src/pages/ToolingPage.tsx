import { Container } from '@/components/ui/Container';
import { H1, Lead, H2, P } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function ToolingPage() {
  const devTools = [
    {
      category: 'Build Tools',
      tools: [
        {
          name: 'Vite',
          description: 'Lightning-fast build tool for modern web projects',
        },
        {
          name: 'Webpack',
          description: 'Module bundler with powerful plugin ecosystem',
        },
        {
          name: 'TurboRepo',
          description: 'High-performance build system for monorepos',
        },
        { name: 'esbuild', description: 'Extremely fast JavaScript bundler' },
      ],
    },
    {
      category: 'Testing',
      tools: [
        {
          name: 'Jest',
          description: 'Comprehensive testing framework for JavaScript',
        },
        {
          name: 'Vitest',
          description: 'Blazing fast unit test framework powered by Vite',
        },
        { name: 'Cypress', description: 'E2E testing made easy with great DX' },
        { name: 'Playwright', description: 'Cross-browser testing automation' },
      ],
    },
    {
      category: 'Code Quality',
      tools: [
        {
          name: 'ESLint',
          description: 'Pluggable linting utility for JavaScript',
        },
        { name: 'Prettier', description: 'Opinionated code formatter' },
        { name: 'Husky', description: 'Git hooks made easy' },
        { name: 'TypeScript', description: 'JavaScript with syntax for types' },
      ],
    },
    {
      category: 'Development',
      tools: [
        { name: 'VS Code', description: 'Powerful and extensible code editor' },
        { name: 'GitHub Copilot', description: 'AI pair programmer' },
        {
          name: 'Docker',
          description: 'Containerization for consistent environments',
        },
        {
          name: 'Postman',
          description: 'API development and testing platform',
        },
      ],
    },
  ];

  const customTools = [
    {
      name: 'Code Generator CLI',
      description:
        'Command-line tool to scaffold components, pages, and API endpoints with templates',
      technologies: ['Node.js', 'TypeScript', 'Commander.js'],
      features: [
        'Template system',
        'Interactive prompts',
        'Custom configurations',
      ],
    },
    {
      name: 'Monorepo Manager',
      description:
        'Tool to manage dependencies and scripts across multiple packages in a monorepo',
      technologies: ['Node.js', 'pnpm', 'TurboRepo'],
      features: [
        'Dependency analysis',
        'Automated updates',
        'Cross-package scripts',
      ],
    },
    {
      name: 'Performance Analyzer',
      description:
        'Browser extension to analyze and optimize React application performance',
      technologies: ['React', 'Chrome Extensions API', 'Performance API'],
      features: [
        'Component profiling',
        'Bundle analysis',
        'Optimization suggestions',
      ],
    },
  ];

  const workflowOptimizations = [
    {
      title: 'Automated Code Review',
      description:
        'Set up automated code quality checks with ESLint, Prettier, and custom rules in CI/CD pipeline.',
      impact: 'Reduced review time by 40%',
    },
    {
      title: 'Parallel Testing',
      description:
        'Implemented parallel test execution and smart test selection based on changed files.',
      impact: 'Test suite runtime reduced from 20min to 5min',
    },
    {
      title: 'Hot Module Replacement',
      description:
        'Configured advanced HMR setup for instant feedback during development.',
      impact: 'Development iteration speed increased by 3x',
    },
    {
      title: 'Dependency Caching',
      description:
        'Optimized dependency installation with advanced caching strategies in CI/CD.',
      impact: 'Build time reduced by 60%',
    },
  ];

  return (
    <div className="space-y-16 py-12">
      <Container>
        <section className="space-y-6">
          <div className="space-y-4">
            <Badge variant="secondary">Developer Experience</Badge>
            <H1>Tooling & Productivity</H1>
            <Lead className="max-w-3xl">
              Tools, workflows, and optimizations that enhance developer
              productivity and code quality. From build tools to custom CLI
              applications, making development faster and more enjoyable.
            </Lead>
          </div>
        </section>

        <section className="space-y-6">
          <H2>Essential Development Tools</H2>
          <div className="space-y-8">
            {devTools.map((category) => (
              <div key={category.category} className="space-y-4">
                <h3 className="text-xl font-semibold">{category.category}</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {category.tools.map((tool) => (
                    <Card key={tool.name}>
                      <CardHeader>
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {tool.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-4">
            <H2>Custom Tools I've Built</H2>
            <P>
              Beyond using existing tools, I've developed custom solutions to
              solve specific workflow challenges and boost team productivity.
            </P>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {customTools.map((tool) => (
              <Card key={tool.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {tool.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Features:</p>
                    <ul className="list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {tool.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <H2>Workflow Optimizations</H2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {workflowOptimizations.map((optimization) => (
              <Card key={optimization.title}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {optimization.title}
                  </CardTitle>
                  <CardDescription>{optimization.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-green-500/10 text-green-700 dark:text-green-400"
                    >
                      {optimization.impact}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <H2>My Development Setup</H2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Editor & Extensions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">
                  <strong>Editor:</strong> VS Code
                </p>
                <p className="text-sm">
                  <strong>Theme:</strong> One Dark Pro
                </p>
                <p className="text-sm">
                  <strong>Font:</strong> JetBrains Mono
                </p>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  Key Extensions: ESLint, Prettier, GitLens, Thunder Client,
                  Error Lens
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Terminal & CLI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">
                  <strong>Terminal:</strong> iTerm2 / Windows Terminal
                </p>
                <p className="text-sm">
                  <strong>Shell:</strong> Zsh with Oh My Zsh
                </p>
                <p className="text-sm">
                  <strong>Package Manager:</strong> pnpm
                </p>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  Aliases and scripts for common tasks automated with custom
                  functions
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="pt-12">
          <Card className="bg-gradient-to-br from-blue-50/5 to-gray-50/5 dark:from-blue-950/5 dark:to-gray-950/5">
            <CardContent className="space-y-4 p-8 text-center">
              <H2>Continuous Improvement</H2>
              <P className="mx-auto max-w-2xl">
                The right tools can make all the difference. I'm constantly
                exploring new tools, optimizing workflows, and automating
                repetitive tasks to make development more efficient and
                enjoyable.
              </P>
              <Button variant="outline">View My Dotfiles on GitHub</Button>
            </CardContent>
          </Card>
        </section>
      </Container>
    </div>
  );
}
