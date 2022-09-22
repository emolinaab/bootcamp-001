import '../stylesheets/movies.css';
import { useState } from 'react';

export default function NextMovie({takeAnswer, movie, setMovie, success, setSuccess, count, setCount, lives, setLives}) {
  const [answer, setAnswer] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    takeAnswer(answer);  

    if (success === 0) {
      setMovie('🌎🐒🐵🦍')
    } else if (success === 1) {
      setMovie('😇💒👿');
    } else if (success === 2) {
      setMovie('🧊🚢');
    } else if (success === 3) {
      setMovie('💍📺');
    } else if (success === 4) {
      setMovie('🧑💍🌋');
    } 

    if (lives === 0) {
      alert('Game Over');
      window.location.reload();
    }
  }

  return(
    <div>
      <h2 className = 'lives'>Lives: {lives}</h2>
      <h2 className = 'points'>Points: {count}</h2>
      <h3 className = 'movie'>{movie}</h3>
      <form onSubmit={submitHandler} className = 'container'>
        <input className = 'answer' onChange={e => setAnswer(e.target.value)} value={answer}></input>
        <button className = 'send' onClick={() => setMovie('🏁')} type='submit'>Send</button>
      </form >
    </div>
  );
}