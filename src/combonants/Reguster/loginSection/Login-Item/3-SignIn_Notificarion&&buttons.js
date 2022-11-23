import React from 'react';
import {motion} from "framer-motion";

import {BsFacebook,BsGithub,BsTwitter} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';

function SignIn_Notificarion({statusEmail}) {
  const Navi=useNavigate();

  const SignupGo=()=>{Navi("/signup")}

  return (
    <div className='button-container'>
        <motion.button   className='submit-botton' type="submit">Log In</motion.button>  
        <h3 onClick={SignupGo}>Sign Up Now ....</h3>        
        <p className='special-text' >{statusEmail!==false?<span>{statusEmail}</span>:<></>} </p>
        <ul className='icon-display'>
          <li><BsFacebook/></li>
          <li><BsGithub/></li>
          <li><BsTwitter/></li>
        </ul>
    </div>
  )
}

export default SignIn_Notificarion