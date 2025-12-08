import { Button } from "@/components/ui/Button";
import { H3, P } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  title,
  description,
  icon,
  actionLabel,
  onAction,
  className,
}: EmptyStateProps) {
  return (
    <div data-testid="empty-state" className={cn("flex flex-col items-center justify-center text-center py-12 px-4", className)}>
      {icon && (
        <div data-testid="empty-state-icon" className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
          {icon}
        </div>
      )}
      <H3 className="mb-2">{title}</H3>
      {description && <P className="text-gray-600 max-w-md mb-6">{description}</P>}
      {actionLabel && onAction && (
        <Button data-testid="empty-state-action" onClick={onAction}>{actionLabel}</Button>
      )}
    </div>
  );
}
