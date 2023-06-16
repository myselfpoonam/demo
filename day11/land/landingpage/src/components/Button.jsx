import React, { useState } from 'react'

const Button = () => {
    const [count, setCount]= useState(0)
    
const handleClick = ()=>{
    setCount(count+1)
}
const handleClicks = ()=>{
  if(count <= 0){
    return
  }else {
    setCount(count-1)
  }
}
  return (
    <div className='btn'>
      <button onClick={handleClick} > + </button>
      <span style={{fontSize:24}}>{count}</span>
      <button onClick={handleClicks}> - </button> 
    
    </div>
  )
}

export default Button
