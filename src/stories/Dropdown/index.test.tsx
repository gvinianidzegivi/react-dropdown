import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Dropdown } from '.';

const options = [
  { id: 1, label: 'Apple', value: 'apple' },
  { id: 2, label: 'Banana', value: 'banana' },
  { id: 3, label: 'Orange', value: 'orange' },
];

describe('Dropdown component', () => {
  it('renders and toggles dropdown', () => {
    render(<Dropdown options={options} />);
    const trigger = screen.getByText(/select/i) || screen.getByRole('button');
    fireEvent.click(trigger);
    expect(screen.getByText('Apple')).toBeInTheDocument();
    fireEvent.click(trigger);
    expect(screen.queryByText('Apple')).not.toBeInTheDocument();
  });

  it('selects single option', () => {
    render(<Dropdown options={options} multiple={false} />);
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Apple'));
    expect(screen.getByText('Apple')).toBeInTheDocument();
  });

  it('selects multiple options', () => {
    render(<Dropdown options={options} multiple />);
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Apple'));
    fireEvent.click(screen.getByText('Banana'));
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });

  it('removes selected option when CircleX clicked', () => {
    render(<Dropdown options={options} multiple />);
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Apple'));
    const removeBtn = screen.getByRole('button', { name: /×/i }) || screen.getByText('×');
    fireEvent.click(removeBtn);
    expect(screen.queryByText('Apple')).not.toBeInTheDocument();
  });

  it('filters options with search', () => {
    render(<Dropdown options={options} multiple withSearch />);
    fireEvent.click(screen.getByRole('button'));
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Ap' } });
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.queryByText('Banana')).not.toBeInTheDocument();
  });
});
