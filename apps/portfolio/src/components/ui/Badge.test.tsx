import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders with default variant', async () => {
    const screen = await render(<Badge>Default Badge</Badge>);

    const badge = screen.getByTestId('badge');

    await expect.element(badge).toBeVisible();
    await expect.element(badge).toHaveTextContent('Default Badge');
    await expect.element(badge).toHaveClass('bg-blue-600');
  });

  it('renders with secondary variant', async () => {
    const screen = await render(<Badge variant="secondary">Secondary</Badge>);

    const badge = screen.getByTestId('badge');

    await expect.element(badge).toBeVisible();
    await expect.element(badge).toHaveClass('bg-gray-100');
  });

  it('renders with destructive variant', async () => {
    const screen = await render(<Badge variant="destructive">Error</Badge>);

    const badge = screen.getByTestId('badge');

    await expect.element(badge).toBeVisible();
    await expect.element(badge).toHaveClass('bg-red-600');
  });

  it('renders with outline variant', async () => {
    const screen = await render(<Badge variant="outline">Outline</Badge>);

    const badge = screen.getByTestId('badge');

    await expect.element(badge).toBeVisible();
    await expect.element(badge).toHaveClass('border-gray-300');
  });

  it('renders with custom className', async () => {
    const screen = await render(<Badge className="custom-badge">Custom</Badge>);

    const badge = screen.getByTestId('badge');

    await expect.element(badge).toHaveClass('custom-badge');
  });
});
