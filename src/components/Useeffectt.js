import React from 'react'
import { useState,useEffect } from 'react'

function Useeffectt() {
    //This is useEffect hook hai in this have two argument pass first is function and second is optional
   const[effect,seteffect]=useState("hello pri");
   const[count,setcount]=useState(0)
   useEffect(()=>{
    console.log("component did")
   },[])

   useEffect(()=>{
    
    console.log("componenet update")
    return ()=>{
        console.log('unmout')
    }
   },[effect])

   function incre(){
    setcount(count+1)
   }
    
  return (
    <div className='effeccttt'>
      <h1>useEffect uses !!</h1>
       <button onClick={()=>seteffect("priyanka")}>priyanka</button>
       <button onClick={()=>seteffect("deepmala")}>deepmala</button>
       <button onClick={()=>seteffect("jaymala")}>jaymala</button>
       <button onClick={()=>seteffect("anurag")}>anurag</button>
       <button onClick={()=>seteffect("school")}>school</button>click for increment
       <button onClick={incre}>{count}</button>
       <h2>{effect}</h2>
    </div>
  )
}

export default Useeffectt;
