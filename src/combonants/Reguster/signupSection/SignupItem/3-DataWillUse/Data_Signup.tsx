
import {FcLock,FcManager,FcBusinessman,FcAddressBook} from "react-icons/fc";
import * as Yup from 'yup';



//you schema style validation 
  const SignupSchema = Yup.object().shape({
    email:Yup
    .string()      
    .required("Eamil is required"),
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
        email:'',
        firstName: '',
        lastName: '',
        country:'Algeria',
        password:'',
    }
      

const Data_Signup_Use=[
    {name:"email",icon:<FcAddressBook/>,placeholder:"Eamil",type:"email"},
    {name:"firstName",icon:<FcManager/>,placeholder:"First Name",type:"text"},
    {name:"lastName",icon:<FcBusinessman/>,placeholder:"Last Name",type:"text"},
    {name:"password",icon:<FcLock/>,placeholder:"Password",type:"password"},
]

export {
    SignupSchema as SchemaSignup,
    initialValues as InitialDataSignup,
    Data_Signup_Use as Data_Signup_Use
}
