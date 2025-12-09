import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

interface SkillMeterProps {
  skill: string;
  level: number; // 0-100
  category?: string;
  className?: string;
}

export function SkillMeter({
  skill,
  level,
  category,
  className,
}: SkillMeterProps) {
  const getColorClass = (level: number) => {
    if (level >= 80) return 'bg-green-500';
    if (level >= 60) return 'bg-blue-500';
    if (level >= 40) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    <div className={cn('space-y-2', className)} data-testid="skill-meter">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-medium" data-testid="skill-name">
            {skill}
          </span>
          {category && (
            <Badge
              variant="secondary"
              className="text-xs"
              data-testid="skill-category"
            >
              {category}
            </Badge>
          )}
        </div>
        <span
          className="text-sm text-gray-600 dark:text-gray-400"
          data-testid="skill-level"
        >
          {level}%
        </span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800"
        data-testid="skill-bar"
      >
        <div
          className={cn(
            'h-full transition-all duration-500',
            getColorClass(level)
          )}
          style={{ width: `${level}%` }}
          data-testid="skill-progress"
        />
      </div>
    </div>
  );
}
