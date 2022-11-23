import React from 'react'

function ImageColumn({params}) {
  return (
    <div className='Image-container'>
        <img src={params.row.Image}/>
    </div>
)
}

export default ImageColumn