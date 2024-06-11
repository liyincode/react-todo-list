import { Divider } from '@nextui-org/react'
import type { ToDo } from '../types'
import { ToDoItem } from './ToDoItem.tsx'

interface ToDoListProps {
  todos: ToDo[]
  onComplete: (todo: ToDo) => void
  onRemove: (todo: ToDo) => void
  className?: string
}

export function ToDoList({ todos, onComplete, onRemove, className }: ToDoListProps) {
  function handleComplete(todo: ToDo) {
    onComplete(todo)
  }

  function handleRemove(todo: ToDo) {
    onRemove(todo)
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
            onComplete={() => handleComplete(todo)}
            onRemove={() => handleRemove(todo)}
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
            onComplete={() => handleComplete(todo)}
            onRemove={() => handleRemove(todo)}
          />
        ))}
    </div>
  )
}
