import { Container } from '@/components/ui/Container';
import { H1, Lead, H2, P } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';
import { ArchitectureDiagram } from '@/components/features/ArchitectureDiagram';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

export function ArchitecturePage() {
  const cleanArchitecture = {
    title: 'Clean Architecture Layers',
    layers: [
      {
        name: 'Presentation Layer',
        components: [
          'React Components',
          'Redux Store',
          'UI Hooks',
          'Route Guards',
        ],
        description: 'User interface and state management',
      },
      {
        name: 'Application Layer',
        components: ['Use Cases', 'API Services', 'Validation', 'DTOs'],
        description: 'Business logic and application workflows',
      },
      {
        name: 'Domain Layer',
        components: [
          'Entities',
          'Domain Models',
          'Business Rules',
          'Interfaces',
        ],
        description: 'Core business logic and domain models',
      },
      {
        name: 'Infrastructure Layer',
        components: [
          'API Clients',
          'Database',
          'External Services',
          'Utilities',
        ],
        description: 'External dependencies and implementations',
      },
    ],
  };

  const microservicesArchitecture = {
    title: 'Microservices Architecture',
    layers: [
      {
        name: 'API Gateway',
        components: ['Kong', 'Rate Limiting', 'Authentication', 'Routing'],
        description: 'Entry point for all client requests',
      },
      {
        name: 'Service Layer',
        components: [
          'User Service',
          'Order Service',
          'Payment Service',
          'Notification Service',
        ],
        description: 'Independent microservices handling specific domains',
      },
      {
        name: 'Message Queue',
        components: ['RabbitMQ', 'Event Bus', 'Pub/Sub', 'Dead Letter Queue'],
        description: 'Asynchronous communication between services',
      },
      {
        name: 'Data Layer',
        components: ['PostgreSQL', 'MongoDB', 'Redis Cache', 'S3 Storage'],
        description: 'Distributed data storage and caching',
      },
    ],
  };

  const architecturalPrinciples = [
    {
      title: 'Separation of Concerns',
      description:
        'Dividing the system into distinct sections, each addressing a specific concern or responsibility.',
    },
    {
      title: 'Single Responsibility',
      description:
        'Each module, class, or function should have one reason to change, focusing on a single task.',
    },
    {
      title: 'Dependency Inversion',
      description:
        'High-level modules should not depend on low-level modules. Both should depend on abstractions.',
    },
    {
      title: 'Scalability First',
      description:
        'Design systems that can handle growth in users, data, and features without major refactoring.',
    },
    {
      title: 'Observability',
      description:
        'Build systems with comprehensive logging, monitoring, and tracing capabilities from the start.',
    },
    {
      title: 'Resilience',
      description:
        'Design for failure with circuit breakers, retry mechanisms, and graceful degradation.',
    },
  ];

  return (
    <div className="space-y-16 py-12">
      <Container>
        <section className="space-y-6">
          <div className="space-y-4">
            <Badge variant="secondary">Software Architecture</Badge>
            <H1>Architecture & Design Patterns</H1>
            <Lead className="max-w-3xl">
              Exploring architectural patterns and design principles that create
              scalable, maintainable, and resilient software systems.
            </Lead>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-4">
            <H2>Clean Architecture</H2>
            <P>
              Clean Architecture promotes the separation of concerns through
              well-defined layers, making the codebase more maintainable,
              testable, and independent of frameworks and external dependencies.
            </P>
          </div>
          <ArchitectureDiagram {...cleanArchitecture} />
        </section>

        <section className="space-y-6">
          <div className="space-y-4">
            <H2>Microservices Architecture</H2>
            <P>
              Microservices architecture breaks down applications into small,
              independent services that communicate through well-defined APIs,
              enabling teams to develop, deploy, and scale services
              independently.
            </P>
          </div>
          <ArchitectureDiagram {...microservicesArchitecture} />
        </section>

        <section className="space-y-6">
          <H2>Architectural Principles</H2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {architecturalPrinciples.map((principle) => (
              <Card key={principle.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {principle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <H2>Design Patterns I Use</H2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { name: 'Factory Pattern', usage: 'Object creation' },
              { name: 'Strategy Pattern', usage: 'Algorithm selection' },
              { name: 'Observer Pattern', usage: 'Event handling' },
              { name: 'Repository Pattern', usage: 'Data access' },
              { name: 'Adapter Pattern', usage: 'Interface compatibility' },
              { name: 'Facade Pattern', usage: 'Simplified interfaces' },
            ].map((pattern) => (
              <Card key={pattern.name}>
                <CardHeader>
                  <CardTitle className="text-base">{pattern.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {pattern.usage}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="pt-12">
          <Card className="bg-gradient-to-br from-blue-50/5 to-gray-50/5 dark:from-blue-950/5 dark:to-gray-950/5">
            <CardContent className="space-y-4 p-8">
              <H2>Architecture is a Journey</H2>
              <P>
                Good architecture evolves with the product. It starts with
                understanding the problem domain, anticipating future growth,
                and making informed trade-offs. The best architecture is one
                that serves the business needs while enabling developers to work
                efficiently.
              </P>
            </CardContent>
          </Card>
        </section>
      </Container>
    </div>
  );
}
