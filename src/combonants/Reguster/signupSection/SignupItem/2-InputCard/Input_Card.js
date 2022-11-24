import React from 'react'
import { Field } from 'formik';

function Input_Card({dataUsing,touched,errors}) {
    const {name,icon,type,placeholder}=dataUsing
  return (
    <div>
        <ul className='container-input' >
            <li>{icon}</li>
            <li><Field type={type} name={name}  placeholder={placeholder}/></li>
        </ul> 
        <p>{errors[name] && touched[name] ? <div className='error-section'>{errors[name]}</div> : null}</p>
    </div>                                       
)
}

export default Input_Card