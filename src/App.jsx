import TodoList from "./components/TodoList"
import TodoListCount from "./components/TodoListCount"
import ClearTodos from "./components/ClearTodos"
import GlobalStyle from "./styles/GlobalStyle"


export const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoList />
      <TodoListCount />
      <ClearTodos />


    </>
  )
}
