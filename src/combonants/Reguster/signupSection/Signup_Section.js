import React from 'react'
import Signup_Section_Have from './SignupItem/Signup_Section'
import ImageLogin from "../../../assest/create-item/create-item.png"

function Signup_Section() {
  return (
    <div  className='login-container'>
      <div className='holder-login'>
          <div className='containerAllData'>
            <Signup_Section_Have/>
            <img  style={{width:"100%",height:"60vh"}} src={ImageLogin} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Signup_Section