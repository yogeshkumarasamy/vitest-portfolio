import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { Timeline } from './Timeline';

describe('Timeline', () => {
  const mockEvents = [
    {
      year: '2023',
      title: 'Senior Developer',
      description: 'Promoted to senior developer role',
      type: 'work' as const,
    },
    {
      year: '2021',
      title: 'Bachelor of Computer Science',
      description: 'Graduated from University',
      type: 'education' as const,
    },
    {
      year: '2019',
      title: 'First Project',
      description: 'Started first personal project',
      type: 'achievement' as const,
    },
  ];

  it('renders timeline with all events', async () => {
    const screen = await render(<Timeline events={mockEvents} />);

    const timeline = screen.getByTestId('timeline');
    const event1 = screen.getByText('Senior Developer', { exact: true });
    const event2 = screen.getByText('Bachelor of Computer Science');
    const event3 = screen.getByText('First Project', { exact: true });

    await expect.element(timeline).toBeInTheDocument();
    await expect.element(event1).toBeInTheDocument();
    await expect.element(event2).toBeInTheDocument();
    await expect.element(event3).toBeInTheDocument();
  });

  it('renders year for each event', async () => {
    const screen = await render(<Timeline events={mockEvents} />);

    const year2023 = screen.getByText('2023');
    const year2021 = screen.getByText('2021');
    const year2019 = screen.getByText('2019');

    await expect.element(year2023).toBeInTheDocument();
    await expect.element(year2021).toBeInTheDocument();
    await expect.element(year2019).toBeInTheDocument();
  });

  it('renders type badges for events', async () => {
    const screen = await render(<Timeline events={mockEvents} />);

    const workBadge = screen.getByText('work');
    const educationBadge = screen.getByText('education');
    const achievementBadge = screen.getByText('achievement');

    await expect.element(workBadge).toBeInTheDocument();
    await expect.element(educationBadge).toBeInTheDocument();
    await expect.element(achievementBadge).toBeInTheDocument();
  });

  it('renders event descriptions', async () => {
    const screen = await render(<Timeline events={mockEvents} />);

    const desc1 = screen.getByText('Promoted to senior developer role');
    const desc2 = screen.getByText('Graduated from University');
    const desc3 = screen.getByText('Started first personal project');

    await expect.element(desc1).toBeInTheDocument();
    await expect.element(desc2).toBeInTheDocument();
    await expect.element(desc3).toBeInTheDocument();
  });

  it('renders events without type', async () => {
    const eventsWithoutType = [
      {
        year: '2020',
        title: 'Generic Event',
        description: 'Something happened',
      },
    ];

    const screen = await render(<Timeline events={eventsWithoutType} />);

    const title = screen.getByText('Generic Event');

    await expect.element(title).toBeInTheDocument();
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <Timeline events={mockEvents} className="custom-timeline" />
    );

    const timeline = screen.getByTestId('timeline');

    await expect.element(timeline).toHaveClass('custom-timeline');
  });

  it('renders single event', async () => {
    const singleEvent = [
      {
        year: '2024',
        title: 'New Role',
        description: 'Started new position',
        type: 'work' as const,
      },
    ];

    const screen = await render(<Timeline events={singleEvent} />);

    const timeline = screen.getByTestId('timeline');
    const title = screen.getByText('New Role');

    await expect.element(timeline).toBeInTheDocument();
    await expect.element(title).toBeInTheDocument();
  });

  it('renders empty timeline', async () => {
    const screen = await render(<Timeline events={[]} />);

    const timeline = screen.getByTestId('timeline');

    await expect.element(timeline).toBeInTheDocument();
  });
});
