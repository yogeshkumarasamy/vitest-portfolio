import { cn } from "@/lib/utils";
import React from "react";

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, ...props }, ref) => {
    return (
      <label data-testid="switch-label" className="relative inline-flex items-center cursor-pointer">
        <input
          data-testid="switch"
          type="checkbox"
          ref={ref}
          className="sr-only peer"
          {...props}
        />
        <div className={cn(
          "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-600 peer-focus:ring-offset-2 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600",
          className
        )}></div>
      </label>
    );
  }
);

Switch.displayName = "Switch";
