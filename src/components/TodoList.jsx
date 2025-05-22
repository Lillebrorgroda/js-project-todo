import React, { useState } from "react"
import useTodoStore from "../store/todoStore"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan, faPlus } from "@fortawesome/free-solid-svg-icons"
import { faClipboardList } from "@fortawesome/free-solid-svg-icons"


const TodoListContainer = styled.div`
  
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
  padding: 10px;
  gap: 10px;
  background-color: #93e1d8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  

  @media (min-width: 768px) {
    width: 100%;
    padding: 10px;
    h1 {
      font-size: 22px;
    }
  }

  @media (min-width: 1024px) {

    padding: 20px;
    h1 {
      font-size: 28px;
    }
  }
  @media (min-width: 1440px) { 
  
    padding: 30px;
    h1 {
      font-size: 32px;
    }
  }

`
const StyledFilterButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  `
const FilterButton = styled.button`
    background-color: ${({ active }) => (active ? "#ff5546;" : "#FFB9B3")};
    color: #242424;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
   

     &:hover {
      background-color: ${({ active }) => (active ? "#ffa69e" : "#FFB9B3")};
     } 
  `

const StyledInput = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin-bottom: 10px;

input[type = "text"] {
  flex: 1;
  /* max-width: 100px; */
}

button {
  background-color: #ffa69e;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  color: #242424;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ff8c8c;
  }
}
`

const TodoListStyled = styled.ul`
list-style: none;
padding: 0;
width: 100%;
max-width: 600px;
`

const TodoItem = styled.li`
display: flex;
align-items: center;
justify-content: space - between;
background-color: #fff;
padding: 12px 16px;
border-radius: 8px;
margin-bottom: 10px;
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  span {
  flex: 1;
  margin-left: 10px;
  color: ${({ completed }) => (completed ? "#999" : "#333")};
  font-size: 16px;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  transition: color 0.3s ease, text - decoration 0.3s ease;
  font-style: ${({ completed }) => (completed ? "italic" : "normal")};
}

input[type = "checkbox"] {
  transform: scale(1.2);
}

  button {
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  font-size: 18px;

    &:hover {
    color: #ffa69e;
    background: none;
  }
}
`
const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  color: #666;
  font-size: 18px;
  animation: fadeIn 1s ease;

  svg {
    font-size: 80px;
    margin-bottom: 20px;
    color: #ffa69e;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`



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
          active={filter === "all"}
          onClick={() => setFilter("all")}>All</FilterButton>
        <FilterButton
          aria-label="show completed todos"
          active={filter === "completed"}
          onClick={() => setFilter("completed")}>Completed</FilterButton>
        <FilterButton
          aria-label="show incomplete todos"
          active={filter === "incomplete"}
          onClick={() => setFilter("incomplete")}>Incomplete</FilterButton>
      </StyledFilterButtons>
      <TodoListStyled>
        {todos.filter((todo) => {
          if (filter === "completed") return todo.completed
          if (filter === "incomplete") return !todo.completed
          return true
        }).length === 0 && (
            <EmptyState>
              <FontAwesomeIcon icon={faClipboardList} />
              <p>Your todo list is empty – time to add something!</p>
            </EmptyState>
          )}
        {todos.filter((todo) => {
          if (filter === "completed") return todo.completed
          if (filter === "incomplete") return !todo.completed
          return true
        })

          .map((todo) => (
            <TodoItem key={todo.id} completed={todo.completed}>
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