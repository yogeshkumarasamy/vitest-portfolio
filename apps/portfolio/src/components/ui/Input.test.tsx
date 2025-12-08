import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { Input } from './Input';

describe('Input', () => {
  it('renders with placeholder', async () => {
    const screen = await render(<Input placeholder="Enter text" />);

    const input = screen.getByTestId('input');

    await expect.element(input).toBeVisible();
    await expect.element(input).toHaveAttribute('placeholder', 'Enter text');
  });

  it('accepts text input', async () => {
    const screen = await render(<Input />);

    const input = screen.getByTestId('input');

    await userEvent.type(input, 'Hello World');
    await expect.element(input).toHaveValue('Hello World');
  });

  it('renders with different types', async () => {
    const screen = await render(<Input type="email" />);

    const input = screen.getByTestId('input');

    await expect.element(input).toHaveAttribute('type', 'email');
  });

  it('renders disabled state', async () => {
    const screen = await render(<Input disabled />);

    const input = screen.getByTestId('input');

    await expect.element(input).toBeDisabled();
  });

  it('does not accept input when disabled', async () => {
    const screen = await render(<Input disabled />);

    const input = screen.getByTestId('input');

    await userEvent.type(input, 'Should not type');
    await expect.element(input).toHaveValue('');
  });

  it('renders with custom className', async () => {
    const screen = await render(<Input className="custom-input" />);

    const input = screen.getByTestId('input');

    await expect.element(input).toHaveClass('custom-input');
  });

  it('renders with default value', async () => {
    const screen = await render(<Input defaultValue="Default text" />);

    const input = screen.getByTestId('input');

    await expect.element(input).toHaveValue('Default text');
  });
});
