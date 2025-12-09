import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './Card';

describe('Card', () => {
  it('renders complete card with all sections', async () => {
    const screen = await render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description text</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Main content goes here</p>
        </CardContent>
        <CardFooter>
          <button>Action</button>
        </CardFooter>
      </Card>
    );

    const card = screen.getByTestId('card');
    const header = screen.getByTestId('card-header');
    const title = screen.getByTestId('card-title');
    const description = screen.getByTestId('card-description');
    const content = screen.getByTestId('card-content');
    const footer = screen.getByTestId('card-footer');

    await expect.element(card).toBeVisible();
    await expect.element(header).toBeVisible();
    await expect.element(title).toHaveTextContent('Card Title');
    await expect
      .element(description)
      .toHaveTextContent('Card description text');
    await expect.element(content).toBeVisible();
    await expect.element(footer).toBeVisible();
  });

  it('renders card with custom className', async () => {
    const screen = await render(
      <Card className="custom-card">
        <CardContent>Content</CardContent>
      </Card>
    );

    const card = screen.getByTestId('card');

    await expect.element(card).toHaveClass('custom-card');
  });

  it('renders card with custom element types', async () => {
    const screen = await render(
      <Card as="article">
        <CardHeader as="header">
          <CardTitle as="h2">Custom Title</CardTitle>
        </CardHeader>
      </Card>
    );

    const card = screen.getByTestId('card');
    const header = screen.getByTestId('card-header');
    const title = screen.getByTestId('card-title');

    await expect.element(card).toBeVisible();
    await expect.element(header).toBeVisible();
    await expect.element(title).toHaveTextContent('Custom Title');
  });

  it('renders minimal card with only content', async () => {
    const screen = await render(
      <Card>
        <CardContent>Simple content</CardContent>
      </Card>
    );

    const card = screen.getByTestId('card');
    const content = screen.getByTestId('card-content');

    await expect.element(card).toBeVisible();
    await expect.element(content).toHaveTextContent('Simple content');
  });

  it('renders card with image in content', async () => {
    const screen = await render(
      <Card>
        <CardContent>
          <img src="https://placehold.co/400x200" alt="Card image" />
        </CardContent>
      </Card>
    );

    const content = screen.getByTestId('card-content');
    const image = screen.getByRole('img');

    await expect.element(content).toBeVisible();
    await expect
      .element(image)
      .toHaveAttribute('src', 'https://placehold.co/400x200');
    await expect.element(image).toHaveAttribute('alt', 'Card image');
  });
});
