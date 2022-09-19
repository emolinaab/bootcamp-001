import React from 'react'
import code from "../assets/img/code.png"

const Right = () => {
  return (
    <article className="right">
        <span className="textStrong">$2.90</span>
        <span>April, 2021
            <br/>
            LIK EDITION
        </span>
        <span>
            <img src={code} alt="" width="40px"/>
        </span>
        <span className="textStrong textBig n">273</span>
        <span className="textStrong textBig textColour">SEXI<br/>NEW<br/>BUYS</span>
        <span>YOUR SPRING WARDROPE SORTED!</span>
    </article>  
  )
}

export default Right
