import React, {useState} from 'react';

function Movies () {
    let emoticons;
    const [moviedata, setMovie] = useState("");
    const [livesdata, setLives] = useState(2);
    const [scoredata, setScore] = useState(0);

    const handlerNameMovie = (e) => {
        setMovie(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let result = movie(emojiInfo);
        verifyMovie(result, moviedata);

    }

    const Message = (message) => {
        alert(message);
        Clear();
    }

    const randomnumber = () => {
        let min = 1, max=13, resu=0;
        min = Math.ceil(min);
        max = Math.floor(max);

        resu = Math.floor(Math.random() * (max - min) + min);
        return resu;
    }

    const Emoji = () => {
      let number = randomnumber();
      if(number === 1){
        emoticons = "🌧️🍔👨‍🦱";
      }else if(number === 2){
        emoticons = "🌊🚢🏊🏊🏻‍♀";
      }else if(number === 3){
        emoticons = "🐱👢👢👒";
      }else if(number === 4){
        emoticons = "🏁🛣️🏎️💨";
      }else if(number === 5){
        emoticons = "🚗👉🏼🤖👉🏼🚁";
      }else if(number === 6){
        emoticons = "👴🏻💍💍";
      }else if(number === 7){
        emoticons = "🔎🐡❔";
      }else if(number === 8){
        emoticons = "🅰️🥧👥";
      }else if(number === 9){
        emoticons = "🥋🥊🙋🏽‍♂";
      }else if(number === 10){
        emoticons = "👨🏻‍🍳🐁🍲🥄";
      }else if(number === 11){
        emoticons = "🦸‍♀️🦸‍♂️👧🏻👶🏻🧒🏻";
      }else if(number === 12){
        emoticons = "👨🏻‍🦱🎹🎶";
      }else{

      }
      return emoticons;
  }

    const [emojiInfo, setEmojiInfo] = useState(Emoji);

    const otherEmoji = () => {
        setEmojiInfo(Emoji);
    }
    const Clear =()=>{
        document.getElementById("input").value="";
    }

    const movie = (emojiInfo) => {
      let emoticonsreturn = emojiInfo;
      let movie = "";
      if(emoticonsreturn === "🌧️🍔👨‍🦱"){
          movie = "Lluvia de hamburguesas";
      }else if(emoticonsreturn === "🌊🚢🏊🏊🏻‍♀"){
          movie = "Titanic";
      }else if(emoticonsreturn === "🐱👢👢👒"){
          movie = "El gato con botas";
      }else if(emoticonsreturn === "🏁🛣️🏎️💨 "){
          movie = "Rapidos y furiosos";
      }else if(emoticonsreturn === "🚗👉🏼🤖👉🏼🚁"){
          movie = "Transformers";
      }else if(emoticonsreturn === "👴🏻💍💍"){
          movie = "El señor de los anillos";
      }else if(emoticonsreturn === "🔎🐡❔"){
          movie = "Buscando a nemo";
      }else if(emoticonsreturn === "🅰️🥧👥"){
          movie = "American pie";
      }else if(emoticonsreturn === "🥋🥊🙋🏽‍♂"){
          movie = "Karate kid";
      }else if(emoticonsreturn === "👨🏻‍🍳🐁🍲🥄"){
          movie = "Ratatouille";
      }else if(emoticonsreturn === "🦸‍♀️🦸‍♂️👧🏻👶🏻🧒🏻"){
          movie = "Los increibles";
      }else if(emoticonsreturn === "👨🏻‍🦱🎹🎶"){
          movie = "El pianista";
      }else{
      }
      return movie;
  }

    const verifyMovie = (result, moviedata) => {
        let message = "";
        if(moviedata.toUpperCase() === result.toUpperCase()){
            message = "¡You win a point!";
            Message(message); 
            setScore(scoredata+1);
            setMovie(emojiInfo);
            otherEmoji();

        }else{
            setLives(livesdata-1);
            if(livesdata === 0){
                message = "You lost the game";
                Message(message); 
                setLives(2);
                setScore(0);

            }else if(livesdata === 1){
                message = "No, You are wrong. You only have 1 life more";
                Message(message); 
            }else{
                message = "No, You are wrong";
                Message(message); 
            }
        } 
    }

   return(
    <section className="game">
      <div>
        <label className="lives">Lives: {livesdata+1}</label><br/>
      </div>
      <div>
        <label className="score">Score: {scoredata}</label>
      </div>
      <div>
        <h1 className="title">GUESS THE MOVIE</h1><br/>
      <div>
        <div className="emoji">{emojiInfo}</div><br/>
        <form onSubmit={submitHandler}>
          <div>
            <input type="text" className="answers" id="input" placeholder='What movie is it?' 
            autocomplete="off" onChange={handlerNameMovie}/>
            <input type="submit" value="confirm" className="button"/>
          </div>
        </form>
      </div>
      </div>
    </section>
   );

};
export default Movies;