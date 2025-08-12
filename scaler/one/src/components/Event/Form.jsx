import React, { useState } from 'react'

function Form() {
    const [text , setText] = useState('');
  return (
    <div>
        <form>
            <input onChange={e=>setText(e.target.value)} type='text' value={text} />
            <h3>{text}</h3>
        </form>
    </div>
  )
}

export default Form