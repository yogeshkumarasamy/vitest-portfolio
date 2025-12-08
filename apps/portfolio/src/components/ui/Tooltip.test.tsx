import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('renders trigger element', async () => {
    const screen = await render(
      <Tooltip content="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );

    const tooltip = screen.getByTestId('tooltip');
    const button = screen.getByText('Hover me');

    await expect.element(tooltip).toBeVisible();
    await expect.element(button).toBeVisible();
  });

  it('shows tooltip content on hover', async () => {
    const screen = await render(
      <Tooltip content="Helpful information">
        <button>Info</button>
      </Tooltip>
    );

    const tooltip = screen.getByTestId('tooltip');

    await userEvent.hover(tooltip);

    const content = screen.getByTestId('tooltip-content');
    await expect.element(content).toBeVisible();
    await expect.element(content).toHaveTextContent('Helpful information');
  });

  it('hides tooltip content when not hovering', async () => {
    const screen = await render(
      <Tooltip content="Tooltip">
        <button>Button</button>
      </Tooltip>
    );

    const tooltip = screen.getByTestId('tooltip');

    await userEvent.hover(tooltip);
    const content = screen.getByTestId('tooltip-content');
    await expect.element(content).toBeVisible();

    await userEvent.unhover(tooltip);
    await expect.element(content).not.toBeInTheDocument();
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <Tooltip content="Custom" className="custom-tooltip">
        <button>Button</button>
      </Tooltip>
    );

    const tooltip = screen.getByTestId('tooltip');
    await userEvent.hover(tooltip);

    const content = screen.getByTestId('tooltip-content');
    await expect.element(content).toHaveClass('custom-tooltip');
  });
});
