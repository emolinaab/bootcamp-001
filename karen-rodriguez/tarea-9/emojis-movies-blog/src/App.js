import {moviesData} from './data.js'
import { useState } from "react";
import './App.css';

function App() {
  const [item, setItem] = useState("")
  const [index, setIndex] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setItem(value);
  };

  function numberGenerate(){
    const number= Math.floor(Math.random() * moviesData.length)
    setIndex(number)
  }

  function checkData (){
      if(moviesData[index].name.toLowerCase()===item.toLowerCase()){
        alert("dioooo")
        numberGenerate()
        clearField()
      }else{
        alert("No dio")

      }
    
  }

  function clearField(){
    let input= document.getElementById("input")
    input.value=""
  }

  return (
    <div className="App">
      <div id="board">{moviesData[index].emojis}</div>
      <div id="searcher">
        <input id="input" type="text" onChange={handleChange}></input>
        <button onClick={checkData} type="submit">Check</button>
      </div>
    </div>
  );
}

export default App;
