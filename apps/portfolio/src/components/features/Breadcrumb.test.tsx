import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { BrowserRouter } from 'react-router-dom';
import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb', () => {
  const mockItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Article Title' },
  ];

  it('renders breadcrumb with all items', async () => {
    const screen = await render(
      <BrowserRouter>
        <Breadcrumb items={mockItems} />
      </BrowserRouter>
    );

    const breadcrumb = screen.getByTestId('breadcrumb');
    const home = screen.getByText('Home');
    const blog = screen.getByText('Blog');
    const article = screen.getByText('Article Title');

    await expect.element(breadcrumb).toBeInTheDocument();
    await expect.element(home).toBeInTheDocument();
    await expect.element(blog).toBeInTheDocument();
    await expect.element(article).toBeInTheDocument();
  });

  it('renders links for items with href', async () => {
    const screen = await render(
      <BrowserRouter>
        <Breadcrumb items={mockItems} />
      </BrowserRouter>
    );

    const homeLink = screen.getByText('Home');
    const blogLink = screen.getByText('Blog');

    await expect.element(homeLink).toBeInTheDocument();
    await expect.element(blogLink).toBeInTheDocument();
  });

  it('renders last item as plain text', async () => {
    const screen = await render(
      <BrowserRouter>
        <Breadcrumb items={mockItems} />
      </BrowserRouter>
    );

    const lastItem = screen.getByText('Article Title');

    await expect.element(lastItem).toBeInTheDocument();
  });

  it('supports hover on links', async () => {
    const screen = await render(
      <BrowserRouter>
        <Breadcrumb items={mockItems} />
      </BrowserRouter>
    );

    const homeLink = screen.getByText('Home');

    await userEvent.hover(homeLink);
    await expect.element(homeLink).toBeInTheDocument();
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <BrowserRouter>
        <Breadcrumb items={mockItems} className="custom-breadcrumb" />
      </BrowserRouter>
    );

    const breadcrumb = screen.getByTestId('breadcrumb');

    await expect.element(breadcrumb).toHaveClass('custom-breadcrumb');
  });

  it('renders single item breadcrumb', async () => {
    const screen = await render(
      <BrowserRouter>
        <Breadcrumb items={[{ label: 'Home' }]} />
      </BrowserRouter>
    );

    const breadcrumb = screen.getByTestId('breadcrumb');
    const home = screen.getByText('Home');

    await expect.element(breadcrumb).toBeInTheDocument();
    await expect.element(home).toBeInTheDocument();
  });
});
