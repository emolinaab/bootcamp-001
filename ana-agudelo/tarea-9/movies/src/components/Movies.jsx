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
            emogidata = "🎈🤡";
        }else if(number === 2){
            emogidata = "🚢👩🏼‍❤️‍💋‍👨🏼🧊";
        }else if(number === 3){
            emogidata = "5️⃣🌊";
        }else if(number === 4){
            emogidata = "👻👻🔫";
        }else if(number === 5){
            emogidata = "🎈🏡👴🏻";
        }else if(number === 6){
            emogidata = "👴🏻💍💍";
        }else if(number === 7){
            emogidata = "🎩⚡️🦉";
        }else if(number === 8){
            emogidata = "👑🦁";
        }else if(number === 9){
            emogidata = "🏝🧔🏻🏐";
        }else if(number === 10){
            emogidata = "🧑‍🍳🐀";
        }else if(number === 11){
            emogidata = "🥥🇲🇽👦🏽";
        }else if(number === 12){
            emogidata = "🌙🍯👨‍👩‍👧‍👦";
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
        if(emojidatareturn === "🎈🤡"){
            movie = "It";
        }else if(emojidatareturn === "🚢👩🏼‍❤️‍💋‍👨🏼🧊"){
            movie = "Titanic";
        }else if(emojidatareturn === "5️⃣🌊"){
            movie = "La quinta ola";
        }else if(emojidatareturn === "👻👻🔫"){
            movie = "Cazafantasmas";
        }else if(emojidatareturn === "🎈🏡👴🏻"){
            movie = "Up";
        }else if(emojidatareturn === "👴🏻💍💍"){
            movie = "El señor de los anillos";
        }else if(emojidatareturn === "🎩⚡️🦉"){
            movie = "Harry Potter";
        }else if(emojidatareturn === "👑🦁"){
            movie = "El rey Leon";
        }else if(emojidatareturn === "🏝🧔🏻🏐"){
            movie = "Naufrago";
        }else if(emojidatareturn === "🧑‍🍳🐀"){
            movie = "Ratatouille";
        }else if(emojidatareturn === "🥥🇲🇽👦🏽"){
            movie = "Coco";
        }else if(emojidatareturn === "🌙🍯👨‍👩‍👧‍👦"){
            movie = "Luna de miel en familia";
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