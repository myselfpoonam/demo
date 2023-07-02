import React from 'react'

const Moments = ({img}) => {
  return (
    <div className=''>
        <div className='w-18 h-18 rounded-full flex justify-center items-center border-2 border-blue-300'>
      <img src={img} alt='moments image' className='w-14 h-14  rounded-full'/>
    </div>
    </div>
  )
}

export default Moments
