import {useQuery} from "@tanstack/react-query"
import axios from 'axios';


export default function UsePosts(Login_Create_ContextAuth) {
    return useQuery([`getDataHave`], async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}getAllData`,{
          headers:{ 
            'Content-Type': 'application/json' ,
            'Accept': 'application/json',
            "authorization":`Bearer ${Login_Create_ContextAuth.accsisToken }` }
        });
      return data;
    });
  }  
