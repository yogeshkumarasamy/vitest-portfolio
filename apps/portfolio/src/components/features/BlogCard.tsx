import { cn } from '@/lib/utils';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  readTime?: string;
  tags?: string[];
  className?: string;
  onClick?: () => void;
}

export function BlogCard({
  title,
  excerpt,
  date,
  author,
  readTime,
  tags,
  className,
  onClick,
}: BlogCardProps) {
  return (
    <div
      data-testid="blog-card"
      className={cn(
        'bg-card text-card-foreground hover:border-primary/50 cursor-pointer rounded-lg border shadow-sm transition-all hover:shadow-lg',
        className
      )}
      onClick={onClick}
    >
      <CardHeader>
        <div className="space-y-2">
          <CardTitle className="line-clamp-2">{title}</CardTitle>
          <div
            data-testid="blog-metadata"
            className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
          >
            <span data-testid="blog-date">{date}</span>
            {readTime && (
              <>
                <span>•</span>
                <span data-testid="blog-read-time">{readTime}</span>
              </>
            )}
            {author && (
              <>
                <span>•</span>
                <span data-testid="blog-author">{author}</span>
              </>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <CardDescription className="line-clamp-3">{excerpt}</CardDescription>
        {tags && tags.length > 0 && (
          <div data-testid="blog-tags" className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                data-testid="blog-tag"
                className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </div>
  );
}
