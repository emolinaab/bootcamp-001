import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vitest } from 'vitest';
import GameForm from '../components/GameForm';

const mockFunctions = {
  onSubmit() {
    return true;
  },
};

describe('', () => {
  afterEach(() => {
    vitest.restoreAllMocks();
  });

  test('should submit form', async () => {
    vitest.spyOn(mockFunctions, 'onSubmit');
    const onInputChange = vitest.fn();

    render(
      <GameForm
        riddle=""
        guess=""
        onSubmit={mockFunctions.onSubmit}
        onInputChange={onInputChange}
      />
    );

    const formEl: HTMLFormElement = screen.getByTestId('game-form');

    await act(async () => {
      fireEvent.submit(formEl);
    });

    expect(mockFunctions.onSubmit).toHaveBeenCalledOnce();
  });
});
