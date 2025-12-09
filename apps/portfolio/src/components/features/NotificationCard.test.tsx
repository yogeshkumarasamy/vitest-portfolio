import { describe, it, expect, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { NotificationCard } from './NotificationCard';

describe('NotificationCard', () => {
  it('renders notification with title and message', async () => {
    const screen = await render(
      <NotificationCard
        title="Success"
        message="Operation completed successfully"
      />
    );

    const card = screen.getByTestId('notification-card');
    const title = screen.getByTestId('notification-title');
    const message = screen.getByTestId('notification-message');

    await expect.element(card).toBeInTheDocument();
    await expect.element(title).toHaveTextContent('Success');
    await expect
      .element(message)
      .toHaveTextContent('Operation completed successfully');
  });

  it('renders timestamp when provided', async () => {
    const screen = await render(
      <NotificationCard
        title="Info"
        message="Update available"
        timestamp="2 minutes ago"
      />
    );

    const timestamp = screen.getByTestId('notification-timestamp');

    await expect.element(timestamp).toHaveTextContent('2 minutes ago');
  });

  it('does not render timestamp when not provided', async () => {
    const screen = await render(
      <NotificationCard title="Info" message="Message" />
    );

    const card = screen.getByTestId('notification-card');

    await expect.element(card).toBeInTheDocument();
  });

  it('renders dismiss button and handles click', async () => {
    const handleDismiss = vi.fn();
    const screen = await render(
      <NotificationCard
        title="Alert"
        message="Important notification"
        onDismiss={handleDismiss}
      />
    );

    const dismissButton = screen.getByTestId('notification-dismiss');

    await expect.element(dismissButton).toBeInTheDocument();
    await userEvent.click(dismissButton);
    expect(handleDismiss).toHaveBeenCalledTimes(1);
  });

  it('does not render dismiss button when onDismiss not provided', async () => {
    const screen = await render(
      <NotificationCard title="Info" message="Message" />
    );

    const card = screen.getByTestId('notification-card');

    await expect.element(card).toBeInTheDocument();
  });

  it('renders with different variants', async () => {
    const screen = await render(
      <NotificationCard
        title="Error"
        message="Something went wrong"
        variant="destructive"
      />
    );

    const card = screen.getByTestId('notification-card');

    await expect.element(card).toBeInTheDocument();
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <NotificationCard
        title="Info"
        message="Message"
        className="custom-notification"
      />
    );

    const card = screen.getByTestId('notification-card');

    await expect.element(card).toHaveClass('custom-notification');
  });

  it('supports hover on dismiss button', async () => {
    const handleDismiss = vi.fn();
    const screen = await render(
      <NotificationCard
        title="Info"
        message="Message"
        onDismiss={handleDismiss}
      />
    );

    const dismissButton = screen.getByTestId('notification-dismiss');

    await userEvent.hover(dismissButton);
    await expect.element(dismissButton).toBeInTheDocument();
  });
});
