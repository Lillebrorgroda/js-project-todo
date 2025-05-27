import styled from "styled-components"

export const TodoListContainer = styled.div`
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

export const StyledFilterButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`

export const FilterButton = styled.button`
  background-color: ${({ $active }) => ($active ? "#ff5546" : "#ffa69e")};
  color: #242424;
  border: none;
  padding: 10px 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 16px;

  &:hover {
    background-color: ${({ $active }) => ($active ? "#ffa69e" : "#ff5546")};
  }
`

export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  input[type="text"] {
    flex: 1;
    
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
      background-color: #ff5546;
    }
  }
`

export const TodoListStyled = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
`

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  span {
    flex: 1;
    margin-left: 10px;
    color: ${({ $completed }) => ($completed ? "#999" : "#242424")};
    font-size: 16px;
    text-decoration: ${({ $completed }) => ($completed ? "line-through" : "none")};
    transition: color 0.3s ease, text-decoration 0.3s ease;
    font-style: ${({ $completed }) => ($completed ? "italic" : "normal")};
    word-break: break-all;
  }

  input[type="checkbox"] {
    transform: scale(1.2);
  }

  button {
    background: none;
    border: none;
    color: #242424;
    cursor: pointer;
    font-size: 18px;

    &:hover {
      color: #ff5546;
      background: none;
    }
  }
`

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  color: #302f2f;
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
