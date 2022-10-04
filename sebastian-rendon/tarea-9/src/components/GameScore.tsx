export type GameScoreProps = {
  lives: number;
  points: number;
  totalPoints: number;
};

function GameScore({ lives, points, totalPoints }: GameScoreProps) {
  return (
    <section className="info-counter">
      <div className="info-counter__lives">
        <h2>Lives</h2>
        <big data-testid="lives-counter">{lives}</big>
      </div>
      <div className="info-counter__points">
        <h2>Points</h2>
        <big>
          <span data-testid="points-counter">{points}</span>
          <span>/</span>
          <span>{totalPoints}</span>
        </big>
      </div>
    </section>
  );
}

export default GameScore;
