import { cn } from '@/lib/utils';
import React from 'react';

interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        data-testid="switch-label"
        className="relative inline-flex cursor-pointer items-center"
      >
        <input
          data-testid="switch"
          type="checkbox"
          ref={ref}
          className="peer sr-only"
          {...props}
        />
        <div
          className={cn(
            "peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-600 peer-focus:ring-offset-2 rtl:peer-checked:after:-translate-x-full",
            className
          )}
        ></div>
      </label>
    );
  }
);

Switch.displayName = 'Switch';
