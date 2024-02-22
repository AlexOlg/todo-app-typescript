// import { useState } from "react"
import {TodoId, type Todo as TodoType } from "../types"

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompletedTodo:  ( { id, completed }: Pick <TodoType, 'id'|'completed'>) => void
}

export const Todo: React.FC<Props> = ({title, id, completed, onRemoveTodo, onToggleCompletedTodo}) => {
  // const [todoCompleted, setTodoCompleted] = useState({completed})
  return (
        <div className="view">
            <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={(e) => { onToggleCompletedTodo({ id, completed: e.target.checked }) }}
            />
            <label>{title}</label>
            <button
            className="destroy"
            onClick={() => { onRemoveTodo({ id }) }}
            />
        </div>
  )
}