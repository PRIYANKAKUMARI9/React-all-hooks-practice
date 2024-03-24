import React, { useMemo, useState } from 'react'

function Usermemo() {
    const[add,setadd]=useState(0);
    const[mns,setmns]=useState(100)
    
  const multiplication=useMemo (function multi(){
  console.log("******")
  return add*10;
 },[add])
    
  return (
    <div className='memeo'>
      <h1>This is UserMemo hook ...!!</h1>
      {multiplication}<br/>
      <button onClick={()=>setadd(add+1)}>addition</button>
      {add}
      <button onClick={()=>setmns(mns-1)}>mnus</button>
      {mns}
    </div>
  )
}

export default Usermemo
