import React from 'react'

export default function Input({type,onChange, name,placeholder}) {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} name={name} required></input>
  )
}

