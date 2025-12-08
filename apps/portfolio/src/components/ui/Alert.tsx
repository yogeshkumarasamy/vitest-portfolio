import { cn } from "@/lib/utils";
import React from "react";

interface AlertProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "destructive" | "success" | "warning";
  "data-testid"?: string;
}

interface AlertTitleProps {
  children: React.ReactNode;
  className?: string;
  "data-testid"?: string;
}

interface AlertDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const alertVariants = {
  default: "bg-white text-gray-900 border-gray-200",
  destructive: "bg-red-50 text-red-900 border-red-200",
  success: "bg-green-50 text-green-900 border-green-200",
  warning: "bg-yellow-50 text-yellow-900 border-yellow-200",
};

export function Alert({ children, className, variant = "default", ...props }: AlertProps) {
  return (
    <div
      data-testid="alert"
      role="alert"
      className={cn(
        "relative w-full rounded-lg border p-4",
        alertVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function AlertTitle({ children, className, ...props }: AlertTitleProps) {
  return (
    <h5 data-testid="alert-title" className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props}>
      {children}
    </h5>
  );
}

export function AlertDescription({ children, className }: AlertDescriptionProps) {
  return (
    <div data-testid="alert-description" className={cn("text-sm [&_p]:leading-relaxed", className)}>
      {children}
    </div>
  );
}
