import React from 'react'

const Todo = (props) => {
  return (
    <div className="list-style">
    <li>{props.text}</li>
    </div>
  )
}

export default Todo
