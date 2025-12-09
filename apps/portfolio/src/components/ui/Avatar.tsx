import { cn } from '@/lib/utils';
import React from 'react';

interface AvatarProps {
  children: React.ReactNode;
  className?: string;
  'data-testid'?: string;
}

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

interface AvatarFallbackProps {
  children: React.ReactNode;
  className?: string;
}

export function Avatar({ children, className, ...props }: AvatarProps) {
  return (
    <div
      data-testid="avatar"
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <img
      data-testid="avatar-image"
      className={cn('aspect-square h-full w-full', className)}
      {...props}
    />
  );
}

export function AvatarFallback({ children, className }: AvatarFallbackProps) {
  return (
    <div
      data-testid="avatar-fallback"
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-gray-900',
        className
      )}
    >
      {children}
    </div>
  );
}
