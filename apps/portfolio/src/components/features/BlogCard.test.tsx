import { describe, it, expect, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { BlogCard } from './BlogCard';

describe('BlogCard', () => {
  const mockBlogData = {
    title: 'Understanding React Server Components',
    excerpt: 'A deep dive into React Server Components and how they change the way we build web applications.',
    date: 'Dec 5, 2024',
    author: 'John Doe',
    readTime: '5 min read',
    tags: ['React', 'Next.js', 'Web Development'],
  };

  it('renders blog card with all information', async () => {
    const screen = await render(<BlogCard {...mockBlogData} />);

    const card = screen.getByTestId('blog-card');
    const title = screen.getByText(mockBlogData.title);
    const excerpt = screen.getByText(mockBlogData.excerpt);
    const date = screen.getByTestId('blog-date');

    await expect.element(card).toBeInTheDocument();
    await expect.element(title).toHaveTextContent(mockBlogData.title);
    await expect.element(excerpt).toHaveTextContent(mockBlogData.excerpt);
    await expect.element(date).toHaveTextContent(mockBlogData.date);
  });

  it('renders author and read time when provided', async () => {
    const screen = await render(<BlogCard {...mockBlogData} />);

    const author = screen.getByTestId('blog-author');
    const readTime = screen.getByTestId('blog-read-time');

    await expect.element(author).toHaveTextContent(mockBlogData.author!);
    await expect.element(readTime).toHaveTextContent(mockBlogData.readTime!);
  });

  it('renders without author and read time', async () => {
    const screen = await render(
      <BlogCard 
        title={mockBlogData.title}
        excerpt={mockBlogData.excerpt}
        date={mockBlogData.date}
      />
    );

    const card = screen.getByTestId('blog-card');
    const metadata = screen.getByTestId('blog-metadata');

    await expect.element(card).toBeInTheDocument();
    await expect.element(metadata).toBeInTheDocument();
  });

  it('renders tags when provided', async () => {
    const screen = await render(<BlogCard {...mockBlogData} />);

    const tags = screen.getByTestId('blog-tags');
    const reactTag = screen.getByText('#React');
    const nextTag = screen.getByText('#Next.js');

    await expect.element(tags).toBeInTheDocument();
    await expect.element(reactTag).toBeInTheDocument();
    await expect.element(nextTag).toBeInTheDocument();
  });

  it('calls onClick when card is clicked', async () => {
    const handleClick = vi.fn();
    const screen = await render(<BlogCard {...mockBlogData} onClick={handleClick} />);

    const card = screen.getByTestId('blog-card');

    await userEvent.click(card);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('supports hover interaction', async () => {
    const screen = await render(<BlogCard {...mockBlogData} />);

    const card = screen.getByTestId('blog-card');

    await userEvent.hover(card);
    await expect.element(card).toBeInTheDocument();
  });

  it('renders with custom className', async () => {
    const screen = await render(<BlogCard {...mockBlogData} className="custom-blog" />);

    const card = screen.getByTestId('blog-card');

    await expect.element(card).toHaveClass('custom-blog');
  });

  it('renders without tags', async () => {
    const screen = await render(
      <BlogCard 
        title={mockBlogData.title}
        excerpt={mockBlogData.excerpt}
        date={mockBlogData.date}
        tags={[]}
      />
    );

    const card = screen.getByTestId('blog-card');

    await expect.element(card).toBeInTheDocument();
  });
});
