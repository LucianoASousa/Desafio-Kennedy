import { describe, it, expect,  } from 'vitest';
import { render,  } from '@testing-library/react';
import CardMain from '../CardMain';

describe('CardMain', () => {
  it('renders children', () => {
    const { getByText } = render(<CardMain>Hello World</CardMain>);
    expect(getByText('Hello World'))
  });

  it('passes additional props', () => {
    const { container } = render(<CardMain data-testid="card" />);
    expect(container.firstChild).toHaveProperty('dataset.testid', 'card');
  });
});