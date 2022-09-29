import React from 'react';
import { render, screen } from '@testing-library/react';
import FormBtn from '../components/FormBtn';

describe('when using the form button', () => {
  it('should render a sign in button', () => {
    const { asFragment } = render(<FormBtn label="Sign in" />);
    expect(asFragment()).toHaveTextContent('Sign in');
  });

  it('should be of type submit', () => {
    render(<FormBtn label="Sign in" />);

    const btnEl = screen.getByText('Sign in');
    expect(btnEl).toHaveAttribute('type', 'submit');
  });
});
