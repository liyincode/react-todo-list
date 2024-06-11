import { Button, Checkbox } from '@nextui-org/react'
import type { ToDo } from '../types.ts'

interface ToDoItemProps {
  todo: ToDo
  onComplete: (id: string) => void
  onRemove: (id: string) => void
}

export function ToDoItem({ todo, onComplete, onRemove }: ToDoItemProps) {
  return (
    <div className="flex justify-between">
      <Checkbox
        key={todo.id}
        defaultSelected={todo.completed}
        lineThrough={todo.completed}
        onChange={() => onComplete(todo.id)}
      >
        {todo.text}
      </Checkbox>
      <div className="flex gap-1">
        <Button
          color="danger"
          variant="light"
          size="sm"
          onClick={() => onRemove(todo.id)}
        >
          Remove
        </Button>
        <p className="flex items-center">
          {new Date(todo.date).toLocaleString()}
        </p>
      </div>
    </div>
  )
}
