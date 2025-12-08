import { cn } from "@/lib/utils";
import React from "react";

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

export function Tooltip({ children, content, className }: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div
      data-testid="tooltip"
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          data-testid="tooltip-content"
          className={cn(
            "absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-gray-900 rounded-md shadow-lg whitespace-nowrap",
            className
          )}
        >
          {content}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  );
}
