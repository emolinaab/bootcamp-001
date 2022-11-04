import { GameGuessedListProps, Movie } from '../types/Game';

function GameGuessedList({ items }: GameGuessedListProps) {
  return items.length ? (
    <table className="game-table">
      <thead>
        <tr>
          <th colSpan={2}>Your correct guesses</th>
        </tr>
      </thead>
      <tbody className="game-table__body">
        {items.map((movie) => (
          <tr key={movie.name}>
            <td>{movie.name}</td>
            <td>{movie.emojis.join('')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <></>
  );
}

export default GameGuessedList;
