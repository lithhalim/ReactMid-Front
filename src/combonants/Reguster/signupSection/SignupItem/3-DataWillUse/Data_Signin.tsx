
import {FcLock,FcManager} from "react-icons/fc";
import * as Yup from 'yup';


let Data_Signin_Use=[
    {name:"email",icon:<FcManager/>,placeholder:"Email",type:"text"},
    {name:"password",icon:<FcLock/>,placeholder:"Password",type:"password"},
]


const initialValues={
    email: '',
    password:'',
  }

//you schema style validation 
const SignupSchema = Yup.object().shape({
    email:Yup
      .string()      
      .required("Mail is required"),
    password: Yup.string()
       .label('Password')
       .required(),
     });
  
  
  


     export {
        SignupSchema as SignupSchemaSignin,
        initialValues as initialValuesSignin,
        Data_Signin_Use as Data_Signin_Use
    }
    