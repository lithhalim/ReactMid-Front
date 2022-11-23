import React,{useContext} from 'react';


// Table Nnd Tyle Section 
import { DataGrid } from '@mui/x-data-grid';
import "./style/style.scss";
import {motion} from "framer-motion";
import { Login_Create_Context } from '../../../../context-api/authntication-context';
import ImageColumn from './ColumnTaable/1-ImageColumn';
import CatagoryColumn from './ColumnTaable/2-CatagoryColumn';
import DeleteColumn from './ColumnTaable/3-deleteColumn';
import UpdateColumn from './ColumnTaable/4-UpdateColumn';
import UsePosts from './FetchDataItem';





function Table_Get_Data_AllUser({SearchData}) {
    const Login_Create_ContextAuth=useContext(Login_Create_Context);

    const {  data,isLoading } = UsePosts(Login_Create_ContextAuth);




    
  
      const columns = [
        { field: 'image', headerName: 'Image ', width:180, headerAlign: 'center',align:"center", 
           renderCell:(params)=>{return(<ImageColumn params={params}/>)}},
        { field: 'firstName', headerName: 'First Name ', width:150 ,   headerAlign: 'center',align:"center"     },
        { field: 'lastName', headerName: 'Last Name', width:150 ,    headerAlign: 'center',align:"center"    },
        { field: 'email', headerName: "Email" , width:150,  headerAlign: 'center',align:"center" },
        { field: 'role', headerName: 'Role ', width:200, headerAlign: 'center',align:"center", 
            renderCell:(params)=>{return(<CatagoryColumn params={params}/>)}},
        { field: 'Delete', headerName: 'Delete ', width:200, headerAlign: 'center', align:"center", 
            renderCell:(params)=>{return(<DeleteColumn params={params} />)}},
        { field: 'Update', headerName: 'Update ', width:200, headerAlign: 'center', align:"center", 
            renderCell:(params)=>{return(<UpdateColumn params={params} />)}},
    ];
      
    
    
      //To get All Data I Have
      const rows =data?data?.
      filter((data)=>(data.firstName.toLowerCase()
      .startsWith(SearchData))):<></>
    
    
    
      return (
        <motion.div className='product-container' 
        style={{height:"85vh"    }}
        >
            <DataGrid rows={rows}  columns={columns}  rowHeight={55}
               sx={{ fontWeight: 'bold'}}  />
        </motion.div>
      );
    }
    

export default Table_Get_Data_AllUser



