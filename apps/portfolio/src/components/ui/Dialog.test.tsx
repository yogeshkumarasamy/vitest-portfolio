import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './Dialog';

function DialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <button>Open Dialog</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>This is a dialog description.</DialogDescription>
        </DialogHeader>
        <p>Dialog content goes here.</p>
      </DialogContent>
    </Dialog>
  );
}

describe('Dialog', () => {
  it('renders closed by default', async () => {
    const screen = await render(<DialogExample />);

    const trigger = screen.getByTestId('dialog-trigger');

    await expect.element(trigger).toBeVisible();
    await expect.element(trigger).toHaveTextContent('Open Dialog');
  });

  it('opens dialog when trigger is clicked', async () => {
    const screen = await render(<DialogExample />);

    const trigger = screen.getByTestId('dialog-trigger');

    await userEvent.click(trigger);

    const overlay = screen.getByTestId('dialog-overlay');
    const content = screen.getByTestId('dialog-content');
    const title = screen.getByTestId('dialog-title');
    const description = screen.getByTestId('dialog-description');

    await expect.element(overlay).toBeVisible();
    await expect.element(content).toBeVisible();
    await expect.element(title).toHaveTextContent('Dialog Title');
    await expect
      .element(description)
      .toHaveTextContent('This is a dialog description.');
  });

  it('renders dialog with all sections', async () => {
    const screen = await render(<DialogExample />);

    const trigger = screen.getByTestId('dialog-trigger');
    await userEvent.click(trigger);

    const header = screen.getByTestId('dialog-header');
    const title = screen.getByTestId('dialog-title');
    const description = screen.getByTestId('dialog-description');
    const content = screen.getByTestId('dialog-content');

    await expect.element(header).toBeVisible();
    await expect.element(title).toBeVisible();
    await expect.element(description).toBeVisible();
    await expect
      .element(content)
      .toHaveTextContent('Dialog content goes here.');
  });
});
