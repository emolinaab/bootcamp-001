import logo from './assets/logo.png'
import { useState } from 'react';
import './App.css';
import { movies } from './assets/movies';

function App() {

  const [i,setI] = useState(0)
  const [lives,setLives] = useState(3)
  const [movie,setMovie] = useState("")
  const [emojis,setEmojis] =useState(i < 10 ? movies[i].emojis : movies[9].emojis)

  const input = document.querySelector("#movieName")

  function checkMovie(e){
    e.preventDefault()
    if(movie.trim().toLowerCase() == movies[i].movie.toLowerCase()){
      setMovie("")
      if(i+1 == 10){
        alert("You won!")
        setI(i+1)
        e.target.disabled = true
        input.disabled = true
      }else{
        setI(i+1)
        setEmojis(movies[i+1].emojis)
      }
    }else{
      setLives(lives-1)
      setMovie("")
      let gameLost = lives -1 > 0 ? false : true

      if(gameLost){
        alert("You have 0 lives!")
        e.target.disabled = true
        input.disabled = true
      } else{
        alert("try again!")
      }
    }
  }
  return (
    <div className="App">
      <img src={logo}></img>
      <div className='numbers'>
          <h1>Lives:<span>{lives}</span></h1>
          <h1>Points:<span>{i}</span></h1>
      </div>
      <div>
        <h2>{emojis}</h2>
        <input id='movieName' value={movie} onChange={e=>{setMovie(e.target.value)}} onKeyUp={e=>{
            if(e.code === 'Enter') {
              document.querySelector('button').click()
            }
        }}></input>
        <button type='submit' onClick={e=>{checkMovie(e)}}>Try</button>
      </div>
    </div>
  );
}

export default App;
