import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { cn } from '@/lib/utils';

interface NotificationCardProps {
  title: string;
  message: string;
  variant?: 'default' | 'destructive' | 'success' | 'warning';
  timestamp?: string;
  onDismiss?: () => void;
  className?: string;
}

export function NotificationCard({
  title,
  message,
  variant = 'default',
  timestamp,
  onDismiss,
  className,
}: NotificationCardProps) {
  return (
    <Alert
      variant={variant}
      className={cn('relative', className)}
      data-testid="notification-card"
    >
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          data-testid="notification-dismiss"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
      <AlertTitle data-testid="notification-title">{title}</AlertTitle>
      <AlertDescription>
        <p data-testid="notification-message">{message}</p>
        {timestamp && (
          <p
            className="mt-2 text-xs opacity-70"
            data-testid="notification-timestamp"
          >
            {timestamp}
          </p>
        )}
      </AlertDescription>
    </Alert>
  );
}
