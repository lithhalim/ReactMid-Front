import React from 'react';
import {motion} from "framer-motion"

function SignUp_Notificarion({statusEmail}) {

  return (
    <div className='button-container'>
        <motion.button   className='submit-botton' type="submit">Submit All Data</motion.button>  
        <p className='special-text' >{statusEmail!==false?<span>{statusEmail}</span>:<></>} </p>
    </div>
  )
}

export default SignUp_Notificarion