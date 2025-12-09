import { Card, CardContent } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';

interface MetricCardProps {
  label: string;
  value: number;
  max: number;
  unit?: string;
  color?: 'blue' | 'green' | 'yellow' | 'red';
  showPercentage?: boolean;
  className?: string;
}

export function MetricCard({
  label,
  value,
  max,
  unit = '',
  color = 'blue',
  showPercentage = true,
  className,
}: MetricCardProps) {
  const percentage = Math.min((value / max) * 100, 100);

  const colorClasses = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    yellow: 'bg-yellow-600',
    red: 'bg-red-600',
  };

  return (
    <Card className={className} data-testid="metric-card">
      <CardContent className="pt-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span
              className="text-sm font-medium text-gray-900"
              data-testid="metric-label"
            >
              {label}
            </span>
            <span className="text-sm text-gray-600" data-testid="metric-value">
              {value}
              {unit}
              {showPercentage && ` (${percentage.toFixed(0)}%)`}
            </span>
          </div>
          <Progress
            value={value}
            max={max}
            indicatorClassName={colorClasses[color]}
            data-testid="metric-progress"
          />
        </div>
      </CardContent>
    </Card>
  );
}
