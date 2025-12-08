import { cn } from "@/lib/utils";
import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        data-testid="checkbox"
        ref={ref}
        className={cn(
          "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";
