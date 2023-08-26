import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Label from '../Label';

describe('Label', () => {
  it('renders without error', () => {
    const { getByText } = render(<Label htmlFor="test">Test Label</Label>);
    expect(getByText('Test Label'))
  });

  it('renders an error message when passed an error prop', () => {
    const { getByTestId } = render(<Label htmlFor="test" error={['test']}>Test Label</Label>)
    expect(getByTestId('error'))
  });
})