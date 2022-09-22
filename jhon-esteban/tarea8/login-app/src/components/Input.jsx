import React from 'react'

const Input = ({input, onChange, placeholder, name}) => {
  return (
    <input type={input} class="form-control" onChange={onChange} 
      placeholder={placeholder} name={name} required/>
  )
}

export default Input