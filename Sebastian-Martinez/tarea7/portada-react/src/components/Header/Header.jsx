import React from 'react'
import PrincipalTitle from '../PrincipalTitle/PrincipalTitle'
import TopTitle from '../TopTitle/TopTitle'
import './Header.css'


const Header = () => {
  return (
    <div className='header'>
      <TopTitle text={"september 2022 | number 13"} />
      <PrincipalTitle title={"famous"} />
    </div>
  )
}

export default Header