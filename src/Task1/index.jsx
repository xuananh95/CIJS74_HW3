import React from 'react'
import './styles.css'

const Task1 = ({ color='white', shape}) => {
  return (
    <div className={`${shape} container`} style={{backgroundColor: `${color}`}}>Task1</div>
  )
}

export default Task1