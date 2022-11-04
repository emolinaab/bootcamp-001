import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { afterEach, beforeEach, describe, expect, test, vitest } from 'vitest';
import GameStatusModal, {
  GameStatusModalProps,
} from '../components/GameStatusModal';

const mockProps = {
  status: 'IN_PROGRESS',
  onRestart() {},
};

describe('when using the game status modal component', () => {
  beforeEach(() => {
    mockProps.status = 'IN_PROGRESS';
  });

  afterEach(() => {
    vitest.restoreAllMocks();
  });

  test('should be hidden if status is IN_PROGRESS', () => {
    render(<GameStatusModal {...(mockProps as GameStatusModalProps)} />);

    const modalEl = screen.getByTestId('game-status-modal');
    expect(modalEl.hidden).toBe(true);
  });

  test('should be visible if status is not IN_PROGRESS', () => {
    mockProps.status = 'WON';
    render(<GameStatusModal {...(mockProps as GameStatusModalProps)} />);

    const modalEl = screen.getByTestId('game-status-modal');
    expect(modalEl.hidden).toBe(false);
  });

  test('should call the onRestart on button click', async () => {
    mockProps.status = 'LOST';
    vitest.spyOn(mockProps, 'onRestart');

    render(<GameStatusModal {...(mockProps as GameStatusModalProps)} />);

    const buttonEl = screen.getByText('Try again');

    await act(async () => {
      fireEvent.click(buttonEl);
    });

    expect(mockProps.onRestart).toHaveBeenCalledOnce();
  });
});
