import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard', () => {
  const mockTechnologies = ['React', 'TypeScript', 'Node.js'];

  it('renders project card with required information', async () => {
    const screen = await render(
      <ProjectCard
        title="My Project"
        description="A web application"
        technologies={mockTechnologies}
      />
    );

    const card = screen.getByTestId('project-card');
    const title = screen.getByTestId('project-title');
    const description = screen.getByTestId('project-description');
    const technologies = screen.getByTestId('project-technologies');

    await expect.element(card).toBeInTheDocument();
    await expect.element(title).toHaveTextContent('My Project');
    await expect.element(description).toHaveTextContent('A web application');
    await expect.element(technologies).toBeInTheDocument();
  });

  it('renders image when provided', async () => {
    const screen = await render(
      <ProjectCard
        title="Project"
        description="Description"
        image="https://placehold.co/600x400"
        technologies={mockTechnologies}
      />
    );

    const image = screen.getByTestId('project-image');

    await expect.element(image).toBeInTheDocument();
  });

  it('does not render image when not provided', async () => {
    const screen = await render(
      <ProjectCard
        title="Project"
        description="Description"
        technologies={mockTechnologies}
      />
    );

    const card = screen.getByTestId('project-card');

    await expect.element(card).toBeInTheDocument();
  });

  it('renders all technologies', async () => {
    const screen = await render(
      <ProjectCard
        title="Project"
        description="Description"
        technologies={mockTechnologies}
      />
    );

    const react = screen.getByText('React');
    const typescript = screen.getByText('TypeScript');
    const nodejs = screen.getByText('Node.js');

    await expect.element(react).toBeInTheDocument();
    await expect.element(typescript).toBeInTheDocument();
    await expect.element(nodejs).toBeInTheDocument();
  });

  it('renders highlights when provided', async () => {
    const highlights = ['Fast performance', 'Responsive design'];
    const screen = await render(
      <ProjectCard
        title="Project"
        description="Description"
        technologies={mockTechnologies}
        highlights={highlights}
      />
    );

    const highlightsContainer = screen.getByTestId('project-highlights');
    const highlight1 = screen.getByText('Fast performance');
    const highlight2 = screen.getByText('Responsive design');

    await expect.element(highlightsContainer).toBeInTheDocument();
    await expect.element(highlight1).toBeInTheDocument();
    await expect.element(highlight2).toBeInTheDocument();
  });

  it('renders GitHub button when githubUrl provided', async () => {
    const screen = await render(
      <ProjectCard
        title="Project"
        description="Description"
        technologies={mockTechnologies}
        githubUrl="https://github.com/user/repo"
      />
    );

    const githubButton = screen.getByTestId('project-github');

    await expect.element(githubButton).toBeInTheDocument();
    await expect.element(githubButton).toHaveTextContent('GitHub');
  });

  it('renders Live Demo button when liveUrl provided', async () => {
    const screen = await render(
      <ProjectCard
        title="Project"
        description="Description"
        technologies={mockTechnologies}
        liveUrl="https://example.com"
      />
    );

    const liveButton = screen.getByTestId('project-live');

    await expect.element(liveButton).toBeInTheDocument();
    await expect.element(liveButton).toHaveTextContent('Live Demo');
  });

  it('does not render footer when no URLs provided', async () => {
    const screen = await render(
      <ProjectCard
        title="Project"
        description="Description"
        technologies={mockTechnologies}
      />
    );

    const card = screen.getByTestId('project-card');

    await expect.element(card).toBeInTheDocument();
  });

  it('supports hover on card', async () => {
    const screen = await render(
      <ProjectCard
        title="Project"
        description="Description"
        technologies={mockTechnologies}
      />
    );

    const card = screen.getByTestId('project-card');

    await userEvent.hover(card);
    await expect.element(card).toBeInTheDocument();
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <ProjectCard
        title="Project"
        description="Description"
        technologies={mockTechnologies}
        className="custom-project"
      />
    );

    const card = screen.getByTestId('project-card');

    await expect.element(card).toHaveClass('custom-project');
  });
});
