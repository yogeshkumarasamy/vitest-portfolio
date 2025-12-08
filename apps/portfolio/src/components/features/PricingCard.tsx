import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

export function PricingCard({
  title,
  description,
  price,
  period = "month",
  features,
  highlighted = false,
  buttonText = "Get Started",
  onButtonClick,
  className,
}: PricingCardProps) {
  return (
    <Card className={cn(highlighted && "border-blue-600 shadow-lg", className)} data-testid="pricing-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle data-testid="pricing-title">{title}</CardTitle>
          {highlighted && <Badge data-testid="pricing-badge">Popular</Badge>}
        </div>
        <CardDescription data-testid="pricing-description">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-gray-900" data-testid="pricing-price">{price}</span>
            <span className="text-gray-600" data-testid="pricing-period">/{period}</span>
          </div>
        </div>
        <ul className="space-y-3" data-testid="pricing-features">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2" data-testid="pricing-feature">
              <svg className="h-5 w-5 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          variant={highlighted ? "default" : "outline"}
          className="w-full"
          onClick={onButtonClick}
          data-testid="pricing-button"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
