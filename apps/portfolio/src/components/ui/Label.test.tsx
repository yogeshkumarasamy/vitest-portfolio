import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { Label } from './Label';

describe('Label', () => {
  it('renders with text content', async () => {
    const screen = await render(<Label>Email Address</Label>);

    const label = screen.getByTestId('label');

    await expect.element(label).toBeVisible();
    await expect.element(label).toHaveTextContent('Email Address');
  });

  it('renders with htmlFor attribute', async () => {
    const screen = await render(<Label htmlFor="email-input">Email</Label>);

    const label = screen.getByTestId('label');

    await expect.element(label).toHaveAttribute('for', 'email-input');
  });

  it('renders with custom className', async () => {
    const screen = await render(<Label className="custom-label">Label</Label>);

    const label = screen.getByTestId('label');

    await expect.element(label).toHaveClass('custom-label');
  });
});
