import React from 'react'

function TodoList() {
  return (
    <>
    <div>TodoList</div>
    <br />
    <div className='single-row'>
        <input type='checkbox' label='name' />
        <p>Name</p>
        <button >delete</button>
    </div>
    </>
  )
}

export default TodoList