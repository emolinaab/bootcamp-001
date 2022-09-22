import '../stylesheets/movies.css';
import { useState } from 'react';

export default function NextMovie({takeAnswer, movie, setMovie, success, setSuccess}) {
  const [answer, setAnswer] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    takeAnswer(answer);  

    if (success === 0) {
      //console.log('Success: ' + success);
      setMovie('👌')
    } else if (success === 1) {
      //console.log('Success: ' + success);
      setMovie('🍖');
    } else if (success === 2) {
      //console.log('Success: ' + success);
      setMovie('😎');
    } else if (success === 3) {
      //console.log('Success: ' + success);
      setMovie('😒');
    } else if (success === 4) {
      //console.log('Success: ' + success);
      setMovie('🤦‍♀️');
    } 
  }

  return(
    <div>
      <h3 className = 'movie'>{movie}</h3>
      <form onSubmit={submitHandler} className = 'container'>
        <input className = 'answer' onChange={e => setAnswer(e.target.value)} value={answer}></input>
        <button className = 'send' onClick={() => setMovie('🏁')} type='submit'>Send</button>
      </form >
    </div>
  );
}