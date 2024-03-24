import React, { useRef, useState } from 'react'

function Usereff() {
    //useref jo hota wo directly dom ko manipulate krta hai ex:- colore change,text change,etc
    const[userf,setuserf]=useState("priyanka");
    const refEliment=useRef("");
    console.log(refEliment)
    function rstbtn(){
        setuserf("")
        refEliment.current.focus()
    }
    function chngclr(){
        refEliment.current.style.color='red'
    }
    //secon example
    
    function handlref(){
        console.log(refEliment,"this is secind useref")
        refEliment.current.focus()
        console.log(refEliment.current.value)
        refEliment.current.style.color="green"
    }
  return (
    <div className='reff'>
        <h1>UseRef use in react !!</h1>
      <input ref={refEliment} type='text' value={userf} onChange={(e)=>setuserf(e.target.value)}></input>
      <button onClick={rstbtn}>Resest</button>
      <button onClick={chngclr}>color change</button>
      <p>second example useref</p>
      <input type='text' ref={refEliment}></input>
      <button onClick={handlref}>click !!</button>

    </div>
  )
}

export default Usereff
