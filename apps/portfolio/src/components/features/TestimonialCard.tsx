import { Card, CardContent } from "@/components/ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { P } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  className?: string;
}

export function TestimonialCard({ quote, author, role, company, avatar, className }: TestimonialCardProps) {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className={cn("h-full", className)} data-testid="testimonial-card">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <P className="italic text-gray-700" data-testid="testimonial-quote">"{quote}"</P>
          <div className="flex items-center gap-3">
            <Avatar data-testid="testimonial-avatar">
              {avatar ? <AvatarImage src={avatar} alt={author} /> : <AvatarFallback>{initials}</AvatarFallback>}
            </Avatar>
            <div>
              <p className="font-semibold text-gray-900" data-testid="testimonial-author">{author}</p>
              <p className="text-sm text-gray-600" data-testid="testimonial-role">{role} at {company}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
