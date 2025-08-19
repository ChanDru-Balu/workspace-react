import React from 'react'

function App() {
  return (
    <>
      <h1>Todo</h1>
      <form>
        <div>
          <label htmlFor="item">New Item</label>
          <input type="text" name="item" id="item" />
        </div>
        <button>Delete</button>
      </form>
      <h3>Todo List</h3>
      <ul style={{listStyleType: 'none'}} >
        <li>
          <label >
            <input type="checkbox" name="" id="" />
            Item 1
          </label>
          <button>Delete</button>
        </li>
      </ul>
    </>
  )
}

export default App