import useTodoStore from "../store/todoStore"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"

const ClearContainer = styled.div`

  bottom: 20px;
  left: 20px;

  @media (min-width: 601px) {
    position: fixed;
    z-index: 1000;
  }
  `

const ClearTodos = () => {
  const clearTodos = useTodoStore((state) => state.clearTodos)

  return (
    <ClearContainer>
      <button onClick={clearTodos}><FontAwesomeIcon icon={faTrashCan} /> All Todos</button>
    </ClearContainer>
  )
}

export default ClearTodos