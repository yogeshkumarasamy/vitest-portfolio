import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';

describe('Avatar', () => {
  it('renders with image', async () => {
    const screen = await render(
      <Avatar>
        <AvatarImage src="https://placehold.co/40x40" alt="Test User" />
      </Avatar>
    );

    const avatar = screen.getByTestId('avatar');
    const image = screen.getByTestId('avatar-image');

    await expect.element(avatar).toBeVisible();
    await expect.element(image).toBeVisible();
    await expect.element(image).toHaveAttribute('src', 'https://placehold.co/40x40');
    await expect.element(image).toHaveAttribute('alt', 'Test User');
  });

  it('renders with fallback when no image provided', async () => {
    const screen = await render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    );

    const avatar = screen.getByTestId('avatar');
    const fallback = screen.getByTestId('avatar-fallback');

    await expect.element(avatar).toBeVisible();
    await expect.element(fallback).toBeVisible();
    await expect.element(fallback).toHaveTextContent('AB');
  });

  it('renders with custom className on avatar container', async () => {
    const screen = await render(
      <Avatar className="custom-avatar">
        <AvatarFallback>XY</AvatarFallback>
      </Avatar>
    );

    const avatar = screen.getByTestId('avatar');

    await expect.element(avatar).toHaveClass('custom-avatar');
  });

  it('renders with custom className on avatar image', async () => {
    const screen = await render(
      <Avatar>
        <AvatarImage src="https://placehold.co/40x40" alt="Test" className="custom-image" />
      </Avatar>
    );

    const image = screen.getByTestId('avatar-image');

    await expect.element(image).toHaveClass('custom-image');
  });

  it('renders with custom className on avatar fallback', async () => {
    const screen = await render(
      <Avatar>
        <AvatarFallback className="custom-fallback">CD</AvatarFallback>
      </Avatar>
    );

    const fallback = screen.getByTestId('avatar-fallback');

    await expect.element(fallback).toHaveClass('custom-fallback');
  });
});
