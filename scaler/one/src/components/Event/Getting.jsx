import React, { useState } from 'react'

function Getting() {
    const [name , setName ] = useState('');
  return (
    <input onChange={(e)=>setName(e.target.value)} type="text" value={name} />
  )
}

export default Getting