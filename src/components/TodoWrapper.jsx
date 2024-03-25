import React, { useState } from 'react'
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm'
import { EditTodoForm } from './EditTodoForm';
import { v4 as uuidv4 } from 'uuid'

uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos,
      {id: uuidv4(), task: todo, completed: false, isEditing: false}
    ]);
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo));
  }

  const editTodo = id => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo));
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo));
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className='todo-wrapper flex flex-col justify-center items-center rounded-2xl mx-auto p-20'>
        <h1 className="text-white text-5xl font-light mb-10 font-sriracha">To-Do List</h1>
        <div className='bg-white shadow-2xl p-10 w-full lg:w-2/3 xl:w-2/3 2xl:w-2/5 rounded-2xl'>
          <TodoForm addTodo={addTodo} />
          {todos.map((todo, index) => (
            todo.isEditing ? (
              <EditTodoForm editTodo={editTask} task={todo} />
            ) : (
              <TodoList task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
            )
          ))}
        </div>
        <small className='text-gray-200 my-5'>To-Do List v0.1</small>
    </div>
  )
}
