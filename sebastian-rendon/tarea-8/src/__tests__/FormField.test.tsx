import { render, screen } from '@testing-library/react';
import FormField from '../components/FormField';

describe('when using a form field', () => {
  const registerMock = jest.fn();

  beforeEach(() => {
    registerMock.mockClear();
  });

  it('should contain a label', () => {
    const label = 'Username';
    render(
      <FormField label={label} inputId="username" register={registerMock} />
    );

    const labelEl = screen.getByText(label);
    expect(labelEl).toBeInstanceOf(HTMLLabelElement);
  });
});
