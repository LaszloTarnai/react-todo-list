import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")
  
  const handleSubmit = e => {
    e.preventDefault();

    if (value) {
      addTodo(value);
      setValue("");
    }
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='Enter your task here' value={value} onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-button'>Add Task</button> 
    </form>
  )
}
