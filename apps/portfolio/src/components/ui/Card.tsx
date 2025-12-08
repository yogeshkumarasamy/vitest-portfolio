import { cn } from "@/lib/utils";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  "data-testid"?: string;
}

export function Card({ children, className, as: Component = "div", ...remaining }: CardProps) {
  return (
    <Component data-testid="card" className={cn("rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900", className)} {...remaining}>
      {children}
    </Component>
  );
}

export function CardHeader({ children, className, as: Component = "div", ...remaining }: CardProps) {
  return (
    <Component data-testid="card-header" className={cn("flex flex-col space-y-1.5 p-6", className)} {...remaining}>
      {children}
    </Component>
  );
}

export function CardTitle({ children, className, as: Component = "h3", ...remaining }: CardProps) {
  return (
    <Component data-testid="card-title" className={cn("text-2xl font-semibold leading-none tracking-tight text-gray-600 dark:text-white", className)} {...remaining}>
      {children}
    </Component>
  );
}

export function CardDescription({ children, className, as: Component = "p", ...remaining }: CardProps) {
  return (
    <Component data-testid="card-description" className={cn("text-sm text-gray-600 dark:text-gray-400", className)} {...remaining} >
      {children}
    </Component>
  );
}

export function CardContent({ children, className, as: Component = "div", ...remaining }: CardProps) {
  return (
    <Component data-testid="card-content" className={cn("p-6 pt-0", className)} {...remaining}>
      {children}
    </Component>
  );
}

export function CardFooter({ children, className, as: Component = "div", ...remaining }: CardProps) {
  return (
    <Component data-testid="card-footer" className={cn("flex items-center p-6 pt-0", className)} {...remaining}>
      {children}
    </Component>
  );
}
