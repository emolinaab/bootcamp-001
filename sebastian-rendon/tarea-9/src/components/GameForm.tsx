import { GameFormProps } from '../types/Game';

function GameForm({ riddle, guess, onSubmit, onInputChange }: GameFormProps) {
  return (
    <section className="game-content">
      <span className="game-content__emoji" data-testid="game-riddle">
        {riddle}
      </span>
      <form
        className="game-form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        data-testid="game-form"
      >
        <input
          type="text"
          className="game-form__input"
          placeholder="Enter your guess"
          value={guess}
          onChange={(e) => {
            onInputChange(e.target.value.toUpperCase());
          }}
          data-testid="game-input"
        />
        <button type="submit" className="game-form__button">
          Send
        </button>
      </form>
    </section>
  );
}

export default GameForm;
