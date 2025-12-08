import { Container } from "@/components/ui/Container";
import { H1, Lead, H2 } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { ExperienceCard } from "@/components/features/ExperienceCard";

export function ExperiencePage() {
  const experiences = [
    {
      company: "Tech Corp Inc.",
      position: "Senior Software Architect",
      duration: "Jan 2024 - Present",
      description: "Leading architectural decisions for enterprise applications, focusing on microservices and microfrontend architectures. Responsible for technical strategy, system design, and mentoring senior developers.",
      technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker", "Kubernetes", "GraphQL", "PostgreSQL"],
      achievements: [
        "Designed and implemented microfrontend architecture serving 1M+ users",
        "Reduced deployment time by 60% through CI/CD pipeline optimization",
        "Led migration from monolith to microservices architecture",
        "Established engineering best practices and code review standards",
      ],
    },
    {
      company: "Innovation Labs",
      position: "Tech Lead - Frontend",
      duration: "Mar 2022 - Dec 2023",
      description: "Led a team of 8 frontend developers in building modern web applications using React and Module Federation. Drove technical decisions and established frontend architecture standards.",
      technologies: ["React", "TypeScript", "Webpack", "Module Federation", "Redux", "Jest", "Cypress"],
      achievements: [
        "Successfully delivered 3 major product releases on schedule",
        "Improved application performance by 45% through optimization",
        "Implemented comprehensive testing strategy (unit, integration, e2e)",
        "Mentored 5 junior developers to mid-level positions",
      ],
    },
    {
      company: "Digital Solutions LLC",
      position: "Senior Full Stack Developer",
      duration: "Jun 2020 - Feb 2022",
      description: "Developed and maintained full-stack applications using React, Node.js, and cloud technologies. Collaborated with product and design teams to deliver high-quality features.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS Lambda", "S3", "DynamoDB"],
      achievements: [
        "Built real-time notification system handling 100K+ daily events",
        "Optimized database queries reducing response time by 70%",
        "Implemented authentication and authorization using JWT and OAuth",
        "Created reusable component library used across multiple projects",
      ],
    },
    {
      company: "StartupXYZ",
      position: "Software Developer",
      duration: "Jan 2018 - May 2020",
      description: "Full-stack development role working on various web applications. Gained experience in agile methodologies, version control, and modern development practices.",
      technologies: ["JavaScript", "React", "Node.js", "MySQL", "Git", "Docker"],
      achievements: [
        "Developed key features for customer-facing web application",
        "Participated in code reviews and pair programming sessions",
        "Improved test coverage from 30% to 75%",
        "Contributed to technical documentation and onboarding materials",
      ],
    },
  ];

  return (
    <div className="py-12 space-y-12">
      <Container>
        <section className="space-y-6">
          <div className="space-y-4">
            <Badge variant="secondary">Professional Experience</Badge>
            <H1>Work Experience</H1>
            <Lead className="max-w-3xl">
              A detailed look at my professional journey, highlighting key roles, responsibilities, and achievements
              throughout my career in software development.
            </Lead>
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-4">
            <H2>Career Timeline</H2>
            <p className="text-gray-600 dark:text-gray-400">
              {experiences.length} positions spanning {new Date().getFullYear() - 2018}+ years of professional experience
            </p>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} {...exp} />
            ))}
          </div>
        </section>

        <section className="pt-12">
          <div className="rounded-lg border bg-card p-8 text-center space-y-4">
            <H2>Looking for More Details?</H2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Feel free to reach out if you'd like to discuss my experience in more detail or learn about specific
              projects and technical challenges I've tackled.
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}
