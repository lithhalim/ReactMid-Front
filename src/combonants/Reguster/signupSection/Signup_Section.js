import React, { useContext } from 'react'
import Signup_Section_Have from './SignupItem/Signup_Section'
import ImageLogin from "../../../assest/create-item/create-item.png";
import {SchemaSignup,InitialDataSignup,Data_Signup_Use} from "./SignupItem/3-DataWillUse/Data_Signup";
import {Data_Signin_Use,SignupSchemaSignin,initialValuesSignin} from "./SignupItem/3-DataWillUse/Data_Signin";
import {Data_Update_Use,InitialDataUpdate,SchemaUpdate} from "./SignupItem/3-DataWillUse/Data_Update"
import { UpdateReguster_Create_Context } from '../../../context-api/Update_Reguster_Context';




function Signup_Section() {
  const TypeReguster=useContext(UpdateReguster_Create_Context);


      let DataWllUse;
      switch (TypeReguster.TypeSelect) {
        case "Signup": DataWllUse={
          initialValues:InitialDataSignup,
          SignupSchema:SchemaSignup,
          DataInput:Data_Signup_Use,
          NameType:"Sign Up",
          TypeSelect:TypeReguster.TypeSelect
        }
          
          break;
        case "signin": DataWllUse={
          initialValues:initialValuesSignin,
          SignupSchema:SignupSchemaSignin,
          DataInput:Data_Signin_Use,
          NameType:"Sign in",
          TypeSelect:TypeReguster.TypeSelect

        }
          break;

        case "update": DataWllUse={
          initialValues:InitialDataUpdate,
          SignupSchema:SchemaUpdate,
          DataInput:Data_Update_Use,
          NameType:"UpdateData",
          TypeSelect:TypeReguster.TypeSelect
        } 
          break;    
      }

  return (
    <div  className='login-container'>
      <div className='holder-login'>
          <div className='containerAllData'>
            <Signup_Section_Have DataWllUse={DataWllUse} />
            <img  style={{width:"100%",height:"60vh"}} src={ImageLogin} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Signup_Section