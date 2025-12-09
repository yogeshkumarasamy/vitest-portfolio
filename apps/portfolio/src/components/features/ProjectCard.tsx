import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights?: string[];
  className?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  highlights,
  className,
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'flex h-full flex-col overflow-hidden transition-shadow hover:shadow-xl',
        className
      )}
      data-testid="project-card"
    >
      {image && (
        <div
          className="bg-muted aspect-video overflow-hidden"
          data-testid="project-image"
        >
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      )}
      <CardHeader>
        <CardTitle data-testid="project-title">{title}</CardTitle>
        <CardDescription data-testid="project-description">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        {highlights && highlights.length > 0 && (
          <ul
            className="list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-gray-400"
            data-testid="project-highlights"
          >
            {highlights.map((highlight, idx) => (
              <li key={idx} data-testid="project-highlight">
                {highlight}
              </li>
            ))}
          </ul>
        )}
        <div
          className="flex flex-wrap gap-2"
          data-testid="project-technologies"
        >
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              data-testid="project-technology"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      {(githubUrl || liveUrl) && (
        <CardFooter className="gap-2">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              data-testid="project-github"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" asChild data-testid="project-live">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
