import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { P } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
  "data-testid"?: string;
}

export function StatCard({ title, value, description, trend, trendValue, className, ...remaining }: StatCardProps) {
  const trendColors = {
    up: "text-green-600",
    down: "text-red-600",
    neutral: "text-gray-600",
  };

  return (
    <Card className={className} data-testid="stat-card" {...remaining}>
      <CardHeader>
        <CardTitle className="text-base font-medium text-gray-600" data-testid="stat-title">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-gray-900" data-testid="stat-value">{value}</div>
          {(description || trendValue) && (
            <div className="flex items-center gap-2">
              {trend && trendValue && (
                <span className={cn("text-sm font-medium", trendColors[trend])} data-testid="stat-trend">
                  {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"} {trendValue}
                </span>
              )}
              {description && <P className="text-sm text-gray-600" data-testid="stat-description">{description}</P>}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
