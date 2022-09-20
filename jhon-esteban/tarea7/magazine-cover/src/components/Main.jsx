import React from 'react'
import PrincipalTitle from './PrincipalTitle'
import Subtitle from './Subtitle'

const Main = () => {
  return (
    <main>
        <section class="center">
            <div>
                <PrincipalTitle text = {"Your Majesty"}/>
                <PrincipalTitle text = {"Miss"}/>
                <PrincipalTitle text = {"Congeniality"}/>
                <Subtitle subtitle = {"She was achosen as a favorite"}/>
                <Subtitle subtitle = {"by fans and contestants"}/>
                <Subtitle subtitle = {"for her absurd sense of humor"}/>
            </div>
            <div class="voltiao">
                <PrincipalTitle text = {"Listen now!"}/>
                <PrincipalTitle text = {"Read u wrote U"}/>
            </div>
        </section>
    </main>
  )
}

export default Main