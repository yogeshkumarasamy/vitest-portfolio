import { describe, it, expect, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  const mockOnPageChange = vi.fn();

  it('renders pagination with current and total pages', async () => {
    const screen = await render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const pagination = screen.getByTestId('pagination');
    const previous = screen.getByTestId('pagination-previous');
    const next = screen.getByTestId('pagination-next');

    await expect.element(pagination).toBeInTheDocument();
    await expect.element(previous).toBeInTheDocument();
    await expect.element(next).toBeInTheDocument();
  });

  it('renders page buttons', async () => {
    const screen = await render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const page1 = screen.getByTestId('pagination-page-1');
    const page2 = screen.getByTestId('pagination-page-2');
    const page3 = screen.getByTestId('pagination-page-3');
    const page4 = screen.getByTestId('pagination-page-4');
    const page5 = screen.getByTestId('pagination-page-5');

    await expect.element(page1).toBeInTheDocument();
    await expect.element(page2).toBeInTheDocument();
    await expect.element(page3).toBeInTheDocument();
    await expect.element(page4).toBeInTheDocument();
    await expect.element(page5).toBeInTheDocument();
  });

  it('disables previous button on first page', async () => {
    const screen = await render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const previous = screen.getByTestId('pagination-previous');

    await expect.element(previous).toBeDisabled();
  });

  it('disables next button on last page', async () => {
    const screen = await render(
      <Pagination
        currentPage={5}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const next = screen.getByTestId('pagination-next');

    await expect.element(next).toBeDisabled();
  });

  it('calls onPageChange when clicking previous button', async () => {
    const screen = await render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const previous = screen.getByTestId('pagination-previous');

    await userEvent.click(previous);
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange when clicking next button', async () => {
    const screen = await render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const next = screen.getByTestId('pagination-next');

    await userEvent.click(next);
    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });

  it('calls onPageChange when clicking page button', async () => {
    const screen = await render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const page2 = screen.getByTestId('pagination-page-2');

    await userEvent.click(page2);
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
        className="custom-pagination"
      />
    );

    const pagination = screen.getByTestId('pagination');

    await expect.element(pagination).toHaveClass('custom-pagination');
  });
});
