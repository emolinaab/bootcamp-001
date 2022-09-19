import React from 'react'
import runway from '../assets/img/runways.webp'

const Footer = () => {
  return (
    <footer>
        <section class="bottom">
            <div>
                <h1>Youtube Channel Trixie & Katya</h1>
                <h5>August 2022</h5>
                <h5>welovekatya.com</h5>
            </div>
            <div>
                <div class="makeup">
                    <img src={runway} alt=""/>
                    <h1>Not today Satan</h1>
                </div>
            </div>
        </section>
    </footer>
  )
}

export default Footer