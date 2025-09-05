import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Input } from '.';

describe('Input component', () => {
  it('renders with placeholder', () => {
    render(<Input value="" onChange={() => {}} placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('calls onChange when typing', () => {
    const handleChange = vi.fn();
    render(<Input value="" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Test' } });
    expect(handleChange).toHaveBeenCalled();
  });
});
