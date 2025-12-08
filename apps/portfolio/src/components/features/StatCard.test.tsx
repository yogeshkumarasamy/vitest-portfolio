import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { StatCard } from './StatCard';

describe('StatCard', () => {
  it('renders stat card with title and value', async () => {
    const screen = await render(<StatCard title="Total Users" value="1,234" />);

    const card = screen.getByTestId('stat-card');
    const title = screen.getByTestId('stat-title');
    const value = screen.getByTestId('stat-value');

    await expect.element(card).toBeInTheDocument();
    await expect.element(title).toHaveTextContent('Total Users');
    await expect.element(value).toHaveTextContent('1,234');
  });

  it('renders numeric value', async () => {
    const screen = await render(<StatCard title="Revenue" value={5000} />);

    const value = screen.getByTestId('stat-value');

    await expect.element(value).toHaveTextContent('5000');
  });

  it('renders description when provided', async () => {
    const screen = await render(
      <StatCard title="Sales" value="500" description="This month" />
    );

    const description = screen.getByTestId('stat-description');

    await expect.element(description).toHaveTextContent('This month');
  });

  it('does not render description when not provided', async () => {
    const screen = await render(<StatCard title="Metric" value="100" />);

    const card = screen.getByTestId('stat-card');

    await expect.element(card).toBeInTheDocument();
  });

  it('renders upward trend', async () => {
    const screen = await render(
      <StatCard title="Growth" value="150" trend="up" trendValue="12%" />
    );

    const trend = screen.getByTestId('stat-trend');

    await expect.element(trend).toHaveTextContent('↑ 12%');
  });

  it('renders downward trend', async () => {
    const screen = await render(
      <StatCard title="Decline" value="80" trend="down" trendValue="5%" />
    );

    const trend = screen.getByTestId('stat-trend');

    await expect.element(trend).toHaveTextContent('↓ 5%');
  });

  it('renders neutral trend', async () => {
    const screen = await render(
      <StatCard title="Stable" value="100" trend="neutral" trendValue="0%" />
    );

    const trend = screen.getByTestId('stat-trend');

    await expect.element(trend).toHaveTextContent('→ 0%');
  });

  it('does not render trend when not provided', async () => {
    const screen = await render(<StatCard title="Metric" value="50" />);

    const card = screen.getByTestId('stat-card');

    await expect.element(card).toBeInTheDocument();
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <StatCard title="Custom" value="999" className="custom-stat" />
    );

    const card = screen.getByTestId('stat-card');

    await expect.element(card).toHaveClass('custom-stat');
  });

  it('renders both description and trend', async () => {
    const screen = await render(
      <StatCard 
        title="Revenue" 
        value="$10,000" 
        description="Last 30 days"
        trend="up"
        trendValue="15%"
      />
    );

    const trend = screen.getByTestId('stat-trend');
    const description = screen.getByTestId('stat-description');

    await expect.element(trend).toHaveTextContent('↑ 15%');
    await expect.element(description).toHaveTextContent('Last 30 days');
  });
});
