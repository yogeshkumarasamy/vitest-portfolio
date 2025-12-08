import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

describe('Tabs', () => {
  it('renders tabs with default selected tab', async () => {
    const screen = await render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    );

    const tabs = screen.getByTestId('tabs');
    const content1 = screen.getByText('Content 1');

    await expect.element(tabs).toBeVisible();
    await expect.element(content1).toBeVisible();
  });

  it('switches tabs when trigger is clicked', async () => {
    const screen = await render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    );

    const trigger2 = screen.getByText('Tab 2');

    await userEvent.click(trigger2);

    const content2 = screen.getByText('Content 2');
    await expect.element(content2).toBeVisible();
  });

  it('hides inactive tab content', async () => {
    const screen = await render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    );

    const content1 = screen.getByText('Content 1');
    const content2Text = 'Content 2';

    await expect.element(content1).toBeVisible();

    const trigger2 = screen.getByText('Tab 2');
    await userEvent.click(trigger2);

    const content2 = screen.getByText(content2Text);
    await expect.element(content2).toBeVisible();
    await expect.element(content1).not.toBeInTheDocument();
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <Tabs className="custom-tabs" defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content</TabsContent>
      </Tabs>
    );

    const tabs = screen.getByTestId('tabs');

    await expect.element(tabs).toHaveClass('custom-tabs');
  });
});
