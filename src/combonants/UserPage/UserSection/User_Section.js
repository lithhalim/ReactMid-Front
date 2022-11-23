import React, { useState } from 'react';
import "./style/style.scss";
import {motion} from "framer-motion"
import Table_Get_Data_AllUser from './User-Table/User_Table';
import {BiSearch} from "react-icons/bi";


function User_Section() {
  const [SearchData,setSearchData]=useState("");

  const GetInputData=(event)=>{
    setSearchData(event.currentTarget.value.toLowerCase())
  }
  
  return (
    <motion.div className='container-product-main'
      initial={{x:"-100vw"}}
      animate={{x:0}}
      transition={{duration:.5}}>
        <ul className='create-product-header'>
            <li></li>
            <li><span><BiSearch/></span> <input type="text" name="" id="" placeholder='First Name && Last Name ' onChange={GetInputData} /></li>
        </ul>
        <Table_Get_Data_AllUser SearchData={SearchData}/>
    </motion.div>
  )
}

export default User_Section