import { act, fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

const testInvalidInput = async (
  inputId: string,
  invalidValues: string[],
  expectedTexts: string[]
) => {
  render(<App />);

  const formEl = screen.getByTestId('form-container');
  const inputEl = screen.getByTestId(inputId);
  const errorMsgEl = screen.getByTestId(`${inputId}-errormessage`);

  for (let i = 0; i < invalidValues.length; i++) {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.change(inputEl, { target: { value: invalidValues[i] } });
      fireEvent.submit(formEl);
    });

    expect(inputEl).toHaveValue(invalidValues[i]);
    expect(errorMsgEl).toHaveTextContent(expectedTexts[i]);
  }
};

describe('when in app component', () => {
  const formId = 'form-container';

  it('should have a form', () => {
    const view = render(<App />);

    const formEl = screen.getByTestId(formId);
    expect(view.container).toContainElement(formEl);
  });

  describe('when using the form', () => {
    const usernameInputId = 'username';
    const passwordInputId = 'password';

    beforeEach(() => {
      jest.restoreAllMocks();
    });

    it('should not allow invalid or empty username values', async () => {
      const invalidValues = ['%my.user%', 'wms', 'sebastianrendongiraldo', ''];
      const expectedTexts = [
        'Username must not contain special characters',
        'Username must be at least 4 characters',
        'Username must be at most 16 characters',
        'Username is required',
      ];

      await testInvalidInput(usernameInputId, invalidValues, expectedTexts);
    });

    it('should not allow invalid or empty password values', async () => {
      const invalidValues = [
        'invalid password',
        'abc',
        'abcdefghijklmnopqrs',
        '',
      ];
      const expectedTexts = [
        'Password must not contain white spaces',
        'Password must be at least 4 characters',
        'Password must be at most 16 characters',
        'Password is required',
      ];

      await testInvalidInput(passwordInputId, invalidValues, expectedTexts);
    });

    it('should allow to sign in when the username and password are valid', async () => {
      const usernameValue = 'srendon';
      const passwordValue = 'password';

      const spy = jest.spyOn(console, 'log').mockImplementation(() => true);

      render(<App />);

      const usernameInput = screen.getByTestId(usernameInputId);
      const passwordInput = screen.getByTestId(passwordInputId);
      const signInBtn = screen.getByTestId('signin-btn');

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        fireEvent.change(usernameInput, { target: { value: usernameValue } });
        fireEvent.change(passwordInput, { target: { value: passwordValue } });
        fireEvent.click(signInBtn);
      });

      expect(spy).toBeCalled();
      expect(spy.mock.calls[0][0]).toBe('You are signed in!');
    });
  });
});
