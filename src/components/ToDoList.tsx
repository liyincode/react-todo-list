import { Divider } from '@nextui-org/react'
import { useMemo } from 'react'
import type { ToDo } from '../types'
import { ToDoItem } from './ToDoItem.tsx'

interface ToDoListProps {
  todos: ToDo[]
  onComplete: (id: string) => void
  onRemove: (id: string) => void
  className?: string
}

export function ToDoList({ todos, onComplete, onRemove, className }: ToDoListProps) {
  const { completedTodos, uncompletedTodos } = useMemo(
    () => {
      const completedTodos = todos.filter(todo => todo.completed)
      const uncompletedTodos = todos.filter(todo => !todo.completed)
      return { completedTodos, uncompletedTodos }
    },
    [todos],
  )

  function renderSection(title: string, todos: ToDo[]) {
    return (
      <>
        <h2>
          <span className="text-base text-gray-900 mr-2">
            {title}
          </span>
          <span className="text-gray-600 text-sm mr-1">
            {todos.length}
          </span>
          <span className="text-gray-600 text-sm">
            items
          </span>
        </h2>
        <Divider className="mb-2 mt-3" />
        {todos.map(todo => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onComplete={onComplete}
            onRemove={onRemove}
          />
        ))}
      </>
    )
  }

  return (
    <div className={className}>
      {renderSection('ToDo', uncompletedTodos)}
      <div className="my-2"></div>
      {renderSection('Completed', completedTodos)}
    </div>
  )
}
