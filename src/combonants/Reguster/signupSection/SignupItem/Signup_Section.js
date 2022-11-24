import React, {  useState ,useContext} from 'react';
import {motion} from "framer-motion"

import PostData_Reguster from './4-ApiSection/Function_PostData';

//Formik Input Section Added
import { Formik, Form } from 'formik';
//Combonants Import Section 
import SignUp_Notificarion from './6-SubmitAndNotification/3-Signup_Notificarion&&buttons';

import "../style/style.scss";
import UploadPhoto from './1-UploadPhotoSection/UploadPhoto';
import Select_Currency from './SelectCountry/SelectVuntry';
import SignupButton from './5-Signup_Button/SignupButton';
import { Login_Create_Context } from '../../../../context-api/authntication-context';
import { UpdateReguster_Create_Context } from '../../../../context-api/Update_Reguster_Context';
import { useNavigate } from 'react-router-dom';
import Input_Card from './2-InputCard/Input_Card';
   

function Signup_Section_Have({DataWllUse}) {

  const [statusEmail,setStatusEmail]=useState(false);
  const [ImageUpload,setImageUpload]=useState(false);
  const loginContext=useContext(Login_Create_Context);
  const RegusterContext=useContext(UpdateReguster_Create_Context);
  const UpdateReguster=useContext(UpdateReguster_Create_Context);
  const Navi=useNavigate();






    //Use For Update And For Reguster Section For Two Depend On Type
    const Get_AllData=(data)=>{
      PostData_Reguster(
        DataWllUse.TypeSelect,data,
        ImageUpload,setStatusEmail,loginContext,
        RegusterContext,Navi)
    }  




    // initial Value
    const initialValues=DataWllUse.initialValues;
    //you schema style validation 
    const SignupSchema = DataWllUse.SignupSchema


  return (
    <>
          <motion.div className='signin-container' initial={{x:"-100vw"}} animate={{x:"0"}} transition={{duration:.5}}>
              <div className='signin-container-section'>
                <h3>{DataWllUse.NameType}</h3>
                          <Formik
                                    initialValues={initialValues}
                                    validationSchema={SignupSchema}
                                    onSubmit={Get_AllData}
                                    >
                                    {({ errors, touched }) => (
                                        <Form>

                                              {DataWllUse.DataInput.map((dataUsing,i)=>(
                                                <Input_Card dataUsing={dataUsing} touched={touched} errors={errors} key={i}/>
                                              ))}

                                              {DataWllUse.NameType!=="Sign in"?
                                                  <>
                                                    <Select_Currency />
                                                    <UploadPhoto GetPhoto={(data)=>{setImageUpload(data)}}/>
                                                  </>
                                                :<>
                                                    <SignupButton UpdateReguster={UpdateReguster}/>
                                                </>}

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







