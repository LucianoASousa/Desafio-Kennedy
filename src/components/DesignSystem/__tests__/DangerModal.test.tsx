import { describe, beforeEach, vi, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import DangerModal from '../DangerModal';

describe('DangerModal', () => {
  const afterOpenModal = vi.fn();
  const closeModal = vi.fn();
  const handleDanger = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the title and description', () => {
    const title = 'Are you sure?';
    const description = 'This action cannot be undone.';

    render(
      <DangerModal
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
        isOpen={true}
        title={title}
        description={description}
        handleDanger={handleDanger}
      />
    );

    expect(screen.getByText(title))
    expect(screen.getByText(description))
  });

  it('calls the closeModal function when the X icon is clicked', () => {
    render(
      <DangerModal
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
        isOpen={true}
        title="Are you sure?"
        description="This action cannot be undone."
        handleDanger={handleDanger}
      />
    );

    const xIcon = screen.getAllByTestId('close-modal')[0];
    fireEvent.click(xIcon);

    expect(closeModal).toHaveBeenCalledTimes(1);
  });

  it('calls the handleDanger and closeModal functions when the Danger button is clicked', () => {
    render(
      <DangerModal
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
        isOpen={true}
        title="Are you sure?"
        description="This action cannot be undone."
        handleDanger={handleDanger}
      />
    );

    const dangerButton = screen.getByRole('button', { name: 'Danger' });
    fireEvent.click(dangerButton);

    expect(handleDanger).toHaveBeenCalledTimes(1);
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});