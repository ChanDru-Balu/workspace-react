import { useState , useEffect } from "react";
import NewItem from "./components/NewItem";
import TodoList from "./components/TodoList";

function App(){

  const [todos , setTodos] = useState(()=>{
    let localTodos = localStorage.getItem('Items');
    if(localTodos == null) return []
    return JSON.parse(localTodos)
  })

  useEffect(()=>{
    localStorage.setItem('Items',JSON.stringify(todos))
  },[todos])

  function addTodo(title){
    console.log({title})
    setTodos([...todos , {id: crypto.randomUUID() , title , completed: false}])
  }

  
  function toggleTodo(id,completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id == id){
          return {...todo , completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos=> currentTodos.filter(todo=> todo.id != id) )
  }

  return (
    <>
      <h1>Todo</h1>
      <NewItem  addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App