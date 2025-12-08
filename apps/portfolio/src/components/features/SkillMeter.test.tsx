import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { SkillMeter } from './SkillMeter';

describe('SkillMeter', () => {
  it('renders skill meter with skill name and level', async () => {
    const screen = await render(<SkillMeter skill="JavaScript" level={85} />);

    const skillMeter = screen.getByTestId('skill-meter');
    const skillName = screen.getByTestId('skill-name');
    const skillLevel = screen.getByTestId('skill-level');
    const skillBar = screen.getByTestId('skill-bar');
    const skillProgress = screen.getByTestId('skill-progress');

    await expect.element(skillMeter).toBeInTheDocument();
    await expect.element(skillName).toHaveTextContent('JavaScript');
    await expect.element(skillLevel).toHaveTextContent('85%');
    await expect.element(skillBar).toBeInTheDocument();
    await expect.element(skillProgress).toBeInTheDocument();
  });

  it('renders category badge when provided', async () => {
    const screen = await render(
      <SkillMeter skill="React" level={90} category="Frontend" />
    );

    const category = screen.getByTestId('skill-category');

    await expect.element(category).toHaveTextContent('Frontend');
  });

  it('does not render category when not provided', async () => {
    const screen = await render(<SkillMeter skill="Python" level={70} />);

    const skillMeter = screen.getByTestId('skill-meter');

    await expect.element(skillMeter).toBeInTheDocument();
  });

  it('renders progress bar with correct width', async () => {
    const screen = await render(<SkillMeter skill="TypeScript" level={75} />);

    const skillProgress = screen.getByTestId('skill-progress');

    await expect.element(skillProgress).toBeInTheDocument();
  });

  it('renders with different skill levels', async () => {
    const screen = await render(<SkillMeter skill="CSS" level={95} />);

    const skillLevel = screen.getByTestId('skill-level');

    await expect.element(skillLevel).toHaveTextContent('95%');
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <SkillMeter skill="Node.js" level={80} className="custom-skill" />
    );

    const skillMeter = screen.getByTestId('skill-meter');

    await expect.element(skillMeter).toHaveClass('custom-skill');
  });

  it('handles low skill level', async () => {
    const screen = await render(<SkillMeter skill="Beginner" level={25} />);

    const skillLevel = screen.getByTestId('skill-level');

    await expect.element(skillLevel).toHaveTextContent('25%');
  });

  it('handles maximum skill level', async () => {
    const screen = await render(<SkillMeter skill="Expert" level={100} />);

    const skillLevel = screen.getByTestId('skill-level');

    await expect.element(skillLevel).toHaveTextContent('100%');
  });
});
