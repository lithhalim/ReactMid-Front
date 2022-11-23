import React, {  useState } from 'react';
import axios from 'axios';
import {motion} from "framer-motion"
import uuid from 'react-uuid';


//Formik Input Section Added
import { Formik, Form, Field } from 'formik';
//Combonants Import Section 
import SignUp_Notificarion from './3-Signup_Notificarion&&buttons';
import {SchemaSignup,InitialData,DatauseSign} from "../SignupItem/Data_Signup"

import "../style/style.scss";
import UploadPhoto from './AllOther_Filed/UploadPhoto';
import Select_Currency from './SelectCountry/SelectVuntry';
   

function Signup_Section_Have() {

  const [statusEmail,setStatusEmail]=useState(false);
  const [ImageUpload,setImageUpload]=useState(false)


    //Get All Data From The Form Reguster
    const Get_AllData=(data)=>{
        
      //Add Reguster Id Number
      data.regusterid=uuid();
      if(ImageUpload!==false){data.Image=ImageUpload?.url}
      console.log(data)
      data.country=data.country.split("###")[0]


      axios.post(`${process.env.REACT_APP_API}signup`,data).
      then((x)=>{
        if(x.data.status=="Email Is ok"){
          setStatusEmail("Email Ok Now Log In")
        }else if(x.data.status=="Email Is Taken"){
          setStatusEmail("Wmail Is Taken")
        }
    })

}  





  return (
    <>
          <motion.div className='signin-container' initial={{x:"-100vw"}} animate={{x:"0"}} transition={{duration:.5}}>
              <div className='signin-container-section'>
                <h3>Sign Up</h3>
                          <Formik
                                    initialValues={initialValues}
                                    validationSchema={SignupSchema}
                                    onSubmit={Get_AllData}
                                    >
                                    {({ errors, touched }) => (
                                        <Form>
                                              {DatauseSign.map(({name,icon,type,placeholder},i)=>(
                                                <>
                                                    <ul className='container-input' key={i}>
                                                        <li>{icon}</li>
                                                        <li><Field type={type} name={name}  placeholder={placeholder}/></li>
                                                    </ul> 
                                                    <p>{errors[name] && touched[name] ? <div className='error-section'>{errors[name]}</div> : null}</p>
                                                </>                                       
                                              ))}
                                              <Select_Currency />
                                              <UploadPhoto GetPhoto={(data)=>{setImageUpload(data)}}/>
                                              <SignUp_Notificarion statusEmail={statusEmail}/>
                                              
                                        </Form>
                                    )}
                         </Formik>      
              </div>
        </motion.div>
    </>
  )
}

export default Signup_Section_Have;

// initial Value
const initialValues=InitialData;
//you schema style validation 
const SignupSchema = SchemaSignup






