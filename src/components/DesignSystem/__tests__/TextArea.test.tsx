import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextArea from '../TextArea';

describe('TextArea', () => {
  const user = userEvent.setup()
  it('renders without errors', () => {
    render(<TextArea />);
    const textAreaElement = screen.getByRole('textbox');
    expect(textAreaElement)
  });

  it('displays the correct placeholder text', () => {
    render(<TextArea />);
    const textAreaElement = screen.getByRole('textbox');
    expect(textAreaElement).toHaveProperty('placeholder', 'Required...');
  });

  it('displays the correct error message', () => {
    const error = ['The field is required.'];
    render(<TextArea error={error} name="field" />);
    const errorMessageElement = screen.getAllByTestId('error-message')[0];
    expect(errorMessageElement)
  });

  it('displays the focused placeholder text when focused', async () => {
    render(<TextArea />);
    const textAreaElement = screen.getByRole('textbox');
    await user.click(textAreaElement);
    expect(textAreaElement).toHaveProperty('placeholder', 'Focused...');
  });
});