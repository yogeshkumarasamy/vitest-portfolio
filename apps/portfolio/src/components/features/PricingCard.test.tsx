import { describe, it, expect, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { PricingCard } from './PricingCard';

describe('PricingCard', () => {
  const mockFeatures = [
    'Feature 1',
    'Feature 2',
    'Feature 3',
  ];

  it('renders pricing card with all information', async () => {
    const screen = await render(
      <PricingCard
        title="Pro Plan"
        description="Perfect for professionals"
        price="$29"
        features={mockFeatures}
      />
    );

    const card = screen.getByTestId('pricing-card');
    const title = screen.getByTestId('pricing-title');
    const description = screen.getByTestId('pricing-description');
    const price = screen.getByTestId('pricing-price');
    const period = screen.getByTestId('pricing-period');
    const featuresContainer = screen.getByTestId('pricing-features');

    await expect.element(card).toBeInTheDocument();
    await expect.element(title).toHaveTextContent('Pro Plan');
    await expect.element(description).toHaveTextContent('Perfect for professionals');
    await expect.element(price).toHaveTextContent('$29');
    await expect.element(period).toHaveTextContent('/month');
    await expect.element(featuresContainer).toBeInTheDocument();
  });

  it('renders all features', async () => {
    const screen = await render(
      <PricingCard
        title="Plan"
        description="Description"
        price="$10"
        features={mockFeatures}
      />
    );

    const feature1 = screen.getByText('Feature 1');
    const feature2 = screen.getByText('Feature 2');
    const feature3 = screen.getByText('Feature 3');

    await expect.element(feature1).toBeInTheDocument();
    await expect.element(feature2).toBeInTheDocument();
    await expect.element(feature3).toBeInTheDocument();
  });

  it('renders highlighted card with badge', async () => {
    const screen = await render(
      <PricingCard
        title="Premium"
        description="Best value"
        price="$49"
        features={mockFeatures}
        highlighted={true}
      />
    );

    const badge = screen.getByTestId('pricing-badge');

    await expect.element(badge).toHaveTextContent('Popular');
  });

  it('does not render badge when not highlighted', async () => {
    const screen = await render(
      <PricingCard
        title="Basic"
        description="Starter plan"
        price="$9"
        features={mockFeatures}
      />
    );

    const card = screen.getByTestId('pricing-card');

    await expect.element(card).toBeInTheDocument();
  });

  it('renders custom period', async () => {
    const screen = await render(
      <PricingCard
        title="Annual"
        description="Save 20%"
        price="$290"
        period="year"
        features={mockFeatures}
      />
    );

    const period = screen.getByTestId('pricing-period');

    await expect.element(period).toHaveTextContent('/year');
  });

  it('renders button and handles click', async () => {
    const handleClick = vi.fn();
    const screen = await render(
      <PricingCard
        title="Plan"
        description="Description"
        price="$10"
        features={mockFeatures}
        onButtonClick={handleClick}
      />
    );

    const button = screen.getByTestId('pricing-button');

    await expect.element(button).toHaveTextContent('Get Started');
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders custom button text', async () => {
    const screen = await render(
      <PricingCard
        title="Plan"
        description="Description"
        price="$10"
        features={mockFeatures}
        buttonText="Subscribe Now"
      />
    );

    const button = screen.getByTestId('pricing-button');

    await expect.element(button).toHaveTextContent('Subscribe Now');
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <PricingCard
        title="Plan"
        description="Description"
        price="$10"
        features={mockFeatures}
        className="custom-pricing"
      />
    );

    const card = screen.getByTestId('pricing-card');

    await expect.element(card).toHaveClass('custom-pricing');
  });

  it('supports hover on button', async () => {
    const screen = await render(
      <PricingCard
        title="Plan"
        description="Description"
        price="$10"
        features={mockFeatures}
      />
    );

    const button = screen.getByTestId('pricing-button');

    await userEvent.hover(button);
    await expect.element(button).toBeInTheDocument();
  });
});
