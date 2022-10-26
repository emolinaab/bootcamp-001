import { fireEvent, render, screen } from '@testing-library/react';
import FormContainer from '../components/FormContainer';

const signIn = {
  onSubmit() {
    return true;
  },
};

describe('when in the form container', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render a form', () => {
    render(<FormContainer />);

    const formEl = screen.getByTestId('form-container');
    expect(formEl).toBeInTheDocument();
  });

  it('should run onSubmit', () => {
    const spy = jest.spyOn(signIn, 'onSubmit');

    render(<FormContainer onSubmit={signIn.onSubmit} />);

    const formEl = screen.getByTestId('form-container');
    fireEvent.submit(formEl);

    expect(spy).toHaveBeenCalled();
  });
});
