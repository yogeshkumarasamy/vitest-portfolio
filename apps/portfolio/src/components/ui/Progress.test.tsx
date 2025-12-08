import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { Progress } from './Progress';

describe('Progress', () => {
  it('renders with default value of 0', async () => {
    const screen = await render(<Progress />);

    const progress = screen.getByTestId('progress');
    const indicator = screen.getByTestId('progress-indicator');

    await expect.element(progress).toBeVisible();
    await expect.element(indicator).toBeVisible();
  });

  it('renders with 50% progress', async () => {
    const screen = await render(<Progress value={50} max={100} />);

    const indicator = screen.getByTestId('progress-indicator');

    await expect.element(indicator).toHaveStyle({ transform: 'translateX(-50%)' });
  });

  it('renders with 100% progress', async () => {
    const screen = await render(<Progress value={100} max={100} />);

    const indicator = screen.getByTestId('progress-indicator');

    await expect.element(indicator).toHaveStyle({ transform: 'translateX(-0%)' });
  });

  it('renders with custom max value', async () => {
    const screen = await render(<Progress value={25} max={50} />);

    const indicator = screen.getByTestId('progress-indicator');

    await expect.element(indicator).toHaveStyle({ transform: 'translateX(-50%)' });
  });

  it('renders with custom className', async () => {
    const screen = await render(<Progress className="custom-progress" />);

    const progress = screen.getByTestId('progress');

    await expect.element(progress).toHaveClass('custom-progress');
  });
});
