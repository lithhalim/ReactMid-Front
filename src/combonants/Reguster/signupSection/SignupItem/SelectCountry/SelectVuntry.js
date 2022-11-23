import React, {  useEffect, useState } from 'react';
import CountryData from './cuntryData';
import {  Field } from 'formik';
import "./style/style.scss"
import ImageFirst from "../../../../../assest/flags/Algeria.png"
 



function Select_Currency() {
    const [ImageCurrency,setImageCurrency]=useState({name:"Algeria",image:ImageFirst});

    
    useEffect(()=>{
      document.querySelector(".currency-check")?.addEventListener("change",selectCurrency)
    },[])

    const selectCurrency=(event)=>{
       let datause= event.currentTarget.value.split("###")
       const[name,image]=datause;

       //Set The Image Section 
       setImageCurrency({image:image,name:name});
    }


  return (
    <div className='container-currency-section-have'>
          {ImageCurrency!==undefined?<img src={ImageCurrency.image} alt="" />:<></>}
          <Field name="country"  className="currency-check"  as="select">
              {CountryData.map(({name,image},i)=>(
                      <option value={`${name}###${image}`} key={i} > {name}</option>
                  ))}
          </Field>
    </div>
  )
}

export default Select_Currency
