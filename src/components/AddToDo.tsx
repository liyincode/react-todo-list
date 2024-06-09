import { useId } from 'react'
import { Input } from '@nextui-org/react'
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
        timestamp: new Date().getTime(),
      })
      input.value = ''
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <Input
        type="text"
        id={inputId}
        placeholder="what do you need to do?"
      />
    </form>
  )
}
