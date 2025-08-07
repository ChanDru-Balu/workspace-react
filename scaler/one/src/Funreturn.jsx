import React from 'react'

function Funreturn() {
    
    function giveMeNow(){
        return 'Function Returns'
    }

  return (
    <div>Return From Function : {giveMeNow()} </div>
  )
}

export default Funreturn