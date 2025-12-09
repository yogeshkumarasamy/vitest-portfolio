import { Container } from '@/components/ui/Container';
import { H1, Lead, H2, H3 } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';
import { SkillMeter } from '@/components/features/SkillMeter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export function SkillsPage() {
  const technicalSkills = {
    'Frontend Development': [
      { skill: 'React', level: 95, category: 'Framework' },
      { skill: 'TypeScript', level: 90, category: 'Language' },
      { skill: 'JavaScript (ES6+)', level: 95, category: 'Language' },
      { skill: 'HTML5 & CSS3', level: 90, category: 'Core' },
      { skill: 'Tailwind CSS', level: 85, category: 'Styling' },
      { skill: 'Redux / Zustand', level: 85, category: 'State Management' },
      { skill: 'React Router', level: 90, category: 'Routing' },
      { skill: 'Webpack / Vite', level: 80, category: 'Build Tools' },
    ],
    'Backend Development': [
      { skill: 'Node.js', level: 90, category: 'Runtime' },
      { skill: 'Express.js', level: 85, category: 'Framework' },
      { skill: 'Python', level: 75, category: 'Language' },
      { skill: 'GraphQL', level: 80, category: 'API' },
      { skill: 'REST API Design', level: 90, category: 'Architecture' },
      { skill: 'PostgreSQL', level: 85, category: 'Database' },
      { skill: 'MongoDB', level: 80, category: 'Database' },
      { skill: 'Redis', level: 75, category: 'Caching' },
    ],
    'DevOps & Cloud': [
      { skill: 'AWS (EC2, S3, Lambda)', level: 85, category: 'Cloud' },
      { skill: 'Docker', level: 90, category: 'Containers' },
      { skill: 'Kubernetes', level: 75, category: 'Orchestration' },
      { skill: 'CI/CD (GitHub Actions)', level: 85, category: 'Automation' },
      { skill: 'Terraform', level: 70, category: 'IaC' },
      { skill: 'Nginx', level: 75, category: 'Web Server' },
    ],
    'Architecture & Patterns': [
      { skill: 'Microservices', level: 85, category: 'Architecture' },
      { skill: 'Microfrontends', level: 90, category: 'Architecture' },
      { skill: 'Module Federation', level: 88, category: 'Pattern' },
      { skill: 'Event-Driven Architecture', level: 80, category: 'Pattern' },
      { skill: 'Domain-Driven Design', level: 75, category: 'Methodology' },
      { skill: 'Clean Architecture', level: 85, category: 'Pattern' },
    ],
    'Testing & Quality': [
      { skill: 'Jest', level: 90, category: 'Unit Testing' },
      { skill: 'React Testing Library', level: 88, category: 'Testing' },
      { skill: 'Cypress', level: 80, category: 'E2E Testing' },
      { skill: 'Playwright', level: 75, category: 'E2E Testing' },
      { skill: 'TDD/BDD', level: 80, category: 'Methodology' },
    ],
    'Tools & Workflow': [
      { skill: 'Git & GitHub', level: 95, category: 'Version Control' },
      { skill: 'VS Code', level: 90, category: 'IDE' },
      { skill: 'TurboRepo', level: 85, category: 'Monorepo' },
      { skill: 'ESLint / Prettier', level: 90, category: 'Code Quality' },
      { skill: 'Jira / Linear', level: 85, category: 'Project Management' },
    ],
  };

  const softSkills = [
    'Technical Leadership',
    'Team Mentoring',
    'Code Review',
    'System Design',
    'Problem Solving',
    'Agile/Scrum',
    'Communication',
    'Documentation',
  ];

  return (
    <div className="space-y-12 py-12">
      <Container>
        <section className="space-y-6">
          <div className="space-y-4">
            <Badge variant="secondary">Skills & Expertise</Badge>
            <H1>Technical Skills</H1>
            <Lead className="max-w-3xl">
              A comprehensive overview of my technical expertise across
              frontend, backend, cloud technologies, and software architecture.
            </Lead>
          </div>
        </section>

        {Object.entries(technicalSkills).map(([category, skills]) => (
          <section key={category} className="space-y-6">
            <H2>{category}</H2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {skills.map((skill) => (
                <SkillMeter key={skill.skill} {...skill} />
              ))}
            </div>
          </section>
        ))}

        <section className="space-y-6">
          <H2>Soft Skills & Leadership</H2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {softSkills.map((skill) => (
              <Card key={skill}>
                <CardContent className="p-6 text-center">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {skill}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <H2>Certifications & Learning</H2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>AWS Certified Solutions Architect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Associate Level - 2023
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Kubernetes Application Developer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">CKAD - 2022</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="pt-12">
          <Card className="bg-gradient-to-br from-blue-50/5 to-gray-50/5 dark:from-blue-950/5 dark:to-gray-950/5">
            <CardContent className="space-y-4 p-8 text-center">
              <H3>Continuous Learning</H3>
              <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
                Technology evolves rapidly, and I'm committed to continuous
                learning. I regularly explore new frameworks, attend
                conferences, and contribute to open-source projects to stay at
                the forefront of web development.
              </p>
            </CardContent>
          </Card>
        </section>
      </Container>
    </div>
  );
}
