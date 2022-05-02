import React from 'react'

const Button = ({id, onClick, name}) => {
  return (
    <button id={id} onClick={onClick} className="btn" >{name}</button>
  )
}

export default Button