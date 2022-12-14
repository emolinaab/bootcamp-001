import React, {useState} from 'react';

function Movies () {
    let emogidata;
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
            emogidata = "ππ€‘";
        }else if(number === 2){
            emogidata = "π’π©πΌββ€οΈβπβπ¨πΌπ§";
        }else if(number === 3){
            emogidata = "5οΈβ£π";
        }else if(number === 4){
            emogidata = "π»π»π«";
        }else if(number === 5){
            emogidata = "ππ‘π΄π»";
        }else if(number === 6){
            emogidata = "π΄π»ππ";
        }else if(number === 7){
            emogidata = "π©β‘οΈπ¦";
        }else if(number === 8){
            emogidata = "ππ¦";
        }else if(number === 9){
            emogidata = "ππ§π»π";
        }else if(number === 10){
            emogidata = "π§βπ³π";
        }else if(number === 11){
            emogidata = "π₯₯π²π½π¦π½";
        }else if(number === 12){
            emogidata = "ππ―π¨βπ©βπ§βπ¦";
        }else{

        }
        return emogidata;
    }

    const [emojiInfo, setEmojiInfo] = useState(Emoji);

    const otherEmoji = () => {
        setEmojiInfo(Emoji);
    }
    const Clear =()=>{
        document.getElementById("inputtext").value="";
    }
    
    const movie = (emojiInfo) => {
        let emojidatareturn = emojiInfo;
        let movie = "";
        if(emojidatareturn === "ππ€‘"){
            movie = "It";
        }else if(emojidatareturn === "π’π©πΌββ€οΈβπβπ¨πΌπ§"){
            movie = "Titanic";
        }else if(emojidatareturn === "5οΈβ£π"){
            movie = "La quinta ola";
        }else if(emojidatareturn === "π»π»π«"){
            movie = "Cazafantasmas";
        }else if(emojidatareturn === "ππ‘π΄π»"){
            movie = "Up";
        }else if(emojidatareturn === "π΄π»ππ"){
            movie = "El seΓ±or de los anillos";
        }else if(emojidatareturn === "π©β‘οΈπ¦"){
            movie = "Harry Potter";
        }else if(emojidatareturn === "ππ¦"){
            movie = "El rey Leon";
        }else if(emojidatareturn === "ππ§π»π"){
            movie = "Naufrago";
        }else if(emojidatareturn === "π§βπ³π"){
            movie = "Ratatouille";
        }else if(emojidatareturn === "π₯₯π²π½π¦π½"){
            movie = "Coco";
        }else if(emojidatareturn === "ππ―π¨βπ©βπ§βπ¦"){
            movie = "Luna de miel en familia";
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
    <section className="movieview">
        <label className='lives'>Lives: {livesdata+1}</label><br/>
        <label className='score'>Score: {scoredata}</label>
        <h1>GUESS THE MOVIE</h1><br/>
        <div className="emoji">{emojiInfo}</div><br/>
        <form onSubmit={submitHandler}>
            <input type="text" className="input" id="inputtext" autocomplete="off" onChange={handlerNameMovie}/><br/>
            <input type="submit" value="SUBMIT" className="button"/>
        </form>
    </section>
   );
        


    
    
    
};
export default Movies;