import './App.css';
import { Movies } from './data';
import {useState} from 'react'

function App() {

  const [movies, setMovies] = useState("")
  const [index, setIndex] = useState("0")
  const [points, setPoints] = useState(0)
  const [lives, setLives] = useState(3)

  const handleChange = (e) => {
    e.preventDefault()
    const {value} = e.target
    setMovies(value)
  }

  function validateData (){
    
    if(Movies[index].name.toLowerCase()===movies.toLowerCase()){
      setPoints(points+1)
      numberRandom()
        
    }else{
      if(lives===1){
        disableButton()
      }else{
        alert("Sorry! Please try again :)")
        setLives(lives-1)
        setPoints(0)
      }       
    }
    clear()  
  }

  
  function disableButton(){
    setLives(3)
    setPoints(0)
    alert("Game over")
    let buttonCheck = document.getElementById("buttondisable")
    let inputcheck = document.getElementById("movisName")
    buttonCheck.disabled= "false"
    inputcheck.disabled="false"
    setLives(0)
  }
  

  function numberRandom(){
    const number = Math.floor(Math.random() * Movies.length)
    setIndex (number)
  }

  function clear(){
    setMovies("")
  }
  
  return (
   <section className="container">
      <h1>Your points: {points} - Lives: {lives}</h1>
      <h1>Emoji Movie</h1>
        <section className="subContainer">
          <div className="emojis">{Movies[index].emojis}</div>
          <div className="sendEmojis"></div>
          <input placeHolder="Enter the movie name" onChange={handleChange} required id="movisName" value={movies}></input>
          <button onClick={validateData} type="submit" id="buttondisable">Send</button>
        </section>
   </section>
  );
}

export default App;
