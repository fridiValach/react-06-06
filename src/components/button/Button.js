import React from 'react'

const Button = ({text, clickEvent}) => {
  function keydownEvent (){}
  return (
    <button onClick={clickEvent}>{text}</button>
  )
}

export default Button