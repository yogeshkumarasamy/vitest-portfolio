import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements?: string[];
  className?: string;
}

export function ExperienceCard({
  company,
  position,
  duration,
  description,
  technologies,
  achievements,
  className,
}: ExperienceCardProps) {
  return (
    <Card
      className={cn('transition-shadow hover:shadow-lg', className)}
      data-testid="experience-card"
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle data-testid="experience-position">{position}</CardTitle>
            <CardDescription
              className="text-base font-semibold"
              data-testid="experience-company"
            >
              {company}
            </CardDescription>
            <p
              className="text-sm text-gray-600 dark:text-gray-400"
              data-testid="experience-duration"
            >
              {duration}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p
          className="text-sm leading-relaxed"
          data-testid="experience-description"
        >
          {description}
        </p>

        {achievements && achievements.length > 0 && (
          <div className="space-y-2" data-testid="experience-achievements">
            <h4 className="text-sm font-semibold">Key Achievements:</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-gray-400">
              {achievements.map((achievement, idx) => (
                <li key={idx} data-testid="experience-achievement">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div
          className="flex flex-wrap gap-2"
          data-testid="experience-technologies"
        >
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              data-testid="experience-technology"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
