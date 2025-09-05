import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Badge } from '.';

describe('Badge component', () => {
  it('renders children', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('applies primary variant by default', () => {
    render(<Badge>Primary</Badge>);
    expect(screen.getByText('Primary')).toHaveClass('bg-gray-100');
  });

  it('applies secondary variant', () => {
    render(<Badge variant="secondary">Secondary</Badge>);
    expect(screen.getByText('Secondary')).toHaveClass('bg-gray-200');
  });

  it('calls onClick', () => {
    const handleClick = vi.fn();
    render(<Badge onClick={handleClick}>Click</Badge>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalled();
  });
});
