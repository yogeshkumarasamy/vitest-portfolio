import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('renders skeleton loader', async () => {
    const screen = await render(<Skeleton className="h-4 w-full" />);

    const skeleton = screen.getByTestId('skeleton');

    await expect.element(skeleton).toBeVisible();
    await expect.element(skeleton).toHaveClass('animate-pulse');
  });

  it('renders with custom className for different shapes', async () => {
    const screen = await render(<Skeleton className="h-12 w-12 rounded-full" />);

    const skeleton = screen.getByTestId('skeleton');

    await expect.element(skeleton).toBeVisible();
    await expect.element(skeleton).toHaveClass('h-12');
    await expect.element(skeleton).toHaveClass('w-12');
    await expect.element(skeleton).toHaveClass('rounded-full');
  });
});
