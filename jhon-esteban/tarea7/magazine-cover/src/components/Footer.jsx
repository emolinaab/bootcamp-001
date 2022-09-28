import React from 'react'
import runway from '../assets/img/runways.webp'
import PrincipalTitle from './PrincipalTitle'
import WebsiteKatya from './WebsiteKatya'

const Footer = () => {
  return (
    <footer>
        <section class="bottom">
            <div>
                <PrincipalTitle text = {"Youtube Channel Trixie & Katya"}/>
                <WebsiteKatya website = {"August 2022"}/>
                <WebsiteKatya website = {"welovekatya.com"}/>
            </div>
            <div class="makeup">
                <img src={runway} alt=""/>
                <PrincipalTitle text = {"Not today Satan"}/>
            </div>
        </section>
    </footer>
  )
}

export default Footer