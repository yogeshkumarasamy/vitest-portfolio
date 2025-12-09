import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { Container } from './Container';

describe('Container', () => {
  it('renders with default xl size', async () => {
    const screen = await render(
      <Container>
        <p>Content inside container</p>
      </Container>
    );

    const container = screen.getByTestId('container');

    await expect.element(container).toBeVisible();
    await expect.element(container).toHaveClass('max-w-7xl');
    await expect
      .element(container)
      .toHaveTextContent('Content inside container');
  });

  it('renders with small size', async () => {
    const screen = await render(
      <Container size="sm">
        <p>Small container</p>
      </Container>
    );

    const container = screen.getByTestId('container');

    await expect.element(container).toHaveClass('max-w-2xl');
  });

  it('renders with medium size', async () => {
    const screen = await render(
      <Container size="md">
        <p>Medium container</p>
      </Container>
    );

    const container = screen.getByTestId('container');

    await expect.element(container).toHaveClass('max-w-4xl');
  });

  it('renders with large size', async () => {
    const screen = await render(
      <Container size="lg">
        <p>Large container</p>
      </Container>
    );

    const container = screen.getByTestId('container');

    await expect.element(container).toHaveClass('max-w-6xl');
  });

  it('renders with full size', async () => {
    const screen = await render(
      <Container size="full">
        <p>Full width container</p>
      </Container>
    );

    const container = screen.getByTestId('container');

    await expect.element(container).toHaveClass('max-w-full');
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <Container className="custom-container">
        <p>Custom styled</p>
      </Container>
    );

    const container = screen.getByTestId('container');

    await expect.element(container).toHaveClass('custom-container');
  });

  it('renders with custom element type', async () => {
    const screen = await render(
      <Container as="section">
        <p>Section container</p>
      </Container>
    );

    const container = screen.getByTestId('container');

    await expect.element(container).toBeVisible();
  });
});
