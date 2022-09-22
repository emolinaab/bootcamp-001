import './App.css';
import Movies from './components/movies';
import { useState } from 'react';

let tmp = 1; 

function App() {
  const [movie, setMovie] = useState('Click en send to start');
  const [success, setSuccess] = useState(0);

  const TakeAnswer = answer => {
    console.log('tmp: ' + tmp);
    if (answer === 'uno' && tmp === 1) {
      setSuccess(1);
      tmp = 2;
      //console.log('Avidino rapido');
    } else if (tmp === 1) {
      //console.log('Else de rapido - tmp: ' + tmp);
    }

    if (answer === 'dos' && tmp === 2) {
      setSuccess(2);
      tmp = 3;
      //console.log('Adivino otro ');
    } else if (tmp === 2) {
      //console.log('Else de otro - tmp: ' + tmp);
    }

    if (answer === 'tres' && tmp === 3) {
      setSuccess(3);
      tmp = 4;
      //console.log('Adivino nueva ');
    } else if (tmp === 3) {
      //console.log('Else de nueva - tmp: ' + tmp);
    }

    if (answer === 'cuatro' && tmp === 4) {
      setSuccess(4);
      tmp = 5;
      //console.log('Adivino otro ');
    } else if (tmp === 2) {
      //console.log('Else de otro - tmp: ' + tmp);
    }

    if (answer === 'cinco' && tmp === 5) {
      setSuccess(5);
      tmp = 6;
      //console.log('Adivino nueva ');
    } else if (tmp === 3) {
      //console.log('Else de nueva - tmp: ' + tmp);
    }
  }

  return (
    <main>
      <h2 className = 'lives'>Lives: </h2>
      <h2 className = 'points'>Points: </h2>

      <header className = 'title'> 
        <h1>Guess the movie</h1>
      </header>
      <Movies takeAnswer = {TakeAnswer} movie = {movie} setMovie = {setMovie} success={success} setSuccess={setSuccess}/>
    </main>
  );
}

export default App;
