import { Divider } from '@nextui-org/react'
import type { ToDo } from '../types'
import { ToDoItem } from './ToDoItem.tsx'

interface ToDoListProps {
  todos: ToDo[]
  onComplete: (todo: ToDo) => void
  className?: string
}

export function ToDoList({ todos, onComplete, className }: ToDoListProps) {
  const handleComplete = (todo: ToDo) => () => {
    onComplete(todo)
  }

  return (
    <div className={className}>
      <h2 className="text-base text-gray-900">
        ToDo
        <span className="text-gray-600 text-sm ml-2">
          {todos.filter(todo => !todo.completed).length}
          {' '}
          items
        </span>
      </h2>
      <Divider className="mb-2 mt-3" />
      {todos.filter(todo => !todo.completed)
        .map(todo => (
          <ToDoItem
            key={todo.timestamp}
            todo={todo}
            onComplete={handleComplete(todo)}
          />
        ))}

      <h2 className="text-base mt-4">
        completed
        <span className="text-gray-600 text-sm ml-2">
          {todos.filter(todo => todo.completed).length}
          {' '}
          items
        </span>
      </h2>
      <Divider className="mb-2 mt-3" />
      {todos.filter(todo => todo.completed)
        .map(todo => (
          <ToDoItem
            key={todo.timestamp}
            todo={todo}
            onComplete={handleComplete(todo)}
          />
        ))}
    </div>
  )
}
