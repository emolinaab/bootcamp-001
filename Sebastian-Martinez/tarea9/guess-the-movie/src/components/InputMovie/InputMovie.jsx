import styled from "styled-components"
import Button from "../Button/Button"

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    height: 30px;
    width: 40%;
    border: 2px solid blueviolet;
    border-radius: 15px;
    padding-left: 10px;

    &:focus {
        border: 2px solid blue;
        outline: none;
    }
`

const InputMovie = ({onChange, onClick, value}) => {
  return (
    <Container>
        <Input onChange={onChange} type="text" placeholder="Type the movie" value={value}/>
        <Button onClick={onClick} text={"Validate"}/>
    </Container>
  )
}

export default InputMovie