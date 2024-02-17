import TodoList from "./components/TodoList"
import AddTodo from "./components/addTodo/AddTodo"

export const revalidate = 0

export default function Home() {

  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  )
}