import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders with placeholder', async () => {
    const screen = await render(<Textarea placeholder="Enter description" />);

    const textarea = screen.getByTestId('textarea');

    await expect.element(textarea).toBeVisible();
    await expect.element(textarea).toHaveAttribute('placeholder', 'Enter description');
  });

  it('accepts text input', async () => {
    const screen = await render(<Textarea />);

    const textarea = screen.getByTestId('textarea');

    await userEvent.type(textarea, 'This is a long text');
    await expect.element(textarea).toHaveValue('This is a long text');
  });

  it('renders disabled state', async () => {
    const screen = await render(<Textarea disabled />);

    const textarea = screen.getByTestId('textarea');

    await expect.element(textarea).toBeDisabled();
  });

  it('does not accept input when disabled', async () => {
    const screen = await render(<Textarea disabled />);

    const textarea = screen.getByTestId('textarea');

    await userEvent.type(textarea, 'Should not type');
    await expect.element(textarea).toHaveValue('');
  });

  it('renders with custom className', async () => {
    const screen = await render(<Textarea className="custom-textarea" />);

    const textarea = screen.getByTestId('textarea');

    await expect.element(textarea).toHaveClass('custom-textarea');
  });

  it('renders with default value', async () => {
    const screen = await render(<Textarea defaultValue="Initial content" />);

    const textarea = screen.getByTestId('textarea');

    await expect.element(textarea).toHaveValue('Initial content');
  });
});
