import React from 'react'

const Button = ({button,text}) => {
  return (
    <button type="submit" class={button}>{text}</button>
  )
}

export default Button