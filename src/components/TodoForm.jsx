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
    <form className='todo-form mb-14 w-full' onSubmit={handleSubmit}>
      <div class="flex items-center">
        <input type='text' className='todo-input text-gray-700 mr-4 py-3 px-4 focus:outline-none focus:text-gray-900 border border-indigo-400 w-full transition-all rounded' placeholder='Enter your task here' value={value} onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-button cursor-pointer flex-shrink-0 bg-indigo-400 hover:bg-cyan-400 border-indigo-400 hover:border-cyan-400 border text-white py-3 px-4 transition-all rounded'>Add Task</button>
      </div>
    </form>
  )
}
