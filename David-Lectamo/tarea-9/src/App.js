import './App.css';
import Movies from './components/movies';
import { useState } from 'react';

let attempt = 1;

function App() {
  const [movie, setMovie] = useState('🌎🐒🐵🦍');
  const [count, setCount] = useState(0);
  const [lives, setLives] = useState(10);
  

  const TakeAnswer = answer => {
    const str = answer.toLowerCase();

    if (str === 'el señor de los anillos' && attempt === 5) {
      attempt = 6;
      setCount(count+1);
      setMovie('🏁');
    } else if (attempt === 5) {
      setLives(lives-1);
    }

    if (str === 'the ring' && attempt === 4) {
      attempt = 5;
      setCount(count+1);
      setMovie('🧑💍🌋');
    } else if (attempt === 4) {
      setLives(lives-1);
    }

    if (str === 'titanic' && attempt === 3) {
      attempt = 4;
      setCount(count+1);
      setMovie('💍📺');
    } else if (attempt === 3) {
      setLives(lives-1);
    }

    if (str === 'angeles y demonios' && attempt === 2) {
      attempt = 3;
      setCount(count+1);
      setMovie('🧊🚢');
    } else if (attempt === 2) {
      setLives(lives-1);
    }

    if (str === 'el planeta de los simios' && attempt === 1) {
      attempt = 2;
      setCount(count+1);
      setMovie('😇💒👿');
    } else if (attempt === 1) {
      setLives(lives-1);
    }

    if (attempt === 6) {
      alert('Congratulations you win');
      window.location.reload();
    }
  }

  return (
    <main>
      <header className = 'title'> 
        <h1>Guess the movie</h1>
      </header>
      <Movies takeAnswer = {TakeAnswer} movie = {movie} setMovie = {setMovie} count = {count} setCount = {setCount} lives = {lives} setLives = {setLives}/>
    </main>
  );
}

export default App;
