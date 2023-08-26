import { describe, vi, expect,it } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {
  it('should call onChange when input value changes', () => {
    const onChange = vi.fn();

    const { getByPlaceholderText } = render(<SearchBar onChange={onChange} />);
    const input = getByPlaceholderText('Digite o procurado…');

    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});