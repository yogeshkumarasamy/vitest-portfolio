import { describe, it, expect, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { EmptyState } from './EmptyState';

describe('EmptyState', () => {
  it('renders empty state with title', async () => {
    const screen = await render(<EmptyState title="No results found" />);

    const emptyState = screen.getByTestId('empty-state');
    const title = screen.getByText('No results found');

    await expect.element(emptyState).toBeInTheDocument();
    await expect.element(title).toBeInTheDocument();
  });

  it('renders description when provided', async () => {
    const screen = await render(
      <EmptyState 
        title="No items" 
        description="Try adjusting your search or filters"
      />
    );

    const description = screen.getByText('Try adjusting your search or filters');

    await expect.element(description).toBeInTheDocument();
  });

  it('renders icon when provided', async () => {
    const screen = await render(
      <EmptyState 
        title="Empty" 
        icon={<svg data-testid="custom-icon" />}
      />
    );

    const icon = screen.getByTestId('empty-state-icon');
    const customIcon = screen.getByTestId('custom-icon');

    await expect.element(icon).toBeInTheDocument();
    await expect.element(customIcon).toBeInTheDocument();
  });

  it('renders action button and handles click', async () => {
    const handleAction = vi.fn();
    const screen = await render(
      <EmptyState 
        title="No data" 
        actionLabel="Add Item"
        onAction={handleAction}
      />
    );

    const actionButton = screen.getByTestId('empty-state-action');

    await expect.element(actionButton).toHaveTextContent('Add Item');
    await userEvent.click(actionButton);
    expect(handleAction).toHaveBeenCalledTimes(1);
  });

  it('does not render action button when no action provided', async () => {
    const screen = await render(<EmptyState title="Empty" />);

    const emptyState = screen.getByTestId('empty-state');

    await expect.element(emptyState).toBeInTheDocument();
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <EmptyState title="Empty" className="custom-empty" />
    );

    const emptyState = screen.getByTestId('empty-state');

    await expect.element(emptyState).toHaveClass('custom-empty');
  });

  it('supports hover on action button', async () => {
    const handleAction = vi.fn();
    const screen = await render(
      <EmptyState 
        title="Empty" 
        actionLabel="Action"
        onAction={handleAction}
      />
    );

    const actionButton = screen.getByTestId('empty-state-action');

    await userEvent.hover(actionButton);
    await expect.element(actionButton).toBeInTheDocument();
  });
});
