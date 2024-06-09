import { useId } from 'react'
import type { ToDo } from '../types.ts'

interface AddToDoProps {
  onAdd: (toDo: ToDo) => void
}
export function AddToDo({ onAdd }: AddToDoProps) {
  const inputId = useId()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const input = document.getElementById(inputId) as HTMLInputElement
    const toDo = input.value.trim()
    if (toDo) {
      onAdd({
        text: toDo,
        completed: false,
        key: new Date().getTime(),
      })
      input.value = ''
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="toDo">To Do:</label>
      <input type="text" id={inputId} />

      <button type="submit">Add</button>
    </form>
  )
}
