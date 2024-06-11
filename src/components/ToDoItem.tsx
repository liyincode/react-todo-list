import { Button, Checkbox } from '@nextui-org/react'
import type { ToDo } from '../types.ts'

interface ToDoItemProps {
  todo: ToDo
  onComplete: () => void
  onRemove: () => void
}

export function ToDoItem({ todo, onComplete, onRemove }: ToDoItemProps) {
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
      <div className="flex gap-1">
        <Button
          color="danger"
          variant="light"
          size="sm"
          onClick={onRemove}
        >
          Remove
        </Button>
        <p className="flex items-center">
          {new Date(todo.timestamp).toLocaleString()}
        </p>
      </div>
    </div>
  )
}
