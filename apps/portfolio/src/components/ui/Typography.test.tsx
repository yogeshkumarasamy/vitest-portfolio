import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { H1, H2, H3, H4, P, Lead, Large, Small, Muted, Blockquote, InlineCode, List } from './Typography';

describe('Typography', () => {
  it('renders H1 heading', async () => {
    const screen = await render(<H1>Main Heading</H1>);

    const h1 = screen.getByTestId('typography-h1');

    await expect.element(h1).toBeVisible();
    await expect.element(h1).toHaveTextContent('Main Heading');
  });

  it('renders H2 heading', async () => {
    const screen = await render(<H2>Section Heading</H2>);

    const h2 = screen.getByTestId('typography-h2');

    await expect.element(h2).toBeVisible();
    await expect.element(h2).toHaveTextContent('Section Heading');
  });

  it('renders H3 heading', async () => {
    const screen = await render(<H3>Subsection</H3>);

    const h3 = screen.getByTestId('typography-h3');

    await expect.element(h3).toBeVisible();
    await expect.element(h3).toHaveTextContent('Subsection');
  });

  it('renders H4 heading', async () => {
    const screen = await render(<H4>Minor Heading</H4>);

    const h4 = screen.getByTestId('typography-h4');

    await expect.element(h4).toBeVisible();
    await expect.element(h4).toHaveTextContent('Minor Heading');
  });

  it('renders paragraph text', async () => {
    const screen = await render(<P>This is paragraph text.</P>);

    const p = screen.getByTestId('typography-p');

    await expect.element(p).toBeVisible();
    await expect.element(p).toHaveTextContent('This is paragraph text.');
  });

  it('renders lead text', async () => {
    const screen = await render(<Lead>Lead paragraph</Lead>);

    const lead = screen.getByTestId('typography-lead');

    await expect.element(lead).toBeVisible();
    await expect.element(lead).toHaveTextContent('Lead paragraph');
  });

  it('renders large text', async () => {
    const screen = await render(<Large>Large text</Large>);

    const large = screen.getByTestId('typography-large');

    await expect.element(large).toBeVisible();
    await expect.element(large).toHaveTextContent('Large text');
  });

  it('renders small text', async () => {
    const screen = await render(<Small>Small text</Small>);

    const small = screen.getByTestId('typography-small');

    await expect.element(small).toBeVisible();
    await expect.element(small).toHaveTextContent('Small text');
  });

  it('renders muted text', async () => {
    const screen = await render(<Muted>Muted text</Muted>);

    const muted = screen.getByTestId('typography-muted');

    await expect.element(muted).toBeVisible();
    await expect.element(muted).toHaveTextContent('Muted text');
  });

  it('renders blockquote', async () => {
    const screen = await render(<Blockquote>Quote text</Blockquote>);

    const blockquote = screen.getByTestId('typography-blockquote');

    await expect.element(blockquote).toBeVisible();
    await expect.element(blockquote).toHaveTextContent('Quote text');
  });

  it('renders inline code', async () => {
    const screen = await render(<InlineCode>console.log()</InlineCode>);

    const code = screen.getByTestId('typography-inline-code');

    await expect.element(code).toBeVisible();
    await expect.element(code).toHaveTextContent('console.log()');
  });

  it('renders list', async () => {
    const screen = await render(
      <List>
        <li>Item 1</li>
        <li>Item 2</li>
      </List>
    );

    const list = screen.getByTestId('typography-list');

    await expect.element(list).toBeVisible();
  });

  it('renders with custom className', async () => {
    const screen = await render(<H1 className="custom-heading">Heading</H1>);

    const h1 = screen.getByTestId('typography-h1');

    await expect.element(h1).toHaveClass('custom-heading');
  });
});
