import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav data-testid="breadcrumb" aria-label="Breadcrumb" className={cn("flex", className)}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} data-testid="breadcrumb-item" className="flex items-center">
            {index > 0 && (
              <svg
                className="h-4 w-4 text-gray-400 mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
            {item.href && index < items.length - 1 ? (
              <Link to={item.href} className="text-sm text-blue-600 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-sm text-gray-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
