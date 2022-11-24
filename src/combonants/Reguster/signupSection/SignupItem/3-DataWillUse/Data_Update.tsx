
import {FcLock,FcManager,FcBusinessman} from "react-icons/fc";
import * as Yup from 'yup';



//you schema style validation 
  const SignupSchema = Yup.object().shape({
    firstName:Yup
      .string()      
      .required("firstName is required"),
    lastName:Yup
      .string()      
      .required("lastName is required"),
    country:Yup
      .string(),  
    password: Yup.string()
       .label('Password')
       .required(),
     });

     

const initialValues={
        firstName: '',
        lastName: '',
        country:'Algeria',
        password:'',
    }
      

const Data_Signup_Use=[
    {name:"firstName",icon:<FcManager/>,placeholder:"First Name",type:"text"},
    {name:"lastName",icon:<FcBusinessman/>,placeholder:"Last Name",type:"text"},
    {name:"password",icon:<FcLock/>,placeholder:"Password",type:"password"},
]

export {
    SignupSchema as SchemaUpdate,
    initialValues as InitialDataUpdate,
    Data_Signup_Use as Data_Update_Use
}
