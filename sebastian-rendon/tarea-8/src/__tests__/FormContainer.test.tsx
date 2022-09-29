import { render, screen } from '@testing-library/react';
import FormContainer from '../components/FormContainer';

describe('when in the form container', () => {
  it('should render a form', () => {
    render(<FormContainer />);

    const formEl = screen.getByTestId('form-container');
    expect(formEl).toBeInTheDocument();
  });
});
