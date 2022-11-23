import React from 'react'
import Signin_Section_Have from './Login-Item/2-Signin-Section';
import ImageLogin from "../../../assest/Login/loginImage.png"

function Login_Section() {
  return (
    <div  className='login-container'>
      <div className='holder-login'>
          <div className='containerAllData'>
            <Signin_Section_Have/>
            <img  style={{width:"100%",height:"60vh"}} src={ImageLogin} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Login_Section