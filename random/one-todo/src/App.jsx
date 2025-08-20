import React, { useState } from 'react'

function App() {

  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);

  function addTodos(e) {
    e.preventDefault()
    setTodos(currentTodos => [...currentTodos, { id: crypto.randomUUID(), task: newItem, completed: false }])
    setNewItem('')
  }

  function toggleTodo(id , completed){
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
    setTodos(currentTodos=> currentTodos.filter(todo=>todo.id !== id) )
  }

  return (
    <>
      <h1>To-Do </h1>

      <form >
        <label>New Item</label>
        <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} name="item" id="item" />
        <button onClick={addTodos} >Add</button>
      </form>

      <h2>Todo List</h2>
      <ul style={{ listStyleType: 'none' }} >
        {todos.map(todo => {
          return <li key={todo.id} >
            <input type="checkbox" checked={todo.completed} onChange={(e)=>toggleTodo(todo.id,e.target.checked)} name="todo" id="todo" />
            {todo.task}
            <button onClick={()=>deleteTodo(todo.id)} >Delete</button>
          </li>
        })}

      </ul>
    </>
  )
}

export default App