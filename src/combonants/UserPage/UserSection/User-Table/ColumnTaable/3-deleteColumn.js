import React, { useContext } from 'react';
import alertImage from "../../../../../../src/assest/alert/alert1.gif";
import {RiDeleteBin5Line} from "react-icons/ri";
import { Alert_Create_Context } from '../../../../../context-api/Alert_context';
import axios from 'axios';
import { Login_Create_Context } from '../../../../../context-api/authntication-context';
import UsePosts from '../FetchDataItem';


function DeleteColumn({params}) {
    const Alert_Create_Context_Section=useContext(Alert_Create_Context);
    const Login_Create_ContextAuth=useContext(Login_Create_Context);

    const { refetch } = UsePosts(Login_Create_ContextAuth);


    const deleteItem=(event)=>{
        if(Login_Create_ContextAuth.AllUserDaata.role=="admin"){
          let regusterid=event.currentTarget.getAttribute("datatype");
          axios.post(`${process.env.REACT_APP_API}removeUser`,{regusterid:regusterid})
          refetch()  
        }else{
          Alert_Create_Context_Section.setRunAlert({Value:"Just Admin Can Do That",image:alertImage})
        }
      }

  return (
    <div className='delete-Product'>
        <button datatype={params.row.regusterid} onClick={deleteItem} >
            <span>Delete</span> <span><RiDeleteBin5Line/></span>
        </button>
    </div>
)
}

export default DeleteColumn