import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { MetricCard } from './MetricCard';

describe('MetricCard', () => {
  it('renders metric card with label and value', async () => {
    const screen = await render(
      <MetricCard label="Sales" value={75} max={100} />
    );

    const card = screen.getByTestId('metric-card');
    const label = screen.getByTestId('metric-label');
    const value = screen.getByTestId('metric-value');
    const progress = screen.getByTestId('metric-progress');

    await expect.element(card).toBeInTheDocument();
    await expect.element(label).toHaveTextContent('Sales');
    await expect.element(value).toHaveTextContent('75 (75%)');
    await expect.element(progress).toBeInTheDocument();
  });

  it('renders with unit', async () => {
    const screen = await render(
      <MetricCard label="Revenue" value={1500} max={2000} unit="$" />
    );

    const value = screen.getByTestId('metric-value');

    await expect.element(value).toHaveTextContent('1500$ (75%)');
  });

  it('hides percentage when showPercentage is false', async () => {
    const screen = await render(
      <MetricCard label="Tasks" value={10} max={20} showPercentage={false} />
    );

    const value = screen.getByTestId('metric-value');

    await expect.element(value).toHaveTextContent('10');
  });

  it('renders with different colors', async () => {
    const screen = await render(
      <MetricCard label="Status" value={80} max={100} color="green" />
    );

    const progress = screen.getByTestId('metric-progress');

    await expect.element(progress).toBeInTheDocument();
  });

  it('caps percentage at 100%', async () => {
    const screen = await render(
      <MetricCard label="Over" value={150} max={100} />
    );

    const value = screen.getByTestId('metric-value');

    await expect.element(value).toHaveTextContent('150 (100%)');
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <MetricCard label="Metric" value={50} max={100} className="custom-metric" />
    );

    const card = screen.getByTestId('metric-card');

    await expect.element(card).toHaveClass('custom-metric');
  });
});
