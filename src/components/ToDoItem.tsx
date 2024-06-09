import type { ToDo } from '../types.ts'

interface ToDoItemProps {
  todo: ToDo
  onComplete: (event: React.FormEvent<HTMLInputElement>) => void
}

export function ToDoItem({ todo, onComplete }: ToDoItemProps) {
  return (
    <li key={todo.key}>
      {todo.text}
      <input
        type="checkbox"
        defaultChecked={todo.completed}
        onInput={onComplete}
      />
    </li>
  )
}
