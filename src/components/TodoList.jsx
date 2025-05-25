import { useState } from "react"
import useTodoStore from "../store/todoStore"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan, faPlus, faClipboardList } from "@fortawesome/free-solid-svg-icons"
import MobileBox from "../styles/MobileCount.jsx"
import { TodoListContainer, StyledInput, StyledFilterButtons, FilterButton, TodoListStyled, TodoItem, EmptyState } from "../styles/TodoList.styles"


const formatDateFancy = (isoString) => {
  const date = new Date(isoString)
  const day = date.getDate();
  const month = date.toLocaleString("en-EN", { month: "long" })
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  return `${day} ${month} kl.${hour}:${minute} `
}

const TodoList = () => {
  const { todos, addTodo, removeTodo, toggleTodo, markAllComplete } = useTodoStore()
  const [newTodo, setNewTodo] = useState("")
  const [filter, setFilter] = useState("all")

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo)
      setNewTodo("")
    }
  }

  return (
    <TodoListContainer>
      <h1>Todo List</h1>

      <StyledInput>
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          placeholder="Add a new todo"
          aria-label="add a new todo" />
        <button aria-label="add todo" onClick={handleAddTodo}><FontAwesomeIcon icon={faPlus} /></button>
      </StyledInput>

      <StyledFilterButtons>
        <FilterButton
          aria-label="show all todos"
          $active={filter === "all"}
          onClick={() => setFilter("all")}>All</FilterButton>
        <FilterButton
          aria-label="show completed todos"
          $active={filter === "completed"}
          onClick={() => setFilter("completed")}>Completed</FilterButton>
        <FilterButton
          aria-label="show incomplete todos"
          $active={filter === "incomplete"}
          onClick={() => setFilter("incomplete")}>Incomplete</FilterButton>
      </StyledFilterButtons>

      <MobileBox>
        📝 Todo: {todos.length}
      </MobileBox>

      <TodoListStyled>
        {todos.filter((todo) => {
          if (filter === "completed") return todo.completed
          if (filter === "incomplete") return !todo.completed
          return true
        }).length === 0 && (
            <EmptyState role="presentation">
              <FontAwesomeIcon role="presentation" icon={faClipboardList} />
              <p>Your todo list is empty – time to add something!</p>
            </EmptyState>
          )}

        {todos.filter((todo) => {
          if (filter === "completed") return todo.completed
          if (filter === "incomplete") return !todo.completed
          return true
        })

          .map((todo) => (
            <TodoItem key={todo.id} $completed={todo.completed}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                aria-label="todo checkbox"
              />
              <span> {todo.text} - {formatDateFancy(todo.createdAt)}</span>
              <button aria-label="delete todo" onClick={() => removeTodo(todo.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
            </TodoItem>
          ))}
      </TodoListStyled>

      <button aria-label="mark all todos complete" onClick={markAllComplete}>All Todos done!</button>

    </TodoListContainer>
  )
}
export default TodoList