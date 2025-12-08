import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { Alert, AlertTitle, AlertDescription } from './Alert';

describe('Alert', () => {
  it('renders with default variant', async () => {
    const screen = await render(
      <Alert>
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </Alert>
    );

    const alert = screen.getByTestId('alert');
    const title = screen.getByTestId('alert-title');
    const description = screen.getByTestId('alert-description');

    await expect.element(alert).toBeVisible();
    await expect.element(alert).toHaveAttribute('role', 'alert');
    await expect.element(title).toHaveTextContent('Default Alert');
    await expect.element(description).toHaveTextContent('This is a default alert message.');
  });

  it('renders with destructive variant', async () => {
    const screen = await render(
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong.</AlertDescription>
      </Alert>
    );

    const alert = screen.getByTestId('alert');

    await expect.element(alert).toBeVisible();
    await expect.element(alert).toHaveClass('bg-red-50');
    await expect.element(alert).toHaveClass('text-red-900');
  });

  it('renders with success variant', async () => {
    const screen = await render(
      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Operation completed successfully.</AlertDescription>
      </Alert>
    );

    const alert = screen.getByTestId('alert');

    await expect.element(alert).toBeVisible();
    await expect.element(alert).toHaveClass('bg-green-50');
    await expect.element(alert).toHaveClass('text-green-900');
  });

  it('renders with warning variant', async () => {
    const screen = await render(
      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Please proceed with caution.</AlertDescription>
      </Alert>
    );

    const alert = screen.getByTestId('alert');

    await expect.element(alert).toBeVisible();
    await expect.element(alert).toHaveClass('bg-yellow-50');
    await expect.element(alert).toHaveClass('text-yellow-900');
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <Alert className="custom-alert">
        <AlertDescription>Custom styled alert</AlertDescription>
      </Alert>
    );

    const alert = screen.getByTestId('alert');

    await expect.element(alert).toHaveClass('custom-alert');
  });

  it('renders without title', async () => {
    const screen = await render(
      <Alert>
        <AlertDescription>Alert with no title</AlertDescription>
      </Alert>
    );

    const alert = screen.getByTestId('alert');
    const description = screen.getByTestId('alert-description');

    await expect.element(alert).toBeVisible();
    await expect.element(description).toHaveTextContent('Alert with no title');
  });
});
