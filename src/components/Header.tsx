import { CreateTodo } from "./CreateTodo"
import Logo from "./icons/Logo"

interface Props {
  onAddTodo: (title: string) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
        <header className="header">
            <h1 style={{ color: '#3f4b88', marginBottom: '20px' }}>Todolist  <Logo /></h1>

            <CreateTodo saveTodo={onAddTodo} />

        </header>
  )
}