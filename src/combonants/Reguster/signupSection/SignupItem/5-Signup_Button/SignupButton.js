import React,{useContext} from 'react';
import {BsFacebook,BsGithub,BsTwitter} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import "./style/style.scss"


function SignupButton({UpdateReguster}) {
  const Navi=useNavigate()

    const SelectSignUp=()=>{
        UpdateReguster.setTypeSelect("Signup")
        Navi("/")
    }
  return (
    <div className='cintainer-signup-button-section' >
        <h4 onClick={SelectSignUp}>SignupNow</h4>
        <ul className='icon-display'>
          <li><BsFacebook/></li>
          <li><BsGithub/></li>
          <li><BsTwitter/></li>
        </ul>
    </div>
  )
}

export default SignupButton