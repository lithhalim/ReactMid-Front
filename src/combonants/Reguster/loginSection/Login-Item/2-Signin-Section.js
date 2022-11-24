import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Login_Create_Context } from '../../../../context-api/authntication-context'; 
import {motion} from "framer-motion";
import {Data_Signin_Use,SignupSchemaSignin,initialValuesSignin} from "../Login-Item/Data_Signin";




//Formik Input Section Added
import { Formik, Form, Field } from 'formik';

import "../style/style.scss";


//Combonants Import Section 
import SignIn_Notificarion from './3-SignIn_Notificarion&&buttons';

import { useNavigate } from 'react-router-dom';

   

const initialValues=initialValuesSignin;
const SignupSchema=SignupSchemaSignin;


function Signin_Section_Have() {

  const [statusEmail,setStatusEmail]=useState(false);
  const Navi=useNavigate()


  // sign In Section Send All Data
  const Get_AllDataHave=(data)=>{
    
    
  } 



  return (
    <>
          <motion.div className='signin-container' initial={{x:"-100vw"}} animate={{x:"0"}} transition={{duration:.5}}>
              <div className='signin-container-section'>
                <h3>Login</h3>
                          <Formik
                                    initialValues={initialValues}
                                    validationSchema={SignupSchema}
                                    onSubmit={Get_AllDataHave}
                                    >
                                    {({ errors, touched }) => (
                                        <Form>

                                          {Data_Signin_Use.map(({name,icon,type,placeholder},i)=>(
                                            <>
                                                <ul className='container-input' key={i}>
                                                    <li>{icon}</li>
                                                    <li>
                                                      <Field type={type} name={name}  placeholder={placeholder}/>
                                                    </li>
                                                </ul> 
                                                <p>
                                                  {errors[name] && touched[name] ? <div className='error-section'>{errors[name]}</div> : null}
                                                </p>

                                            </>                                       
                                          ))}

                                          <SignIn_Notificarion statusEmail={statusEmail}/>
                    
                                        </Form>
                                    )}
                      </Formik>      
              </div>
        </motion.div>
    </>
  )
}

export default Signin_Section_Have





