function TodoItem({id, title , completed , toggleTodo , deleteTodo}){
    return (
        <li key={id} >
            <label>
                <input type="checkbox" name="todo" id="todo" 
                checked={completed} 
                onChange={(e)=>toggleTodo(id,e.target.checked)} />
                {title}
            </label>
            <button onClick={()=>deleteTodo(id)} >Delete</button>
        </li>
    )
}

export default TodoItem