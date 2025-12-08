import { cn } from "@/lib/utils";
import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  "data-testid"?: string;
}

export function H1({ children, className, as: Component = "h1" }: TypographyProps) {
  return (
    <Component data-testid="typography-h1" className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900", className)}>
      {children}
    </Component>
  );
}

export function H2({ children, className, as: Component = "h2" }: TypographyProps) {
  return (
    <Component data-testid="typography-h2" className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-gray-900", className)}>
      {children}
    </Component>
  );
}

export function H3({ children, className, as: Component = "h3" }: TypographyProps) {
  return (
    <Component data-testid="typography-h3" className={cn("scroll-m-20 text-2xl font-semibold tracking-tight text-gray-900", className)}>
      {children}
    </Component>
  );
}

export function H4({ children, className, as: Component = "h4" }: TypographyProps) {
  return (
    <Component data-testid="typography-h4" className={cn("scroll-m-20 text-xl font-semibold tracking-tight text-gray-900", className)}>
      {children}
    </Component>
  );
}

export function P({ children, className, as: Component = "p", ...props }: TypographyProps) {
  return (
    <Component data-testid="typography-p" className={cn("leading-7 not-first:mt-6 text-gray-700", className)} {...props}>
      {children}
    </Component>
  );
}

export function Lead({ children, className, as: Component = "p" }: TypographyProps) {
  return (
    <Component data-testid="typography-lead" className={cn("text-xl text-gray-600 dark:text-gray-400", className)}>
      {children}
    </Component>
  );
}

export function Large({ children, className, as: Component = "div" }: TypographyProps) {
  return (
    <Component data-testid="typography-large" className={cn("text-lg font-semibold text-gray-900", className)}>
      {children}
    </Component>
  );
}

export function Small({ children, className, as: Component = "small" }: TypographyProps) {
  return (
    <Component data-testid="typography-small" className={cn("text-sm font-medium leading-none text-gray-700", className)}>
      {children}
    </Component>
  );
}

export function Muted({ children, className, as: Component = "p" }: TypographyProps) {
  return (
    <Component data-testid="typography-muted" className={cn("text-sm text-gray-600 dark:text-gray-400", className)}>
      {children}
    </Component>
  );
}

export function Blockquote({ children, className, as: Component = "blockquote" }: TypographyProps) {
  return (
    <Component data-testid="typography-blockquote" className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </Component>
  );
}

export function InlineCode({ children, className, as: Component = "code" }: TypographyProps) {
  return (
    <Component data-testid="typography-inline-code" className={cn("relative rounded bg-gray-100 text-gray-800 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold dark:bg-gray-800 dark:text-gray-200", className)}>
      {children}
    </Component>
  );
}

export function List({ children, className, as: Component = "ul" }: TypographyProps) {
  return (
    <Component data-testid="typography-list" className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </Component>
  );
}
