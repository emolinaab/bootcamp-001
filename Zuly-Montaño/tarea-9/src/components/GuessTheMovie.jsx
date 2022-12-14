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
        emoticons = "π§οΈππ¨βπ¦±";
      }else if(number === 2){
        emoticons = "ππ’πππ»ββ";
      }else if(number === 3){
        emoticons = "π±π’π’π";
      }else if(number === 4){
        emoticons = "ππ£οΈποΈπ¨";
      }else if(number === 5){
        emoticons = "πππΌπ€ππΌπ";
      }else if(number === 6){
        emoticons = "π΄π»ππ";
      }else if(number === 7){
        emoticons = "ππ‘β";
      }else if(number === 8){
        emoticons = "π°οΈπ₯§π₯";
      }else if(number === 9){
        emoticons = "π₯π₯ππ½ββ";
      }else if(number === 10){
        emoticons = "π¨π»βπ³ππ²π₯";
      }else if(number === 11){
        emoticons = "π¦ΈββοΈπ¦ΈββοΈπ§π»πΆπ»π§π»";
      }else if(number === 12){
        emoticons = "π¨π»βπ¦±πΉπΆ";
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
      if(emoticonsreturn === "π§οΈππ¨βπ¦±"){
          movie = "Lluvia de hamburguesas";
      }else if(emoticonsreturn === "ππ’πππ»ββ"){
          movie = "Titanic";
      }else if(emoticonsreturn === "π±π’π’π"){
          movie = "El gato con botas";
      }else if(emoticonsreturn === "ππ£οΈποΈπ¨ "){
          movie = "Rapidos y furiosos";
      }else if(emoticonsreturn === "πππΌπ€ππΌπ"){
          movie = "Transformers";
      }else if(emoticonsreturn === "π΄π»ππ"){
          movie = "El seΓ±or de los anillos";
      }else if(emoticonsreturn === "ππ‘β"){
          movie = "Buscando a nemo";
      }else if(emoticonsreturn === "π°οΈπ₯§π₯"){
          movie = "American pie";
      }else if(emoticonsreturn === "π₯π₯ππ½ββ"){
          movie = "Karate kid";
      }else if(emoticonsreturn === "π¨π»βπ³ππ²π₯"){
          movie = "Ratatouille";
      }else if(emoticonsreturn === "π¦ΈββοΈπ¦ΈββοΈπ§π»πΆπ»π§π»"){
          movie = "Los increibles";
      }else if(emoticonsreturn === "π¨π»βπ¦±πΉπΆ"){
          movie = "El pianista";
      }else{
      }
      return movie;
  }

    const verifyMovie = (result, moviedata) => {
        let message = "";
        if(moviedata.toUpperCase() === result.toUpperCase()){
            message = "Β‘You win a point!";
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