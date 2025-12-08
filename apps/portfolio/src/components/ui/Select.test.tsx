import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { Select } from './Select';

describe('Select', () => {
  it('renders with options', async () => {
    const screen = await render(
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    );

    const select = screen.getByTestId('select');

    await expect.element(select).toBeVisible();
  });

  it('selects an option when clicked', async () => {
    const screen = await render(
      <Select>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
      </Select>
    );

    const select = screen.getByTestId('select');

    await userEvent.selectOptions(select, 'banana');
    await expect.element(select).toHaveValue('banana');
  });

  it('renders disabled state', async () => {
    const screen = await render(
      <Select disabled>
        <option value="1">Option 1</option>
      </Select>
    );

    const select = screen.getByTestId('select');

    await expect.element(select).toBeDisabled();
  });

  it('renders with custom className', async () => {
    const screen = await render(
      <Select className="custom-select">
        <option value="1">Option 1</option>
      </Select>
    );

    const select = screen.getByTestId('select');

    await expect.element(select).toHaveClass('custom-select');
  });
});
