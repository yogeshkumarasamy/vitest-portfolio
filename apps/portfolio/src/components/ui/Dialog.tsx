import { cn } from "@/lib/utils";
import React from "react";

interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
}

interface DialogHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface DialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const DialogContext = React.createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
}>({ open: false, onOpenChange: () => {} });

export function Dialog({ children, open = false, onOpenChange = () => {} }: DialogProps) {
  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ children }: { children: React.ReactElement }) {
  const { onOpenChange } = React.useContext(DialogContext);
  return React.cloneElement(children, {
    'data-testid': 'dialog-trigger',
    onClick: () => onOpenChange(true),
  } as any);
}

export function DialogContent({ children, className }: DialogContentProps) {
  const { open, onOpenChange } = React.useContext(DialogContext);

  if (!open) return null;

  return (
    <div data-testid="dialog-overlay" className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={() => onOpenChange(false)} />
      <div
        data-testid="dialog-content"
        className={cn(
          "relative z-50 w-full max-w-lg rounded-lg border border-gray-200 bg-white p-6 shadow-lg",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ children, className }: DialogHeaderProps) {
  return (
    <div data-testid="dialog-header" className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}>
      {children}
    </div>
  );
}

export function DialogTitle({ children, className }: DialogTitleProps) {
  return (
    <h2 data-testid="dialog-title" className={cn("text-lg font-semibold leading-none tracking-tight text-gray-900", className)}>
      {children}
    </h2>
  );
}

export function DialogDescription({ children, className }: DialogDescriptionProps) {
  return (
    <p data-testid="dialog-description" className={cn("text-sm text-gray-600", className)}>
      {children}
    </p>
  );
}
