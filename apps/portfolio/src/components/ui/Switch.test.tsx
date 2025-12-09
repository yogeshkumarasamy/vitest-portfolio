import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders unchecked by default', async () => {
    const screen = await render(<Switch />);

    const switchInput = screen.getByTestId('switch');

    await expect.element(switchInput).toBeVisible();
    await expect.element(switchInput).not.toBeChecked();
  });

  it('renders checked when defaultChecked is true', async () => {
    const screen = await render(<Switch defaultChecked />);

    const switchInput = screen.getByTestId('switch');

    await expect.element(switchInput).toBeChecked();
  });

  it('toggles on click', async () => {
    const screen = await render(<Switch />);

    const switchInput = screen.getByTestId('switch');
    const label = screen.getByTestId('switch-label');

    await expect.element(switchInput).not.toBeChecked();

    await userEvent.click(label);
    await expect.element(switchInput).toBeChecked();

    await userEvent.click(label);
    await expect.element(switchInput).not.toBeChecked();
  });

  it('renders disabled state', async () => {
    const screen = await render(<Switch disabled />);

    const switchInput = screen.getByTestId('switch');

    await expect.element(switchInput).toBeDisabled();
  });

  //   it('does not toggle when disabled', async () => {
  //     const screen = await render(<Switch disabled />);

  //     const switchInput = screen.getByTestId('switch');
  //     const label = screen.getByTestId('switch-label');

  //     await expect.element(switchInput).not.toBeChecked();

  //     await userEvent.click(label);
  //     await expect.element(switchInput).not.toBeChecked();
  //   });
});
