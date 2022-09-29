import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('when in app component', () => {
  const testRenderInput = (inputId: string) => {
    render(<App />);

    const inputEl = screen.getByTestId(inputId);

    expect(inputEl).toHaveAttribute('id', inputId);
    expect(inputEl).toHaveAttribute('aria-labelledby', `${inputId}-label`);
    expect(inputEl).toHaveValue('');
  };

  const testChangeValueInput = (inputId: string, mockValue: string) => {
    render(<App />);

    const inputEl = screen.getByTestId(inputId);
    fireEvent.change(inputEl, { target: { value: mockValue } });

    expect(inputEl).toHaveValue(mockValue);
  };

  it('should have a form', () => {
    const view = render(<App />);

    const formEl = screen.getByTestId('form-container');
    expect(view.container).toContainElement(formEl);
  });

  describe('when using the form', () => {
    const usernameInputId = 'username';
    const passwordInputId = 'password';

    it('username input should be empty', () => {
      testRenderInput(usernameInputId);
    });

    it('password input should be empty', () => {
      testRenderInput(passwordInputId);
    });

    it('username input should change value', () => {
      const mockValue = 'my_username';

      testChangeValueInput(usernameInputId, mockValue);
    });

    it('password input should change value', () => {
      const mockValue = 'SomePassword';

      testChangeValueInput(usernameInputId, mockValue);
    });
  });
});
