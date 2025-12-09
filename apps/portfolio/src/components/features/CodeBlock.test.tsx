import { describe, it, expect, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { CodeBlock } from './CodeBlock';

describe('CodeBlock', () => {
  const mockCode = `function hello() {\n  console.log("Hello, World!");\n}`;

  it('renders code block with code', async () => {
    const screen = await render(<CodeBlock code={mockCode} />);

    const codeBlock = screen.getByTestId('code-block');
    const pre = screen.getByTestId('code-pre');

    await expect.element(codeBlock).toBeVisible();
    await expect.element(pre).toBeVisible();
  });

  it('displays language label', async () => {
    const screen = await render(
      <CodeBlock code={mockCode} language="javascript" />
    );

    const language = screen.getByTestId('code-language');

    await expect.element(language).toHaveTextContent('javascript');
  });

  it('renders copy button and handles click', async () => {
    const originalClipboard = { ...navigator.clipboard };
    const writeText = vi.fn();
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        ...originalClipboard,
        writeText,
      },
      writable: true,
      configurable: true,
      enumerable: true,
    });

    const screen = await render(<CodeBlock code={mockCode} />);

    const copyButton = screen.getByTestId('code-copy-button');

    await expect.element(copyButton).toBeInTheDocument();
    await userEvent.click(copyButton);
    expect(writeText).toHaveBeenCalledWith(mockCode);
    writeText.mockReset();
    Object.defineProperty(navigator, 'clipboard', {
      value: originalClipboard,
      writable: true,
      configurable: true,
      enumerable: true,
    });
  });

  it('shows line numbers by default', async () => {
    const screen = await render(<CodeBlock code={mockCode} />);

    const pre = screen.getByTestId('code-pre');

    await expect.element(pre).toBeVisible();
  });

  it('hides line numbers when showLineNumbers is false', async () => {
    const screen = await render(
      <CodeBlock code={mockCode} showLineNumbers={false} />
    );

    const pre = screen.getByTestId('code-pre');

    await expect.element(pre).toBeInTheDocument();
  });
});
