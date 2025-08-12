import React from 'react'

function Basic(props) {
    function callMe(){
        alert(`Welcome ${props.name}`);
    }
  return (
    <button onClick={callMe} >Call me</button>
  )
}

export default Basic