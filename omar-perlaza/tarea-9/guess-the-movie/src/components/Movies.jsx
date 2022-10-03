import React, { useState } from "react";

export function Movies() {

    const [answer, setAnswer] = useState("");
    const [points, setPoins] = useState(0);
    const [lives, setLives] = useState(3);
    const [massage, setMassage] = useState('Guess the Movie')
    const movies = [
        {
            movie: "🧑🏼👧🏼🌂👜🇬🇧",
            title: 'mary popins'
        },
        {
            movie: "🍅🍅🟩​🍳",
            title: 'tomates verdes fritos'
        },
        {
            movie: "💭📝​👘​​",
            title: 'diario de una geisha'
        },
        {
            movie: "👨🏼‍🦳💍💍💍​​",
            title: 'el señor de los anillos'
        },
        {
            movie: "😈👗👠​​",
            title: 'el diablo viste a la moda'
        },
        {
            movie: "🧑🏼🤲🏼✂✂​​",
            title: 'el joven manos de tijeras'
        },
        {
            movie: "🌍🐻​🐻​🐻​​​",
            title: 'tierra de osos'
        },
        {
            movie: "🌍🙈🙉🐵🦍🐒​​​",
            title: 'el planeta de los simios'
        },
        {
            movie: "👑🦁​​​",
            title: 'el rey leon'
        },
        {
            movie: "​🌴🏖️🏐👨🏼​",
            title: 'el naufrago'
        },
        {
            movie: "​💎💎💎🩸​",
            title: 'diamantes de sangre'
        },
        {
            movie: "​🐭🚗​",
            title: 'stuart little'
        },
        {
            movie: "​👽☝🏼📞🏠​",
            title: 'et'
        },
        {
            movie: "​💍💍💍💍⚰️💀​",
            title: 'cuatro bodas y un funeral'
        },
        {
            movie: "​🔒🐬​",
            title: 'liberen a willy'
        },
        {
            movie: "​👦🌱🦍🍃🐅",
            title: 'el niño de la selva'
        },
        {
            movie: "🥋👦​",
            title: 'karate kid'
        },
        {
            movie: "🦇👨🏼​",
            title: 'batman'
        },
        {
            movie: "👨🏼🕷️🕸️​",
            title: 'el hombre araña'
        },
        {
            movie: "🚗🏎️🚗🚙🚍​",
            title: 'cars'
        }
    ];

    const changeAswer = (e) => {
        setAnswer(e.target.value)
    }

    const start = (e) => {

        e.preventDefault();
        e.target.reset()
        logicGame(answer, emoji, points)




    }

    const random = (data) => {
        const result = data[Math.floor(Math.random() * data.length)]
        return result
    }

    const question = random(movies);

    const [emoji, setEmoji] = useState({ movie: question.movie, title: question.title });
    const otherEmoji = () => {
        setEmoji({ movie: question.movie, title: question.title })
    }

    function logicGame(answer, emoji, points) {
        if (lives === 0 ) {
            setMassage('GAME OVER');
            setLives(3)
            setPoins(0)
            setEmoji({ movie: question.movie, title: question.title })
        } else {
             if (points === 9) {
                setMassage('YOU WIN')
                setPoins(0)
                setLives(3)
                setEmoji({ movie: question.movie, title: question.title })
            }
            else if (emoji.title.toLowerCase() === answer.toLowerCase()) {
                setPoins(points + 1);
                setMassage("Well Done");
                setEmoji({ movie: question.movie, title: question.title })
                
            } else {
                setLives(lives - 1);
                setMassage("!OPSSS")
                otherEmoji()
                
            }
        }



        /*   else{
              setMassage("AN ERROR HSD OCCURRED")
          } */






    }

    return (
        <section className="form">
            <div className="score">
                <label> Lives: {lives}</label>
                <label > Poinst: {points}</label>
            </div>
            <form onSubmit={start} >
                <h4 >{massage}</h4>
                <label  >{emoji.movie}</label>
                <input id="input" className="input" type='text' onChange={changeAswer}></input>
                <button className="button" type='submit'>Checkout</button>
            </form>
        </section>




    )

}

