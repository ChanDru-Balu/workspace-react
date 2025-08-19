import React from 'react'

function NewItem() {
  return (
    <div>
        <h3  >New Item</h3>
        <input type='text' className='todo-input' />
        <br />
        <button>Add</button>
    </div>
  )
}

export default NewItem