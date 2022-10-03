import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from '../App';

describe('when in main component', () => {
  test('should render app', () => {
    render(<App />);

    const el = screen.getByTestId('app');
    expect(el).toBeDefined();
  });
});
