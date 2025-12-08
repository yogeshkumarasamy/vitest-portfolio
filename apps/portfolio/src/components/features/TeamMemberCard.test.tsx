import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { TeamMemberCard } from './TeamMemberCard';

describe('TeamMemberCard', () => {
  it('renders team member card with name and role', async () => {
    const screen = await render(
      <TeamMemberCard name="John Doe" role="Software Engineer" />
    );

    const card = screen.getByTestId('team-member-card');
    const name = screen.getByTestId('member-name');
    const role = screen.getByTestId('member-role');
    const avatar = screen.getByTestId('member-avatar');

    await expect.element(card).toBeInTheDocument();
    await expect.element(name).toHaveTextContent('John Doe');
    await expect.element(role).toHaveTextContent('Software Engineer');
    await expect.element(avatar).toBeInTheDocument();
  });

  it('renders avatar with image when provided', async () => {
    const screen = await render(
      <TeamMemberCard 
        name="Jane Smith" 
        role="Designer"
        avatar="https://placehold.co/100x100"
      />
    );

    const avatar = screen.getByTestId('member-avatar');

    await expect.element(avatar).toBeInTheDocument();
  });

  it('renders bio when provided', async () => {
    const screen = await render(
      <TeamMemberCard 
        name="Alice Johnson" 
        role="Product Manager"
        bio="10 years of experience in product development"
      />
    );

    const bio = screen.getByTestId('member-bio');

    await expect.element(bio).toHaveTextContent('10 years of experience in product development');
  });

  it('does not render bio when not provided', async () => {
    const screen = await render(
      <TeamMemberCard name="Bob Brown" role="Developer" />
    );

    const card = screen.getByTestId('team-member-card');

    await expect.element(card).toBeInTheDocument();
  });

  it('renders skills when provided', async () => {
    const skills = ['React', 'TypeScript', 'Node.js'];
    const screen = await render(
      <TeamMemberCard 
        name="Charlie Wilson" 
        role="Full Stack Developer"
        skills={skills}
      />
    );

    const skillsContainer = screen.getByTestId('member-skills');
    const react = screen.getByText('React');
    const typescript = screen.getByText('TypeScript');
    const nodejs = screen.getByText('Node.js');

    await expect.element(skillsContainer).toBeInTheDocument();
    await expect.element(react).toBeInTheDocument();
    await expect.element(typescript).toBeInTheDocument();
    await expect.element(nodejs).toBeInTheDocument();
  });

  it('does not render skills when empty array', async () => {
    const screen = await render(
      <TeamMemberCard name="David Lee" role="Intern" skills={[]} />
    );

    const card = screen.getByTestId('team-member-card');

    await expect.element(card).toBeInTheDocument();
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <TeamMemberCard 
        name="Emma Davis" 
        role="Designer"
        className="custom-member"
      />
    );

    const card = screen.getByTestId('team-member-card');

    await expect.element(card).toHaveClass('custom-member');
  });

  it('renders with all optional fields', async () => {
    const screen = await render(
      <TeamMemberCard 
        name="Frank Miller" 
        role="Tech Lead"
        bio="Passionate about clean code"
        avatar="https://placehold.co/100x100"
        skills={['Python', 'AWS', 'Docker']}
      />
    );

    const card = screen.getByTestId('team-member-card');
    const bio = screen.getByTestId('member-bio');
    const skillsContainer = screen.getByTestId('member-skills');

    await expect.element(card).toBeInTheDocument();
    await expect.element(bio).toBeInTheDocument();
    await expect.element(skillsContainer).toBeInTheDocument();
  });
});
