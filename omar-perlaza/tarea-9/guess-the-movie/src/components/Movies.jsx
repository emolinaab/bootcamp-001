import React, { useState } from "react";

export function Movies() {

    const [answer, setAnswer] = useState("");
    const [points, setPoins] = useState(0);
    const [lives, setLives] = useState(3);
    const [massage, setMassage] = useState('Guess the Movie')
    const movies = [
        {
            movie: "π§πΌπ§πΌπππ¬π§",
            title: 'mary popins'
        },
        {
            movie: "πππ©βπ³",
            title: 'tomates verdes fritos'
        },
        {
            movie: "π­πβπββ",
            title: 'diario de una geisha'
        },
        {
            movie: "π¨πΌβπ¦³πππββ",
            title: 'el seΓ±or de los anillos'
        },
        {
            movie: "πππ ββ",
            title: 'el diablo viste a la moda'
        },
        {
            movie: "π§πΌπ€²πΌββββ",
            title: 'el joven manos de tijeras'
        },
        {
            movie: "ππ»βπ»βπ»βββ",
            title: 'tierra de osos'
        },
        {
            movie: "ππππ΅π¦πβββ",
            title: 'el planeta de los simios'
        },
        {
            movie: "ππ¦βββ",
            title: 'el rey leon'
        },
        {
            movie: "βπ΄ποΈππ¨πΌβ",
            title: 'el naufrago'
        },
        {
            movie: "βππππ©Έβ",
            title: 'diamantes de sangre'
        },
        {
            movie: "βπ­πβ",
            title: 'stuart little'
        },
        {
            movie: "βπ½βπΌππ β",
            title: 'et'
        },
        {
            movie: "βππππβ°οΈπβ",
            title: 'cuatro bodas y un funeral'
        },
        {
            movie: "βππ¬β",
            title: 'liberen a willy'
        },
        {
            movie: "βπ¦π±π¦ππ",
            title: 'el niΓ±o de la selva'
        },
        {
            movie: "π₯π¦β",
            title: 'karate kid'
        },
        {
            movie: "π¦π¨πΌβ",
            title: 'batman'
        },
        {
            movie: "π¨πΌπ·οΈπΈοΈβ",
            title: 'el hombre araΓ±a'
        },
        {
            movie: "πποΈπππβ",
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

