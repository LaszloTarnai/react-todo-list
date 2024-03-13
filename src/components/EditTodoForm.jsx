import React, { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task)
  
  const handleSubmit = e => {
    e.preventDefault();

    editTodo(value, task.id);
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='Update task' value={value} onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-button'>Update Task</button> 
    </form>
  )
}
