import useTodoStore from "../store/todoStore"

const TodoListCount = () => {
  const todos = useTodoStore((state) => state.todos)

  const todoCount = todos.length
  const completedCount = todos.filter((todo) => todo.completed).length
  const incompleteCount = todoCount - completedCount

  return (
    <div>
      <h2>Todo List Count</h2>
      <p>Total Todos: {todoCount}</p>
      <p>Completed Todos: {completedCount}</p>
      <p>Incomplete Todos: {incompleteCount}</p>
    </div>
  )
}

export default TodoListCount

