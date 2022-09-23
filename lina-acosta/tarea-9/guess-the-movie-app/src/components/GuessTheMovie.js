import './guessTheMovie.css'
import React, { useState } from 'react';

var index = 0;
function Game(){
    const [answer, setAnswer] = useState({name: ''});
    const [lives, setLives] = useState(3);
    const [score, setScore] = useState(0);

    const movies = [
        {
            name: 'fast and furious',
            emojis: '🚗💨😡'
        },
        {
            name: 'up',
            emojis: '🎈👴🏻🏠'
        },
        {
            name: 'the lion king',
            emojis: '🦁👑'
        },
        {
            name: 'finding nemo',
            emojis: '🔍🐠'
        },
        {
            name: 'kung fu panda',
            emojis: '🐼👊🏻'
        },
        {
            name: 'titanic',
            emojis: '🚢❄💑'
        },
        {
            name: 'harry potter',
            emojis: '👓⚡🧙🏻‍♂️'
        }

    ];

    const [movie, setMovie] = useState(movies[index]);

    const changeMovie = () => {
        if(index < 7){
            setMovie(movies[index]);
        }else{
            alert('WoW, Awesome')
            index = 0;
            setMovie(movies[index])
            setLives(3);
            setScore(0);
        }
    }

    const reset = () =>{
        setAnswer('');
        changeMovie();
    }

    const VerifyMovie = () =>{
        if(answer.name===movie.name){
            index = index+1;
            setScore(score + 1);
            reset();
        }else{
            if(lives > 1){
                if(score === 1){
                    alert('Oooops, lost a life!');
                    setLives(lives - 1);
                    setScore(score -1);
                }else if(score === 0){
                    alert('Oooops, you lost a life!');
                    setLives(lives - 1);
                }else{
                    alert('Oooops, wrong, you lost a point!');
                    setScore(score - 1);
                }
            }else{
                if(score <= 1){
                    alert('You lost all lives, try again!');
                    index = 0;
                    setLives(3);
                    setScore(0);
                    setMovie(movies[index]);
                }else{
                    alert('Oooops, wrong, you lost a point!');
                    setScore(score - 1);
                }
            }
        }
    }

    const submitHandler = e =>{
        e.preventDefault();
        VerifyMovie();
    }

    return(
        <section className='game'>
            <div>
                <label className = 'lives'>Lives: {lives} </label>
            </div>
            <div>
                <label className = 'score'>Score: {score}</label>
            </div>
            <div>
                <h1  className='title'>Guess the movie</h1>
            <div>
            <div className='container'>
                {movie.emojis}
            </div>
            <form onSubmit={submitHandler}>
                <div>
                    <input
                    className='movie-answer'
                    name='name'
                    type='text'
                    placeholder='What movie is it?'
                    onChange={e => setAnswer({...answer, name: e.target.value})} 
                    value={answer.name}
                    />
                    <input 
                    className='send-button' 
                    value= 'Send' 
                    type= 'submit'
                    />
            </div>
            </form>
            </div>
        </div>
    </section>
    )
}
export default Game;