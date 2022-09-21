import React from 'react'
import code from "../assets/img/code.png"
import RegularText from './Tex/RegularText'

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
        <Title text={'SEXI'}></Title>
        <Title text={'NEW'}></Title>
        <Title text={'BUYS'}></Title>
        <RegularText text={"YOUR SPRING WARDROPE SORTED!"}></RegularText>
    </article>  
  )
}

export default Right
