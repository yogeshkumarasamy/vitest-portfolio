import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { ArchitectureDiagram } from './ArchitectureDiagram';

describe('ArchitectureDiagram', () => {
  const mockLayers = [
    {
      name: 'Presentation Layer',
      components: ['React', 'Next.js', 'Tailwind CSS'],
      description: 'Frontend components and UI',
    },
    {
      name: 'Application Layer',
      components: ['API Routes', 'Business Logic'],
      description: 'Core application logic',
    },
    {
      name: 'Data Layer',
      components: ['PostgreSQL', 'Redis'],
    },
  ];

  it('renders architecture diagram with title', async () => {
    const screen = await render(
      <ArchitectureDiagram title="System Architecture" layers={mockLayers} />
    );

    const diagram = screen.getByTestId('architecture-diagram');
    const title = screen.getByTestId('architecture-title');

    await expect.element(diagram).toBeInTheDocument();
    await expect.element(title).toHaveTextContent('System Architecture');
  });

  it('renders all layers with names', async () => {
    const screen = await render(
      <ArchitectureDiagram title="Architecture" layers={mockLayers} />
    );

    const presentationLayer = screen.getByText('Presentation Layer');
    const applicationLayer = screen.getByText('Application Layer');
    const dataLayer = screen.getByText('Data Layer');

    await expect.element(presentationLayer).toBeInTheDocument();
    await expect.element(applicationLayer).toBeInTheDocument();
    await expect.element(dataLayer).toBeInTheDocument();
  });

  it('renders layer descriptions when provided', async () => {
    const screen = await render(
      <ArchitectureDiagram title="Architecture" layers={mockLayers} />
    );

    const description1 = screen.getByText('Frontend components and UI');
    const description2 = screen.getByText('Core application logic');

    await expect.element(description1).toBeInTheDocument();
    await expect.element(description2).toBeInTheDocument();
  });

  it('renders all components in layers', async () => {
    const screen = await render(
      <ArchitectureDiagram title="Architecture" layers={mockLayers} />
    );

    const react = screen.getByText('React');
    const nextjs = screen.getByText('Next.js');
    const tailwind = screen.getByText('Tailwind CSS');
    const postgres = screen.getByText('PostgreSQL');

    await expect.element(react).toBeInTheDocument();
    await expect.element(nextjs).toBeInTheDocument();
    await expect.element(tailwind).toBeInTheDocument();
    await expect.element(postgres).toBeInTheDocument();
  });

  it('supports hover interaction on components', async () => {
    const screen = await render(
      <ArchitectureDiagram title="Architecture" layers={mockLayers} />
    );

    const component = screen.getByText('React');

    await userEvent.hover(component);
    await expect.element(component).toBeInTheDocument();
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <ArchitectureDiagram
        title="Architecture"
        layers={mockLayers}
        className="custom-diagram"
      />
    );

    const diagram = screen.getByTestId('architecture-diagram');

    await expect.element(diagram).toHaveClass('custom-diagram');
  });

  it('renders empty layers array', async () => {
    const screen = await render(
      <ArchitectureDiagram title="Empty Architecture" layers={[]} />
    );

    const diagram = screen.getByTestId('architecture-diagram');
    const title = screen.getByTestId('architecture-title');

    await expect.element(diagram).toBeInTheDocument();
    await expect.element(title).toHaveTextContent('Empty Architecture');
  });
});
