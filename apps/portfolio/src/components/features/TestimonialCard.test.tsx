import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { TestimonialCard } from './TestimonialCard';

describe('TestimonialCard', () => {
  it('renders testimonial card with quote and author info', async () => {
    const screen = await render(
      <TestimonialCard
        quote="This is an amazing product!"
        author="John Doe"
        role="CEO"
        company="Tech Corp"
        avatar="https://placehold.co/100x100"
      />
    );

    const card = screen.getByTestId('testimonial-card');
    const quote = screen.getByTestId('testimonial-quote');
    const author = screen.getByTestId('testimonial-author');
    const role = screen.getByTestId('testimonial-role');
    const avatar = screen.getByTestId('testimonial-avatar');

    await expect.element(card).toBeInTheDocument();
    await expect.element(quote).toHaveTextContent('"This is an amazing product!"');
    await expect.element(author).toHaveTextContent('John Doe');
    await expect.element(role).toHaveTextContent('CEO at Tech Corp');
    await expect.element(avatar).toBeInTheDocument();
  });

  it('renders avatar with image when provided', async () => {
    const screen = await render(
      <TestimonialCard
        quote="Great experience!"
        author="Jane Smith"
        role="CTO"
        company="Startup Inc"
        avatar="https://placehold.co/100x100"
      />
    );

    const avatar = screen.getByTestId('testimonial-avatar');

    await expect.element(avatar).toBeInTheDocument();
  });

  it('renders avatar fallback when no image provided', async () => {
    const screen = await render(
      <TestimonialCard
        quote="Highly recommended"
        author="Bob Johnson"
        role="Developer"
        company="Code Labs"
      />
    );

    const avatar = screen.getByTestId('testimonial-avatar');

    await expect.element(avatar).toBeInTheDocument();
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <TestimonialCard
        quote="Outstanding service"
        author="Alice Brown"
        role="Designer"
        company="Creative Studio"
        className="custom-testimonial"
      />
    );

    const card = screen.getByTestId('testimonial-card');

    await expect.element(card).toHaveClass('custom-testimonial');
  });

  it('displays complete role information with company', async () => {
    const screen = await render(
      <TestimonialCard
        quote="Excellent work"
        author="Charlie Wilson"
        role="Product Manager"
        company="Innovation Labs"
      />
    );

    const role = screen.getByTestId('testimonial-role');

    await expect.element(role).toHaveTextContent('Product Manager at Innovation Labs');
  });
});
