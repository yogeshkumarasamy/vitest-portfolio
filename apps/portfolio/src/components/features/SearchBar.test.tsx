import { describe, it, expect, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renders search bar with input', async () => {
    const screen = await render(<SearchBar />);

    const searchBar = screen.getByTestId('search-bar');
    const input = screen.getByTestId('search-input');
    const icon = screen.getByTestId('search-icon');

    await expect.element(searchBar).toBeInTheDocument();
    await expect.element(input).toBeInTheDocument();
    await expect.element(icon).toBeInTheDocument();
  });

  it('renders with default placeholder', async () => {
    const screen = await render(<SearchBar />);

    const input = screen.getByTestId('search-input');

    await expect.element(input).toHaveAttribute('placeholder', 'Search...');
  });

  it('renders with custom placeholder', async () => {
    const screen = await render(<SearchBar placeholder="Search projects..." />);

    const input = screen.getByTestId('search-input');

    await expect.element(input).toHaveAttribute('placeholder', 'Search projects...');
  });

  it('updates input value when typing', async () => {
    const screen = await render(<SearchBar />);

    const input = screen.getByTestId('search-input');

    await userEvent.click(input);
    await userEvent.type(input, 'test query');
    await expect.element(input).toHaveValue('test query');
  });

  it('calls onSearch when form is submitted', async () => {
    const handleSearch = vi.fn();
    const screen = await render(<SearchBar onSearch={handleSearch} />);

    const input = screen.getByTestId('search-input');

    await userEvent.click(input);
    await userEvent.type(input, 'test');
    
    // Submit form by pressing Enter
    await userEvent.keyboard('{Enter}');
    
    expect(handleSearch).toHaveBeenCalledWith('test');
  });

  it('renders with custom className', async () => {
    const screen = await render(<SearchBar className="custom-search" />);

    const searchBar = screen.getByTestId('search-bar');

    await expect.element(searchBar).toHaveClass('custom-search');
  });

  it('clears input value', async () => {
    const screen = await render(<SearchBar />);

    const input = screen.getByTestId('search-input');

    await userEvent.click(input);
    await userEvent.type(input, 'test');
    await expect.element(input).toHaveValue('test');
    
    await userEvent.clear(input);
    await expect.element(input).toHaveValue('');
  });
});
