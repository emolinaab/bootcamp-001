import './App.css';
import { Movies } from './data';
import {useState} from 'react'

function App() {

  const [movies, setMovies] = useState("")
  const [index, setIndex] = useState("0")

  const handleChange =(e) => {
    e.preventDefault()
    const {value} = e.target
    setMovies(value)
  }

  function validateData (){
    
    if(Movies[index].name.toLowerCase()===movies.toLowerCase()){
      alert("Congratulations. The movie is correct!")
      numberRandom()
        
    }else{
      alert("Sorry, please try again :)")
    }
    clear()  
  }

  function numberRandom(){
    const number = Math.floor(Math.random() * Movies.length)
    setIndex (number)
  }

  function clear(){
    let input= document.getElementById("movisName")
    input.value=""
  }
  
  return (
   <section className="container">
      <h1>Emoji Movie</h1>
        <section className="subContainer">
          <div className="emojis">{Movies[index].emojis}</div>
          <div className="sendEmojis"></div>
          <input placeHolder="Enter the movie name" onChange={handleChange} required id="movisName"></input>
          <button onClick={validateData} type="submit">Send</button>
        </section>
   </section>
  );
}

export default App;
