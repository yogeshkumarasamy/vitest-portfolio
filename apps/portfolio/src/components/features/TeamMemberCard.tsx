import { Card, CardContent } from "@/components/ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
  skills?: string[];
  className?: string;
}

export function TeamMemberCard({ name, role, bio, avatar, skills = [], className }: TeamMemberCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className={cn("h-full", className)} data-testid="team-member-card">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <Avatar className="h-24 w-24" data-testid="member-avatar">
            {avatar ? <AvatarImage src={avatar} alt={name} /> : <AvatarFallback className="text-lg">{initials}</AvatarFallback>}
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg text-gray-900" data-testid="member-name">{name}</h3>
            <p className="text-gray-600" data-testid="member-role">{role}</p>
          </div>
          {bio && <p className="text-sm text-gray-700" data-testid="member-bio">{bio}</p>}
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center" data-testid="member-skills">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" data-testid="member-skill">
                  {skill}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
