import {useState} from 'react';

function NewItem({addTodo}){
  const [newItem , setNewItem ] = useState("");
  function handleSubmit(e){
    e.preventDefault()
    if(newItem == "") return
    addTodo(newItem)
    setNewItem("");
  }
  return (
    <form onSubmit={handleSubmit} > 
      <label>New Item</label>
      <input type="text" name="new" id="new" value={newItem} onChange={e=>setNewItem(e.target.value)} />
      <button type="submit" >Add</button>
    </form>
  )
}

export default NewItem