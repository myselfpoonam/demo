import React from 'react'

const Cards = ({title,images,text,symbol,price}) => {
  return (
    <div className='main'>
        <div className='content'>
         <div className='img'>
          <img src={images}alt=''></img>
          </div>
          <div className='title'>
          <h2>{title}</h2>
          <p>{text}</p>
          </div>
          <div className='price'>
          <p>{symbol}</p>
          <h5>{price}</h5>
          </div>
        </div>
    </div>
  )
}

export default Cards
