import React, { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task)
  
  const handleSubmit = e => {
    e.preventDefault();

    editTodo(value, task.id);
  }

  return (
    <form className='todo-form w-full my-2' onSubmit={handleSubmit}>
      <div class="flex items-center">
        <input type='text' className='todo-input text-gray-700 mr-4 py-3 px-4 focus:outline-none focus:text-gray-900 border border-indigo-400 w-full transition-all rounded' placeholder='Update task' value={value} onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-button cursor-pointer transition-all flex-shrink-0 bg-indigo-400 hover:bg-cyan-400 border-indigo-400 hover:border-cyan-400 border text-white py-3 px-4 rounded'>Update Task</button>
      </div>
    </form>
  )
}
