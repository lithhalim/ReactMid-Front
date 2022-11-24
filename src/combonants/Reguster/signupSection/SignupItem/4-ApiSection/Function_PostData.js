import uuid from 'react-uuid';
import axios from 'axios';
import jwt_decode from "jwt-decode";


export default function PostData_Reguster(
  TypeSelect,data,
  ImageUpload,setStatusEmail,
  loginContext,RegusterContext,Navi){
    
  
      //Add Reguster Id Number
      if(ImageUpload!==false){data.Image=ImageUpload?.url}


      //-----------------------------------Signup Section -----------------------------------//
      if(TypeSelect=="Signup"){
        if(data.country==undefined){
          setStatusEmail("Ypu Need To Specific Country")
        }else{
          data.country=data.country.split("###")[0];
          data.regusterid=uuid();
          axios.post(`${process.env.REACT_APP_API}signup`,data).
          then((x)=>{
            if(x.data.status=="Email Is ok"){
              window.location.href="/"
              setStatusEmail("Email Ok Now Log In")
            }else if(x.data.status=="Email Is Taken"){
              setStatusEmail("Wmail Is Taken")
            }
        })  
        }
      }
      //---------------------------------Update Section -------------------------------------//
      else if(TypeSelect=="update"){
        data.country=data.country.split("###")[0];
        data.regusterid=RegusterContext.UpdateRegusterId;
        axios.post(`${process.env.REACT_APP_API}updateUser`,data).then((dataResponse)=>{
          Navi("/Admin")
        }).catch((err)=>{
        setStatusEmail("You Cant Update")
      })  
      }
      //-------------------------------Sign in Section -------------------------------------//
      else if("signin"){
            //Get email And Pass And Decoded `BASIC 5464d5s45d454s55dsdsadsa` And Send In Header
            const {email,password} =data;
            const decoded=btoa(`${email}:${password}`)
        
        
            //Send In Header Becuse More Secure And In Get And Post Have Header put Get Dont Have Body
            axios.post(`${process.env.REACT_APP_API}signin`,{
                    headers:{ 
                    'Content-Type': 'application/json' ,
                    'Accept': 'application/json',
                    "authorization":`BASIC ${decoded}` }
            }).then((x)=>{
            //send the accsess Token To User To Useit
            if(x.data.accessToken==="Error Email Or Password"){
                    setStatusEmail("Wrong Email Or Password")
            }else{
                    const decoded = jwt_decode(x.data.accessToken);
                    window.localStorage.SaveAuthnticaiton=JSON.stringify(decoded);
                    loginContext.setAllUserData(decoded)
                            
                    loginContext.setsignin(false);
                    setStatusEmail(false);
                    Navi("/Admin")
            }
            }).catch((errors)=>{
                    //if The Email Or The Password ARE WRONG
                    setStatusEmail("Wrong Email Or Password")
            });
        
      }
  }
