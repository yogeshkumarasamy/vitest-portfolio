import { cn } from "@/lib/utils";
import React from "react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      data-testid="skeleton"
      className={cn("animate-pulse rounded-md bg-gray-200", className)}
      {...props}
    />
  );
}
