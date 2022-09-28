import React from 'react'
import RegularText from './Tex/RegularText'
import Title from './Tex/Title'

const Left = () => {
  return (
    <article className="left">
        <span className="textStrong">EXCLUSIVE!</span>
        <Title text={'BRITNET S'}></Title>
        <span className="textBig">'I WANT A BEAUTIFUL WEDDING'</span>
        <RegularText text={"PLUS! THE HOT GIRL'S GUIDE TO GETTING HITCHED IN STYLE FASHION TO GO HOW TO DO MILAN SHOP FOR MANOLOS AND STILL HAVE MONEY TO BURN"}></RegularText>
    </article>
  )
}

export default Left
