import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <Card className={cn('h-full', className)} data-testid="feature-card">
      <CardHeader>
        {icon && (
          <div
            className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600"
            data-testid="feature-icon"
          >
            {icon}
          </div>
        )}
        <CardTitle data-testid="feature-title">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription
          className="text-base"
          data-testid="feature-description"
        >
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
