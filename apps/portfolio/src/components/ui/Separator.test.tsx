import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { Separator } from './Separator';

describe('Separator', () => {
  it('renders horizontal separator by default', async () => {
    const screen = await render(<Separator />);

    const separator = screen.getByTestId('separator');

    await expect.element(separator).toBeVisible();
    await expect.element(separator).toHaveClass('h-px');
  });

  it('renders vertical separator', async () => {
    const screen = await render(<Separator orientation="vertical" />);

    const separator = screen.getByTestId('separator');

    await expect.element(separator).toHaveClass('w-px');
  });

  it('renders with custom className', async () => {
    const screen = await render(<Separator className="custom-separator" />);

    const separator = screen.getByTestId('separator');

    await expect.element(separator).toHaveClass('custom-separator');
  });
});
