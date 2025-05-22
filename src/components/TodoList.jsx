import React, { useState } from "react"
import useTodoStore from "../store/todoStore"

const formatDateFancy = (isoString) => {
  const date = new Date(isoString)
  const day = date.getDate();
  const month = date.toLocaleString("en-EN", { month: "long" })
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  return `${day} ${month} kl. ${hour}:${minute}`
}

const TodoList = () => {
  const { todos, addTodo, removeTodo, toggleTodo, markAllComplete } = useTodoStore()
  const [newTodo, setNewTodo] = useState("")

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo)
      setNewTodo("")
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        placeholder="Add a new todo" />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <span> - {formatDateFancy(todo.createdAt)}</span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>

          </li>
        ))}
      </ul>
      <button onClick={markAllComplete}>All Todos done!</button>
    </div>
  )
}
export default TodoList