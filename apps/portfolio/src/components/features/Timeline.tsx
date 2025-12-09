import { cn } from '@/lib/utils';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type?: 'education' | 'work' | 'achievement';
}

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export function Timeline({ events, className }: TimelineProps) {
  const getTypeColor = (type?: string) => {
    switch (type) {
      case 'education':
        return 'bg-blue-500';
      case 'work':
        return 'bg-green-500';
      case 'achievement':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className={cn('space-y-8', className)} data-testid="timeline">
      {events.map((event, idx) => (
        <div
          key={idx}
          className="border-border relative border-l-2 pb-8 pl-8 last:pb-0"
          data-testid="timeline-event"
        >
          <div
            className={cn(
              'border-background absolute -left-2 top-0 h-4 w-4 rounded-full border-4',
              getTypeColor(event.type)
            )}
            data-testid="timeline-marker"
          />
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span
                className="text-sm font-bold text-gray-600 dark:text-gray-400"
                data-testid="timeline-year"
              >
                {event.year}
              </span>
              {event.type && (
                <span
                  className="rounded-full bg-gray-100 px-2 py-0.5 text-xs capitalize text-gray-900 dark:bg-gray-800 dark:text-gray-100"
                  data-testid="timeline-type"
                >
                  {event.type}
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold" data-testid="timeline-title">
              {event.title}
            </h3>
            <p
              className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"
              data-testid="timeline-description"
            >
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
