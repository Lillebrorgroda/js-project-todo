import { create } from "zustand"
import { persist } from "zustand/middleware"

const useTodoStore = create(persist((set) => ({
  todos: [],

  addTodo: (todo) => set((state) => ({
    todos: [...state.todos, {
      id: Date.now(),
      text: todo,
      completed: false,
      createdAt: new Date().toISOString(),
    }],
  })),

  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id),
  })),

  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    ),
  })),
  markAllComplete: () => set((state) => ({
    todos: state.todos.map((todo) => ({ ...todo, completed: true })),
  })),
  clearTodos: () => set(() => ({
    todos: [],
  })),

}),

  {
    name: "todo-storage",
  }

))
export default useTodoStore