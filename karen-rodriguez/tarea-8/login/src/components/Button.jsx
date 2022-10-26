import React from 'react'

function Button({text, id, ariaLabel}) {
  return (
   <button aria-label={ariaLabel} id={id} type='submit' >{text}</button>
  )
}

export default Button