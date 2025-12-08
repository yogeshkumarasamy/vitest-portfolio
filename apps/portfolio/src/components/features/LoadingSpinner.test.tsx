import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { LoadingSpinner } from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders loading spinner', async () => {
    const screen = await render(<LoadingSpinner />);

    const spinner = screen.getByTestId('loading-spinner');

    await expect.element(spinner).toBeInTheDocument();
  });

  it('renders with small size', async () => {
    const screen = await render(<LoadingSpinner size="sm" />);

    const spinner = screen.getByTestId('loading-spinner');

    await expect.element(spinner).toBeInTheDocument();
  });

  it('renders with medium size by default', async () => {
    const screen = await render(<LoadingSpinner />);

    const spinner = screen.getByTestId('loading-spinner');

    await expect.element(spinner).toBeInTheDocument();
  });

  it('renders with large size', async () => {
    const screen = await render(<LoadingSpinner size="lg" />);

    const spinner = screen.getByTestId('loading-spinner');

    await expect.element(spinner).toBeInTheDocument();
  });

  it('renders with custom className', async () => {
    const screen = await render(<LoadingSpinner className="custom-spinner" />);

    const spinner = screen.getByTestId('loading-spinner');

    await expect.element(spinner).toHaveClass('custom-spinner');
  });
});
