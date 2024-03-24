import React, { useState } from 'react'

function UseTestt() {
    let [state,setState]=useState(0);

function incre(){
    setState(state+1)
}
function dicre(){
    setState(state-1)
}
  return (
    <div className='buttonn'>
        <p>useState uses !!</p>
      <button onClick={incre}> + </button>{state}<button onClick={dicre}> - </button>
    </div>
  )
}

export default UseTestt
