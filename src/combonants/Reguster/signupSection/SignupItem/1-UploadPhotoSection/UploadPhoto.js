import React ,{useState} from 'react';
import {MdOutlineAddAPhoto} from "react-icons/md"
import Button from '@mui/material/Button';
import axios from 'axios';


function UploadPhoto({GetPhoto}) {
    const [ImageUpload,setImageUpload]=useState(false)


    const getImage_file=async(e)=>{
        //get the file i will uolodad
        let file=e.target.files[0]

        //create new Form data to can upload on cloudaniry
        const formData = new FormData();

        formData.append("file",file);
        //setting ---> upload--->unsignd upload ---->Upload presets {"lobdevu9"} from cloudinary for unsiged name 
        formData.append('upload_preset', 'ugtx75zu');
        //upload the data on cloudnary https://api.cloudinary.com/v1_1/{cloud name}/upload
    await axios.post("https://api.cloudinary.com/v1_1/lithhalim/upload",formData).then((alldata)=>{
        GetPhoto(alldata.data)
        setImageUpload(alldata.data)
    })
}




  return (
    <div>

        <Button variant="contained" component="label" className='stylebutton' sx={{width:"100%"}}>
            Upload Image <span style={{fontSize:"1.2em",marginLeft:"4px",marginTop:"4px"}}><MdOutlineAddAPhoto/></span>
            <input hidden accept="image/*" multiple type="file" name="imagesection" onChange={getImage_file} />
        </Button>
        <div className='container-image-upload' >
            {ImageUpload?<img style={{width:"50px",height:"50px"}}  src={ImageUpload.url} alt="" />:<></>}
        </div>
                     
    </div>
  )
}

export default UploadPhoto