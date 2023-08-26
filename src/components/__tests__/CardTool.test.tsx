import {test, expect, vi} from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import { CardTool } from '../CardTool';

const mockTool = {
  id: "1",
  title: 'Mock Tool',
  link: 'https://mocktool.com',
  description: 'This is a mock tool',
  tags: ['mock', 'tool'],
};

test('renders tool card with correct information', () => {
  render(<CardTool {...mockTool} handleDelete={() => {}} />);

  const titleElement = screen.getByRole('heading', { name: /mock tool/i });
  expect(titleElement)

  const linkElement = screen.getByRole('link', { name: /mock tool/i });
  expect(linkElement)

  const descriptionElement = screen.getByText('This is a mock tool');
  expect(descriptionElement)

  const tagElements = screen.getAllByText(/^#mock$|^#tool$/);
  expect(tagElements).toHaveLength(2);
});

test('calls handleDelete when delete button is clicked', () => {
  const handleDelete = vi.fn();
  render(<CardTool {...mockTool} handleDelete={handleDelete} />);

  const deleteButton = screen.getByRole('button', { name: /deletar/i });
  fireEvent.click(deleteButton);

  expect(handleDelete).toHaveBeenCalledTimes(1);
});