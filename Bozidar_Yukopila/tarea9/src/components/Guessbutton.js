import { useState } from "react";
import Bonus from "./Bonus";

const Guessbutton = (Name) => {
    const [Lives, setLives] = useState(3);
    const [Points, setPoints] = useState(0);
    console.log(Name);
    const press = () => {
        if (Lives === 0) {
            setLives(3);
            setPoints(0);
        }

        else {
            if (Name === document.getElementById("Nameguessed").value) {
                setPoints(Points + 1);
            }

            else { setLives(Lives - 1) }
        }

    }

    return [
        <>
            <Bonus Lives={Lives} Points={Points} ></Bonus>
        </>
        ,
        <>
            <input id="Nameguessed" type="text"></input>
            <button onClick={() => { press() }}>
                Send
            </button>
        </>
    ]

}
export default Guessbutton

