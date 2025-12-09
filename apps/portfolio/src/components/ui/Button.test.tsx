import { describe, it, expect, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { Button, buttonVariants } from './Button';
import { userEvent } from 'vitest/browser';

describe('Button Component', () => {
  it('should render with default variant', async () => {
    const screen = await render(<Button>Click me</Button>);

    const button = screen.getByTestId('button');
    await expect.element(button).toHaveTextContent('Click me');
    await expect.element(button).toHaveClass(buttonVariants.default);
    await expect.element(button).toBeVisible();
  });

  it('should render with destructive variant', async () => {
    const screen = await render(<Button variant="destructive">Delete</Button>);

    const button = screen.getByTestId('button');
    await expect.element(button).toHaveTextContent('Delete');
    await expect.element(button).toHaveClass(buttonVariants.destructive);
    await expect.element(button).toBeVisible();
  });

  it('should render with outline variant', async () => {
    const screen = await render(<Button variant="outline">Outline</Button>);

    const button = screen.getByTestId('button');
    await expect.element(button).toHaveTextContent('Outline');
    await expect.element(button).toHaveClass(buttonVariants.outline);
    await expect.element(button).toBeVisible();
  });

  it('should render with secondary variant', async () => {
    const screen = await render(<Button variant="secondary">Secondary</Button>);

    const button = screen.getByTestId('button');
    await expect.element(button).toHaveTextContent('Secondary');
    await expect.element(button).toHaveClass(buttonVariants.secondary);
    await expect.element(button).toBeVisible();
  });

  it('should render with ghost variant', async () => {
    const screen = await render(<Button variant="ghost">Ghost</Button>);

    const button = screen.getByTestId('button');
    await expect.element(button).toHaveTextContent('Ghost');
    await expect.element(button).toHaveClass(buttonVariants.ghost);
    await expect.element(button).toBeVisible();
  });

  it('should render with link variant', async () => {
    const screen = await render(<Button variant="link">Link</Button>);

    const button = screen.getByTestId('button');
    await expect.element(button).toHaveTextContent('Link');
    await expect.element(button).toHaveClass(buttonVariants.link);
    await expect.element(button).toBeVisible();
  });

  it('should render with small size', async () => {
    const screen = await render(<Button size="sm">Small</Button>);

    const button = screen.getByTestId('button');
    await expect.element(button).toHaveTextContent('Small');
    await expect.element(button).toBeVisible();
  });

  it('should render with large size', async () => {
    const screen = await render(<Button size="lg">Large</Button>);

    const button = screen.getByTestId('button');
    await expect.element(button).toHaveTextContent('Large');
    await expect.element(button).toBeVisible();
  });

  it('should render with icon size', async () => {
    const screen = await render(<Button size="icon">⚙</Button>);

    const button = screen.getByTestId('button');
    await expect.element(button).toHaveTextContent('⚙');
    await expect.element(button).toBeVisible();
  });

  it('should handle click events', async () => {
    const handleClick = vi.fn();
    const screen = await render(<Button onClick={handleClick}>Click</Button>);

    const button = screen.getByTestId('button');
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should handle multiple clicks', async () => {
    const handleClick = vi.fn();
    const screen = await render(<Button onClick={handleClick}>Click</Button>);

    const button = screen.getByTestId('button');
    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(3);
  });

  it('should be disabled when disabled prop is true', async () => {
    const screen = await render(<Button disabled>Disabled</Button>);

    const button = screen.getByTestId('button');
    await expect.element(button).toHaveAttribute('disabled');
  });
});
