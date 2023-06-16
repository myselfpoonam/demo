import React from 'react'

const Register = (props) => {
  
  return (
    <div>
        <div className='main1'>
     
      <form>
      <div className='content1'>
      <div className='title1'>
       <h1>Chatapp<span> Registration</span></h1>
         <p>Registration to your account</p>
      </div>
     <div className='input1'>
        <input type='name' className='fullname' placeholder='Your Fullname'/><br/>
       <input type='email'  className= 'email'placeholder='Email'/><br/>
       <input type='password' className='password'placeholder='Password'/><br/>
       <input type='password'  className='password'placeholder='Confirm Password'/>

      </div>
      
      <div className='btn1'>
      <button type='button' onClick={()=> props.onFormSwitch('login')}>Register</button>
       
      </div>
    </div>
    </form>
  </div>
        
   
     
    </div>
  )
}

export default Register
