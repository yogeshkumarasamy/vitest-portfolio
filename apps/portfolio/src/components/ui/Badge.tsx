import { cn } from "@/lib/utils";
import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
  "data-testid"?: string;
}

export const badgeVariants = {
  default: "border-transparent bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
  secondary: "border-transparent bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200",
  destructive: "border-transparent bg-red-600 text-white hover:bg-red-700",
  outline: "border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300",
};

export function Badge({ children, className, variant = "default", ...remaining }: BadgeProps) {
  return (
    <div
      data-testid="badge"
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",
        badgeVariants[variant],
        className
      )}
      {...remaining}
    >
      {children}
    </div>
  );
}
