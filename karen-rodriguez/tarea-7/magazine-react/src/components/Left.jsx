import React from 'react'
import StrongTitle from './Shared/StrongTitle'
import RegularText from './Shared/RegularText'
import Title from './Shared/Title'

const Left = () => {
  return (
    <article className="left">
        <Title text={'EXCLUSIVE!'}></Title>
        <Title text={'BRITNET S'}></Title>
        <StrongTitle text={'I WANT A BEAUTIFUL WEDDING'}></StrongTitle>
        <RegularText text={"PLUS! THE HOT GIRL'S GUIDE TO GETTING HITCHED IN STYLE FASHION TO GO HOW TO DO MILAN SHOP FOR MANOLOS AND STILL HAVE MONEY TO BURN"}></RegularText>
    </article>
  )
}

export default Left
