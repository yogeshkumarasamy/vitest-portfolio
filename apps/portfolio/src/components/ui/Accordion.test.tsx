import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

describe('Accordion', () => {
  it('renders accordion with multiple items', async () => {
    const screen = await render(
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionTrigger>First Item</AccordionTrigger>
          <AccordionContent>First item content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second Item</AccordionTrigger>
          <AccordionContent>Second item content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const accordion = screen.getByTestId('accordion');

    await expect.element(accordion).toBeVisible();
  });

  it('expands item when trigger is clicked', async () => {
    const screen = await render(
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionTrigger>Click to expand</AccordionTrigger>
          <AccordionContent>Hidden content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByTestId('accordion-trigger');

    await userEvent.click(trigger);

    const content = screen.getByTestId('accordion-content');
    await expect.element(content).toBeVisible();
    await expect.element(content).toHaveTextContent('Hidden content');
  });

  it('collapses item when trigger is clicked again', async () => {
    const screen = await render(
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionTrigger>Toggle me</AccordionTrigger>
          <AccordionContent>Collapsible content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByTestId('accordion-trigger');

    await userEvent.click(trigger);
    const content = screen.getByTestId('accordion-content');
    await expect.element(content).toBeVisible();

    await userEvent.click(trigger);
    await expect.element(content).not.toBeInTheDocument();
  });

  it('closes previous item when opening new one in single mode', async () => {
    const screen = await render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>First</AccordionTrigger>
          <AccordionContent>First content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second</AccordionTrigger>
          <AccordionContent>Second content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const firstTrigger = screen.getByText('First');
    const secondTrigger = screen.getByText('Second');

    await userEvent.click(firstTrigger);
    const firstContent = screen.getByText('First content');
    await expect.element(firstContent).toBeVisible();

    await userEvent.click(secondTrigger);
    const secondContent = screen.getByText('Second content');
    await expect.element(secondContent).toBeVisible();
    await expect.element(firstContent).not.toBeInTheDocument();
  });

  it('allows multiple items open in multiple mode', async () => {
    const screen = await render(
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>First</AccordionTrigger>
          <AccordionContent>First content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second</AccordionTrigger>
          <AccordionContent>Second content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const firstTrigger = screen.getByText('First');
    const secondTrigger = screen.getByText('Second');

    await userEvent.click(firstTrigger);
    await userEvent.click(secondTrigger);

    const firstContent = screen.getByText('First content');
    const secondContent = screen.getByText('Second content');

    await expect.element(firstContent).toBeVisible();
    await expect.element(secondContent).toBeVisible();
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <Accordion className="custom-accordion">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const accordion = screen.getByTestId('accordion');

    await expect.element(accordion).toHaveClass('custom-accordion');
  });
});
