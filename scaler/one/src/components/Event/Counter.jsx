import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(4)

    function increment(){
        setCount(count+1)
    }

    function decrement(){
        setCount(count-1)
    }

  return (
    <>
    <div>Counter: {count}</div>
    <button onClick={increment} >Increment</button>
    <button onClick={decrement} >Decrement</button>
    </>
  )
}

export default Counter