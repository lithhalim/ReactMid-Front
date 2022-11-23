import React, { useContext } from 'react';
import {GrUpdate} from "react-icons/gr";
import { Alert_Create_Context } from '../../../../../context-api/Alert_context';
import alertImage from "../../../../../../src/assest/alert/alert1.gif";
import { Login_Create_Context } from '../../../../../context-api/authntication-context';
import UsePosts from '../FetchDataItem';


function UpdateColumn({params}) {
    const Alert_Create_Context_Section=useContext(Alert_Create_Context);
    const Login_Create_ContextAuth=useContext(Login_Create_Context);
    const { refetch } = UsePosts(Login_Create_ContextAuth);

    const UpdateButton=()=>{
        if(Login_Create_ContextAuth.AllUserDaata.role=="admin"){
            refetch()  
        }else{
            Alert_Create_Context_Section.setRunAlert({Value:"Just Admin Can Do That",image:alertImage})
        }  
    }

  return (
    <div className='Update-Product'>
        <button datatype={params.row.regusterid}   onClick={UpdateButton}>
            <span>Update</span> <span style={{color:"white"}}><GrUpdate/></span>
        </button>
    </div>
)
}

export default UpdateColumn