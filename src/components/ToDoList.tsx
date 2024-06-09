import type { ToDo } from '../types'
import { ToDoItem } from './ToDoItem.tsx'

interface ToDoListProps {
  todos: ToDo[]
  onComplete: (index: number) => void
}

export function ToDoList({ todos, onComplete }: ToDoListProps) {
  const handleComplete = (index: number) => () => {
    onComplete(index)
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDoItem
          key={todo.key}
          todo={todo}
          onComplete={handleComplete(index)}
        />
      ))}
    </ul>
  )
}
