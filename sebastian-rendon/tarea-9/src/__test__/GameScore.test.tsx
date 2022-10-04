import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import GameScore, { GameScoreProps } from '../components/GameScore';

const mockProps: GameScoreProps = {
  lives: 1,
  points: 2,
  totalPoints: 4,
};

describe('When using the game score component', () => {
  test('should render the lives counter', () => {
    render(<GameScore {...mockProps} />);

    const livesCounterEl = screen.getByTestId('lives-counter');
    expect(livesCounterEl).toBeDefined();
    expect(livesCounterEl.innerHTML).toContainEqual(`${mockProps.lives}`);
  });
  test('should render the points counter', () => {
    render(<GameScore {...mockProps} />);

    const pointsCounterEl = screen.getByTestId('points-counter');
    expect(pointsCounterEl).toBeDefined();
    expect(pointsCounterEl.innerHTML).toContainEqual(`${mockProps.points}`);
  });
});
