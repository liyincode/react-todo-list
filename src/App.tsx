import './App.css'
import { useEffect, useState } from 'react'
import { AddToDo } from './components/AddToDo.tsx'
import { Header } from './components/Header.tsx'
import { ToDoList } from './components/ToDoList.tsx'
import type { ToDo } from './types.ts'

function App() {
  const [todos, setTodos] = useState<ToDo[]>(() => {
    const saved = localStorage.getItem('todos')
    if (saved) {
      return JSON.parse(saved)
    }
    return []
  })

  useEffect(() => localStorage.setItem('todos', JSON.stringify(todos)), [todos])

  function handleAdd(todo: ToDo) {
    setTodos([...todos, todo])
  }

  function handleComplete(todo: ToDo) {
    const index = todos.findIndex(t => t.timestamp === todo.timestamp)
    const newTodos = [...todos]
    newTodos[index] = { ...todo, completed: !todo.completed }
    setTodos(newTodos)
  }

  return (
    <div className="container mx-auto">
      <Header />
      <AddToDo onAdd={handleAdd} />
      <ToDoList
        className="mt-4"
        todos={todos}
        onComplete={handleComplete}
      />
    </div>
  )
}

export default App
