import React, { useContext } from 'react';
import {GrUpdate} from "react-icons/gr";
import { Alert_Create_Context } from '../../../../../context-api/Alert_context';
import alertImage from "../../../../../../src/assest/alert/alert1.gif";
import { Login_Create_Context } from '../../../../../context-api/authntication-context';
import { UpdateReguster_Create_Context } from '../../../../../context-api/Update_Reguster_Context';
import { useNavigate } from 'react-router-dom';


function UpdateColumn({params}) {
    const Alert_Create_Context_Section=useContext(Alert_Create_Context);
    const Login_Create_ContextAuth=useContext(Login_Create_Context);
    const UpdateReguster_Create_Context_Section=useContext(UpdateReguster_Create_Context);
    const RegusterContext=useContext(UpdateReguster_Create_Context);
    const Navi=useNavigate()

    const UpdateButton=(event)=>{
        UpdateReguster_Create_Context_Section.setTypeSelect("update")
        RegusterContext.setUpdateRegusterId(event.currentTarget.getAttribute("datatype"));
        Navi("/")
        
        // if(Login_Create_ContextAuth.AllUserDaata.role=="admin"){
        // }else{
        //     Alert_Create_Context_Section.setRunAlert({Value:"Just Admin Can Do That",image:alertImage})
        // }  
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