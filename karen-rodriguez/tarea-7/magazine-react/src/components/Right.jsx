import React from 'react'
import code from "../assets/img/code.png"
import StrongTitle from './Shared/StrongTitle'
import RegularText from './Shared/RegularText'
import Title from './Shared/Title'

const Right = () => {
  return (
    <article className="right">
        <Title text={'$2.90'}></Title>
        <RegularText text="April, 2021"></RegularText>
        <RegularText text="LIK EDITION"></RegularText>
        <img src={code} alt="" width="40px"/>
        <StrongTitle text={'273'}></StrongTitle>
        <Title text={'SEXI'}></Title>
        <Title text={'NEW'}></Title>
        <Title text={'BUYS'}></Title>
        <RegularText text={"YOUR SPRING WARDROPE SORTED!"}></RegularText>
    </article>  
  )
}

export default Right
