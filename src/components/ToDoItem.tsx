import { Checkbox } from '@nextui-org/react'
import type { ToDo } from '../types.ts'

interface ToDoItemProps {
  todo: ToDo
  onComplete: (event: React.FormEvent<HTMLInputElement>) => void
}

export function ToDoItem({ todo, onComplete }: ToDoItemProps) {
  return (
    <div className="flex justify-between">
      <Checkbox
        key={todo.timestamp}
        defaultSelected={todo.completed}
        lineThrough={todo.completed}
        onChange={onComplete}
      >
        {todo.text}
      </Checkbox>
      <p>
        {new Date(todo.timestamp).toLocaleString()}
      </p>
    </div>
  )
}
