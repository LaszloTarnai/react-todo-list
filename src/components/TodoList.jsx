import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const TodoList = ({task, toggleComplete, editTodo, deleteTodo}) => {
  return (
    <div className='todo-list flex justify-between items-center w-full my-2'>
      <p className={`${task.completed ? 'completed' : 'incompleted'} cursor-pointer font-sriracha text-2xl text-gray-500 transition-all`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div className='inline-flex'>
        <FontAwesomeIcon className='cursor-pointer bg-transparent text-violet-400 hover:text-cyan-400 font-semibold border border-violet-400 hover:border-cyan-400 py-3 px-4 m-1 transition-all rounded' icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className='cursor-pointer bg-transparent text-violet-400 hover:text-cyan-400 font-semibold border border-violet-400 hover:border-cyan-400 py-3 px-4 m-1 transition-all rounded' icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  )
}
