import './App.css'
import { useState } from 'react'
import { AddToDo } from './components/AddToDo.tsx'
import { Header } from './components/Header.tsx'
import { ToDoList } from './components/ToDoList.tsx'
import type { ToDo } from './types.ts'

function App() {
  const [todos, setTodos] = useState<ToDo[]>([])

  function handleAdd(todo: ToDo) {
    setTodos([...todos, todo])
  }

  function handleComplete(index: number) {
    setTodos(todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    }))
  }

  return (
    <div>
      <Header />
      <AddToDo onAdd={handleAdd} />
      <ToDoList todos={todos} onComplete={handleComplete} />
    </div>
  )
}

export default App
