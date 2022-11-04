import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import movies from '../assets/movies';
import App from '../App';

describe('when in main component', () => {
  test('should render app', () => {
    render(<App />);

    const el = screen.getByTestId('app');
    expect(el).toBeDefined();
  });

  test('should change input value in uppercase', async () => {
    const value = 'Breaking Bad';

    render(<App />);

    const inputEl: HTMLInputElement = screen.getByTestId('game-input');

    await act(async () => {
      fireEvent.change(inputEl, { target: { value } });
    });

    expect(inputEl.value).toStrictEqual(value.toUpperCase());
  });

  test('should decrease lives if input guess is incorrect', async () => {
    const invalidGuess = 'Better Call Saul';

    render(<App />);

    const inputEl = screen.getByTestId('game-input');
    const formEl = screen.getByTestId('game-form');
    const livesCounterEl = screen.getByTestId('lives-counter');

    const currentLives = Number.parseInt(livesCounterEl.innerHTML);

    await act(async () => {
      fireEvent.change(inputEl, { target: { value: invalidGuess } });
      fireEvent.submit(formEl);
    });

    expect(Number.parseInt(livesCounterEl.innerHTML)).toEqual(currentLives - 1);
  });

  test('should increase points if input guess is correct', async () => {
    render(<App />);

    const inputEl = screen.getByTestId('game-input');
    const formEl = screen.getByTestId('game-form');
    const riddleEl = screen.getByTestId('game-riddle');
    const pointsEl = screen.getByTestId('points-counter');

    const currentPoints = Number.parseInt(pointsEl.innerHTML);
    const correctValue = movies.find(
      (movie) => movie.emojis.join('') === riddleEl.innerHTML
    )?.name;

    await act(async () => {
      fireEvent.change(inputEl, { target: { value: correctValue } });
      fireEvent.submit(formEl);
    });

    expect(Number.parseInt(pointsEl.innerHTML)).toStrictEqual(
      currentPoints + 1
    );
  });

  test('should change the riddle if input guess is correct', async () => {
    render(<App />);

    const inputEl = screen.getByTestId('game-input');
    const formEl = screen.getByTestId('game-form');
    const riddleEl = screen.getByTestId('game-riddle');
    const currentRiddle = riddleEl.innerHTML;

    const correctValue = movies.find(
      (movie) => movie.emojis.join('') === riddleEl.innerHTML
    )?.name;

    await act(async () => {
      fireEvent.change(inputEl, { target: { value: correctValue } });
      fireEvent.submit(formEl);
    });

    expect(currentRiddle === riddleEl.innerHTML).toBe(false);
  });
});
