import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders unchecked by default', async () => {
    const screen = await render(<Checkbox />);

    const checkbox = screen.getByTestId('checkbox');

    await expect.element(checkbox).toBeVisible();
    await expect.element(checkbox).not.toBeChecked();
  });

  it('renders checked when defaultChecked is true', async () => {
    const screen = await render(<Checkbox defaultChecked />);

    const checkbox = screen.getByTestId('checkbox');

    await expect.element(checkbox).toBeChecked();
  });

  it('toggles checked state on click', async () => {
    const screen = await render(<Checkbox />);

    const checkbox = screen.getByTestId('checkbox');

    await expect.element(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    await expect.element(checkbox).toBeChecked();

    await userEvent.click(checkbox);
    await expect.element(checkbox).not.toBeChecked();
  });

  it('renders disabled state', async () => {
    const screen = await render(<Checkbox disabled />);

    const checkbox = screen.getByTestId('checkbox');

    await expect.element(checkbox).toBeDisabled();
  });

  //   it('does not toggle when disabled', async () => {
  //     const screen = await render(<Checkbox disabled />);

  //     const checkbox = screen.getByTestId('checkbox');

  //     await expect.element(checkbox).not.toBeChecked();

  //     await userEvent.click(checkbox);
  //     await expect.element(checkbox).not.toBeChecked();
  //   });

  it('renders with custom className', async () => {
    const screen = await render(<Checkbox className="custom-checkbox" />);

    const checkbox = screen.getByTestId('checkbox');

    await expect.element(checkbox).toHaveClass('custom-checkbox');
  });

  it('renders with aria-label for accessibility', async () => {
    const screen = await render(<Checkbox aria-label="Accept terms" />);

    const checkbox = screen.getByTestId('checkbox');

    await expect
      .element(checkbox)
      .toHaveAttribute('aria-label', 'Accept terms');
  });
});
