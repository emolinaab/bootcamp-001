import {moviesData,lives} from './data.js'
import { useState } from "react";
import './App.css';

function App() {
  
  const [valueInput, setvalueInput] = useState("")
  const [indexMovie, setIndexMovie] = useState(0);
  const [points, setPoints] = useState(0);
  const [live, setLive] = useState(3);

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setvalueInput(value);
  };

  function numberGenerate(){
    const number= Math.floor(Math.random() * moviesData.length)
    setIndexMovie(number)
  }

  function checkData (){
      if(moviesData[indexMovie].name.toLowerCase()===valueInput.toLowerCase()){
        setPoints(points+1)
        numberGenerate()
      }else{
        if(live===1){
          gameOver()
        }else{
          alert("Wrong movie! please try again")
          setLive(live-1)
          
        } 
        showLives()      
        setPoints(0)
      }
      clearField()
  }

  function clearField(){
    setvalueInput("")
  }

  function gameOver(){
    setLive(0)
    alert("Game over")
    let btnCheck = document.getElementById("btnCheck")
    let input= document.getElementById("input")
    btnCheck.disabled= "false"
    input.disabled="false"
  }

  function showLives(){
    return lives.substring(0,live)
  }
  return (
    <div id="app" className='container'>
      <div id="msg" className='container'>
        <h1 className='container' id="points" >points: {points}</h1>
        <h1 className='container' id="points">{showLives()}</h1>
       </div>
      
      <div id="game" className="container">
        <h1 id="principalTittle">Guess the movie!</h1>
        <h4>What movie is it?</h4>
        <div id="board">
          {moviesData[indexMovie].emojis}
        </div>
        <div id="searcher">
          <input id="input" type="text" onChange={handleChange} autoComplete="off" value={valueInput}></input>
          <button id="btnCheck" onClick={checkData} type="submit" >Check</button>
        </div>
      </div>
    </div>
    
  );
}

export default App;
