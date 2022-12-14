import { GameStatusModalProps } from '../types/Game';

function GameStatusModal({ status, onRestart }: GameStatusModalProps) {
  return (
    <div
      className="modal__wrapper"
      data-testid="game-status-modal"
      hidden={status === 'IN_PROGRESS'}
      style={{ display: status === 'IN_PROGRESS' ? 'none' : 'flex' }}
    >
      <div className="modal__body" role="dialog">
        <p className="modal__message">
          {status === 'WON'
            ? "Congratulations, you've won!"
            : 'Oh no, you ran out of lives!'}
        </p>
        <button
          type="button"
          className="modal__button"
          onClick={() => {
            onRestart();
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default GameStatusModal;
