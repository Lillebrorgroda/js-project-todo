import useTodoStore from "../store/todoStore"
import styled from "styled-components"

const CountContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-align: left;

    @media (max-width: 600px) {
    display: none;
  }
`

const Heading = styled.h2`
  margin-bottom: 15px;
  color: #333;
`

const CountText = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #444;
  font-weight: 500;


`

const TodoListCount = () => {
  const todos = useTodoStore((state) => state.todos)

  const todoCount = todos.length
  const completedCount = todos.filter((todo) => todo.completed).length
  const incompleteCount = todoCount - completedCount

  return (
    <CountContainer>
      <Heading>Stats</Heading>
      <CountText>Total: {todoCount}</CountText>
      <CountText>✔ Done: {completedCount}</CountText>
      <CountText>⏳ Left: {incompleteCount}</CountText>
    </CountContainer>
  )
}

export default TodoListCount

