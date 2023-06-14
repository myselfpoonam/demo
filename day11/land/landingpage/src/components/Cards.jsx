import React from 'react'
import Button from './Button'

const Cards = ({image,title,price,circle,color,close}) => {
  return (
    <div className='maincontainer'>
    <div className='main'>
        <div className='img'>
        <img src={image} alt='image' ></img>
        </div>
<div className='content'>
        <div className='title'>
          <h2 style={{textAlign:'left'}}>{title}</h2>
        </div>
     <div className='circle'>
      {circle}
      <div className='color'> {color}
      </div>
     </div>
     
      
      <p>{price}</p>
      </div>

      <div>
        <Button/>
      </div>
    <div className='close'>
    {close}
    </div>
    </div>
    </div>
  )
}

export default Cards
