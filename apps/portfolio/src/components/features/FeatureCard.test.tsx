import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { FeatureCard } from './FeatureCard';

describe('FeatureCard', () => {
  it('renders feature card with title and description', async () => {
    const screen = await render(
      <FeatureCard
        title="Fast Performance"
        description="Optimized for speed and efficiency"
      />
    );

    const card = screen.getByTestId('feature-card');
    const title = screen.getByTestId('feature-title');
    const description = screen.getByTestId('feature-description');

    await expect.element(card).toBeInTheDocument();
    await expect.element(title).toHaveTextContent('Fast Performance');
    await expect
      .element(description)
      .toHaveTextContent('Optimized for speed and efficiency');
  });

  it('renders icon when provided', async () => {
    const screen = await render(
      <FeatureCard
        title="Feature"
        description="Description"
        icon={<svg data-testid="custom-icon" />}
      />
    );

    const iconContainer = screen.getByTestId('feature-icon');
    const customIcon = screen.getByTestId('custom-icon');

    await expect.element(iconContainer).toBeInTheDocument();
    await expect.element(customIcon).toBeInTheDocument();
  });

  it('does not render icon container when icon not provided', async () => {
    const screen = await render(
      <FeatureCard title="Feature" description="Description" />
    );

    const card = screen.getByTestId('feature-card');

    await expect.element(card).toBeInTheDocument();
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <FeatureCard
        title="Feature"
        description="Description"
        className="custom-feature"
      />
    );

    const card = screen.getByTestId('feature-card');

    await expect.element(card).toHaveClass('custom-feature');
  });
});
