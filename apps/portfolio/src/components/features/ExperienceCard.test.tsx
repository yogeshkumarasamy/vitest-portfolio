import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { ExperienceCard } from './ExperienceCard';

describe('ExperienceCard', () => {
  const mockExperience = {
    company: 'Tech Corp',
    position: 'Senior Developer',
    duration: '2020 - 2023',
    description: 'Led development of enterprise applications',
    technologies: ['React', 'TypeScript', 'Node.js'],
  };

  it('renders experience card with all required information', async () => {
    const screen = await render(<ExperienceCard {...mockExperience} />);

    const card = screen.getByTestId('experience-card');
    const position = screen.getByTestId('experience-position');
    const company = screen.getByTestId('experience-company');
    const duration = screen.getByTestId('experience-duration');
    const description = screen.getByTestId('experience-description');

    await expect.element(card).toBeInTheDocument();
    await expect.element(position).toHaveTextContent('Senior Developer');
    await expect.element(company).toHaveTextContent('Tech Corp');
    await expect.element(duration).toHaveTextContent('2020 - 2023');
    await expect.element(description).toHaveTextContent('Led development of enterprise applications');
  });

  it('renders technologies badges', async () => {
    const screen = await render(<ExperienceCard {...mockExperience} />);

    const technologies = screen.getByTestId('experience-technologies');
    const react = screen.getByText('React');
    const typescript = screen.getByText('TypeScript');
    const nodejs = screen.getByText('Node.js');

    await expect.element(technologies).toBeInTheDocument();
    await expect.element(react).toBeInTheDocument();
    await expect.element(typescript).toBeInTheDocument();
    await expect.element(nodejs).toBeInTheDocument();
  });

  it('renders achievements when provided', async () => {
    const achievements = [
      'Improved performance by 50%',
      'Mentored 5 junior developers',
    ];
    const screen = await render(
      <ExperienceCard {...mockExperience} achievements={achievements} />
    );

    const achievementsSection = screen.getByTestId('experience-achievements');
    const achievement1 = screen.getByText('Improved performance by 50%');
    const achievement2 = screen.getByText('Mentored 5 junior developers');

    await expect.element(achievementsSection).toBeInTheDocument();
    await expect.element(achievement1).toBeInTheDocument();
    await expect.element(achievement2).toBeInTheDocument();
  });

  it('does not render achievements section when not provided', async () => {
    const screen = await render(<ExperienceCard {...mockExperience} />);

    const card = screen.getByTestId('experience-card');

    await expect.element(card).toBeInTheDocument();
  });

  it('supports hover on card', async () => {
    const screen = await render(<ExperienceCard {...mockExperience} />);

    const card = screen.getByTestId('experience-card');

    await userEvent.hover(card);
    await expect.element(card).toBeInTheDocument();
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <ExperienceCard {...mockExperience} className="custom-experience" />
    );

    const card = screen.getByTestId('experience-card');

    await expect.element(card).toHaveClass('custom-experience');
  });
});
