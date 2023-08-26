import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CustomToast from '../CustomToast';

describe('CustomToast', () => {
  it('renders a success toast', () => {
    render(<CustomToast message="Success message" type="success" button="Close" />);
    const successToast = screen.getByText('Este foi um sucesso total!');
    expect(successToast)
  });

  it('renders an error toast', () => {
    render(<CustomToast message="Error message" type="error" button="Close" />);
    const errorToast = screen.getByText('Acabou de acontecer um erro!');
    expect(errorToast)
  });

  it('renders a default toast', () => {
    render(<CustomToast message="Default message" type="unknown" button="Close" />);
    const defaultToast = screen.getByText('Acabou de acontecer um erro!');
    expect(defaultToast)
  });
});