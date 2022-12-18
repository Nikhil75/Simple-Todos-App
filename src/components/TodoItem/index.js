import './index.css'

const TodoItem = props => {
  const {initialTodosList, deleteTodo} = props
  const {title, id} = initialTodosList

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todos-list-container">
      <p className="todo-item">{title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
