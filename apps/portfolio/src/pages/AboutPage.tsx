import { Container } from "@/components/ui/Container";
import { H1, H2, P, Lead } from "@/components/ui/Typography";
import { Card, CardContent } from "@/components/ui/Card";
import { Timeline } from "@/components/features/Timeline";
import { Badge } from "@/components/ui/Badge";

export function AboutPage() {
  const timelineEvents = [
    {
      year: "2024",
      title: "Senior Software Architect",
      description: "Leading architectural decisions for enterprise-scale applications, focusing on scalability and performance.",
      type: "work" as const,
    },
    {
      year: "2022",
      title: "Tech Lead - Frontend",
      description: "Led a team of developers in building modern microfrontend applications using Module Federation.",
      type: "work" as const,
    },
    {
      year: "2020",
      title: "Senior Full Stack Developer",
      description: "Developed and maintained multiple production applications using React, Node.js, and cloud technologies.",
      type: "work" as const,
    },
    {
      year: "2018",
      title: "Software Developer",
      description: "Started professional journey building web applications and learning software engineering best practices.",
      type: "work" as const,
    },
    {
      year: "2017",
      title: "Computer Science Degree",
      description: "Completed Bachelor's degree in Computer Science with focus on software engineering and algorithms.",
      type: "education" as const,
    },
  ];

  const values = [
    "Clean, maintainable code",
    "Continuous learning",
    "Collaboration and knowledge sharing",
    "User-centric design",
    "Performance optimization",
    "Automated testing",
  ];

  return (
    <div className="py-12 space-y-16">
      <Container>
        {/* Introduction */}
        <section className="space-y-6">
          <div className="space-y-4">
            <Badge variant="secondary">About Me</Badge>
            <H1>Hi, I'm a Software Architect & Full-Stack Developer</H1>
            <Lead>
              Passionate about building scalable, high-performance applications and sharing knowledge with the developer community.
            </Lead>
          </div>
          <div className="space-y-4 max-w-3xl">
            <P>
              With over 6 years of experience in software development, I've had the opportunity to work on a diverse
              range of projects—from small startups to large enterprise applications. My journey has taken me through
              various roles, technologies, and challenges, each contributing to my growth as a developer and architect.
            </P>
            <P>
              I specialize in modern web technologies, with a particular focus on React, TypeScript, and cloud-native
              architectures. I'm passionate about developer experience, tooling, and creating systems that are not just
              functional, but delightful to work with.
            </P>
            <P>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              writing technical articles to help other developers navigate the ever-evolving landscape of web development.
            </P>
          </div>
        </section>

        {/* Professional Journey */}
        <section className="space-y-8">
          <div className="space-y-4">
            <H2>Professional Journey</H2>
            <Lead>A timeline of my career progression and key milestones</Lead>
          </div>
          <Timeline events={timelineEvents} />
        </section>

        {/* Core Values */}
        <section className="space-y-8">
          <div className="space-y-4">
            <H2>Core Values & Principles</H2>
            <Lead>What drives my approach to software development</Lead>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value) => (
              <Card key={value}>
                <CardContent className="p-6">
                  <p className="font-medium text-center text-gray-900 dark:text-gray-100">{value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="space-y-6">
          <div className="space-y-4">
            <H2>My Philosophy</H2>
          </div>
          <Card className="bg-linear-to-br from-blue-50/5 dark:from-blue-950/5 to-gray-50/5 dark:to-gray-950/5">
            <CardContent className="p-8 space-y-4">
              <P>
                I believe that great software is not just about writing code—it's about solving real problems,
                creating delightful user experiences, and building systems that can evolve with changing requirements.
              </P>
              <P>
                The best architectures are those that balance technical excellence with pragmatism, choosing the right
                tool for the job rather than following trends blindly. Every line of code should serve a purpose, and
                every system should be designed with the people who will use and maintain it in mind.
              </P>
              <P>
                Continuous improvement is at the heart of what I do. Whether it's refactoring legacy code, learning a
                new framework, or mentoring junior developers, I'm committed to growing and helping others grow along
                the way.
              </P>
            </CardContent>
          </Card>
        </section>
      </Container>
    </div>
  );
}
