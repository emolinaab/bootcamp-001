import React from 'react'
import PrincipalTitle from './PrincipalTitle'
import Subtitle from './Subtitle'

const Header = () => {
  return (
    <header>
        <section class="top">
                <section class="name">
                    <PrincipalTitle text = {"Katya"}/>
                    <PrincipalTitle text = {"Zamolodchikova"}/>
                    <Subtitle subtitle = {"Dragqueen"}/>
                </section>
                
                <section class="season">
                    <PrincipalTitle text = {"Rupaul's"}/>
                    <PrincipalTitle text = {"Drag Race"}/>
                    <PrincipalTitle text = {"AllStars"}/>
                    <PrincipalTitle text = {" S2 top 4"}/>
                </section>
        </section>
    </header>
  )
}

export default Header