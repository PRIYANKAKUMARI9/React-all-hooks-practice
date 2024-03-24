import React, { useState } from 'react'

function Usereducerr() {
    const[reducer,setreducer]=useState(0);
  return (
    <div className='usereduer'>
      <h1>UseReducer use in react !!</h1>
       <button onClick={()=>setreducer(reducer+1)}>+</button>
       {reducer}
       <button onClick={()=>setreducer(reducer-1)}>-</button>
    </div>
  )
}

export default Usereducerr
