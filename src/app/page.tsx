
export const revalidate = 0 

export default function Home() {
  return (
    <> 
      <AddTodo />
      {/* @ts-expect-error Server Component */}
      <TodoList />
    </>
  )
}
