import React, { useState } from 'react'

function App() {

  const [ newItem , setNewItem ] = useState("Hai");
  // setNewItem('hai')

  return (
    <>
      <h1>Todo</h1>
      <form>
        <div>
          <label htmlFor="item">New Item</label>
          <input type="text" value={newItem} 
          onChange={e=> {setNewItem(e.target.value)}} 
          name="item" id="item" />
        </div>
        <button>Delete</button>
      </form>
      <h3>Todo List</h3>
      <ul style={{listStyleType: 'none'}} >
        <li>
          <label >
            <input type="checkbox"/>
            Item 1
          </label>
          <button>Delete</button>
        </li>
      </ul>
    </>
  )
}

export default App