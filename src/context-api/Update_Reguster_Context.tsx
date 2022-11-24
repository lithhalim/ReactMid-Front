import React, { useState } from "react";

//use to create the context 
export const UpdateReguster_Create_Context=React.createContext<any|null>(null);

interface ContextChildreen{
  children:React.ReactNode
}


export function UpdateReguster_Provider(props:ContextChildreen) {

    const [TypeSelect,setTypeSelect]=useState("signin");
    const [UpdateRegusterId,setUpdateRegusterId]=useState("")
    


  return (
    <UpdateReguster_Create_Context.Provider value={{TypeSelect,setTypeSelect,UpdateRegusterId,setUpdateRegusterId}}>
        {props.children}
    </UpdateReguster_Create_Context.Provider>
  ) 
}
