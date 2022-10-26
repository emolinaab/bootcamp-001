import styled from "styled-components"
import Button from "../Button/Button"
import Lottie from 'lottie-react'
import sadAnimation from '../../assets/sad.json'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const GameOver = ({onClick}) => {
  return (
    <Container>
        <Lottie animationData={sadAnimation}/>
        <h1>Game Over</h1>
        <Button onClick={onClick} text={"Play Again"}/>
    </Container>
  )
}

export default GameOver